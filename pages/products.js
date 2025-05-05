import { $ } from "../scripts/shorthand.js";
import { loadProductPage } from "../services/productsPage.js";
import { proxiedStore as store } from "../store/store.js";

class ProductPage extends HTMLElement {
  constructor() {
    super();
    loadProductPage();
  }
  render(_event, self) {
    if (store.productsPageData && Array.isArray(store.productsPageData)) {
      const container = document.createElement("div");
      container.className = "container";
      for (let data of store.productsPageData) {
        const productItem = document.createElement("product-item");
        productItem.dataset.data = JSON.stringify(data);
        container.appendChild(productItem);
      }
      const h2 = document.createElement("h2");
      h2.textContent = "All Products";
      self.appendChild(h2);
      self.appendChild(container);
    } else {
      self.innerHTML = `<div class='container'> There is no data</div>`;
    }
  }
  connectedCallback() {
    const self = this;
    window.addEventListener("productsPageData-change", (_event) => {
      this.render(_event, self);
    });
  }
}

customElements.define("products-page", ProductPage);
