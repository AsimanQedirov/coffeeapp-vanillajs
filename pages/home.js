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
        let cardElement = document.createElement("div");
        cardElement.className = "card";
        cardElement.innerHTML = `
            <img class='card-image' src='${data.image}' alt='${data.name}' />
            <h3>Product name : ${data.name}</h3>
            <p>Kind of product : ${data.kind_of_product}</p>
            <img src='../assets/icons/basket.svg' class='add-to-basket' alt='trash icon' width='20' height='20'/>
        `;
        container.append(cardElement);
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
