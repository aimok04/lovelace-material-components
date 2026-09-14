import { SlideGesture } from "@nicufarmache/slide-gesture";
import { HassEntity } from "home-assistant-js-websocket";
import { HomeAssistant } from "../ha-types";
import {
  DEFAULT_CONFIG,
  MaterialSliderCardConfig,
  MousePos,
  TAP_THRESHOLD,
} from "./material-slider-const";
import { localize } from "../localize/localize";
import { state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { LitElement, html, CSSResult, TemplateResult, css } from "lit";
import { applyRippleEffect } from "../animations";
import { material_color } from "../shared/color";
import {
  hexToRgb,
  rgbToHue,
  setSliderColorCard,
} from "./material-slider-mapper";
import {
  isDeviceOn,
  isOfflineState,
  OffStates,
  OnStates,
} from "../shared/states";
import { getIcon } from "../shared/mapper";
import { ControlType, DomainType } from "../shared/types";
import { handleAction, mapJSFunction } from "../shared/actions";

export class MaterialSliderCard extends LitElement {
  // @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: MaterialSliderCardConfig = DEFAULT_CONFIG;
  @state() private _entity?: string;
  @state() private _state?: HassEntity;
  @state() private _status?: string;
  @state() private _name: string = "";
  private _hass?: HomeAssistant;
  private mouseStartPos: MousePos = { x: 0, y: 0 };
  private mousePos: MousePos = { x: 0, y: 0 };
  private containerWidth: number = 0;
  private oldValue: number = 0;
  private currentValue: number = 0;
  private holdTimer: number = 0;
  private isHold: boolean = false;
  private _shouldUpdate: boolean = true;
  private updateTimeout: number = 0;
  private pressTimeout: number = 0;
  private trackingStartTime: number = 0;
  private slideGesture: any;
  private isTap: boolean = false;
  private _lastTheme?: string;
  private _lastEntityState?: string;
  private color: any = material_color;
  private clickOffset: number = 0; // ← AGGIUNGI QUESTA

  public static getStubConfig(
    _hass: HomeAssistant,
  ): Partial<MaterialSliderCardConfig> {
    const allEntities = Object.keys(_hass.states);
    const lights = allEntities
      .filter((entity) => entity.startsWith("light."))
      .sort();

    const randomLight = lights[Math.floor(Math.random() * lights.length)];

    return {
      type: "custom:material-slider-card",
      entity: randomLight,
      icon: "m3of:lightbulb",
      show_percentage: true,
      bold_text: false,
    };
  }

  static getCardSize() {
    return 1;
  }

  static async getConfigElement() {
    return document.createElement("material-slider-card-editor");
  }

  // life cycle

  public setConfig(config: Partial<MaterialSliderCardConfig>): void {
    if (!config) {
      throw new Error(localize("common.invalid_configuration"));
    }

    if (!config.entity) {
      throw new Error(localize("common.no_entity_set"));
    }

    const domain = config.entity.split(".")[0];
    if (
      (config.control_type === ControlType.LIGHT &&
        domain !== DomainType.LIGHT) ||
      (config.control_type === ControlType.COVER && domain !== DomainType.COVER)
    ) {
      throw new Error(
        `Entity must match the selected control type (${config.control_type})`,
      );
    }

    const finalConfig: MaterialSliderCardConfig = {
      ...DEFAULT_CONFIG,
      ...config,
    };

    // fallback automatici
    if (!finalConfig.attribute) {
      if (finalConfig.control_type === ControlType.LIGHT) {
        finalConfig.attribute = "brightness";
      } else if (finalConfig.control_type === ControlType.COVER) {
        finalConfig.attribute = "current_position";
      }
    }

    this._config = finalConfig;
    this._entity = this._config.entity;
    this._config.original_min = this._config.min;
    this._config.original_max = this._config.max;
  }

  set hass(hass: HomeAssistant) {
    if (!this._entity) return;

    this._hass = hass;
    this._state = hass.states[this._entity];
    this._status = this._state?.state;

    // FIX: Normalizza i valori in percentuale 0-100
    if (this._config.control_type === ControlType.LIGHT) {
      //this.currentValue = this._state?.attributes?.brightness ?? 0;
      const brightness = this._state?.attributes?.brightness ?? 0;
      this.currentValue = Math.round((100 * brightness) / 255); // ← Converte 0-255 → 0-100
    } else if (this._config.control_type === ControlType.COVER) {
      this.currentValue = this._state?.attributes?.current_position ?? 0;
    }

    // Supports a plain string, or a [[[ ... ]]] JS template (same convention as icon/actions)
    const templatedName = mapJSFunction(
      this._config.name,
      this._state,
      this._status,
      hass,
    );

    this._name =
      templatedName ??
      this._state?.attributes?.friendly_name ??
      this._entity.split(".")[1] ??
      "";

    const currentTheme = hass.themes?.darkMode ? "dark" : "light";
    const currentEntityState = hass.states[this._entity]?.state;
    if (
      this._lastTheme !== currentTheme ||
      this._lastEntityState !== currentEntityState
    ) {
      this._lastTheme = currentTheme;
      this._lastEntityState = currentEntityState;
      this.requestUpdate();
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener("contextmenu", this._handleContextMenu);
    this.slideGesture = new SlideGesture(this, this._handlePointer.bind(this), {
      touchActions: "pan-y",
      stopScrollDirection: "horizontal",
    });
  }

  disconnectedCallback(): void {
    this.removeEventListener("contextmenu", this._handleContextMenu);
    this.slideGesture.removeListeners();
    super.disconnectedCallback();
  }

  _handleContextMenu = (e: Event): boolean => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    return false;
  };

  _handlePointer = (evt, extra): void => {
    this.mousePos = { x: evt.pageX, y: evt.pageY };
    const minSlideTime = this._config.min_slide_time;

    if (evt.type === "pointerdown") {
      this._press();
      this.isTap = true;
      this.isHold = false;
      this.holdTimer = window.setTimeout(this._setHold, this._config.hold_time);
      this.trackingStartTime = Date.now();
    }

    // ✅ NON aggiornare il valore se è un hold in corso
    if (["pointerdown", "pointermove", "pointerup"].includes(evt.type)) {
      if (!this.isHold) {
        // ← AGGIUNGI QUESTO CHECK
        this._updateValue();
      }
    }

    if (evt.type === "pointermove") {
      if (
        this.isTap &&
        Math.abs(extra.relativeX) < TAP_THRESHOLD &&
        Math.abs(extra.relativeY) < TAP_THRESHOLD
      )
        return;
      this.isTap = false;
      clearTimeout(this.holdTimer);
      this._stopUpdates();
    }

    if (evt.type === "pointercancel") {
      clearTimeout(this.holdTimer);
      this._unpress();
      this._startUpdates();
    }

    if (evt.type === "pointerup") {
      clearTimeout(this.holdTimer);
      this._unpress();
      this._startUpdates();

      if (this.isTap) {
        this._handleTap();
        return;
      }

      // ✅ NON salvare il valore se era un hold
      if (!this.isHold && Date.now() - this.trackingStartTime > minSlideTime) {
        this._setValue();
        this._startUpdates(true);
      }
    }
  };

  //_handlePointer = (evt, extra): void => {
  //  this.mousePos = { x: evt.pageX, y: evt.pageY };
  //  const minSlideTime = this._config.min_slide_time;
  //
  //  if (evt.type === "pointerdown") {
  //    this._press();
  //    this.isTap = true;
  //    this.isHold = false;
  //    this.holdTimer = window.setTimeout(this._setHold, this._config.hold_time);
  //    this.trackingStartTime = Date.now();
  //    this._resetTrack();
  //  }
  //
  //  if (["pointerdown", "pointermove", "pointerup"].includes(evt.type)) {
  //    this._updateValue();
  //  }
  //
  //  if (evt.type === "pointermove") {
  //    if (
  //      this.isTap &&
  //      Math.abs(extra.relativeX) < TAP_THRESHOLD &&
  //      Math.abs(extra.relativeY) < TAP_THRESHOLD
  //    )
  //      return;
  //    this.isTap = false;
  //    clearTimeout(this.holdTimer);
  //    this._stopUpdates();
  //  }
  //
  //  if (evt.type === "pointercancel") {
  //    clearTimeout(this.holdTimer);
  //    this._unpress();
  //    this._startUpdates();
  //  }
  //
  //  if (evt.type === "pointerup") {
  //    clearTimeout(this.holdTimer);
  //    this._unpress();
  //    this._startUpdates();
  //
  //    if (this.isTap) {
  //      this._handleTap();
  //      return;
  //    }
  //
  //    if (Date.now() - this.trackingStartTime > minSlideTime) {
  //      this._setValue();
  //      this._startUpdates(true);
  //    }
  //  }
  //};

  //_updateValue(): void {
  //  const width = this.containerWidth;
  //  const dx = this.mousePos.x - this.mouseStartPos.x;
  //
  //  const percentage = Math.round((100 * dx) / width);
  //
  //  this.currentValue = this.oldValue + percentage;
  //  this._checklimits();
  //  this._updateSlider();
  //}

  _updateValue(): void {
    const container = this.shadowRoot?.getElementById("container");
    if (!container) return;

    // SEMPRE ricalcola containerWidth per sicurezza
    const width = container.clientWidth;
    if (!width || width === 0) return; // Skip se non ancora pronto

    this.containerWidth = width; // Aggiorna la cache

    // Posizione assoluta del mouse rispetto alla card
    const rect = container.getBoundingClientRect();
    const mouseXInContainer = this.mousePos.x - rect.left;

    // Clamp la posizione dentro i bordi della card
    const clampedX = Math.max(0, Math.min(mouseXInContainer, width));

    // Calcola la percentuale
    const percentage = (clampedX / width) * 100;

    // Calcola il valore finale tra min e max
    const min = this._config.min ?? 0;
    const max = this._config.max ?? 100;

    this.currentValue = Math.round(min + (percentage / 100) * (max - min));

    this._updateSlider();
  }

  private _handleAction(action: any): void {
    const event = new Event("hass-action", {
      bubbles: true,
      cancelable: false,
      composed: true,
    });
    (event as any).detail = {
      config: this._config!,
      action: action,
    };
    this.dispatchEvent(event);
  }

  _setHold = (): void => {
    this.isTap = false;
    this.isHold = true;
    this._handleAction("hold");
  };

  _handleTap = (): void => {
    clearTimeout(this.holdTimer);
    if (this._config?.tap_action) {
      if (!this.isHold) {
        this._handleAction("tap");
      }
    }
  };

  _resetTrack(): void {
    this.mouseStartPos = { x: this.mousePos.x, y: this.mousePos.y };
    this.oldValue = this.currentValue;
  }

  _press(): void {
    if (this.pressTimeout) clearTimeout(this.pressTimeout);
    this.pressTimeout = window.setTimeout(
      () => this.setAttribute("pressed", ""),
      this._config.min_slide_time,
    );
    this.setAttribute("half-pressed", "");
  }

  _unpress(): void {
    if (this.pressTimeout) clearTimeout(this.pressTimeout);
    this.removeAttribute("pressed");
    this.removeAttribute("half-pressed");
  }

  //_checklimits(): void {
  //  const min = this._config.min ?? 0;
  //  const max = this._config.max ?? 100;
  //  if (this.currentValue < min) {
  //    this.currentValue = min;
  //    this._resetTrack();
  //  }
  //  if (this.currentValue > max) {
  //    this.currentValue = max;
  //    this._resetTrack();
  //  }
  //}

  _checklimits(): void {
    const min = this._config.min ?? 0;
    const max = this._config.max ?? 100;

    // Clamp senza reset
    if (this.currentValue < min) {
      this.currentValue = min;
    }
    if (this.currentValue > max) {
      this.currentValue = max;
    }
  }

  _updateSlider(): void {
    this.style.setProperty("--bsc-percent", this.currentValue + "%");
    const percentage = this?.shadowRoot?.getElementById("percentage");
    if (this._state && this._state.attributes.brightness)
      percentage &&
        (percentage.innerText = Math.round(this.currentValue) + "%");
    else if (
      this._config.control_type == ControlType.COVER &&
      this._state &&
      this._state.attributes.current_position
    ) {
      if (this._state.state == OnStates.OPENING) {
        percentage && (percentage.innerText = localize("common.opening"));
      } else
        percentage &&
          (percentage.innerText =
            localize("common.open") +
            " • " +
            Math.round(this.currentValue) +
            "%");
    } else percentage && (percentage.innerText = localize("common.on"));
  }

  _updateColors(): void {
    const theme: "dark" | "light" = this._hass?.themes?.darkMode
      ? "dark"
      : "light";

    let color = "var(--bsc-color)";
    let isOn = false;

    if (this._state) {
      if (this._status == OnStates.ON) {
        isOn = true;

        // Optional mock: a custom hex color (plain, or a [[[ ... ]]] template) that stands
        // in for the entity's real rgb_color, feeding into the exact same hue-derived
        // fill/background/text calculation below. Falls back to the entity's real color
        // when unset or invalid.
        const colorOverride = mapJSFunction(
          this._config.colorize_color,
          this._state,
          this._status,
          this._hass,
        );
        const overrideRgb =
          typeof colorOverride === "string" ? hexToRgb(colorOverride) : null;

        const rgbColor = overrideRgb ?? this._state.attributes?.rgb_color;

        if (rgbColor && this._config.colorize) {
          // Tint fill/background/text as one consistent tonal ramp of the light's hue,
          // matching the exact saturation/lightness relationship the built-in Material
          // amber palette uses (material_color.*.on.light) - a raw, fully-saturated bulb
          // color used directly is much brighter/more saturated than that palette and
          // reads as glaring, especially in dark mode. [S%, L%] pairs below were reverse
          // engineered from that palette's hex values and re-verified for >= 4.5:1 WCAG
          // contrast (text vs. both fill and background) across the full hue range.
          const hue = rgbToHue(rgbColor);
          const [fillS, fillL] = theme === "dark" ? [32, 24] : [100, 76];
          const [bgS, bgL] = theme === "dark" ? [12, 18] : [90, 89];
          const [textS, textL] = theme === "dark" ? [90, 78] : [100, 20];

          color = `hsl(${hue}, ${fillS}%, ${fillL}%)`;
          const text = `hsl(${hue}, ${textS}%, ${textL}%)`;

          this.style.setProperty(
            "--bsc-background",
            `hsl(${hue}, ${bgS}%, ${bgL}%)`,
          );
          this.style.setProperty("--bsc-name-color", text);
          this.style.setProperty("--bsc-icon-color", text);
          this.style.setProperty("--bsc-percentage-color", text);
        } else {
          // colorize disabled, or no color info available (dimmer-only / color-temperature
          // lights): fall back to the same Material "on" tone the non-colorized slider
          // already uses, instead of a flat white or raw-color fill.
          color = (material_color as any)[theme].on.light.slider;
        }
      } else if (this._status == OnStates.OPEN) {
        isOn = true;
      } else {
        color = "var(--bsc-off-color)";
      }
    }

    const percentage = this?.shadowRoot?.getElementById("percentage");
    if (!isOn) {
      //const isOffline = this._status != "on" && this._status != "off";
      const isOffline = isOfflineState(this._status!);
      if (!isOffline) {
        if (this._status == OffStates.OFF)
          percentage && (percentage.innerText = localize("common.off"));
        if (this._status == OffStates.CLOSED)
          percentage && (percentage.innerText = localize("common.closed"));
        if (this._status == OffStates.CLOSING)
          percentage && (percentage.innerText = localize("common.closing"));
      } else percentage && (percentage.innerText = localize("common.offline"));
    }
    this.style.setProperty("--bsc-entity-color", color);
    if (this._config.icon_color && isOn) {
      this.style.setProperty("--bsc-icon-color", this._config.icon_color);
    }
    if (this._config.icon_color && !isOn) {
      this.style.removeProperty("--bsc-icon-color");
    }
  }

  _getValue(): void {
    if (!this._shouldUpdate) return;
    if (!this._state) return;

    // Se è una cover → leggiamo direttamente la posizione
    if (this._config.control_type === ControlType.COVER) {
      this._config.min = 0;
      this._config.max = 100;

      if (this._status == "unavailable") {
        this.currentValue = 0;
        this.style.setProperty("--bsc-opacity", "0.5");
      } else {
        this.style.removeProperty("--bsc-opacity");
        this.currentValue = this._state.attributes.current_position ?? 0;
      }

      this._updateSlider();
      return;
    }

    // Default → gestione light
    const attr = this._config?.attribute;
    let _value = 0;

    if (this._status == "unavailable") {
      this._config.min = 0;
      this._config.max = 0;
      this.style.setProperty("--bsc-opacity", "0.5");
    } else {
      this._config.min = this._config.original_min;
      this._config.max = this._config.original_max;
      this.style.removeProperty("--bsc-opacity");
    }

    if (this._status != "on") {
      _value = this._config.min ?? 0;
    } else {
      switch (attr) {
        case "brightness":
          _value = Math.round(
            (100 * (this._state.attributes.brightness ?? 255)) / 255,
          );
          break;
        case "red":
        case "green":
        case "blue":
          const rgb = this._state.attributes.rgb_color ?? [255, 255, 255];
          if (attr === "red") _value = rgb[0];
          if (attr === "green") _value = rgb[1];
          if (attr === "blue") _value = rgb[2];
          _value = Math.ceil((100 * _value) / 255);
          break;
        case "hue":
        case "saturation":
          const hs = this._state.attributes.hs_color ?? [100, 100];
          if (attr === "hue") _value = hs[0];
          if (attr === "saturation") _value = hs[1];
          break;
      }
    }

    this.currentValue = _value;
    this._updateSlider();
  }

  _setValue(): void {
    if (!this._state) return;

    // Se è una cover → gestiamo direttamente la posizione
    if (this._config.control_type === ControlType.COVER) {
      this._hass!.callService("cover", "set_cover_position", {
        entity_id: this._state.entity_id,
        position: this.currentValue,
      });
      return;
    }

    // Default: gestione light
    let value = this.currentValue;
    let attr = this._config?.attribute ?? "brightness";

    let on = true;
    let _value;
    switch (attr) {
      case "brightness":
        value = Math.ceil((value / 100.0) * 255);
        if (!value) on = false;
        break;
      case "red":
      case "green":
      case "blue":
        _value = this._state.attributes.rgb_color ?? [255, 255, 255];
        if (attr === "red") _value[0] = value;
        if (attr === "green") _value[1] = value;
        if (attr === "blue") _value[2] = value;
        value = _value;
        attr = "rgb_color";
        break;
      case "hue":
      case "saturation":
        _value = this._state.attributes.hs_color ?? [100, 100];
        if (attr === "hue") _value[0] = value;
        if (attr === "saturation") _value[1] = value;
        value = _value;
        attr = "hs_color";
        break;
    }

    const params: Record<string, any> = {
      entity_id: this._state.entity_id,
    };

    if (on) {
      params[attr] = value;
      if (this._config.transition) {
        params.transition = this._config.transition;
      }
      this._hass!.callService("light", "turn_on", params);
    } else {
      this._hass!.callService("light", "turn_off", params);
    }
  }

  _stopUpdates(): void {
    if (this.updateTimeout) clearTimeout(this.updateTimeout);
    if (!this._shouldUpdate) return;
    this.shadowRoot?.getElementById("slider")?.classList?.remove("animate");
    this._shouldUpdate = false;
  }

  _startUpdates(settle = false): void {
    if (this.updateTimeout) clearTimeout(this.updateTimeout);
    this.updateTimeout = window.setTimeout(
      () => {
        this._shouldUpdate = true;
        this.shadowRoot?.getElementById("slider")?.classList?.add("animate");
        this.requestUpdate();
      },
      settle ? this._config.settle_time : 0,
    );
  }

  public _onClick(event: MouseEvent) {
    applyRippleEffect(event.currentTarget as HTMLElement, event);
  }

  private _onArrowPointerDown(event: PointerEvent): void {
    // Keep the arrow button independent from the slide/tap/hold gesture
    // (SlideGesture listens on the whole card host, not just #container).
    event.stopPropagation();
  }

  private _onArrowClick(event: MouseEvent): void {
    event.stopPropagation();
    applyRippleEffect(event.currentTarget as HTMLElement, event);
    if (navigator.vibrate) {
      navigator.vibrate(60);
    }

    if (!this._config || !this._hass) return;

    handleAction(
      this,
      this._hass,
      this._config,
      this._config.arrow_action ?? DEFAULT_CONFIG.arrow_action,
    );
  }

  protected updated(): void {
    this.containerWidth =
      this.shadowRoot?.getElementById("container")?.clientWidth ?? 0;
    this._getValue();
    this._updateColors();
    this._applyPercentageTemplate();
  }

  // Optional override for the percentage/status label, evaluated after the default text
  // (brightness %, "Opening", "Off", ...) has already been computed and rendered.
  private _applyPercentageTemplate(): void {
    const template = this._config.percentage_template;
    if (!template) return;

    const percentage = this.shadowRoot?.getElementById("percentage");
    if (!percentage) return;

    const templated = mapJSFunction(
      template,
      this._state,
      this._status,
      this._hass,
    );
    if (typeof templated === "string") percentage.innerText = templated;
  }

  protected render(): TemplateResult | void {
    if (!(this._entity && this._entity in (this._hass?.states ?? {}))) {
      return this._showError(
        `${localize("common.no_entity")}: ${this._entity}`,
      );
    }

    const colorize = (this._config.colorize && true) ?? false;
    const showPercentage = (this._config.show_percentage && true) ?? false;
    const boldText = (this._config.bold_text && true) ?? false;
    const showArrow = this._config.show_arrow ?? true;

    const state = this._hass?.states?.[this._entity];
    const isOffline = isOfflineState(state!.state);
    const theme = this._hass?.themes?.darkMode ? "dark" : "light";

    const isOn = isDeviceOn(state!.state);

    //setSliderColor(
    //  this._config,
    //  isOffline,
    //  theme,
    //  isOn,
    //  this.color,
    //  this.style
    //);

    setSliderColorCard(this.style, this._config, isOffline, isOn, theme);

    const iconName = getIcon(state, this._config, this.hass);

    return html`
      <ha-card
        id="container"
        tabindex="0"
        style="position: relative; ${isOffline || showArrow
          ? "padding: 12px 35px 12px 12px;"
          : "padding: 12px 12px;"}"
        @mousedown=${this._onClick}
      >
        <div id="slider" class="animate ${colorize ? "colorize" : ""}"></div>
        <div id="content">
          <ha-state-icon
            id="icon"
            .icon=${iconName}
            .state=${this._state}
            .hass=${this._hass}
            .stateObj=${this._state}
            data-domain=${this._entity.split(".")[0]}
            data-state=${ifDefined(this._status)}
          ></ha-state-icon>
          <p id="label">
            <span id="name" class="${boldText ? "bold" : ""}"
              >${this._name}</span
            >
            <span
              id="percentage"
              class="${showPercentage ? "" : "hide"} ${boldText ? "bold" : ""}"
            ></span>
          </p>
        </div>
        ${isOffline
          ? html`
              <ha-icon
                id="icon_offline"
                icon="m3rf:warning"
                style="position: absolute; right: 13px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color); --mdc-icon-size: 20px;"
                title="Offline"
              ></ha-icon>
            `
          : showArrow
            ? html`
                <div
                  id="arrow-btn"
                  title="${localize("common.info_device")}"
                  @pointerdown=${(e: PointerEvent) =>
                    this._onArrowPointerDown(e)}
                  @click=${(e: MouseEvent) => this._onArrowClick(e)}
                >
                  <ha-icon
                    icon="m3rf:arrow-forward-ios"
                    class="chevron"
                  ></ha-icon>
                </div>
              `
            : ""}
      </ha-card>
    `;
  }

  private _showWarning(warning: string): TemplateResult {
    return html` <hui-warning>${warning}</hui-warning> `;
  }

  private _showError(error: string): TemplateResult {
    const errorCard = document.createElement("hui-error-card");
    errorCard.setConfig({
      type: "error",
      error,
      // origConfig: this._config,
    });

    return html` ${errorCard} `;
  }

  // https://lit-element.polymer-project.org/guide/styles
  static get styles(): CSSResult {
    return css`
      :host {
        --bsc-background: var(--card-background-color, #aaaaaa);
        --bsc-slider-color: var(--paper-slider-active-color, #f9d2b0);
        --bsc-percent: 0%;
        --bsc-color: var(--paper-item-icon-color);
        --bsc-off-color: var(--paper-item-icon-color);
        --bsc-entity-color: var(--bsc-color);
        --bsc-primary-text-color: var(--primary-text-color);
        --bsc-secondary-text-color: var(--secondary-text-color);
        --bsc-border-color: var(--ha-card-border-color);
        --bsc-border-radius: var(--ha-card-border-radius, 28px);
        --bsc-border-style: var(--ha-card-border-style);
        --bsc-border-width: var(--ha-card-border-width);
        --bsc-height: var(--ha-card-height, 97px);
        --bsc-opacity: 1;

        display: flex;
        transition: transform 0.1s ease-out;
        user-select: none;
      }

      :host([half-pressed]) {
        /*transform: scale(0.99);*/
      }

      :host([pressed]) {
        /*transform: scale(0.98);*/
      }

      #container {
        height: var(--bsc-height);
        width: 100%;
        position: relative;
        overflow: hidden;
        /* opacity: var(--bsc-opacity);*/
        background: var(--bsc-background);
        border-color: var(--bsc-border-color, rgba(0 0 0 / 14%));
        border-radius: var(--bsc-border-radius, 28px);
        border-style: var(--bsc-border-style, solid);
        border-width: var(--bsc-border-width, 1px);
        z-index: 1; //fix safari bug with filter transition https://stackoverflow.com/a/27935035
        pointer-events: visible;
        cursor: pointer;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
        padding: 12px 12px;
        box-shadow:
          0px 0.5px 1px rgba(0, 0, 0, 0.05),
          0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
        -webkit-tap-highlight-color: transparent;
      }

      .hide {
        display: none;
      }

      #container:focus {
        outline: 0;
      }

      #slider {
        height: 100%;
        position: absolute;
        background-color: var(--bsc-slider-color);
        /*opacity: 0.3;*/
        z-index: -1;
        left: 0;
        top: 0;
        right: calc(100% - var(--bsc-percent));
      }

      #slider.colorize {
        background-color: var(--bsc-entity-color);
        transition: background-color 1s ease;
      }

      #slider.animate {
        transition:
          right 1s ease,
          background-color 1s ease;
      }

      #content {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      #label {
        display: flex;
        flex-direction: column;
        width: -webkit-fill-available;
      }

      #name {
        color: var(--bsc-name-color);
        font-size: 15px;
        font-weight: 550;
        line-height: 1.35;
      }

      #name.bold,
      #percentage.bold {
        font-weight: bold !important;
      }

      #percentage {
        color: var(--bsc-percentage-color);
        font-size: 13px;
        margin-top: 1px;
        font-weight: 500;
      }

      #icon {
        width: 32px;
        height: 32px;
        color: var(--bsc-icon-color);
        align-content: center;
        margin-right: 5px;
        transition: color 0.3s ease-out;
      }

      #arrow-btn {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        width: 34px;
        height: 34px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        -webkit-tap-highlight-color: transparent;
      }

      #arrow-btn .chevron {
        color: var(--bsc-icon-color);
        --mdc-icon-size: 15px;
        pointer-events: none;
      }

      @media (max-width: 420px) {
        #icon_offline,
        #arrow-btn {
          right: 15px;
        }
      }

      .ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-animation 600ms ease-out;
        background-color: rgba(255, 255, 255, 0.3);
        pointer-events: none;
      }

      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "material-slider-card": MaterialSliderCard;
  }
}
