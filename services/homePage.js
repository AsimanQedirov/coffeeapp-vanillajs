import { proxiedStore as store } from "../store/store.js";
import { api } from "./api.js";

export async function loadHomePageData() {
  const response = await api.getHomePageData();
  store.homePageData = response;
}
