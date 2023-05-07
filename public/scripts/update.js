/* eslint-disable import/extensions */
import { updatePost } from "./global.js";

const main = async () => {
  let allForm = document.querySelectorAll(".formed");

  allForm.forEach((form) => {
    form.addEventListener("submit", handleClick, false);
  });

  function handleClick(event) {
    event.preventDefault();
    let caption = new FormData(event.target);
    caption = Object.fromEntries(caption).caption;
    let id = event.target.textContent.split("#")[1];
    updatePost(id, caption);
    event.target.reset();
  }
};

main();
