const knex = require("./knex");

module.exports = {
  getAll() {
    return knex("users").select("username");
  },
  getProfile(id) {
    return knex("users").select("*").where("user_id", id);
  },
  getPost(id) {
    return knex("posts").select("*").where("post_id", id);
  },
};
