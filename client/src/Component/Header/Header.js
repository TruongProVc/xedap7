import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  // Toggle search modal visibility
  const handleSearchClick = (event) => {
    event.preventDefault();
    setSearchOpen(true); // Mở ô tìm kiếm
  };

  const handleCloseSearch = () => {
    setSearchOpen(false); // Đóng ô tìm kiếm
  };

  return (
    <>
      <header className="header-section d-none d-xl-block">
        <div className="header-wrapper">
          <div className="header-bottom header-bottom-color--black section-fluid sticky-header sticky-color--black">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-between">
                  {/* Start Header Logo */}
                  <div className="header-logo">
                    <div className="logo">
                      <a href="index.html">
                        <img src="/images/logoo1.png" alt="Logo" />
                      </a>
                    </div>
                  </div>
                  {/* End Header Logo */}

                  {/* Start Header Main Menu */}
                  <div className="main-menu menu-color--white menu-hover-color--pink">
                    <nav>
                      <ul>
                        <li><a href="">Trang chủ</a></li>
                        <li className="has-dropdown">
                          <a href="blog-single-sidebar-left.html">
                            sản phẩm <i className="fa fa-angle-down" />
                          </a>
                          {/* Sub Menu */}
                          <ul className="sub-menu">
                            <li>
                              <a href="blog-grid-sidebar-left.html">xe đạp đua</a>
                            </li>
                            <li>
                              <a href="blog-grid-sidebar-right.html">xe đạp địa hình</a>
                            </li>
                          </ul>
                        </li>

                        <li><a href="contact-us.html">Contact Us</a></li>
                        
                      </ul>
                    </nav>
                  </div>
                  {/* End Header Main Menu */}

                  {/* Start Header Action Link */}
                  <ul className="header-action-link action-color--white action-hover-color--pink">
                    <li>
                      <a href="#search" onClick={handleSearchClick}>
                        <FaSearch color="white" />
                      </a>
                    </li>
                    <li>
                      <a href="#offcanvas-add-cart" className="offcanvas-toggle">
                        <FaShoppingCart color="white"/>
                        <span className="item-count">3</span>
                      </a>
                    </li>
                    <li>
                    <>
                    {/* Start User Info Section */}
                    <div className="user-info">
                      <div className="user-avatar">
                        <img src="/images/Sport.png" alt="User Avatar" />
                        <span className="username">John Doe</span>
                      </div>
                      <div className="user-dropdown">
                        <ul>
                          <li>
                            <a href="#">Profile</a>
                          </li>
                          <li>
                            <a href="#">Settings</a>
                          </li>
                          <li>
                            <a href="#">Logout</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End User Info Section */}
                  </>

                    </li>
                  </ul>
                  {/* End Header Action Link */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Start Search Modal */}
      {isSearchOpen && (
        <div id="search" className="search-modal open">
          <button type="button" className="close" onClick={handleCloseSearch}>
            <FaTimes />
          </button>
          <form>
            <input type="search" placeholder="Tìm kiếm" />
            <button type="submit" className="btn btn-lg btn-pink">
              <FaSearch />
            </button>
          </form>
          <div className="product-list">
            <div className="product-item">
              <img
                src="/assets/images/product/default/home-3/adidas1.jpg"
                alt="Product 1"
              />
              <p className="price">$19.99</p>
              <p className="name">Giày Thể Thao XYZ</p>
            </div>
            <div className="product-item">
              <img
                src="/assets/images/product/default/home-3/adidas2.jpg"
                alt="Product 2"
              />
              <p className="price">$29.99</p>
              <p className="name">Giày Thể Thao XYZ</p>
            </div>
          </div>
        </div>
      )}
      {/* End Search Modal */}
    </>
  );
};

export default Header;
