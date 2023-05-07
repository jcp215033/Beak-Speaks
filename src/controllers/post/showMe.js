const fs = require("fs");

const showProfile = async (req, res) => {
  const {
    session,
    db: { Post },
  } = req;

  if (!session.userId) return res.sendStatus(401);

  let me = await Post.findByUsername(session.userId);

  res.render("profile", me, function (err, body) {
    res.send(body);
  });
};

module.exports = showProfile;
