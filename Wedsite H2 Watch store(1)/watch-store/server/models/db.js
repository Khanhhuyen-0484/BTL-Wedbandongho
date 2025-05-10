const pool = require('./models/db');

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Kết nối database thành công!');
    
    // Test query
    const [rows] = await connection.query('SELECT 1 + 1 AS solution');
    console.log('Test query result:', rows[0].solution);
    
    connection.release();
  } catch (err) {
    console.error('❌ Lỗi kết nối database:', err);
  } finally {
    process.exit();
  }
}

testConnection();