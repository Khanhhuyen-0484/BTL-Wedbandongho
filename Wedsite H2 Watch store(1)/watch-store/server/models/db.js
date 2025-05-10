const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'sapassword',
  server: `localhost`, 
  database: 'H2WatchStore',
  options: {
    encrypt: false, // bật true nếu dùng Azure hoặc yêu cầu SSL
    trustServerCertificate: true,// nên bật khi làm local
    enableArithAbort: true, // Add this for better error handling
    connectTimeout: 30000
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('✅ SQL Server Connected');
    return pool;
  })
  .catch(err => console.error('❌ DB Connection Failed:', err));

module.exports = {
  sql, poolPromise
};
