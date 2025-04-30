class HomePage extends HTMLElement {
  constructor() {
    super();
  }
  render() {
    this.innerHTML = `
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
