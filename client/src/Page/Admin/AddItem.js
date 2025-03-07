import React, { useState,useEffect } from 'react';
import { Link,useParams  } from 'react-router-dom';

const AddProductForm = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const isEdit = Boolean(id); // Xác định trạng thái thêm hoặc chỉnh sửa
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = '/login';
    throw new Error("Token không tồn tại. Hãy đăng nhập lại.");
  }

  // Trạng thái của các trường trong form
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [avatarProduct, setAvatarProduct] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [productMultiImage, setMultiProductImage] = useState([]);
  const [productSummary, setProductSummary] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDiscount, setProductDiscount] = useState('');
  const [productBrand, setProductBrand] = useState('');
  const [specifications, setSpecifications] = useState([{ SpecificationName: '', SpecificationContent: '' }]);
  const [brands, setBrands] = useState([]);

  // Tải danh sách thương hiệu
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch("http://localhost:3000/privatesite/brands");
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };
    fetchBrands();
  }, []);
  useEffect(() => {
    if (isEdit) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`http://localhost:3000/privatesite/productById/${id}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`, 
              },
            }
          );

          const product = await response.json();
          setProductName(product.ProductName);
          setProductSummary(product.SummaryDescription);
          setProductDescription(product.Description);
          setProductPrice(product.Price);
          setProductDiscount(product.Discount);
          setProductBrand(product.IdBrand);
          setSpecifications(product.Specifications || []);
          setProductId(product.ProductId);
          setProductImage(product.Avatar);
          if (product.Images) {
            setMultiProductImage(product.Images.map((img) => img.ImageUrl));
          }
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };
      fetchProduct();
    }
  }, [id, isEdit]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setProductImage(file); // Cập nhật hình ảnh
  }; 
  const handleMultiImageChange = (event) => {
    const files = Array.from(event.target.files);
    setMultiProductImage(files);
  };

  const handleSpecificationChange = (index, event) => {
    const newSpecifications = [...specifications];
    newSpecifications[index][event.target.name] = event.target.value;
    setSpecifications(newSpecifications);
  };

  const addSpecificationRow = () => {
    setSpecifications([...specifications, { SpecificationName: '', SpecificationContent: '' }]);
  };

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addSpecificationRow();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('ProductName', productName);
    formData.append('Description', productDescription);
    formData.append('SummaryDescription', productSummary);
    formData.append('Price', productPrice);
    formData.append('Discount', productDiscount);
    formData.append('IdBrand', productBrand);
    formData.append('Avatar', productImage);
    formData.append('specifications', JSON.stringify(specifications));
    productMultiImage.forEach((image) => formData.append('Images', image));

    try {
      const url = isEdit
        ? `http://localhost:3000/privatesite/addproduct/${id}`
        : 'http://localhost:3000/privatesite/addproduct';
      const method = isEdit ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData,
      });
      console.log(formData)
      if (response.ok) {
        const data = await response.json();
        console.log(`${isEdit ? 'Sản phẩm đã được cập nhật' : 'Sản phẩm đã được thêm'}:`, data);
        window.location.href = '/privatesite/productlist';
      } else {
        console.log('Có lỗi xảy ra');
      }
    } catch (error) {
      console.error('Lỗi khi gửi dữ liệu:', error);
    }
  };
  return (
    <div className='container-fluid'>
      <div className="row ">
        {/* Khu vực thêm sản phẩm */}
        <div className="col-lg-12 d-flex align-items-stretch">
          <div className="card w-100">
            <div className="card-body p-4">
              <h5 className="card-title fw-600 mb-4">{isEdit ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm mới'}</h5>
              <form onSubmit={handleSubmit}>
              {isEdit && <p style={{ color: "#32a852" }}>Đang sửa mã sản phẩm: {productId}</p>}

                <div className="mb-3">
                  <label htmlFor="productName" className="form-label fw-600">Tên sản phẩm</label>
                  <input
                    type="text"
                    name="ProductName"
                    className="form-control"
                    id="productName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Nhập tên sản phẩm"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productImage" className="form-label fw-600">Hình ảnh đại diện</label>
                  <input
                    type="file"
                    className="form-control"
                    name="Avatar"
                    id="productImage"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {productImage && (
                    <div className="mt-3">
                      <img
                        id="imagePreview"
                        src={typeof productImage === 'string' ? `http://localhost:3000/uploads/${productImage}` : URL.createObjectURL(productImage)} // Kiểm tra URL hoặc file
                        alt="Xem trước hình ảnh"
                        className="img-fluid"
                        style={{ display: 'block', maxHeight: '200px' }}
                      />
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="productMultiImage" className="form-label fw-600">Hình ảnh</label>
                  <input
                    type="file"
                    className="form-control"
                    name="Avatar"
                    id="productMultiImage"
                    accept="image/*"
                    multiple 
                    onChange={handleMultiImageChange}
                  />
                   {productMultiImage &&
                      productMultiImage.map((image, index) => (
                        <div key={index} className="preview-image-container" style={{ position: 'relative' }}>
                           <img
                              src={typeof image === 'string' ? `http://localhost:3000/uploads/${image}` : URL.createObjectURL(image)} // Kiểm tra URL hoặc file
                              alt={`Xem trước hình ảnh ${index + 1}`}
                              className="img-fluid"
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                              }}
                            />
                          </div>
                      ))}
                      </div>
                <div className="mb-3">
                  <label htmlFor="productSummary" className="form-label fw-600">Mô tả tóm tắt</label>
                  <textarea
                    className="form-control"
                    name='SummaryDescription'
                    id="productSummary"
                    rows="2"
                    value={productSummary}
                    onChange={(e) => setProductSummary(e.target.value)}
                    placeholder="Nhập mô tả tóm tắt"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productDescription" className="form-label fw-600">Mô tả</label>
                  <textarea
                    className="form-control"
                     name='Description'
                    id="productDescription"
                    rows="4"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    placeholder="Nhập mô tả chi tiết"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productPrice" className="form-label fw-600">Giá</label>
                  <input
                    type="number"
                     name='Price'
                    className="form-control"
                    id="productPrice"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    placeholder="Nhập giá sản phẩm"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productDiscount" className="form-label fw-600">Giảm giá</label>
                  <input
                    type="number"
                     name='Discount'
                    className="form-control"
                    id="productDiscount"
                    value={productDiscount}
                    onChange={(e) => setProductDiscount(e.target.value)}
                    placeholder="Nhập giá sản phẩm"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productBrand" className="form-label fw-600">Thương hiệu</label>
                  <select
                   name='IdBrand'
                    className="form-select"
                    id="productBrand"
                    value={productBrand}
                    onChange={(e) => setProductBrand(e.target.value)}
                  >
                    <option value="">Chọn thương hiệu</option>
                    {Array.isArray(brands) && brands.map((brand) => (
                      <option value={brand.BrandId}>{brand.BrandName}</option>
                    ))}
                   
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-600">Thông số kỹ thuật</label>
                  <div id="specifications">
                    {specifications.map((spec, index) => (
                      <div className="row mb-2" key={index}>
                        <div className="col-md-2">
                          <input
                            type="text"
                            className="form-control"
                            name="SpecificationName"
                            value={spec.SpecificationName}
                            onChange={(e) => handleSpecificationChange(index, e)}
                            placeholder="Nhập thông số"
                           onKeyDown={handleEnter}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            name="SpecificationContent"
                            value={spec.SpecificationContent}
                            onChange={(e) => handleSpecificationChange(index, e)}
                            placeholder="Nhập nội dung thông số"
                           onKeyDown={handleEnter}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="col-md-2 d-flex align-items-center ">
                      <button
                        type="button"
                        className="btn btn-success btn-sm"
                        onClick={addSpecificationRow}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                  <div className="d-flex justify-content-end">
                  <Link to="/privatesite/Dashboard" className="btn btn-danger">Quay về</Link>
                  <button type="submit" className="btn btn-primary">
                    {isEdit ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;