// Fetch Helpers
const handleFetch = async (url, options) => {
  try {
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
    return alert("Something went wrong");
  }
  window.location.assign("/user.html");
};

//CREATE POST
const newPost = async (url, form) => {
  const formData = new FormData(form);
  const options = getFetchOptions(Object.fromEntries(formData.entries()));
  const [_response, err] = await handleFetch(url, options); //create post in database
  if (err) {
    form.reset();
    return alert("Something je?");
  }
  options.method = "GET";
  delete options.body;
  await handleFetch(`home/posts/${_response.post_id}`, options); //create post HTMl
  window.location.assign("./postHTML.html");
};

//DELETE POST
const deletePostById = async (url) => {
  const [_response, err] = await handleFetch(url, {
    method: "DELETE",
  });
  if (err) return window.location.assign("home/me");
  window.location.assign("home/me");
};

//READ HOME
const loadHome = async () => {
  console.log("loading");
  const [response, _err] = await handleFetch("/home", {
    credentials: "include",
  });
  return response;
};

// READ USER
const fetchLoggedInUser = async () => {
  const [response, _err] = await handleFetch("/api/me", {
    credentials: "include",
  });
  return response;
};

// UPDATE USER
const updateUsernameHandler = async (form) => {
  const formData = new FormData(form);
  const username = formData.get("username");
  if (!username) return alert("Username is required");

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
  if (err) return alert("Something went wrong");
  window.location.assign("/");
};

// Nav Helper
const setNav = (hasLoggedInUser) => {
  const loggedOutNavHtml = `<ul>
    <li><a href="/" id='home'>Home</a></li>
    <li><a href="./signUp.html">Sign Up</a></li>
    <li><a href="./login.html">Login</a></li>
  </ul>`;

  const loggedInNavHtml = `<ul>
    <li><a href="/"id='home'>Home</a></li>
    <li><a href="./post.html">New Post</a></li>
    <li><a href="./user.html" id='profile'>Profile</a></li>
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
  loadHome,
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
  loadHome,
  signupAndLoginHandler,
  newPost,
  deletePostById,
  setNav,
  logOutHandler,
  updateUsernameHandler,
};
