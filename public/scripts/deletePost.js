// /* eslint-disable import/extensions */
import { deletePostById } from "./global.js";

const main = async () => {
  let id;

  const buttons = document.querySelectorAll(".del");

  buttons.forEach((button) => {
    button.addEventListener("click", handleClick, false);
  });

  function handleClick() {
    id = this.textContent.split("#")[1];
    deletePostById("/api/posts/" + id);
  }
};

main();
