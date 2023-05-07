const express = require("express");
const userController = require("./controllers/user");
const postController = require("./controllers/post");
const addModels = require("./middleware/add-models");
const checkAuthentication = require("./middleware/check-authentication");

const Router = express.Router();
Router.use(addModels);

//READ
Router.get("/", async (req, res) => res.redirect("/")); //home
Router.get("/posts/:id", postController.showPost); //individual post
Router.get("/profiles/:id", postController.showProfile); //individual profile
Router.get("/me", postController.showMe); //personal profile
Router.get("/newPost", postController.showNewPostPage); //create new post page
Router.get("/login", postController.login); //login page
Router.get("/signUp", postController.signUp); //sign up page

module.exports = Router;
