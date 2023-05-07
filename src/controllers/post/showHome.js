const fs = require("fs");

const showMeHome = async (req, res) => {
  const {
    session,
    db: { Post },
  } = req;

  let home = await Post.list();

  res.render("home", home, function (err, body) {
    res.send(body);
  });
};

module.exports = showMeHome;
