import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('ui-foo')
export class Foo extends LitElement {
  static styles = css`
    :host {
      contain: content;
    }
    h3 {
      color: darkcyan;
    }
  `;

  @property()
  title = 'Untitled';

  render() {
    return html`
      <div class="foo">
        <h3>${this.title}</h3>
        <slot></slot>
      </div>
    `;
  }
}
