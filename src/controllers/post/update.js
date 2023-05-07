const { isAuthorized } = require("../../utils/auth-utils");

const updateCaption = async (req, res) => {
  const {
    session,
    db: { Post },
    params: { id },
    body: { caption },
  } = req;

  const verify = await Post.verifyPoster(id, session.userId);
  if (!isAuthorized(verify, session)) return res.sendStatus(403);

  if (verify === Number(0)) return res.sendStatus(403);
  const updateCaption = await Post.update(Number(id), caption);
  res.send(caption === updateCaption.caption);
};

module.exports = updateCaption;
