import { $, $$ } from "../scripts/shorthand.js";

const main = $("#app");

export const router = {
  go: (path, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ path }, null, path);
    }

    let pageElement = null;
        
    switch (path) {
      case "/":
        pageElement = document.createElement("home-page");
        break;
      case "/products":
        pageElement = document.createElement("products-page");
        break;
      case "/basket":
        pageElement = document.createElement("basket-page");
        break;
      case path.match(/^\/products\/\d+$/)?.input:
        pageElement = document.createElement("product-detail-page");
        break;
      default:
        pageElement = document.createElement("not-found-page");
        break;
    }
    
    if (pageElement) {
      main.innerHTML = ""; // Clear the main content
      main.appendChild(pageElement);
    }
  },
  init: () => {
    // add event lister for each router link

    $$("a.router-link").forEach((route) => {
      route.addEventListener("click", (e) => {
        e.preventDefault();
        const path = e.currentTarget.getAttribute("href");
        path && path !== location.pathname && router.go(path); // it avoids to reload page repititive
      });
    });

    window.addEventListener("popstate", (event) => {
      router.go(event.state.route, false);
    });

    router.go(location.pathname); // Load the initial page
  },
};
