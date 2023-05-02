var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var randRouter = require("./routes/random");
var testRouter = require("./routes/rTest");
var postRouter = require("./routes/post");

var app = express();
////////////////////////////////////////////////////////////////
// view engine setup will have to learn jade or other template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
////////////////////////////////////////////////////////////////

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

////////////////////////////////////////////////////////////////
//For serving static home page
app.use(express.static(path.join(__dirname, "public")));
////////////////////////////////////////////////////////////////

// app.use("/", indexRouter);
app.use("/", indexRouter);
app.use("/random/", randRouter);
app.use("/users", usersRouter);
app.use("/testing", testRouter);
app.use("/posts", postRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
