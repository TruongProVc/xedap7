const mysql = require("mysql2")



function ConnectDb(){
    var db =  mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
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

      return db;
}
function selectData(req,res,db){
    const sql = 'SELECT * FROM Product';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn:', err);
            res.status(500).send('Lỗi server');
            return;
        }
        res.json(results);
    });
  }

module.exports = {ConnectDb,selectData}

