import { proxiedStore as store } from "../store/store.js";
const removeItemFromCart = (id) => {
  store.cartItems = store.cartItems.filter((item) => item.id !== id);
};

export default removeItemFromCart;
