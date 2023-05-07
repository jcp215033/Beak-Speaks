const createUser = async (req, res) => {
  const {
    session,
    db: { User },
    body: { id, username, password, name, region, bio },
  } = req;

  const user = await User.create(username, password, name, region, bio);
  session.userId = user.id;
  res.send(user);
};

module.exports = createUser;
