import { proxiedStore as store } from "../store/store.js";

export default class BasketPage extends HTMLElement {
  constructor() {
    super();
  }

  goBack() {
    window.router.go("/products");
  }
  connectedCallback() {
    const container = document.createElement("div");
    container.className =
      "bg-white d-flex flex-column p-20 mt-20 align-center gap-10";
    const noElement = document.createElement("h2");
    if (!store.cartItems.length) {
      noElement.textContent = "There is no element in the basket";
      const goBackButton = document.createElement("button");
      goBackButton.textContent = "Go Back";
      goBackButton.addEventListener("click", this.goBack);
      goBackButton.setAttribute("class", `back-button`);
      container.appendChild(noElement);
      container.appendChild(goBackButton);
    } else {
      for (let item of store.cartItems) {
        const basketItem = document.createElement("basket-item");
        basketItem.dataset.data = JSON.stringify(item);
        container.appendChild(basketItem);
      }
    }
    console.log(container);

    this.append(container);
  }
}

customElements.define("basket-page", BasketPage);
