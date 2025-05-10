const { poolPromise, sql } = require("../models/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); // Make sure bcrypt is imported

const register = async (req, res) => {
  try {
    const pool = await poolPromise;
    console.log('Request body:', req.body);
    
    const { username, email, password, full_name, phone_number } = req.body;
    
    // Validate input
    if (!username || !email || !password) {
      console.log('Validation failed - missing fields');
      return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin' });
    }
    
    // Kiểm tra user tồn tại
    console.log('Checking existing user...');
    const result1 = await pool.request()
      .input('username', sql.NVarChar, username)
      .input('email', sql.NVarChar, email)
      .query('SELECT * FROM users WHERE username = @username OR email = @email');
    
    if (result1.recordset.length > 0) {
      console.log('User already exists');
      return res.status(400).json({ message: 'Username hoặc email đã tồn tại' });
    }
    
    // Mã hóa password
    console.log('Hashing password...');
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);
    
    // Tạo user mới
    console.log('Creating new user...');
    const result2 = await pool.request()
      .input('username', sql.NVarChar, username)
      .input('email', sql.NVarChar, email)
      .input('password_hash', sql.NVarChar, password_hash)
      .input('full_name', sql.NVarChar, full_name || null)
      .input('phone_number', sql.NVarChar, phone_number || null)
      .query('INSERT INTO users (username, email, password_hash, full_name, phone_number) VALUES (@username, @email, @password_hash, @full_name, @phone_number); SELECT SCOPE_IDENTITY() AS insertId');
    
    const userId = result2.recordset[0].insertId;
    console.log('User created successfully:', userId);
    
    res.status(201).json({ 
      message: 'Đăng ký thành công', 
      userId: userId 
    });
  } catch (error) {
    console.error('ERROR in register:', error);
    res.status(500).json({ 
      message: 'Lỗi server',
      error: error.message,
      stack: error.stack // Chỉ trong môi trường development
    });
  }
};
const login = async (req, res) => {
  try {
    const pool = await poolPromise;
    console.log('Login request:', req.body);
    
    const { username, password } = req.body;
    
    // Validate input
    if (!username || !password) {
      return res.status(400).json({ message: 'Vui lòng nhập username và password' });
    }
    
    // Find user by username
    const result = await pool.request()
      .input('username', sql.NVarChar, username)
      .query('SELECT * FROM users WHERE username = @username');
    
    const user = result.recordset[0];
    
    // Check if user exists
    if (!user) {
      return res.status(401).json({ message: 'Username không tồn tại' });
    }
    
    // Verify password
    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) {
      return res.status(401).json({ message: 'Password không chính xác' });
    }
    console.log("Token",process.env.JWT_SECRET);
    // Create JWT token
    const token = jwt.sign(
      { 
        userId: user.id, 
        username: user.username,
        email: user.email
      }, 
      process.env.JWT_SECRET, 
      { expiresIn: '24h' }
    );
    
    // Return success with token
    res.status(200).json({
      message: 'Đăng nhập thành công',
      token: token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        full_name: user.full_name
      }
    });
    
  } catch (error) {
    console.error('ERROR in login:', error);
    res.status(500).json({ 
      message: 'Lỗi server', 
      error: error.message 
    });
  }
};
const getProfile = async (req, res) => {
  try {
    const userId = req.user.userId; // Lấy userId từ token đã giải mã
    const pool = await poolPromise;
    
    const result = await pool.request()
      .input('userId', sql.Int, userId)
      .query('SELECT id, username, email, full_name, phone_number FROM users WHERE id = @userId');
    
    const user = result.recordset[0];
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.status(200).json(user);
  } catch (error) {
    console.error('ERROR in getUserInfo:', error);
    res.status(500).json({ message: 'Lỗi server' });
  }
};

module.exports = {
  register,
  login,
  getProfile
};