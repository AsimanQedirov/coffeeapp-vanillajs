// Adding shortcut keys for the app

import { router } from "../router/router.js";

// pages
import "../pages/home.js";
import "../pages/products.js";
import "../pages/not-found.js";
import { proxiedStore as store } from "../store/store.js";

window.app = store;

window.addEventListener("DOMContentLoaded", function () {
  router.init(); // Initialize the router
}); // When the DOM is fully loaded
