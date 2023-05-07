const login = async (req, res) => {
  res.render("login", {}, function (err, body) {
    res.send(body);
  });
};

module.exports = login;
