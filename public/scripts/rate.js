/* eslint-disable import/extensions */
import { updateRating } from "./global.js";

const main = async () => {
  const user = await fetchLoggedInUser();
  setNav(!!user);

  let form = document.querySelector("#rating");

  form.addEventListener("submit", handleClick, false);

  function handleClick(event) {
    event.preventDefault();
    let rating = new FormData(event.target);
    rating = Object.fromEntries(rating).rating;
    let id = event.target.textContent.split("#")[1];
    updateRating(id, rating);
    event.target.reset();
  }
};

main();
