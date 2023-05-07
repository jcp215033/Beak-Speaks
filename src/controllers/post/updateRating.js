const { isAuthorized } = require("../../utils/auth-utils");

const updateRating = async (req, res) => {
  const {
    session,
    db: { Post },
    params: { id },
    body: { rating },
  } = req;

  //   if (!isAuthorized(verify, session)) return res.sendStatus(403);

  const tableValues = await Post.getRatings(id);
  const calculations = async (val) => {
    val.sum = val.rating * val.votes;
    val.sum += Number(rating);
    val.votes++;
    val.rating = val.sum / val.votes;
    return val;
  };
  const newValues = await calculations(tableValues);
  const update = await Post.updateRating(id, newValues.rating, newValues.votes);
  res.send(update > 0);
  //   if (!isAuthorized(verify, session)) return res.sendStatus(403);
  //   console.log(rating, true);
  return;
  //   if (verify === Number(0)) return res.sendStatus(403);
  //   const updateCaption = await Post.update(Number(id), caption);
  //   res.send(caption === updateCaption.caption);
};

module.exports = updateRating;
