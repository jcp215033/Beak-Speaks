const { isAuthorized } = require("../../utils/auth-utils");

const updateCaption = async (req, res) => {
  const {
    session,
    db: { Post },
    params: { id },
    body: { caption },
  } = req;

  // if (!isAuthorized(Number(id), session)) return res.sendStatus(403);

  const post = await Post.find(Number(id));

  // if (!user) return res.sendStatus(404);

  const updatedCaption = await Post.update(Number(id), caption);

  res.send(updatedCaption);
};

module.exports = updateCaption;
