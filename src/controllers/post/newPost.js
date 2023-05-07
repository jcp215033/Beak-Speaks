const showNewPostPage = async (req, res) => {
  res.render("createPost", {}, function (err, body) {
    res.send(body);
  });
};

module.exports = showNewPostPage;
