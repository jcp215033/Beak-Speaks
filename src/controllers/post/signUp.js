const signUp = async (req, res) => {
  res.render("signUp", {}, function (err, body) {
    res.send(body);
  });
};

module.exports = signUp;
