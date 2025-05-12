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
                <div class='d-flex justify-end'><span id='basket-item-${props.id}'><img src='../assets/icons/basket.svg' class='add-to-basket' alt='trash icon' width='20' height='20'/></span></div>
          `;
    this.appendChild(cardElement);
    cardElement.addEventListener("click", (event) =>
    {
      const target = event.target;
      if (target.closest(`#basket-item-${props.id}`)) {
       addItemsToCart(props)
      }
      else{
        window.router.go(`/products/${props.id}`)
      }
    }
    );
  }
}

customElements.define("product-item", ProductItem);
