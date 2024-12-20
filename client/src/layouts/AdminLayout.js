import React from "react";
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Dashboard from "../Page/Admin/Dashboard";
import ItemProduct from "../Page/Admin/ProductList";
import AddProductForm from "../Page/Admin/AddItem";
import EditProductForm from "../Page/Admin/EditProduct";
import "../Page/Admin/admincss/Style.css"
import Orders from "../Page/Admin/Order";
import Brand from "../Page/Admin/Brand";
import ProfileAdmin from "../Page/Admin/ProfileAdmin";
import AccountManagement from "../Page/Admin/AccountManagement";
import Login from "../Page/Login/Login";

const Sidebar = () => {
  return (
    <aside className="left-sidebar">
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <Link to="/" className="text-nowrap logo-img" style={{ textDecoration: "none", color: "black", marginTop: "5px" }}>
            <img src="" alt="Logo" />
          </Link>
          <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i className="ti ti-x fs-8"></i>
          </div>
        </div>
        <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav">
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">Trang chủ</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/privatesite/dashboard">
                <span>
                  <i className="ti ti-layout-dashboard"></i>
                </span>
                <span className="hide-menu">Dashboard</span>
              </Link>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">Sản phẩm</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/privatesite/AddProduct">
                <span>
                  <i className="ti ti-settings"></i>
                </span>
                <span className="hide-menu">Thêm sản phẩm</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/privatesite/ProductList">
                <span>
                  <i className="ti ti-settings"></i>
                </span>
                <span className="hide-menu">Danh sách sản phẩm</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/privatesite/brand">
                <span>
                  <i className="ti ti-settings"></i>
                </span>
                <span className="hide-menu">Thương hiệu</span>
              </Link>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">Đơn hàng</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/privatesite/order">
                <span>
                  <i className="ti ti-settings"></i>
                </span>
                <span className="hide-menu">Danh sách đơn hàng</span>
              </Link>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">Quản lý</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/privatesite/AccountManagement">
                <span>
                  <i className="ti ti-settings"></i>
                </span>
                <span className="hide-menu">Tài khoản</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/privatesite/ProductList">
                <span>
                  <i className="ti ti-settings"></i>
                </span>
                <span className="hide-menu">Bình luận</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/privatesite/login">
                <span>
                  <i className="ti ti-settings"></i>
                </span>
                <span className="hide-menu">Bình luận</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

const Header = () => {
  return (
    <header className="app-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item d-block d-xl-none">
            <button className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" onClick={(e) => e.preventDefault()}>
              <i className="ti ti-menu-2"></i>
            </button>
          </li>
        </ul>
        <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
          <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
          <li className="nav-item dropdown">
  <a
    href="#"
    className="nav-link nav-icon-hover"
    id="drop2"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    onClick={(e) => e.preventDefault()} // Ngăn chặn hành động mặc định
  >
    <img
      src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
      alt="Profile"
      width="35"
      height="35"
      className="rounded-circle"
    />
  </a>
  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="drop2">
    <li>
      <Link to="/privatesite/profile" className="d-flex align-items-center gap-2 dropdown-item">
        <i className="ti ti-user fs-6"></i>
        <p className="mb-0">Thông tin</p>
      </Link>
    </li>
    <li>
      <a href="/account/logout" className="btn btn-outline-primary mx-3 mt-2 d-block">
        Logout
      </a>
    </li>
  </ul>
</li>



          </ul>
        </div>
      </nav>
    </header>
  );
};

const AdminLayout = () => {
  return (
    <BrowserRouter>
    <div
      className="page-wrapper"
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
    >
      <Sidebar />
      <div className="body-wrapper">
        <Header />
        <Routes>
              <Route path="/privatesite/Dashboard" element={<Dashboard/>}></Route>
              <Route path="/privatesite/ProductList" element={<ItemProduct/>}></Route>
              <Route path="/privatesite/AddProduct" element={<AddProductForm/>}></Route>
              <Route path="/privatesite/edit" element={<EditProductForm/>}></Route>
              <Route path="/privatesite/brand" element={<Brand />}></Route>
              <Route path="/privatesite/Order" element={<Orders/>}></Route>
              <Route path="/privatesite/profile" element={<ProfileAdmin />}></Route>
              <Route path="/privatesite/AccountManagement" element={<AccountManagement />}></Route>
              <Route path="/privatesite/login" element={<Login />}></Route>
            </Routes>
      </div>
      <script src="../../%PUBLIC_URL%/assets/js/privatesite/adminsite/adminsite.js"></script>
      <script src="../../%PUBLIC_URL%/assets/js/privatesite/adminsite/menu.js"></script>
      <script src="../../%PUBLIC_URL%/assets/js/privatesite/adminsite/sidebar.js"></script>
    </div>
    </BrowserRouter>
  );
};

export default AdminLayout;
