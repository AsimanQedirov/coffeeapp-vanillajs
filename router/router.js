import { $, $$ } from "../scripts/shorthand.js";

const main = $("#app");

export const router = {
  go: (path, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ path }, null, path);
    }

    let pageElement = null;

    switch (path) {
      case "home":
        pageElement = document.createElement("home-page");
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
        const path = e.target.getAttribute("href");
        router.go(path);
      });
    });

    window.addEventListener("popstate", (event) => {
      router.go(event.state.route, false);
    });

    router.go(location.pathname.slice(1)); // Load the initial page
  },
};
