const express = require("express");
const cors = require("cors");
const mysql = require('mysql2');


const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());



const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ECommerceDB',
});

db.connect((err) => {
  if (err) {
      console.error('Kết nối thất bại:', err);
      return;
  }
  console.log('Đã kết nối MySQL');
});


db.connect((err) => {
  if (err) {
      console.error('Kết nối thất bại:', err);
      return;
  }
  console.log('Đã kết nối MySQL');
});


app.get('/products', (req, res) => {
  const sql = 'SELECT * FROM Product';
  db.query(sql, (err, results) => {
      if (err) {
          console.error('Lỗi khi truy vấn:', err);
          res.status(500).send('Lỗi server');
          return;
      }
      res.json(results);
  });
});


app.post('/products', (req, res) => {
  const { ProductName, Description, Price } = req.body;
  const sql = 'INSERT INTO Product (ProductName, Description, Price) VALUES (?, ?, ?)';
  db.query(sql, [ProductName, Description, Price], (err, result) => {
      if (err) {
          console.error('Lỗi khi thêm sản phẩm:', err);
          res.status(500).send('Lỗi server');
          return;
      }
      res.json({ message: 'Thêm sản phẩm thành công', productId: result.insertId });
  });
});


app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});