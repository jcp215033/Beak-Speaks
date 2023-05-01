const knex = require("./knex");

module.exports = {
  getAll() {
    return knex("ratings_comments").select("comments");
  },
};
