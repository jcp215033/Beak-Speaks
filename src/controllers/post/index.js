const create = require("./create");
const update = require("./update");
const deletePost = require("./delete");
const showMe = require("./showMe");
const showPost = require("./showPost");
const showProfile = require("./showProfile");
const showHome = require("./showHome");
const showNewPostPage = require("./newPost");
const login = require("./login");
const signUp = require("./signUp");
const updateRating = require("./updateRating");

module.exports = {
  create,
  deletePost,
  showMe,
  showNewPostPage,
  update,
  showHome,
  login,
  signUp,
  showProfile,
  showPost,
  updateRating,
};
