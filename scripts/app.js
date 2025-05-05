// Adding shortcut keys for the app

import { router } from "../router/router.js";

// pages
import "../pages/home.js";
import "../pages/products.js";
import "../pages/not-found.js";
import "../components/general-product-item.js";
import "../components/product-item.js";
import "../components/basket-button.js";
import { proxiedStore as store } from "../store/store.js";

window.app = store;
window.router = router.go;

window.addEventListener("DOMContentLoaded", function () {
  router.init(); // Initialize the router
}); // When the DOM is fully loaded
