export const api = {
  fetchHomePage: async () => {
    const result = await fetch("/data/intro.json");
    return await result.json();
  },
};
