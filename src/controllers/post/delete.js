const deletePost = async (req, res) => {
  const {
    session,
    db: { Post },
    params: { id },
  } = req;

  const del = await Post.deleteById(id, session.userId);

  const result = async (r) => {
    if (r === 0) {
      return 403;
    } else {
      return 204;
    }
  };
  res.sendStatus(await result(del));
};

module.exports = deletePost;
