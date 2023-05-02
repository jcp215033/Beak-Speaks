var express = require("express");
var router = express.Router();

const queries = require("../db/queries");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("random", { title: "No User" });
});
router.get("/:id", function (req, res, next) {
  // res.render("random", { title: req.params.id });
  queries.getProfile(req.params.id).then((profiles) => {
    res.json(profiles);
  });
});
// router.get("/3", function (req, res, next) {
//   res.render("random", { title: "3" });
// });
// router.get("/4", function (req, res, next) {
//   res.render("random", { title: "4" });
// });

module.exports = router;
