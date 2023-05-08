const signUp = async (req, res) => {
  res.render("signUpHtml", {}, function (err, body) {
    res.send(body);
  });
};

module.exports = signUp;
