const Account = require('../models/Account');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'saddasdasadsasdadsas'; 
const bcrypt = require('bcrypt')


exports.getOrderDetails = async (req, res) => {
    try {
        const { orderId } = req.params; // Lấy orderId từ params

        const orderDetail = await Order.findOne();
        console.log(orderDetail)

        if (!order) {
            return res.status(404).json({ message: 'Đơn hàng không tìm thấy' });
        }

        // Trả về thông tin đơn hàng, khách hàng và các sản phẩm trong đơn hàng
        res.json(order);
    } catch (error) {
        console.error('Lỗi khi lấy thông tin đơn hàng:', error);
        res.status(500).json({ error: error.message });
    }
};
exports.getAllAccounts = async (req, res) => {
    try {
        const accounts = await Account.findAll();
        res.json(accounts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getAccountById = async (req, res) => {
    try {
        const { id } = req.params; // Lấy id từ params

        // Tìm tài khoản theo AccountId
        const account = await Account.findOne({
            where: { AccountId: id }, // Truy vấn theo AccountId
        });

        if (!account) {
            return res.status(404).json({ message: "Tài khoản không tìm thấy." });
        }

        res.json(account); // Trả về tài khoản tìm thấy
    } catch (error) {
        res.status(500).json({ error: error.message }); // Xử lý lỗi
    }
};

// admin
exports.getProfileAdmin = async(req,res) => {
    try{
        const user = req.user;
        res.json(user); 
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}
exports.updateProfileAdmin = async (req, res) => {
    const { lastname, firstname, gender, address, mobile } = req.body;
    const userId = req.user.userId; 
    console.log(req.body)


    try {
        const user = await Account.findOne({ where: { AccountId: userId } });
        console.log(user)
        if (!user) {
            return res.status(404).json({ error: 'Người dùng không tồn tại' });
        }

        user.Lastname = lastname || user.Lastname;
        user.Firstname = firstname || user.Firstname;
        user.Gender = gender || user.Gender;
        user.Address = address || user.Address;
        user.Mobile = mobile || user.Mobile;

        await user.save();
        // Tạo lại token sau khi cập nhật thông tin người dùng
        const newToken = jwt.sign(
            {
                username: user.Username,
                userId: user.AccountId,
                email: user.Email,
                mobile: user.Mobile,
                address: user.Address,
                firstname: user.Firstname,
                lastname: user.Lastname,
                gender: user.Gender,
            },
            SECRET_KEY, // Sử dụng secret key từ môi trường hoặc cấu hình
            { expiresIn: '1h' } // Cấu hình thời gian hết hạn của token
        );

        // Trả về token mới và thông tin người dùng
        res.json({
            message: 'Thông tin người dùng đã được cập nhật',
            user,
            token: newToken, // Trả về token mới
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.changePassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body; // Nhận mật khẩu cũ và mật khẩu mới từ request body
    const userId = req.user.userId;  // Lấy userId từ token đã xác thực

    try {
        // Lấy thông tin người dùng từ cơ sở dữ liệu
        const user = await Account.findOne({ where: { AccountId: userId } });
        
        // Nếu không tìm thấy người dùng
        if (!user) {
            return res.status(404).json({ error: 'Người dùng không tồn tại' });
        }

        // Kiểm tra mật khẩu cũ
        const isMatch = await bcrypt.compare(oldPassword, user.Password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Mật khẩu cũ không chính xác' });
        }

        // Kiểm tra tính hợp lệ của mật khẩu mới (ví dụ: ít nhất 8 ký tự)
        if (newPassword.length < 8) {
            return res.status(400).json({ error: 'Mật khẩu mới phải có ít nhất 8 ký tự' });
        }

        // Mã hóa mật khẩu mới
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Cập nhật mật khẩu mới vào cơ sở dữ liệu
        user.Password = hashedPassword;
        await user.save();

        // Tạo lại token mới với thông tin người dùng đã thay đổi mật khẩu
        const newToken = jwt.sign(
            {
                username: user.Username,
                userId: user.AccountId,
                email: user.Email,
                mobile: user.Mobile,
                address: user.Address,
                firstname: user.Firstname,
                lastname: user.Lastname,
                gender: user.Gender,
            },
            SECRET_KEY, 
            { expiresIn: '7d' } 
        );

        // Trả về token mới và thông báo thay đổi mật khẩu thành công
        res.json({
            message: 'Mật khẩu đã được thay đổi thành công',
            token: newToken, // Trả về token mới
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};