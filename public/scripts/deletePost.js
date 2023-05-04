/* eslint-disable import/extensions */
import { deletePostById } from "./global.js";

const main = async () => {
  document.querySelector("#del").addEventListener("click", async () => {
    event.preventDefault();
    console.log("dajda");
    // deletePostById("/api/posts", event.target);
  });
};

main();

// document.body.addEventListener("load", function () {
//   document.querySelector("#del").addEventListener("click", () => {
//     console.log("dajda");
//   });
// });
