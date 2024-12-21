const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ECommerceDB', 'root', '', {
    host: 'localhost', 
    dialect: 'mysql',
    logging: false, // Tắt log nếu không cần thiết
});
sequelize
    .authenticate()
    .then(() => {
        console.log('Kết nối thành công đến cơ sở dữ liệu.');
    })
    .catch((error) => {
        console.error('Không thể kết nối đến cơ sở dữ liệu:', error);
    });

module.exports = sequelize;
