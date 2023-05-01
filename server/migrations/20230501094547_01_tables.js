/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments();
      table.text("username");
      table.text("password");
      table.float("posts_count");
      table.text("pfp");
      table.text("bio");
    })
    .createTable("posts", function (table) {
      table.increments();
      table.text("user");
      table.text("url");
      table.text("caption");
    })
    .createTable("ratings_comments", function (table) {
      table.increments();
      table.float("ratings");
      table.text("comments");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("users")
    .dropTable("posts")
    .dropTable("ratings_comments");
};
