import { $ } from "../scripts/shorthand.js";

class Header extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });

    async function getStylesheets() {
      const response = await fetch("../styles/header.css");
      const style = await response.text();
      console.log(style);
    }

    getStylesheets();
  }

  connectedCallback() {
    const templateElement = $("#header");

    const element = templateElement.content.cloneNode(true);
    console.log(element);

    document.body.append(element);
  }
}
customElements.define("header-component", Header);
export default Header;
