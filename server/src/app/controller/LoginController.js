const bcrypt = require('bcrypt');
const Account = require('../models/Account');

// Mock dữ liệu người dùng (có thể thay bằng cơ sở dữ liệu)
// const users = [
//     {
//         id: 1,
//         username: 'user1',
//         password: '$2b$10$8nLgK.HkmJFOXYALUZg09uX8Sib3dBbcQJZoUbRhN4r9zwDLQpKxu', // "password123"
//     },
// ];


const login = async (req, res) => {
    const { username, password } = req.body;

    // Tìm người dùng theo username
    const user = await Account.findOne({Username: username, Password: password});

    if (!user) {
        return res.status(401).json({ message: 'Tài khoản không tồn tại' });
    }

    // Kiểm tra mật khẩu
    // const isPasswordValid = await bcrypt.compare(password, user.password);
    const isPasswordValid = password === user.password;
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Sai mật khẩu' });
    }

    // Lưu thông tin vào session
    req.session.userId = user.AccountId;
    res.json({ message: 'Đăng nhập thành công' });
};

/**
 * Kiểm tra trạng thái đăng nhập
 */
const checkLogin = (req, res) => {
    if (req.session.AccountId) {
        return res.json({ loggedIn: true, AccountId: req.session.AccountId });
    }
    res.json({ loggedIn: false });
};

/**
 * Đăng xuất
 */
const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Đăng xuất thất bại' });
        }
        res.clearCookie('connect.sid'); // Xóa cookie phiên
        res.json({ message: 'Đăng xuất thành công' });
    });
};

module.exports = {
    login,
    checkLogin,
    logout,
};
