import { $ } from "../scripts/shorthand.js";
import { loadHomePageData } from "../services/homePage.js";
import { proxiedStore as store } from "../store/store.js";
const main = $("#app");
class HomePage extends HTMLElement {
  constructor() {
    super();
    loadHomePageData();
  }
  render(event) {
    if (store.homePageData && Array.isArray(store.homePageData)) {
      const container = document.createElement("div");
      container.className = "container";
      for (let data of store.homePageData) {
        const productItem = document.createElement("general-product-item");
        productItem.dataset.data = JSON.stringify(data);
        container.append(productItem);
      }
      main.append(container);
    } else {
      main.innerHTML = `<div class='container'> There is no data</div>`;
    }
  }
  connectedCallback() {
    window.addEventListener("homePageData-change", this.render);
  }
}
customElements.define("home-page", HomePage);

export default HomePage;
