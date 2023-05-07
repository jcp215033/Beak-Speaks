const fs = require("fs");

const showProfile = async (req, res) => {
  const {
    session,
    db: { Post },
  } = req;

  if (!session.userId) return res.sendStatus(401);

  let me = await Post.findByUsername(session.userId);

  res.render("profile", me, function (err, body) {
    let obj = { body: body };
    createHTML(obj.body);
    res.redirect("/user.html");
  });
};

const createHTML = async (code) => {
  await fs.writeFile("./public/user.html", code, { flag: "w" }, function (err) {
    if (err) return console.error(err);
    fs.readFile("./public/user.HTML", "utf-8", function (err, data) {
      if (err) return console.error(err);
    });
  });
};

module.exports = showProfile;
