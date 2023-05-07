// const fs = require("fs");

const showPost = async (req, res) => {
  const {
    session,
    db: { Post },
    params: { id },
  } = req;

  if (!session.userId) return res.sendStatus(401);
  let post = await Post.find(id);
  // console.log("here", post);
  // let username = await Post.findByUsername(post.id);
  // post.username = username.p.username;
  console.log(post);
  res.render("post", post, function (err, body) {
    res.send(body);
  });
};

module.exports = showPost;
