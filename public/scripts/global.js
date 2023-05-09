// Fetch Helpers
const handleFetch = async (url, options) => {
  try {
    url, options;
    const response = await fetch(url, options);
    const { status, statusText, ok } = response;
    if (!ok) return [null, { status, statusText }];

    const content = status === 204 || (await response.json());
    return [content, null];
  } catch (error) {
    return [null, error];
  }
};

const getFetchOptions = (body, method = "POST") => ({
  method,
  credentials: "include", // IMPORTANT, this tells fetch to include cookies
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

// CREATE USER
const signupAndLoginHandler = async (url, form) => {
  const formData = new FormData(form);
  const options = getFetchOptions(Object.fromEntries(formData.entries()));
  const [_response, err] = await handleFetch(url, options);
  if (err) {
    form.reset();
    return alert("Something went wrong. Make sure your inputs are correct.");
  } else window.location.assign("/home/me");
};

//CREATE POST
const newPost = async (url, form) => {
  const formData = new FormData(form);
  const options = getFetchOptions(Object.fromEntries(formData.entries()));
  const [_response, err] = await handleFetch(url, options); //create post in database
  if (err) {
    form.reset();
    return alert(
      "Something went wrong. Make sure you are logged in and your inputs are correct."
    );
  }
  form.reset();
  window.location.assign(`/home/posts/${_response.post_id}`);
};

//DELETE POST
const deletePostById = async (url) => {
  const [_response, err] = await handleFetch(url, {
    method: "DELETE",
  });
  if (err)
    return alert(
      "Not authorized to delete this post. Make sure you are logged in or change your account."
    );
  return window.location.assign("/home/me");
};

// READ USER
const fetchLoggedInUser = async () => {
  const [response, _err] = await handleFetch("/api/me", {
    credentials: "include",
  });
  return response;
};

// UPDATE POST
const updatePost = async (id, caption) => {
  if (!caption) return alert("Include a caption.");

  const url = `/api/posts/${id}`;
  const options = getFetchOptions({ caption }, "PATCH");
  const [response, err] = await handleFetch(url, options);
  window.location.assign(`/home/me`);
  return [response, err];
};

// UPDATE RATING
const updateRating = async (id, rating) => {
  if (!rating) return alert("Include a rating.");

  const url = `/api/posts/rate/${id}`;
  const options = getFetchOptions({ rating }, "PATCH");
  const [response, err] = await handleFetch(url, options);
  window.location.assign(`/home/posts/${id}`);
  return [response, err];
};

// UPDATE USER
const updateUsernameHandler = async (form) => {
  const formData = new FormData(form);
  const username = formData.get("username");
  if (!username) return alert("Username is required.");

  const url = `/api/users/${form.dataset.userId}`;
  const options = getFetchOptions({ username }, "PATCH");

  const [response, err] = await handleFetch(url, options);
  return [response, err];
};

// DELETE USER
const logOutHandler = async () => {
  const [_response, err] = await handleFetch("/api/users/logout", {
    method: "DELETE",
  });
  if (err) return alert("Something went wrong, try again.");
  window.location.assign("/");
};

// Nav Helper
const setNav = (hasLoggedInUser) => {
  // position: relative; margin-top: -35px;
  const loggedOutNavHtml = `<ul>
    <li style = 'position: relative; margin-top: -35px;'><a data-image-width="1200" data-image-height="1200" href="/" class="u-image u-logo u-image-1"><img src="../../images/Pngtreebirdlogo_6948209.png" class="u-logo-image u-logo-image-1"></a></li>
    <li><a href="/home/signUp" style = 'color: #db545a;'>Sign Up</a></li>
    <li><a href="/home/login" style = 'color: #db545a;'>Login</a></li>
  </ul>`;

  const loggedInNavHtml = `<ul>
    <li style = 'position: relative; margin-top: -35px;'><a data-image-width="1200" data-image-height="1200" href="/" class="u-image u-logo u-image-1"><img src="../../images/Pngtreebirdlogo_6948209.png" class="u-logo-image u-logo-image-1"></a></li>
    <li><a href="/home/newPost" style = 'color: #db545a;' >New Post</a></li>
    <li><a href="/home/me" id='profile' style = 'color: #db545a;'>Profile</a></li>
  </ul>`;

  const navHtml = hasLoggedInUser ? loggedInNavHtml : loggedOutNavHtml;
  document.querySelector("nav").innerHTML = navHtml;
};

// This is wonky. Once you learn about bundlers we won't have to
// explicitly create globals. We just lack the tools right now.
Object.assign(window, {
  handleFetch,
  getFetchOptions,
  fetchLoggedInUser,
  signupAndLoginHandler,
  updatePost,
  updateRating,
  newPost,
  deletePostById,
  setNav,
  logOutHandler,
  updateUsernameHandler,
});

export {
  handleFetch,
  getFetchOptions,
  fetchLoggedInUser,
  signupAndLoginHandler,
  updatePost,
  updateRating,
  newPost,
  deletePostById,
  setNav,
  logOutHandler,
  updateUsernameHandler,
};
