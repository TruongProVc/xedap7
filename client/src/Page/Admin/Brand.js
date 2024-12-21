import React, { useState, useEffect } from 'react';

const Brand = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = '/login'
    throw new Error("Token không tồn tại. Hãy đăng nhập lại.");
  }
  const [brandName, setBrandName] = useState('');
  const [brands, setBrands] = useState([]);
  const [editingBrandId, setEditingBrandId] = useState(null); // ID thương hiệu đang chỉnh sửa
  const [message, setMessage] = useState(""); // Thông báo thành công hoặc lỗi

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        // Lấy token từ localStorage hoặc sessionStorage
        const token = localStorage.getItem("token");
        // console.log("token check: ", token)

        if (!token) {
          throw new Error("Token không tồn tại. Hãy đăng nhập lại.");
        }

        // Gửi request với token trong header Authorization
        const response = await fetch("http://localhost:3000/privatesite/brands", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Thêm token JWT
          },
          credentials: "include", // Nếu server yêu cầu cookie đi kèm
        });

        if (!response.ok) {
          throw new Error(`Lỗi: ${response.statusText}`);
        }

        const data = await response.json();
        setBrands(data);
      } catch (error) {
        console.error("Error fetching brands:", error);
        setMessage("Đã xảy ra lỗi khi tải danh sách thương hiệu.");
      }
    };

    fetchBrands();
  }, []);

  const handleEdit = (brand) => {
    setEditingBrandId(brand.BrandId);
    setBrandName(brand.BrandName);
  };

  const handleDelete = async (brandId) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa thương hiệu này không?")) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/brands/${brandId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setBrands(brands.filter((brand) => brand.BrandId !== brandId));
        setMessage("Xóa thương hiệu thành công!");
      } else {
        setMessage("Đã xảy ra lỗi khi xóa thương hiệu.");
      }
    } catch (error) {
      console.error("Error deleting brand:", error);
      setMessage("Đã xảy ra lỗi khi xóa thương hiệu.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!brandName.trim()) {
      setMessage("Tên thương hiệu không được để trống!");
      return;
    }

    if (editingBrandId) {
      try {
        const response = await fetch(`http://localhost:3000/editbrand/${editingBrandId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ BrandName: brandName }),
        });

        if (response.ok) {
          const updatedBrand = await response.json();
          setBrands(
            brands.map((brand) =>
              brand.BrandId === editingBrandId ? updatedBrand : brand
            )
          );
          setEditingBrandId(null);
          setBrandName('');
          setMessage("Cập nhật thương hiệu thành công!");
        } else {
          setMessage("Đã xảy ra lỗi khi cập nhật thương hiệu.");
        }
      } catch (error) {
        console.error("Error updating brand:", error);
        setMessage("Đã xảy ra lỗi khi cập nhật thương hiệu.");
      }
    } else {
      try {
        const response = await fetch("http://localhost:3000/brands", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ BrandName: brandName }),
        });

        if (response.ok) {
          const newBrand = await response.json();
          setBrands([...brands, newBrand]);
          setBrandName("");
          setMessage("Thêm thương hiệu thành công!");
        } else {
          setMessage("Đã xảy ra lỗi khi thêm thương hiệu.");
        }
      } catch (error) {
        console.error("Error adding brand:", error);
        setMessage("Đã xảy ra lỗi khi thêm thương hiệu.");
      }
    }
  };

  const handleCancelEdit = () => {
    setEditingBrandId(null);
    setBrandName('');
    setMessage(""); // Clear message when canceling edit
  };

  return (
    <div className='container-fluid'>
      {message && <div className="alert alert-info">{message}</div>}
      <div className="row">
        <div className="col-lg-6 d-flex align-items-stretch">
          <div className="card w-100">
            <div className="card-body p-4">
              <h5 className="card-title fw-600 mb-4">Danh sách thương hiệu</h5>
              <div className="table-responsive">
                <table className="table text-nowrap mb-0 align-middle">
                  <thead className="text-dark fs-4">
                    <tr>
                      <th className=" text-center">
                        <h6 className="fw-600 mb-0">Id</h6>
                      </th>
                      <th className=" text-center">
                        <h6 className="fw-600 mb-0">Tên thương hiệu</h6>
                      </th>
                      <th className=" text-center">
                        <h6 className="fw-600 mb-0">Lệnh</h6>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {brands.map((brand) => (
                      <tr key={brand.BrandId}>
                        <td className="border-bottom-0 text-center">
                          <h6 className="fw-600 mb-0">{brand.BrandId}</h6>
                        </td>
                        <td className="border-bottom-0 text-center">
                          <h6 className="fw-600 mb-1">{brand.BrandName}</h6>
                        </td>
                        <td className="border-bottom-0 text-center">
                          <div className="d-flex gap-3 justify-content-center">
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleDelete(brand.BrandId)}
                            >
                              Xóa
                            </button>
                            <button
                              className="btn btn-primary btn-sm"
                              onClick={() => handleEdit(brand)}
                            >
                              Sửa
                            </button>
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
        <div className="col-lg-6 d-flex align-items-stretch">
          <div className="card w-100">
            <div className="card-body p-4">
              <h5 className="card-title fw-600 mb-4">
                {editingBrandId ? "Chỉnh sửa thương hiệu" : "Thêm thương hiệu"}
              </h5>
              <form onSubmit={handleSubmit}>
                {editingBrandId && <p style={{ color: "#32a852" }}>Đang sửa mã thương hiệu: {editingBrandId}</p>}
                <div className="mb-3">
                  <label htmlFor="brandName" className="form-label fw-600">Tên thương hiệu</label>
                  <input
                    type="text"
                    className="form-control"
                    id="brandName"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="Nhập tên thương hiệu"
                  />
                </div>
                <div className="d-flex justify-content-end">
                  {editingBrandId && (
                    <button
                      type="button"
                      className="btn btn-secondary me-2"
                      onClick={handleCancelEdit}
                    >
                      Hủy
                    </button>
                  )}
                  <button type="submit" className="btn btn-primary">
                    {editingBrandId ? "Cập nhật" : "Thêm"}
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

export default Brand;








// import React, { useState, useEffect } from 'react';

// const Brand = () => {
//   const [brandName, setBrandName] = useState('');
//   const [brands, setBrands] = useState([]);
//   const [editingBrandId, setEditingBrandId] = useState(null); // ID thương hiệu đang chỉnh sửa

//   useEffect(() => {
//     const fetchBrands = async () => {
//       try {
//         // Lấy token từ localStorage hoặc sessionStorage
//         const token = localStorage.getItem("token"); // Giả sử bạn lưu token trong localStorage
  
//         if (!token) {
//           throw new Error("Token không tồn tại. Hãy đăng nhập lại.");
//         }
  
//         // Gửi request với token trong header Authorization
//         const response = await fetch("http://localhost:3000/privatesite/brands", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`, // Thêm token JWT
//           },
//           credentials: "include", // Nếu server yêu cầu cookie đi kèm
//         });
  
//         if (!response.ok) {
//           throw new Error(`Lỗi: ${response.statusText}`);
//         }
  
//         const data = await response.json();
//         setBrands(data);
//       } catch (error) {
//         console.error("Error fetching brands:", error);
//       }
//     };
  
//     fetchBrands();
//   }, []);
  

//   const handleEdit = (brand) => {
//     setEditingBrandId(brand.BrandId); 
//     setBrandName(brand.BrandName); 
//   };

//   const handleDelete = async (brandId) => {
//     if (!window.confirm("Bạn có chắc chắn muốn xóa thương hiệu này không?")) {
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:3000/brands/${brandId}`, {
//         method: "DELETE",
//       });

//       if (response.ok) {
//         setBrands(brands.filter((brand) => brand.BrandId !== brandId));
//         alert("Xóa thương hiệu thành công!");
//       } else {
//         alert("Đã xảy ra lỗi khi xóa thương hiệu.");
//       }
//     } catch (error) {
//       console.error("Error deleting brand:", error);
//       alert("Đã xảy ra lỗi khi xóa thương hiệu.");
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!brandName.trim()) {
//       alert("Tên thương hiệu không được để trống!");
//       return;
//     }

//     if (editingBrandId) {
//       try {
//         const response = await fetch(`http://localhost:3000/editbrand/${editingBrandId}`, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ BrandName: brandName }),
//         });

//         if (response.ok) {
//           const updatedBrand = await response.json();
//           setBrands(
//             brands.map((brand) =>
//               brand.BrandId === editingBrandId ? updatedBrand : brand
//             )
//           );
//           setEditingBrandId(null);
//           setBrandName('');
//           alert("Cập nhật thương hiệu thành công!");
//         } else {
//           alert("Đã xảy ra lỗi khi cập nhật thương hiệu.");
//         }
//       } catch (error) {
//         console.error("Error updating brand:", error);
//         alert("Đã xảy ra lỗi khi cập nhật thương hiệu.");
//       }
//     } else {
//       try {
//         const response = await fetch("http://localhost:3000/brands", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ BrandName: brandName }),
//         });

//         if (response.ok) {
//           const newBrand = await response.json();
//           setBrands([...brands, newBrand]);
//           setBrandName("");
//           alert("Thêm thương hiệu thành công!");
//         } else {
//           alert("Đã xảy ra lỗi khi thêm thương hiệu.");
//         }
//       } catch (error) {
//         console.error("Error adding brand:", error);
//         alert("Đã xảy ra lỗi khi thêm thương hiệu.");
//       }
//     }
//   };

//   const handleCancelEdit = () => {
//     setEditingBrandId(null);
//     setBrandName('');
//   };

//   return (
//     <div className='container-fluid'>
//       <div className="row">
//         <div className="col-lg-6 d-flex align-items-stretch">
//           <div className="card w-100">
//             <div className="card-body p-4">
//               <h5 className="card-title fw-600 mb-4">Danh sách thương hiệu</h5>
//               <div className="table-responsive">
//                 <table className="table text-nowrap mb-0 align-middle">
//                   <thead className="text-dark fs-4">
//                     <tr>
//                       <th className=" text-center">
//                         <h6 className="fw-600 mb-0">Id</h6>
//                       </th>
//                       <th className=" text-center">
//                         <h6 className="fw-600 mb-0">Tên thương hiệu</h6>
//                       </th>
//                       <th className=" text-center">
//                         <h6 className="fw-600 mb-0">Lệnh</h6>
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {Array.isArray(brands) && brands.map((brand) => (
//                       <tr key={brand.BrandId}>
//                         <td className="border-bottom-0 text-center">
//                           <h6 className="fw-600 mb-0">{brand.BrandId}</h6>
//                         </td>
//                         <td className="border-bottom-0 text-center">
//                           <h6 className="fw-600 mb-1">{brand.BrandName}</h6>
//                         </td>
//                         <td className="border-bottom-0 text-center">
//                           <div className="d-flex gap-3 justify-content-center">
//                             <button
//                               className="btn btn-danger btn-sm"
//                               onClick={() => handleDelete(brand.BrandId)}
//                             >
//                               Xóa
//                             </button>
//                             <button
//                               className="btn btn-primary btn-sm"
//                               onClick={() => handleEdit(brand)}
//                             >
//                               Sửa
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-6 d-flex align-items-stretch">
//           <div className="card w-100">
//             <div className="card-body p-4">
//               <h5 className="card-title fw-600 mb-4">
//                 {editingBrandId ? "Chỉnh sửa thương hiệu" : "Thêm thương hiệu"}
//               </h5>
//               <form onSubmit={handleSubmit}>
//                 <p style={{color:"#32a852"}}> {editingBrandId ? `Đang sửa mã thương hiệu: ${editingBrandId}` : ""}</p>
//                 <div className="mb-3">
//                   <label htmlFor="brandName" className="form-label fw-600">Tên thương hiệu</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="brandName"
//                     value={brandName}
//                     onChange={(e) => setBrandName(e.target.value)}
//                     placeholder="Nhập tên thương hiệu"
//                   />
//                 </div>
//                 <div className="d-flex justify-content-end">
//                   {editingBrandId && (
//                     <button
//                       type="button"
//                       className="btn btn-secondary me-2"
//                       onClick={handleCancelEdit}
//                     >
//                       Hủy
//                     </button>
//                   )}
//                   <button type="submit" className="btn btn-primary">
//                     {editingBrandId ? "Cập nhật" : "Thêm"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Brand;
