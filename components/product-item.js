import { $ } from "../scripts/shorthand.js";
import { addItemsToCart } from "../services/addItemsToCart.js";

export default class ProductItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const props = JSON.parse(this.dataset.data);
    let cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.innerHTML = `
               <img class='card-image' 
               src='${props.image}' 
               alt='${props.name}'
                loading='lazy' />
                <h3>Product name : ${props.name}</h3>
                <p>Price : ${props.price}</p>
                <span id='basket-item-${props.id}'><img src='../assets/icons/basket.svg' class='add-to-basket' alt='trash icon' width='20' height='20'/></span>
          `;
    this.appendChild(cardElement);
    $(`#basket-item-${props.id}`).addEventListener("click", () =>
      addItemsToCart(props)
    );
  }
}

customElements.define("product-item", ProductItem);
