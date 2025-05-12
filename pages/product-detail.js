import getProductItemById from "../services/getProductItemById.js";
import { proxiedStore as store } from "../store/store.js";

class ProductDetail extends HTMLElement {
  constructor() {
    super();

    getProductItemById(1);
  }
  render() {
    console.log(store);
    const container = document.createElement("div");
    const product = store.productDetail;

    if (product) {
      container.innerHTML = `
            <h1>${product.name}</h1>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
        `;
    } else {
      container.innerHTML = `<p>Product details not available.</p>`;
    }

    this.innerHTML = ""; // Clear existing content
    this.append(container);
  }
  connectedCallback() {
    window.addEventListener("productDetail-change", () => this.render());

    this.append("Product detail page");
  }
}

customElements.define("product-detail-page", ProductDetail);

export default ProductDetail;
