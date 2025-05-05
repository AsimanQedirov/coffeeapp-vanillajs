import { $ } from "../scripts/shorthand.js";
import { loadProductPage } from "../services/productsPage.js";
import { proxiedStore as store } from "../store/store.js";

const main = $("#app");
class ProductPage extends HTMLElement {
  constructor() {
    super();
    loadProductPage();
  }
  render(event) {
    if (store.productsPageData && Array.isArray(store.productsPageData)) {
      const container = document.createElement("div");
      container.className = "container";
      for (let data of store.productsPageData) {
        let cardElement = document.createElement("div");
        cardElement.className = "card";
        cardElement.innerHTML = `
                <img class='card-image' src='${data.image}' alt='${data.name}' loading='lazy' />
                <h3>Product name : ${data.name}</h3>
                <p>Price : ${data.price}</p>
                <img src='../assets/icons/basket.svg' class='add-to-basket' alt='trash icon' width='20' height='20'/>
            `;
        container.append(cardElement);
      }
      const h2 = document.createElement("h2");
      h2.textContent = "All Products";
      main.append(h2);
      main.append(container);
    } else {
      main.innerHTML = `<div class='container'> There is no data</div>`;
    }
  }
  connectedCallback() {
    window.addEventListener("productsPageData-change", this.render);
  }
}

customElements.define("products-page", ProductPage);
