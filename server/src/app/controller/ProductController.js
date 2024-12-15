const Product = require('../models/Product');
const Brand = require('../models/Brand');
const Specification = require('../models/Specification');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Tạo thư mục upload nếu chưa tồn tại
const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// multer luu anh
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll({ include: Brand });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Thêm sản phẩm và thông số kỹ thuật
exports.addProduct = async (req, res) => {
    upload.single('Avatar')(req, res, async (err) => {
        if (err) {
            console.error('Lỗi upload:', err);
            return res.status(500).json({ error: 'Lỗi khi upload hình ảnh' });
        }
        try {
            const { ProductName, Description, SummaryDescription, Discount, IdBrand, Price, specifications } = req.body;

            let imagePath = req.file ? req.file.path : null;

            const newProduct = await Product.create({
                ProductName,
                Description,
                SummaryDescription,
                Discount,
                IdBrand,
                Price,
                Avatar: imagePath
            });

             //chuyen Specifications thanh mang doi tuong
             let parsedSpecifications = [];
             if (specifications) {
                 try {
                     parsedSpecifications = JSON.parse(specifications);
                 } catch (parseError) {
                     console.error('Lỗi khi parse thông số kỹ thuật:', parseError);
                     return res.status(400).json({ error: 'Thông số kỹ thuật không hợp lệ' });
                 }
             }

            //thông số kỹ thuật
            if (parsedSpecifications) {
                parsedSpecifications.map((spec, index) => {
                    const newSpec =  Specification.create({
                        SpecificationName: spec.SpecificationName,
                            SpecificationContent: spec.SpecificationContent,
                        ProductId: newProduct.ProductId,
                    });
                })
            }
            res.status(201).json({ message: 'Thêm sản phẩm thành công', spec: specifications });
        } catch (error) {
            console.error('Lỗi khi thêm sản phẩm:', error);
            res.status(500).json({ error: error.message });
        }
    });
};

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
        }
        if (product.Avatar && fs.existsSync(product.Avatar)) {
            fs.unlinkSync(product.Avatar);
        }


        await Specification.destroy({
            where: {
                ProductId: id 
            }
        });
        await product.destroy();
        res.json({ message: 'Xóa sản phẩm thành công' });
    } catch (error) {
        console.error('Lỗi khi xóa sản phẩm:', error);
        res.status(500).json({ error: error.message });
    }
};
