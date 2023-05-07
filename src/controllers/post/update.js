const { isAuthorized } = require("../../utils/auth-utils");

const updateCaption = async (req, res) => {
  const {
    session,
    db: { Post },
    params: { post_id },
    body: { caption },
  } = req;

  // if (!isAuthorized(Number(id), session)) return res.sendStatus(403);

  const post = await Post.find(Number(post_id));

  // if (!user) return res.sendStatus(404);

  const updatedCaption = await Post.update(Number(post_id), caption);

  res.send(updatedCaption);
};

module.exports = updateCaption;
