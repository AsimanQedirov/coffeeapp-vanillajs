import { $ } from "../scripts/shorthand.js";

export default class NotFound extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });

    this.styles = document.createElement("style");
    this.styles.textContent = `
        .container{
            display : flex;
            justify-content : center;
            align-items : center;
            flex-direction : column;
            background : white;
            margin-top : 20px;
            padding : 20px;
            border-radius : 8px;
            gap : 4px;
        }

        h3 , h2{
            color: black;
            margin : 0;
        }
        `;
  }
  render() {
    this.root.innerHTML = `
       <div class='container'>
            <h2>404 / </h2>
            <h3>Not found page</h3>
       </div>
    `;
    this.root.appendChild(this.styles);
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define("not-found-page", NotFound);
