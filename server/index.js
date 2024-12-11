const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

const db = require('./src/config/db')
const connection = db.ConnectDb();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/products', (req, res) => {
  db.selectData(req,res,connection);
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});