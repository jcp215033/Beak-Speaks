/* eslint-disable import/extensions */
import {
  fetchLoggedInUser,
  logOutHandler,
  updateUsernameHandler,
  setNav,
} from "./global.js";

const isAuthError = (err) => err.status === 401 || err.status === 403;
const redirectToLogin = () => window.location.assign("/home/login");

const main = async () => {
  const a = await handleFetch("/home/me");
  const user = await fetchLoggedInUser();
  if (!user) return redirectToLogin();
  setNav(!!user);

  const logoutForm = document.querySelector("#logout-form");
  const updateUsernameForm = document.querySelector("#username-form");

  logoutForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    logOutHandler();
  });

  updateUsernameForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const [response, err] = await updateUsernameHandler(event.target);

    if (err)
      return isAuthError(err)
        ? redirectToLogin()
        : alert("Something went wrong, please try again.");
    event.target.reset();
    window.location.reload();
  });

  updateUsernameForm.dataset.userId = user.id;
};

main();
