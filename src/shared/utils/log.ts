import { html, TemplateResult } from "lit";
import { CARD_VERSION } from "./utils";

export const logInit = (text: string) => {
  /* eslint no-console: 0 */
  console.info(
    `%c⚙️ Material Home Assistant Components %c ${text}`,
    textStyle,
    versionStyle,
  );
};

const textStyle = `
      color: #6750A4;
      font-weight: 600;
      background: #EADDFF;
      padding: 2px 4px;
      border-radius: 4px;
    `;

const versionStyle = `
      color: #FFFFFF;
      font-weight: 600;
      background: #625B71;
      padding: 2px 4px;
      border-radius: 4px;
    `;

export function getCardVersion(): TemplateResult {
  const style = `.version {
      font-size: 12px !important;
      color: var(--primary-text-color) !important;
      background: rgba(0, 0, 0, 0.1);
      padding: 8px 16px;
      border-radius: 32px;
      display: flex;
      align-items: center;
    }

    .version-number {
      font-size: 10px;
      background: rgb(0, 103, 155);
      padding: 0px 8px;
      border-radius: 12px;
      margin-right: -6px;
      float: right;
      color: white;
      height: 20px;
      align-content: center;
    }`;
  return html`<style>
      ${style}
    </style>
    <h4 class="version">
      <span class="version-number">v${CARD_VERSION}</span>
    </h4>`;
}
