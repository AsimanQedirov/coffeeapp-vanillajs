import { proxiedStore as store } from "../store/store.js";
import { api } from "./api.js";

export async function loadProductPage() {
  const response = await api.getAllProducts();
  store.productsPageData = response;
}
