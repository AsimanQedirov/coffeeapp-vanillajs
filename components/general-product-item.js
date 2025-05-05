export default class GeneralProductItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const props = JSON.parse(this.dataset.data);
    let cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.innerHTML = `
            <img class='card-image' src='${props.image}' alt='${props.name}' />
            <h3>Product name : ${props.name}</h3>
            <p>Kind of product : ${props.kind_of_product}</p>
            <img src='../assets/icons/basket.svg' class='add-to-basket' alt='trash icon' width='20' height='20'/>
        `;
    this.appendChild(cardElement);
  }
}

customElements.define("general-product-item", GeneralProductItem);
