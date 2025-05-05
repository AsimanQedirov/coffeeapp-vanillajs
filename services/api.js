export const api = {
  fetchHomePage: async () => {
    const result = await fetch("/data/intro.json");
    return await result.json();
  },
  fetchProductPage: async () => {
    const result = await fetch("/data/products.json");
    return await result.json();
  },
};
