import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { tailwindStyles } from '../css';

@customElement('kapok-header')
export class KapokHeader extends LitElement {
  static styles = [tailwindStyles];
  protected render() {
    return html`<header class="py-6 sm:py-10">
      <div class="flex items-center gap-x-2">
        <div class="overflow-hidden rounded-md">
          <a href="/">1111</a>
        </div>
        <div class="flex flex-col gap-y-1">
          <span class="font-bold">{author}</span>
          <span class="text-sm">{description}</span>
        </div>
      </div>
    </header>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kapok-header': KapokHeader;
  }
}
