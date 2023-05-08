/* eslint-disable import/extensions */
import { newPost, setNav } from "./global.js";

const main = async () => {
  const user = await fetchLoggedInUser();
  if (!user) return window.location.assign("/home/me");
  setNav(!!user);

  document
    .querySelector("#create-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      newPost("/api/posts", event.target);
    });
};

main();
