import { fetchLoggedInUser, handleFetch, setNav } from "./global.js";

const main = async () => {
  const user = await fetchLoggedInUser();
  setNav(!!user);
};

main();
