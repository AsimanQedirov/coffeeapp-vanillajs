class Header extends HTMLHeadElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  connectedCallBack() {
    console.log("Header component");
  }
}
customElements.define("header-component", Header);
export default Header;
