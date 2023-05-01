const userData = [
  {
    username: "julian",
    password: "abc123",
    bio: "Co-creator of Beak Talk",
    posts_count: 5,
    pfp: "https://i.imgur.com/Kj0nKnH.jpeg",
  },
  {
    username: "kristen",
    password: "password",
    bio: "Co-creator of Beak Talk",
    posts_count: 6,
    pfp: "https://i.imgur.com/cWBvLM1.jpeg",
  },
  {
    username: "charlie",
    password: "ilGattoMangiaLUcello",
    bio: "Hates birds",
    posts_count: 1,
    pfp: "https://i.imgur.com/nVybRn6.jpeg",
  },
];
const postData = [
  {
    user: "julian",
    url: "https://i.imgur.com/mg6LBGF.jpeg",
    caption: "capri corgious",
  },
  {
    user: "kristen",
    url: "https://i.imgur.com/nvgcaCN.jpeg",
    caption: "corvus labrodous",
  },
  {
    user: "charlie",
    url: "https://i.imgur.com/MC2qNKQ.jpeg",
    caption: "ucelli chiquas",
  },
];
const rates = [
  {
    ratings: 1,
    comments: "Not a real bird",
  },
  {
    ratings: 2,
    comments: "Poorly photoshopped bird",
  },
  {
    ratings: 0,
    comments: "leave this website",
  },
];

module.exports = {
  userData,
  postData,
  rates,
};
