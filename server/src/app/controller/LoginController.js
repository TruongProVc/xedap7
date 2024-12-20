const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const  Account  = require('../models/Account'); // Đảm bảo import đúng model của bạn

// Mã hóa thông tin người dùng vào JWT
const SECRET_KEY = 'saddasdasadsasdadsas';  // Sử dụng khóa bí mật để mã hóa token

exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Vui lòng nhập tên đăng nhập và mật khẩu' });
  }

  try {
    // Kiểm tra thông tin người dùng trong cơ sở dữ liệu
    const user = await Account.findOne({
      where: { Username: username, Password: password },
    });

    if (!user) {
      return res.status(401).json({ message: 'Sai tên đăng nhập hoặc mật khẩu' });
    }

    // Tạo JWT token
    const token = jwt.sign(
      { username: user.Username, userId: user.AccountId }, 
      SECRET_KEY, 
      { expiresIn: '1h' } 
    );

    // Trả về token và thông tin người dùng cơ bản
    return res.json({
      message: 'Đăng nhập thành công',
      token: token,
      user: {
        id: user.AccountId,
        username: user.Username,
      },
    });
  } catch (error) {
    console.error('Lỗi khi đăng nhập:', error);
    return res.status(500).json({ message: 'Lỗi server. Vui lòng thử lại sau.' });
  }
};