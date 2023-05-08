const login = async (req, res) => {
  res.render("loginHtml", {}, function (err, body) {
    res.send(body);
  });
};

module.exports = login;
