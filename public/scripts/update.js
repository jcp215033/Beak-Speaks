/* eslint-disable import/extensions */
import { updatePost } from "./global.js";

const renderCaption = (caption) => {
  document.querySelector("#caption").textContent = caption;
};

const main = async () => {
  const form = document.querySelector("#caption-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const captionInput = document.querySelector("input[name=caption]").value;
    const [response, err] = await updatePost(event.target);

    console.log(captionInput);
    renderCaption(response.caption);
    event.target.reset();
  });

  form.dataset.id = post.id;


  renderCaption(post.caption);
};

main();
