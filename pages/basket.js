import { proxiedStore as store } from "../store/store.js";
import FormElement from "../components/basket-form-element.js";

export default class BasketPage extends HTMLElement {
  constructor() {
    super();
  }

  renderFormElement(){
    const formElement = document.createElement("basket-form-element");
    formElement.setAttribute("class" , "bg-white d-flex flex-column p-20 mt-20 align-center gap-10")
    this.prepend(formElement)
  }

  goBack() {
    window.router.go("/products");
  }
  render() {
    const container = document.createElement("div");
    this.innerHTML = "";
    container.className =
      "bg-white d-flex flex-column p-20 mt-20 align-center gap-10 w-100";
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
      this.renderFormElement();
    }
    this.prepend(container);
  }
  connectedCallback() {
    this.render();

    window.addEventListener("cartItems-change", () => {
      this.render();
    });
  }
}

customElements.define("basket-page", BasketPage);
