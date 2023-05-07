const fs = require("fs");

const showPost = async (req, res) => {
  const {
    session,
    db: { Post },
    params: { id },
  } = req;

  if (!session.userId) return res.sendStatus(401);

  let post = await Post.find(id);
  console.log(post);
  res.render("post", post, function (err, body) {
    let obj = { body: body };
    createHTML(obj.body);
    res.redirect("/postHTML.html");
  });
};

const createHTML = async (code) => {
  await fs.writeFile(
    "./public/postHTML.html",
    code,
    { flag: "w" },
    function (err) {
      if (err) return console.error(err);
      fs.readFile("./public/postHTML.HTML", "utf-8", function (err, data) {
        if (err) return console.error(err);
      });
    }
  );
};

module.exports = showPost;
