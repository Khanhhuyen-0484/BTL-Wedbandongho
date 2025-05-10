const register = async (req, res) => {
  try {
    console.log('Request body:', req.body); // Log dữ liệu nhận được
    
    const { username, email, password, full_name, phone_number } = req.body;
    
    // Validate input
    if (!username || !email || !password) {
      console.log('Validation failed - missing fields');
      return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin' });
    }

    // Kiểm tra user tồn tại
    console.log('Checking existing user...');
    const [existingUser] = await pool.query(
      'SELECT * FROM users WHERE username = ? OR email = ?', 
      [username, email]
    );
    
    if (existingUser.length > 0) {
      console.log('User already exists');
      return res.status(400).json({ message: 'Username hoặc email đã tồn tại' });
    }
    
    // Mã hóa password
    console.log('Hashing password...');
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);
    
    // Tạo user mới
    console.log('Creating new user...');
    const [result] = await pool.query(
      'INSERT INTO users (username, email, password_hash, full_name, phone_number) VALUES (?, ?, ?, ?, ?)',
      [username, email, password_hash, full_name, phone_number]
    );
    
    console.log('User created successfully:', result.insertId);
    res.status(201).json({ 
      message: 'Đăng ký thành công', 
      userId: result.insertId 
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