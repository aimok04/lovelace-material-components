import { getPropertyColor } from "../material-climate/material-climate-mapper";
import {
  ACHROMATIC_BACKGROUND,
  ACHROMATIC_TEXT,
  _setStyleProperty,
  hexToRgb,
  material_color,
  rgbToHue,
} from "../shared/color";
import { mapJSFunction } from "../shared/actions";
import { ControlType } from "../shared/types";
import { isNullOrEmpty } from "../shared/utils/utils";
import { MaterialButtonCardConfig } from "./material-button-const";

export function setColorCard(
  style: any,
  config: MaterialButtonCardConfig,
  isOffline: boolean,
  isOn: boolean,
  theme: string,
  state: string,
  stateObj?: any,
  hass?: any,
) {
  const offlineOnOffState = isOffline ? "offline" : isOn ? "on" : "off";
  const colorDomain =
    config.control_type == ControlType.THERMOMETER &&
    config.use_material_color &&
    isOn
      ? "climate"
      : "button";

  const domain = config.entity?.split(".")[0];
  const materialColor: any = material_color;
  const stateColor = config.use_material_color
    ? getPropertyColor(state, domain)
    : "default";

  // Optional mock: a custom hex color (plain, or a [[[ ... ]]] template) overriding the
  // card's whole default Material color scheme, using the same hue-derived tonal ramp
  // (and WCAG-verified S/L ratios) built for the slider's colorize_color.
  const colorOverride = mapJSFunction(config.custom_color, stateObj, state, hass);
  const overrideRgb =
    isOn && !isOffline && typeof colorOverride === "string"
      ? hexToRgb(colorOverride)
      : null;

  if (overrideRgb) {
    const hue = rgbToHue(overrideRgb);
    const isAchromatic = hue < 0;

    let text: string;
    let background: string;
    if (isAchromatic) {
      // Achromatic input (white/black/gray): fixed, theme-independent light-gray
      // treatment, same reasoning as the slider's colorize_color - see shared/color.ts.
      text = ACHROMATIC_TEXT;
      background = ACHROMATIC_BACKGROUND;
    } else {
      const [bgS, bgL] = theme === "dark" ? [12, 18] : [90, 89];
      const [textS, textL] = theme === "dark" ? [90, 78] : [100, 20];
      text = `hsl(${hue}, ${textS}%, ${textL}%)`;
      background = `hsl(${hue}, ${bgS}%, ${bgL}%)`;
    }

    _setStyleProperty("--bsc-name-color", text, style);
    _setStyleProperty("--bsc-icon-color", text, style);
    _setStyleProperty("--bsc-percentage-color", text, style);
    _setStyleProperty("--bsc-background", background, style);
  } else {
    let color: any;

    if (isOffline || (isOn && !config.use_material_color) || !isOn)
      color = materialColor[theme][offlineOnOffState][colorDomain];
    else
      color = materialColor[theme][offlineOnOffState][colorDomain][stateColor];

    if (!isNullOrEmpty(color)) {
      _setStyleProperty("--bsc-name-color", color.title, style);
      _setStyleProperty("--bsc-icon-color", color.icon, style);
      _setStyleProperty(
        "--bsc-percentage-color",
        colorDomain == "climate" ? color.title : color.percentage,
        style,
      );
      _setStyleProperty("--bsc-background", color.background, style);
    }
  }

  _setStyleProperty("--bsc-height", config.height || 97, style, (h: any) => `${h}px`);
  _setStyleProperty("--bsc-border-radius", config.border_radius, style);
}
