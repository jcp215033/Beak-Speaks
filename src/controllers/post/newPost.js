const showNewPostPage = async (req, res) => {
  res.render("createHTML", {}, function (err, body) {
    res.send(body);
  });
};

module.exports = showNewPostPage;
