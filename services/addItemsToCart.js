export { proxiedStore as store } from "../store/store.js";
export const addItemsToCart = (product) => {
  store.cartItems = (store.cartItems ?? []).map((item) =>
    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  );
};
