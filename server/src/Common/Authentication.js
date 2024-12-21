const jwt = require("jsonwebtoken");

const SECRET_KEY = "saddasdasadsasdadsas"; // Đảm bảo sử dụng cùng SECRET_KEY

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1]; 

  if (!token) {
    return res.status(401).json({ redirectTo: "/login", message: "Bạn chưa đăng nhập." });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({ redirectTo: "/login", message: "Phiên đăng nhập đã hết hạn." });
    }
    req.user = user; 
    next(); 
  });
};

module.exports = authenticateJWT;
