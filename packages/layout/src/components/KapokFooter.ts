import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tailwindStyles } from '../css';

@customElement('kapok-footer')
export class KapokFooter extends LitElement {
  static styles = [tailwindStyles];

  @property()
  author?: string = '';

  @property()
  mail?: string = '';

  private fullYear: number = new Date().getFullYear();
  protected render() {
    return html`<footer class="py-10">
      <div class="flex items-center justify-between text-gray-600">
        <div class="flex flex-col gap-y-1 text-sm">
          <span>
            ©<span class="px-1">${this.fullYear}</span>
            <a href="mailto:${this.mail}">${this.author}</a>
          </span>
          <span>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer"> {zh} </a>
            <span class="px-1 text-xs">|</span>由
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer" class="px-1"> Next.js </a>
            强力驱动
          </span>
        </div>
      </div>
    </footer>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kapok-footer': KapokFooter;
  }
}
