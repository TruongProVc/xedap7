import React from "react";
const ALlProduct = ()=>{
    return(
        <>
  {/* ...:::: Start Shop Section:::... */}
  <div className="shop-section">
    <div className="container">
      <div className="row flex-column-reverse flex-lg-row">
        <div className="col-lg-3">
          {/* Start Sidebar Area */}
          <div
            className="siderbar-section"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            {/* Start Single Sidebar Widget */}
            <div className="sidebar-single-widget">
              <h6 className="sidebar-title">Thương hiệu</h6>
              <div className="sidebar-content">
                <ul className="sidebar-menu">
                  <li>
                    <a href="#">Nike</a>
                  </li>
                  <li>
                    <a href="#"> Adidas</a>
                  </li>
                  <li>
                    <a href="#"> converse</a>
                  </li>
                  <li>
                    <a href="#"> Vans</a>
                  </li>
                  <li>
                    <a href="#">New Balance</a>
                  </li>
                  <li>
                    <a href="#"> Puma</a>
                  </li>
                  <li>
                    <a href="#"> MLB</a>
                  </li>
                </ul>
              </div>
            </div>{" "}
            {/* End Single Sidebar Widget */}
            {/* Start Single Sidebar Widget */}
            <div className="sidebar-single-widget">
              <h6 className="sidebar-title">Lọc theo giá</h6>
              <div className="sidebar-content">
                <div className="filter-type-select">
                  <ul>
                    <li>
                      <label
                        className="checkbox-default"
                        htmlFor="price-range-1"
                      >
                        <input type="checkbox" id="price-range-1" />
                        <span>Dưới 500.000 VNĐ</span>
                      </label>
                    </li>
                    <li>
                      <label
                        className="checkbox-default"
                        htmlFor="price-range-2"
                      >
                        <input type="checkbox" id="price-range-2" />
                        <span>500.000 - 1.000.000 VNĐ</span>
                      </label>
                    </li>
                    <li>
                      <label
                        className="checkbox-default"
                        htmlFor="price-range-3"
                      >
                        <input type="checkbox" id="price-range-3" />
                        <span>1.000.000 - 2.000.000 VNĐ</span>
                      </label>
                    </li>
                    <li>
                      <label
                        className="checkbox-default"
                        htmlFor="price-range-4"
                      >
                        <input type="checkbox" id="price-range-4" />
                        <span>Trên 2.000.000 VNĐ</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          {/* Start Shop Product Sorting Section */}
          {/* End Section Content */}
          {/* Start Tab Wrapper */}
          <div className="sort-product-tab-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="tab-content tab-animate-zoom">
                    {/* Start Grid View Product */}
                    <div
                      className="tab-pane active show sort-layout-single"
                      id="layout-3-grid"
                    >
                      <div className="row">
                        <div className="col-xl-4 col-sm-6 col-12">
                          {/* Start Product Default Single Item */}
                          <div
                            className="product-default-single-item product-color--golden"
                            data-aos="fade-up"
                            data-aos-delay={0}
                          >
                            <div className="image-box">
                              <a
                                href="product-details-default.html"
                                className="image-link"
                              >
                                <img
                                  src="/images/products/xe1.png"
                                  alt=""
                                />
                              </a>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <a href="product-details-default.html">
                                    Epicuri per lobortis
                                  </a>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="empty">
                                    <i className="ion-android-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$68</span>
                              </div>
                            </div>
                          </div>
                          {/* End Product Default Single Item */}
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Grid View Product */}
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* End Tab Wrapper */}
          {/* Start Pagination */}
          <div
            className="page-pagination text-center"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            <ul>
              <li>
                <a className="active" href="#">
                  1
                </a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-ios-skipforward" />
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* End Pagination */}
        </div>
      </div>
    </div>
  </div>{" "}
  {/* ...:::: End Shop Section:::... */}
</>

    )
}
export default ALlProduct;