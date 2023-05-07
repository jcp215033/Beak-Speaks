/* eslint-disable import/extensions */
import { fetchLoggedInUser, handleFetch, setNav } from "./global.js";

const main = async () => {
  const a = await handleFetch("/home");
  const user = await fetchLoggedInUser();
  setNav(!!user);
};

main();
