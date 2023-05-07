const fs = require("fs");

const showMeHome = async (req, res) => {
  const {
    session,
    db: { Post },
  } = req;

  if (!session.userId) return res.sendStatus(401);

  let home = await Post.list();

  res.render("home", home, function (err, body) {
    let obj = { body: body };
    createHTML(obj.body);
    res.redirect("/index.html");
  });
};

const createHTML = async (code) => {
  await fs.writeFile(
    "./public/index.html",
    code,
    { flag: "w" },
    function (err) {
      if (err) return console.error(err);
      fs.readFile("./public/index.html", "utf-8", function (err, data) {
        if (err) return console.error(err);
      });
    }
  );
};

module.exports = showMeHome;
