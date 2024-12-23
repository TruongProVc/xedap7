import React, { useState, useEffect } from "react";
import { Link,useNavigate   } from "react-router-dom";

const ItemProduct = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = '/login'
    throw new Error("Token không tồn tại. Hãy đăng nhập lại.");
  }
  
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState(""); // Thông báo thành công hoặc lỗi
  const navigate  = useNavigate(); // To handle redirection
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/privatesite/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },
          credentials: "include", 
        });
        if (!response.ok) {
          throw new Error(`Lỗi: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data); 
      } catch (error) {
        console.error("Error", error);
        setMessage("Đã xảy ra lỗi khi tải danh sách thương hiệu.");
      }
    };
    fetchProducts();
  }, []); 

 const handleDelete = async (ProductId) => {
  if (!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
    return;
  }

  const token = localStorage.getItem("token"); // Giả sử token được lưu trong localStorage

  if (!token) {
    alert("Bạn chưa đăng nhập hoặc token không hợp lệ.");
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/privatesite/products/${ProductId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`, // Thêm header Authorization
      },
    });

    if (response.ok) {
      setProducts(products.filter((product) => product.ProductId !== ProductId));
      alert("Xóa thành công!");
    } else if (response.status === 403) {
      alert("Bạn không có quyền xóa sản phẩm này.");
    } else {
      alert("Đã xảy ra lỗi khi xóa.");
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    alert("Đã xảy ra lỗi khi xóa.");
  }
};

  return (
    <div className="container-fluid">
      {message && <div className="alert alert-info">{message}</div>}
      <div className="row">
        <div className="col-lg-12 d-flex align-items-stretch">
          <div className="card w-100">
            <div className="card-body p-4">
              <h5 className="card-title fw-600 mb-4">Danh sách sản phẩm</h5>
              <div className="table-responsive">
                <table className="table text-nowrap mb-0 align-middle">
                  <thead className="text-dark fs-4">
                    <tr>
                      <th className="text-center ">
                        <h6 className="fw-600 mb-0">Id</h6>
                      </th>
                      <th className="text-center">
                        <h6 className="fw-600 mb-0">Tên sản phẩm</h6>
                      </th>
                      <th className="text-center">
                        <h6 className="fw-600 mb-0">Số tiền</h6>
                      </th>
                      <th className="text-center">
                        <h6 className="fw-600 mb-0">Thương hiệu</h6>
                      </th>
                      <th className="text-center">
                        <h6 className="fw-600 mb-0">Tình trạng</h6>
                      </th>
                      <th className="text-center">
                        <h6 className="fw-600 mb-0">Trạng thái</h6>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(products) && products.map((product) => (
                    <tr key={product.ProductId}>
                      <td className="border-bottom-0 text-center">
                        <h6 className="fw-600 mb-0">{product.ProductId}</h6>
                      </td>
                      <td className="border-bottom-0 text-center">
                        <h6 className="fw-600 mb-1">{product.ProductName}</h6>
                      </td>
                      <td className="border-bottom-0 text-center">
                        <p className="mb-0 fw-normal">{product.Price}</p>
                      </td>
                      <td className="border-bottom-0 text-center">
                        {product.Brand.BrandName}
                      </td>
                      <td className="border-bottom-0 text-center">
                        <div className="d-flex align-items-center justify-content-center gap-2">
                          <span className="badge bg-warning rounded-3 fw-600">Pending</span>
                        </div>
                      </td>
                      <td className="border-bottom-0 text-center">
                      <div className="d-flex gap-3 justify-content-center">
                        <Link 
                          to={`/privatesite/addproduct/${product.ProductId}`}
                          state={{ product: product }}
                          className="btn btn-warning btn-sm"
                        >
                          Sửa
                        </Link>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(product.ProductId)}>Xóa</button>
                      </div>
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
