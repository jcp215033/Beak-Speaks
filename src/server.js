const express = require("express");
const path = require("path");
const postController = require("./controllers/post");
const handleCookieSessions = require("./middleware/handle-cookie-sessions");
const logRoutes = require("./middleware/log-routes");
const APIroutes = require("./APIroutes");
const userRoutes = require("./userRoutes");
const addModels = require("./middleware/add-models");

const app = express();

app.use(addModels);
app.use(handleCookieSessions);
app.use(logRoutes);
app.use(express.json());

app.set("views", path.join(__dirname, "..", "public", "views"));
app.set("view engine", "jade");

app.get("/", postController.showHome);

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api", APIroutes);
app.use("/home", userRoutes);

module.exports = app;
