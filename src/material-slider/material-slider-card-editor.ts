import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  HomeAssistant,
  LovelaceCardEditor,
  NavigateActionConfig,
  UrlActionConfig,
} from "custom-card-helpers";
import {
  DEFAULT_CONFIG,
  MaterialSliderCardConfig,
} from "./material-slider-const";
import { localize } from "../localize/localize";
import { ControlType } from "../shared/types";
import { _entityChanged, _valueChanged } from "../shared/ha-editor";
import { getCardVersion } from "../shared/utils/log";

@customElement("material-slider-card-editor")
export class MaterialSliderCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: MaterialSliderCardConfig = DEFAULT_CONFIG;

  public setConfig(config: MaterialSliderCardConfig): void {
    this._config = { ...config };
  }

  async firstUpdated() {
    const helpers = await (window as any).loadCardHelpers();
    const card = await helpers.createCardElement({
      type: "entities",
      entities: [],
    });
    await card.constructor.getConfigElement();
  }

  setEntityFilter() {
    switch (this._config.control_type) {
      case ControlType.LIGHT:
        return ["light"];
      case ControlType.COVER:
        return ["cover"];
      default:
        return undefined;
    }
  }

  // Returns `fallback` if absent; a string action is used as-is, an object uses its .action field.
  // `fallback` must match DEFAULT_CONFIG for the field being read (tap_action defaults to
  // "toggle", hold_action to "more-info") so the dropdown reflects what the card actually runs.
  private _getActionValue(a?: any, fallback: string = "toggle"): string {
    if (!a) return fallback;
    return typeof a === "string" ? a : (a.action ?? fallback);
  }

  private _onTapSelected(ev: CustomEvent): void {
    if (!this._config || !this.hass) return;

    const value = ev.detail.value;
    const currentValue = this._getActionValue(this._config.tap_action, "toggle");
    if (value === currentValue) return;

    this._setAction("tap_action", value);
  }

  private _onHoldSelected = (ev: CustomEvent): void => {
    if (!this._config) return;

    const value = ev.detail.value;
    const currentValue = this._getActionValue(
      this._config.hold_action,
      "more-info",
    );
    if (value === currentValue) return;

    this._setAction("hold_action", value);
  };

  private _onArrowSelected = (ev: CustomEvent): void => {
    if (!this._config) return;

    const value = ev.detail.value;
    const currentValue = this._getActionValue(
      this._config.arrow_action,
      "more-info",
    );
    if (value === currentValue) return;

    this._setAction("arrow_action", value);
  };

  private _setAction(
    which: "tap_action" | "hold_action" | "arrow_action",
    action: string,
  ) {
    const defaults: Record<string, any> = {
      toggle: { action: "toggle" },
      "more-info": { action: "more-info" },
      navigate: { action: "navigate", navigation_path: "/" },
      url: { action: "url", url_path: "" },
      none: { action: "none" },
    };

    const actionConfig = defaults[action] || { action };

    const newConfig = {
      ...this._config,
      [which]: actionConfig,
    };

    this._config = newConfig;

    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: newConfig },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _setActionValue(
    which: "tap_action" | "hold_action" | "arrow_action",
    key: string,
    value: any,
  ) {
    let action: any = this._config[which];

    if (typeof action === "string") {
      action = { action };
    }

    const updated = { ...action, [key]: value };

    this._config = { ...this._config, [which]: updated };
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _renderExtraField(
    action: any,
    onChange: (key: string, value: any) => void,
  ) {
    const currentAction = action?.action ?? action; // string or object

    return html`
      ${currentAction === "navigate"
        ? html`
            <ha-selector
              style="display: block; margin-top: 10px;"
              .hass=${this.hass}
              .selector=${{ navigation: {} }}
              .value=${(action as NavigateActionConfig)?.navigation_path || ""}
              .label=${localize("actions.navigate")}
              .configValue=${"navigation_path"}
              @value-changed=${(e: CustomEvent) =>
                onChange("navigation_path", e.detail.value)}
            ></ha-selector>
          `
        : ""}
      ${currentAction === "url"
        ? html`
            <ha-selector
              style="display: block; margin-top: 10px;"
              .hass=${this.hass}
              .selector=${{ text: {} }}
              .value=${(action as UrlActionConfig)?.url_path || ""}
              .label=${localize("actions.url")}
              .configValue=${"url_path"}
              @value-changed=${(e: CustomEvent) =>
                onChange("url_path", e.detail.value)}
            ></ha-selector>
          `
        : ""}
    `;
  }

  render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    const control_type = [
      {
        value: "light",
        label: localize("material_slider_card.type.light"),
      },
      {
        value: "cover",
        label: localize("material_slider_card.type.cover"),
      },
    ];

    const actions = [
      {
        value: "toggle",
        label: localize("actions.toggle"),
      },
      {
        value: "more-info",
        label: localize("actions.more_info"),
      },
      {
        value: "navigate",
        label: localize("actions.navigate"),
      },
      {
        value: "url",
        label: localize("actions.url"),
      },
      {
        value: "none",
        label: localize("actions.none"),
      },
    ];

    return html`
      <div class="form">
        <ha-selector
          .hass=${this.hass}
          label="${localize("material_slider_card.control_type")}"
          .selector=${{
            select: {
              options: control_type,
              mode: "dropdown",
            },
          }}
          configValue="control_type"
          .value=${this._config.control_type ?? "light"}
          @value-changed=${(ev: Event) => _valueChanged(ev, this)}
        >
        </ha-selector>

        <ha-selector
          style="max-height: 56px"
          .hass=${this.hass}
          .selector=${{
            text: {},
          }}
          .label=${localize("material_slider_card.name")}
          .value=${this._config.name || ""}
          configValue="name"
          @value-changed=${(ev: Event) => _valueChanged(ev, this)}
          placeholder="e.g. Cooler"
        ></ha-selector>

        <ha-entity-picker
          label="${localize("material_slider_card.entity")}"
          .value=${this._config.entity || ""}
          .hass=${this.hass}
          .includeDomains=${this.setEntityFilter()}
          allow-custom-entity
          configValue="entity"
          @value-changed=${(ev: CustomEvent) => _entityChanged(ev, this)}
          required
        ></ha-entity-picker>

        <ha-icon-picker
          label="${localize("material_slider_card.icon")}"
          .value=${this._config.icon || ""}
          configValue="icon"
          @value-changed=${(ev: Event) => _valueChanged(ev, this)}
          placeholder="mdi:lightbulb"
        ></ha-icon-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("material_slider_card.percentage")}</span
          >
          <ha-switch
            .checked=${this._config.show_percentage ?? true}
            configValue="show_percentage"
            @change=${(ev: Event) => _valueChanged(ev, this)}
          />
        </div>

        <ha-selector
          style="max-height: 56px"
          .hass=${this.hass}
          .selector=${{
            text: {},
          }}
          .label=${localize("material_slider_card.percentage_template")}
          .value=${this._config.percentage_template || ""}
          configValue="percentage_template"
          @value-changed=${(ev: Event) => _valueChanged(ev, this)}
          placeholder="[[[ return state + '%' ]]]"
        ></ha-selector>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("material_slider_card.bold_text")}</span
          >
          <ha-switch
            .checked=${this._config.bold_text ?? false}
            configValue="bold_text"
            @change=${(ev: Event) => _valueChanged(ev, this)}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("material_slider_card.colorize")}</span
          >
          <ha-switch
            .checked=${this._config.colorize ?? false}
            configValue="colorize"
            @change=${(ev: Event) => _valueChanged(ev, this)}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("material_slider_card.show_arrow")}</span
          >
          <ha-switch
            .checked=${this._config.show_arrow ?? true}
            configValue="show_arrow"
            @change=${(ev: Event) => _valueChanged(ev, this)}
          />
        </div>

        <ha-selector
          .hass=${this.hass}
          label="${localize("actions.tap_action_title")}"
          .selector=${{
            select: {
              options: actions,
              mode: "dropdown",
            },
          }}
          .value=${this._getActionValue(this._config.tap_action, "toggle")}
          @value-changed=${(ev: CustomEvent) => this._onTapSelected(ev)}
        >
        </ha-selector>

        ${this._renderExtraField(this._config.tap_action, (key, value) =>
          this._setActionValue("tap_action", key, value),
        )}

        <ha-selector
          .hass=${this.hass}
          label="${localize("actions.hold_action_title")}"
          .selector=${{
            select: {
              options: actions,
              mode: "dropdown",
            },
          }}
          .value=${this._getActionValue(this._config.hold_action, "more-info")}
          @value-changed=${this._onHoldSelected}
        >
        </ha-selector>

        ${this._renderExtraField(this._config.hold_action, (key, value) =>
          this._setActionValue("hold_action", key, value),
        )}

        ${this._config.show_arrow ?? true
          ? html`
              <ha-selector
                .hass=${this.hass}
                label="${localize("actions.arrow_action_title")}"
                .selector=${{
                  select: {
                    options: actions,
                    mode: "dropdown",
                  },
                }}
                .value=${this._getActionValue(
                  this._config.arrow_action,
                  "more-info",
                )}
                @value-changed=${this._onArrowSelected}
              >
              </ha-selector>

              ${this._renderExtraField(
                this._config.arrow_action,
                (key, value) => this._setActionValue("arrow_action", key, value),
              )}
            `
          : ""}
      </div>
      ${getCardVersion()}
    `;
  }

  static styles = css`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "material-slider-card-editor": MaterialSliderCardEditor;
  }
}
