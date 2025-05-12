import { api } from "./api.js";
import { proxiedStore as store } from "../store/store.js";

const getProductItemById = async (id) => {
  const allProducts = await api.getAllProducts();
  console.log(allProducts);

  store.productDetail = allProducts.find((item) => item.id === id);
};

export default getProductItemById;
