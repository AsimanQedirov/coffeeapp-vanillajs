import { $ } from "../scripts/shorthand.js";
import { proxiedStore as store } from "../store/store.js";
export default class BasketButton extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const basketButton = $("#basket-button");
    const content = basketButton.content.cloneNode(true);
    this.append(content);
    const badge = this.$("#badge");
    badge.hidden = true;
    window.addEventListener("cartItems-change", (event) => {
      const itemCounts = store.cartItems.reduce(
        (acc, currentValue) => acc + currentValue.quantity,
        0
      );
      badge.hidden = itemCounts === 0;
      badge.innerHTML = itemCounts;
    });
  }
}
customElements.define("basket-button", BasketButton);
