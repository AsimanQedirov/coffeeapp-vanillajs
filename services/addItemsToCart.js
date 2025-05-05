import { proxiedStore as store } from "../store/store.js";
export const addItemsToCart = (product) => {
  if (store.cartItems.find((item) => item.id === product.id)) {
    store.cartItems = store.cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    store.cartItems = [...store.cartItems, { ...product, quantity: 1 }];
  }
};
