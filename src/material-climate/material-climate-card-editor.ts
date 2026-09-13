import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  HomeAssistant,
  LovelaceCardEditor,
  NavigateActionConfig,
  UrlActionConfig,
} from "custom-card-helpers";
import { localize } from "../localize/localize";
import {
  DEFAULT_CONFIG,
  MaterialClimateCardConfig,
} from "./material-climate-const";
import { _entityChanged, _valueChanged } from "../shared/ha-editor";
import { getCardVersion } from "../shared/utils/log";

@customElement("material-climate-card-editor")
export class MaterialClimateCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: MaterialClimateCardConfig = DEFAULT_CONFIG;

  public setConfig(config: MaterialClimateCardConfig): void {
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

  // Returns `fallback` if absent; a string action is used as-is, an object uses its .action field.
  private _getActionValue(a?: any, fallback: string = "more-info"): string {
    if (!a) return fallback;
    return typeof a === "string" ? a : (a.action ?? fallback);
  }

  private _onTapSelected(ev: CustomEvent): void {
    if (!this._config || !this.hass) return;

    const value = ev.detail.value;
    const currentValue = this._getActionValue(this._config.tap_action);
    if (value === currentValue) return;

    const defaults: Record<string, any> = {
      toggle: { action: "toggle" },
      "more-info": { action: "more-info" },
      navigate: { action: "navigate", navigation_path: "/" },
      url: { action: "url", url_path: "" },
      none: { action: "none" },
    };

    const newConfig = {
      ...this._config,
      tap_action: defaults[value] || { action: value },
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

  private _setActionValue(key: string, value: any) {
    let action: any = this._config.tap_action;

    if (typeof action === "string") {
      action = { action };
    }

    const updated = { ...action, [key]: value };

    this._config = { ...this._config, tap_action: updated };
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

    this._config.use_default_icon = this._config.use_default_icon ?? true;
    this._config.use_material_color = this._config.use_material_color ?? true;

    const fixTemperatureOptions = [
      {
        value: "false",
        label: localize("material_climate_card.false"),
      },
      {
        value: "true",
        label: localize("material_climate_card.true"),
      },
      {
        value: "auto",
        label: localize("material_climate_card.auto"),
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
          style="max-height: 56px"
          .hass=${this.hass}
          .selector=${{
            text: {},
          }}
          .label=${localize("material_climate_card.name")}
          .value=${this._config.name || ""}
          configValue="name"
          @value-changed=${(ev: Event) => _valueChanged(ev, this)}
          placeholder="e.g. Cooler"
        ></ha-selector>

        <ha-entity-picker
          label="${localize("material_climate_card.entity")}"
          .value=${this._config.entity || ""}
          .hass=${this.hass}
          .includeDomains=${["climate"]}
          allow-custom-entity
          configValue="entity"
          @value-changed=${(ev: CustomEvent) => _entityChanged(ev, this)}
          required
        ></ha-entity-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("material_climate_card.theme")}</span
          >
          <ha-switch
            .checked=${this._config.use_material_color ?? true}
            configValue="use_material_color"
            @change=${(ev: Event) => _valueChanged(ev, this)}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("material_climate_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${this._config.use_default_icon ?? true}
            configValue="use_default_icon"
            @change=${(ev: Event) => _valueChanged(ev, this)}
          />
        </div>

        ${this._config.use_default_icon
          ? html``
          : html`
              <ha-icon-picker
                label="Icon"
                .value=${this._config.icon || ""}
                configValue="icon"
                @value-changed=${(ev: Event) => _valueChanged(ev, this)}
                placeholder="mdi:lightbulb"
              />
            `}

        <ha-selector
          style="max-height: 56px"
          .hass=${this.hass}
          .selector=${{
            number: {},
          }}
          .label=${localize("material_climate_card.increase_temp")}
          .value=${this._config.increase_temp || 1}
          configValue="increase_temp"
          @value-changed=${(ev: Event) => _valueChanged(ev, this)}
          placeholder="e.g. 0.5"
        ></ha-selector>

        <ha-selector
          style="max-height: 56px"
          .hass=${this.hass}
          .selector=${{
            number: {},
          }}
          .label=${localize("material_climate_card.decrease_temp")}
          .value=${this._config.decrease_temp || 1}
          configValue="decrease_temp"
          @value-changed=${(ev: Event) => _valueChanged(ev, this)}
          placeholder="e.g. 0.5"
        ></ha-selector>

        <!--<div class="switch-row">
          <span class="switch-label"
            >${localize("material_climate_card.fix_temperature")}</span
          >
          <ha-switch
            .checked=${this._config.fix_temperature ?? false}
            configValue="fix_temperature"
            @change=${(ev: Event) => _valueChanged(ev, this)}
          />
        </div>-->

        <ha-selector
          .hass=${this.hass}
          label="${localize("material_climate_card.fix_temperature")}"
          .selector=${{
            select: {
              options: fixTemperatureOptions,
              mode: "dropdown", // o "list" se preferisci i bottoni
            },
          }}
          .value=${this._config.fix_temperature ?? "false"}
          configValue="fix_temperature"
          @value-changed=${(ev: CustomEvent) => _valueChanged(ev, this)}
        >
        </ha-selector>

        <ha-selector
          .hass=${this.hass}
          label="${localize("actions.tap_action_title")}"
          .selector=${{
            select: {
              options: actions,
              mode: "dropdown",
            },
          }}
          .value=${this._getActionValue(this._config.tap_action)}
          @value-changed=${(ev: CustomEvent) => this._onTapSelected(ev)}
        >
        </ha-selector>

        ${this._renderExtraField(this._config.tap_action, (key, value) =>
          this._setActionValue(key, value),
        )}
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
    "material-climate-card-editor": MaterialClimateCardEditor;
  }
}
