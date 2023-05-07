const showMePost = async (req, res) => {
  const {
    session,
    db: { Post },
  } = req;
  //   if (!session.userId) return res.sendStatus(401);

  const post = await Post.find(session.postId);
  res.send(post);
};

module.exports = showMePost;
