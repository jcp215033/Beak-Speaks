// const fs = require("fs");

const showPost = async (req, res) => {
  const {
    session,
    db: { Post },
    params: { id },
  } = req;

  if (!session.userId) return res.sendStatus(401);
  let post = await Post.find(id);
  res.render("postHtml", post, function (err, body) {
    res.send(body);
  });
};
//PATCH: /api/posts/rate/299

module.exports = showPost;
