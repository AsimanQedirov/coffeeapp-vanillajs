import { proxiedStore as store } from "../store/store.js";
import { api } from "./api.js";

export async function loadHomePageData() {
  const response = await api.fetchHomePage();
  store.homePageData = response;
}
