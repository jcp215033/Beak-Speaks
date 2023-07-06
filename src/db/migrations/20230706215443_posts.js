/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.createTable("posts", (table) => {
    table.increments("post_id");
    table.integer("id").references("users.id").notNullable();
    table.string("species", 100000);
    table.string("location", 100000);
    table.string("date", 100000);
    table.float("rating");
    table.integer("votes");
    table.string("img_url", 100000);
    table.string("caption", 100000);
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("posts");
