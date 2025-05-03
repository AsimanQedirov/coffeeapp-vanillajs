class HomePage extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }
  render() {
    this.root.innerHTML = `
            <div class="home">
                <h1>Welcome to the Home Page</h1>
                <p>This is the home page of our web application.</p>
            </div>
        `;
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define("home-page", HomePage);
