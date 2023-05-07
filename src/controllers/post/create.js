const { isAuthorized } = require("../../utils/auth-utils");
const URL = require("url").URL;

const stringIsAValidUrl = (s) => {
  try {
    new URL(s);
    return true;
  } catch (err) {
    return false;
  }
};

const createPost = async (req, res) => {
  const {
    session,
    db: { Post },
    body: {
      id = session.userId,
      species,
      area,
      date,
      rating,
      votes = 1,
      img_url,
      caption,
    },
  } = req;

  if (!isAuthorized(id, session)) return res.sendStatus(403);
  if (!stringIsAValidUrl(img_url)) return res.sendStatus(403);

  const post = await Post.create(
    id,
    species,
    area,
    date,
    rating,
    votes,
    img_url,
    caption
  );
  res.send(post);
};

module.exports = createPost;
