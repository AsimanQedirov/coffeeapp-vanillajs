const store = {
  homePageData: null,
  productsPageData: null,
  cartItems: null,
};

const proxiedStore = new Proxy(store, {
  set(target, property, value) {
    target[property] = value;
    window.dispatchEvent(new Event(`${property}-change`));
    return true;
  },
});

export { proxiedStore };
