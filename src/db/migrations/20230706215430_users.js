/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("username").unique();
    table.string("password_hash");
    table.string("name", 100000);
    table.string("region", 100000);
    table.string("bio", 100000);
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("users");
