export { proxiedStore as store } from "../store/store.js";
export const addItemsToCart = (item) => {
  store.cartItems = [...(store.cartItems ?? []), item];
};
