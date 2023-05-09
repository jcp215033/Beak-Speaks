const updateRating = async (req, res) => {
  const {
    session,
    db: { Post },
    params: { id },
    body: { rating },
  } = req;

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
  return;
};

module.exports = updateRating;
