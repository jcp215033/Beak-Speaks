var express = require("express");
var router = express.Router();

const queries = require("../db/queries");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("random", { title: "Express" });
});
router.get("/1", function (req, res, next) {
  queries.getAll().then((profiles) => {
    res.json(profiles);
  });
});
router.get("/2", function (req, res, next) {
  res.render("random", { title: "2" });
});
router.get("/3", function (req, res, next) {
  res.render("random", { title: "3" });
});
router.get("/4", function (req, res, next) {
  res.render("random", { title: "4" });
});

module.exports = router;
