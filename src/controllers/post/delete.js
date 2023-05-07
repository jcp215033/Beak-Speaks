const deletePost = async (req, res) => {
  const {
    session,
    db: { Post },
    params: { id },
  } = req;
  const del = await Post.deleteById(id, session.userId);
  const result = async () => {
    console.log(del);
    if (del > 0) {
      console.log("yes");
      res.send(200);
    } else {
      console.log("no");
      res.send(403);
    }
  };
  result();
};

module.exports = deletePost;
