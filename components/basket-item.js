import { $ } from "../scripts/shorthand.js";
import removeItemFromCart from "../services/removeItemFromCart.js";

export default class BasketItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const props = JSON.parse(this.dataset.data);

    let cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.innerHTML = `
               <div class='card-body'>
                <img class='card-image' 
               src='${props.image}' 
               alt='${props.name}'
                loading='lazy' />
               <div>
                <h3>Product name : ${props.name}</h3>
                <h3>Belongs : ${props.category.name}</h3>
                <p>Price : ${props.price}</p>
                <p>Quantity : ${props.quantity}</p>
               </div>
               </div>
                <span id='trash-item-${props.id}'><img src='../assets/icons/trash.svg' class='remove-from-basket' alt='trash icon'/></span>
          `;
    this.appendChild(cardElement);
    $(`#trash-item-${props.id}`).addEventListener("click", () =>
      removeItemFromCart(props.id)
    );
  }
}

customElements.define("basket-item", BasketItem);
