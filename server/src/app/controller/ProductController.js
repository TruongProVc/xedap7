const Product = require('../models/Product');
const Brand = require('../models/Brand');
const Specification = require('../models/Specification');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Image = require('../models/Image')

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll({ include: Brand });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
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
exports.addProduct = async (req, res) => {
    upload.fields([
        { name: 'Avatar', maxCount: 1 }, 
        { name: 'Images', maxCount: 10 } 
    ])(req, res, async (err) => {
        if (err) {
            console.error('Lỗi upload:', err);
            return res.status(500).json({ error: 'Lỗi khi upload hình ảnh' });
        }

        try {
            const { ProductName, Description, SummaryDescription, Discount, IdBrand, Price, specifications } = req.body;

            let avatarPath = req.files['Avatar'] ? req.files['Avatar'][0].filename : null;

            const newProduct = await Product.create({
                ProductName,
                Description,
                SummaryDescription,
                Discount,
                IdBrand,
                Price,
                Avatar: avatarPath
            });

            // console.log('Avatar path:', avatarPath);

            // Lấy danh sách các hình ảnh (Images) từ request
            const images = req.files['Images'] || [];
            console.log(images)
            if (images.length > 0) {
                // Lưu các hình ảnh vào bảng Image
                const imagePromises = images.map((image) =>
                    Image.create({
                        ImageUrl: image.filename, 
                        ProductId: newProduct.ProductId 
                    })
                );
                await Promise.all(imagePromises); 
            }

            let parsedSpecifications = [];
            if (specifications) {
                try {
                    parsedSpecifications = JSON.parse(specifications);
                } catch (parseError) {
                    console.error('Lỗi khi parse thông số kỹ thuật:', parseError);
                    return res.status(400).json({ error: 'Thông số kỹ thuật không hợp lệ' });
                }
            }

            // Lưu thông số kỹ thuật vào bảng Specification
            if (parsedSpecifications.length > 0) {
                const specPromises = parsedSpecifications.map((spec) =>
                    Specification.create({
                        SpecificationName: spec.SpecificationName,
                        SpecificationContent: spec.SpecificationContent,
                        ProductId: newProduct.ProductId
                    })
                );
                await Promise.all(specPromises); 
            }

            res.status(201).json({ message: 'Thêm sản phẩm thành công', productId: newProduct.ProductId });
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
        await Image.destroy({
            where: {
                ProductId: id 
            }
        });
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
