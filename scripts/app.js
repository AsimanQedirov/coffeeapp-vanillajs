// Adding shortcut keys for the app

import { router } from "../router/router.js";

// pages
import "../pages/home.js";

window.addEventListener("DOMContentLoaded", function () {
  router.init(); // Initialize the router
}); // When the DOM is fully loaded
