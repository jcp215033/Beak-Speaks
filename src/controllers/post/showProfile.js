const showProfile = async (req, res) => {
  const {
    session,
    db: { Post },
    params: { id },
  } = req;

  if (!session.userId) return res.sendStatus(401);

  let prof = await Post.findByUsername(id);

  res.render("genericProfileHtml", prof, function (err, body) {
    res.send(body);
  });
};

module.exports = showProfile;
