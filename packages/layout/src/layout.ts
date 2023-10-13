import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './components/KapokHeader';
import './components/KapokFooter';
import { tailwindStyles } from './css';

@customElement('kapok-layout')
class KapokLayout extends LitElement {
  static styles = [tailwindStyles];
  protected render() {
    return html` <main class="mx-auto max-w-6xl font-serif sm:px-14 md:px-24 lg:px-32">
      <kapok-header></kapok-header>
      <slot></slot>
      <kapok-footer></kapok-footer>
    </main>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kapok-layout': KapokLayout;
  }
}

export { KapokLayout };
