export const api = {
  getHomePageData: async () => {
    const result = await fetch("/data/intro.json");
    return await result.json();
  },
  getAllProducts: async () => {
    const result = await fetch("/data/products.json");
    return await result.json();
  },
};
