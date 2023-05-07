const express = require("express");
const userController = require("./controllers/user");
const postController = require("./controllers/post");
const addModels = require("./middleware/add-models");
const checkAuthentication = require("./middleware/check-authentication");

const Router = express.Router();
Router.use(addModels);

Router.get("/", postController.showHome); //home
Router.get("/posts/:id", postController.showPost); //individual post
Router.get("/profiles/:id", postController.showProfile); //individual profile
Router.get("/me", postController.showMe); //personal profile

module.exports = Router;
