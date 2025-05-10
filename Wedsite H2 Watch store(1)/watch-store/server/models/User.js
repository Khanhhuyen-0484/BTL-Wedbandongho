// models/User.js
const pool = require('./db');

class User {
  static async findByUsername(username) {
    const [rows] = await pool.query(
      'SELECT * FROM users WHERE username = ?',
      [username]
    );
    return rows[0];
  }

  static async findByEmail(email) {
    const [rows] = await pool.query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    return rows[0];
  }

  static async create(userData) {
    const {
      username,
      email,
      password_hash,
      full_name = '',         // Gán giá trị mặc định nếu undefined
      phone_number = ''       // Gán giá trị mặc định nếu undefined
    } = userData;

    const [result] = await pool.query(
      'INSERT INTO users (username, email, password_hash, full_name, phone_number) VALUES (?, ?, ?, ?, ?)',
      [username, email, password_hash, full_name, phone_number]
    );

    return result.insertId;
  }

  static async findById(id) {
    const [rows] = await pool.query(
      'SELECT id, username, email, full_name, phone_number, address FROM users WHERE id = ?',
      [id]
    );
    return rows[0];
  }
}

module.exports = User;
