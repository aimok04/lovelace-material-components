import { MaterialControlCardConfig } from "./material-control-const";
import { serializeAction } from "../shared/actions";

// Emits a [[[ ... ]]] template as an indented YAML block scalar so multi-line JS survives;
// leaves plain strings untouched. Needed for any field button-card itself templates (name, icon).
function asYamlTemplateSafeValue(value?: string): string | undefined {
  if (
    typeof value === "string" &&
    value.trim().startsWith("[[[") &&
    value.trim().endsWith("]]]")
  ) {
    const indented = value
      .trim()
      .split("\n")
      .map((line) => "  " + line)
      .join("\n");
    return `|\n${indented}`;
  }
  return value;
}

export function materialControlTemplate(config: MaterialControlCardConfig) {
  const name = asYamlTemplateSafeValue(config.name);
  const icon = asYamlTemplateSafeValue(config.icon);

  const entity =
    config.use_card_entity && config.entity ? "entity: " + config.entity : "";

  return `type: custom:button-card
name: ${name}
icon: ${icon}
${entity}
tap_action:
  ${serializeAction(config.tap_action)}
hold_action:
  ${serializeAction(config.hold_action)}
styles:
  grid:
    - grid-template-columns: 2fr 1fr 1fr
    - grid-template-rows: 2fr 0.1fr 2fr
    - grid-template-areas: |
        "i . ."
        ". . ."
        "n n n"
  card:
    - height: 140px
    - width: 140px
    - border-radius: 30px
    - margin-bottom: 1px
    - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05), 0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
    - background-color: |
        [[[ 
          return hass.themes.darkMode
            ? "var(--md-sys-color-surface-container, '#1f2022')"
            : "var(--md-sys-color-surface-container, '#eeedf2')";
        ]]]
  name:
    - font-size: 1rem
    - font-weight: bold
    - justify-self: start
    - align-self: center
    - margin-left: 20px
    - width: 100px
    - text-align: left
    - white-space: normal
    - overflow-wrap: break-word
    - word-break: break-word
    - color: |
        [[[ 
          return hass.themes.darkMode
            ? "var(--md-sys-color-on-surface-variant,'#e3e3e5')"
            : "var(--md-sys-color-on-surface-variant,'#1b1b1d')";
        ]]]
  icon:
    - color: |
        [[[ 
          return hass.themes.darkMode
            ? "var(--md-sys-color-on-surface-variant,'#c4c7d0')"
            : "var(--md-sys-color-on-surface-variant,'#43484e')";
        ]]]
`;
}
