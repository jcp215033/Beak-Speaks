const knex = require("../knex");
const authUtils = require("../../utils/auth-utils");

class Post {
  #passwordHash = null;

  constructor({ id, species, area, date, rating, votes, img_url, caption }) {
    this.id = id;
    this.species = species;
    this.area = area;
    this.date = date;
    this.rating = rating;
    this.votes = votes;
    this.img_url = img_url;
    this.caption = caption;
  }

  static async list() {
    try {
      let list = {};
      const query = "SELECT * FROM posts ORDER BY post_id DESC LIMIT 15";
      let all = await knex.raw(query);
      list.all = all.rows;
      return list;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async find(id) {
    try {
      const query = `SELECT *
      FROM users
      INNER JOIN posts ON users.id = posts.id
      AND posts.post_id = ?
      `;
      const rest = await knex.raw(query, [id]);
      return rest.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async verifyPoster(post_id, id) {
    try {
      const query = "SELECT * FROM posts WHERE post_id = ? AND id = ?";
      const rest = await knex.raw(query, [post_id, id]);
      return rest.rows[0].id;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async findByUsername(id) {
    try {
      let u = {};
      const q1 = "SELECT * FROM users WHERE id = ?";
      let p = await knex.raw(q1, [id]);
      u.p = p.rows[0];
      const q2 = "SELECT * FROM posts WHERE id = ? ORDER BY post_id DESC";
      let po = await knex.raw(q2, [id]);
      u.po = po.rows;
      return u;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async deleteById(post_id, id) {
    try {
      const query = "DELETE FROM posts WHERE post_id = ? AND id = ?";
      let result = await knex.raw(query, [post_id, id]);
      return result.rowCount;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async create(
    id,
    species,
    area,
    date,
    rating,
    votes,
    img_url,
    caption
  ) {
    try {
      const query = `INSERT INTO posts (id, species, location, date, rating, votes, img_url, caption)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?) RETURNING post_id`;
      const results = await knex.raw(query, [
        id,
        species,
        area,
        date,
        rating,
        votes,
        img_url,
        caption,
      ]);
      return results.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async update(id, caption) {
    try {
      const query = `UPDATE posts
      SET caption = ?
      WHERE post_id = ?
      RETURNING *`;
      const results = await knex.raw(query, [caption, id]);
      return results.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async getRatings(id) {
    try {
      const query = `SELECT rating, votes
      FROM posts
      WHERE post_id = ?`;
      const results = await knex.raw(query, [id]);
      return results.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async updateRating(id, newRating, newVotes) {
    try {
      const query = `UPDATE posts
      SET rating = ?, votes = ?
      WHERE post_id = ?
      RETURNING *`;
      const results = await knex.raw(query, [newRating, newVotes, id]);
      return results.rows[0].post_id;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = Post;
