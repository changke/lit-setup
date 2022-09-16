import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('ui-bar')
export class Bar extends LitElement {
  static styles = css`
    :host {
      contain: content;
    }
    li {
      list-style: square;
      color: darkorchid;
    }
  `;

  @property()
  items = '';

  render() {
    return html`
      <ul>
        ${this.items.split(',').map((i, idx) => html`<li class="top${(idx + 1).toString()}">${i}</li>`)}
      </ul>
    `;
  }
}
