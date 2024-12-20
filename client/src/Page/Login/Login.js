// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState("");

//   // Xử lý đăng nhập
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Gửi request đăng nhập tới server
//       const response = await axios.post(
//         "http://localhost:3000/privatesite/login",
//         { username, password },
//         { withCredentials: true }
//       );

//       localStorage.setItem('token', response.data.token); // Lưu JWT token
//       setMessage('Đăng nhập thành công');

//       // Kiểm tra response từ server
//       if (response.data.message === "Đăng nhập thành công") {
//         alert("Đăng nhập thành công!");
//         window.location.href = '/privatesite/productlist'; // Chuyển đến trang danh sách sản phẩm
//       }
//     } catch (err) {
//       // Xử lý lỗi
//       setError(err.response?.data?.message || "Đăng nhập thất bại");
//     }
//   };

//   return (
//     <div>
//       <div className="breadcrumb-section ">
//         <div className="breadcrumb-wrapper">
//           <div className="container">
//             <div className="row">
//               <div className="col-12">
//                 <h3 className="breadcrumb-title">Login</h3>
//                 <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
//                   <nav aria-label="breadcrumb">
//                     <ul>
//                       <li>
//                         <a href="index.html">Home</a>
//                       </li>
//                       <li>
//                         <a href="shop-grid-sidebar-left.html">Shop</a>
//                       </li>
//                       <li className="active" aria-current="page">
//                         Login
//                       </li>
//                     </ul>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ...:::: Start Customer Login Section :::... */}
//       <div className="customer-login">
//         <div className="container">
//           <div className="row">
//             {/*login area start*/}
//             <div className="col-lg-6 col-md-6">
//               <div className="account_form" data-aos="fade-up" data-aos-delay={0}>
//                 <h3>Login</h3>
//                 <form onSubmit={handleSubmit}>
//                   {/* Username Input */}
//                   <div className="default-form-box">
//                     <label>
//                       Username or email <span>*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                       required
//                     />
//                   </div>

//                   {/* Password Input */}
//                   <div className="default-form-box">
//                     <label>
//                       Password <span>*</span>
//                     </label>
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />
//                   </div>

//                   {/* Error and Success Message */}
//                   {error && <div className="alert alert-danger">{error}</div>}
//                   {message && <div className="alert alert-success">{message}</div>}

//                   {/* Submit Button */}
//                   <div className="login_submit">
//                     <button
//                       className="btn btn-md btn-black-default-hover mb-4"
//                       type="submit"
//                     >
//                       Login
//                     </button>
//                     <label className="checkbox-default mb-4" htmlFor="offer">
//                       <input type="checkbox" id="offer" />
//                       <span>Remember me</span>
//                     </label>
//                   </div>
//                 </form>
//               </div>
//             </div>
//             {/*login area end*/}
//           </div>
//         </div>
//       </div>
//       {/* ...:::: End Customer Login Section :::... */}
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css"
const Login =()=>{
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('');
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // req
      const response = await axios.post(
        "http://localhost:3000/privatesite/login",
        { username, password },
        { withCredentials: true }
      );

      localStorage.setItem('token', response.data.token); //  JWT token
      setMessage('Đăng nhập thành công');

      // Kiểm tra response từ server
      if (response.data.message === "Đăng nhập thành công") {
        alert("Đăng nhập thành công!");
        // window.location.href = '/privatesite/productlist'; 
      }
    } catch (err) {
      // Xử lý lỗi
      setError(err.response?.data?.message || "Đăng nhập thất bại");
    }
  };
    return(
      <div id="login_page">
      <div className="container">
      <div className="circle circle1" />
      <div className="circle circle2" />
      <div className="circle circle3" />
      <div className="circle circle4" />
      <div className="form-container">
        <div className="login-container">
          <h2>Đăng nhập</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                 type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-btn">
              Đăng nhập
            </button>
          </form>
          <div className="register-link">
            <p>
              Bạn chưa có tài khoản? Hãy nhấn vào{" "}
              <a href="@" >Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}
export default Login;