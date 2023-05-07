const express = require("express");
const userController = require("./controllers/user");
const postController = require("./controllers/post");
const addModels = require("./middleware/add-models");
const checkAuthentication = require("./middleware/check-authentication");

const Router = express.Router();
Router.use(addModels);

Router.patch("/posts/:id", postController.update);

Router.get("/cookieCounter", (req, res) => {
  const { session } = req;
  console.log(session);
  session.viewCount = (session.viewCount || 0) + 1;
  console.log(session.viewCount);
  res.status(200).send({ count: session.viewCount });
});

// Create
Router.post("/users", userController.create);
Router.post("/users/login", userController.login);
Router.post("/posts", postController.create);

// Read
Router.get("/users", userController.list);
Router.get("/users/:id", userController.show);
Router.get("/me", userController.showMe);
Router.get("/home", postController.showHome);
// Router.get("/posts/:id", postController.showMePost);
Router.get("/posts/:id", postController.showPost);
Router.get("/profile/:id", postController.showMe);

// checkAuthentication middleware is applied to only to this route (and /logged-in-secret)
Router.get("/logged-in-secret", checkAuthentication, (req, res) => {
  res.send({ msg: "The secret is: there is no secret." });
});

// Update
// Router.patch("/posts/:id", postController.update);
// Router.patch("/posts/:id", postController.update);

Router.patch("/users/:id", checkAuthentication, userController.update);

// Delete
Router.delete("/users/logout", userController.logout);

module.exports = Router;
