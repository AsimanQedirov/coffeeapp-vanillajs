import { $ } from "../scripts/shorthand.js";

export default class BasketButton extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const basketButton = $("#basket-button");
    const content = basketButton.content.cloneNode(true);
    this.append(content);
  }
}
customElements.define("basket-button", BasketButton);
