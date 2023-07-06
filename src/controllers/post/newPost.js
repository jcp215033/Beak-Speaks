const showNewPostPage = async (req, res) => {
  res.render("createhtml", {}, function (err, body) {
    res.send(body);
  });
};

module.exports = showNewPostPage;
