// /* eslint-disable import/extensions */
import { deletePostById } from "./global.js";

const main = async () => {
  document.querySelector("#del").addEventListener("click", async () => {
    const id = document.querySelector("#id").innerText;
    deletePostById("/api/posts/" + id);
  });
};

main();
