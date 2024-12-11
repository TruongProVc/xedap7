import React from "react";
const Cart =()=>{
    return(
<>
  <div className="breadcrumb-section ">
    <div className="breadcrumb-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="breadcrumb-title">Cart</h3>
            <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
              <nav aria-label="breadcrumb">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="shop-grid-sidebar-left.html">Cart</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{" "}
  {/* ...:::: End Breadcrumb Section:::... */}
  {/* ...:::: Start Cart Section:::... */}
  <div className="cart-section">
    {/* Start Cart Table */}
    <div className="cart-table-wrapper" data-aos="fade-up" data-aos-delay={0}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="table_desc">
              <div className="table_page table">
                <table>
                  {/* Start Cart Table Head */}
                  <thead>
                    <tr>
                      {/* Xóa cột Image */}
                      <th className="product_name">Tên sản phẩm</th>
                      <th className="product_price">Giá</th>
                      <th className="product_size">Size</th>{" "}
                      {/* Added Size column */}
                      <th className="product_quantity">Số lượng</th>
                      <th className="product_total">Tổng</th>
                      <th className="product_remove">Xóa</th>
                    </tr>
                  </thead>{" "}
                  {/* End Cart Table Head */}
                  <tbody>
                    {/* Start Cart Single Item*/}
                    <tr>
                      <td className="product_name">
                        <a href="product-details-default.html">
                          Handbag fringilla
                        </a>
                      </td>
                      <td className="product_price">$65.00</td>
                      <td className="product_size">M</td>{" "}
                      {/* Added Size value */}
                      <td className="product_quantity">
                        <label>Quantity</label>{" "}
                        <input
                          min={1}
                          max={100}
                          defaultValue={1}
                          type="number"
                        />
                      </td>
                      <td className="product_total">$130.00</td>
                      <td className="product_remove">
                        <a href="#">
                          <i className="fa fa-trash-o" />
                        </a>
                      </td>
                    </tr>{" "}
                    {/* End Cart Single Item*/}
                    {/* Start Cart Single Item*/}
                    <tr>
                      <td className="product_name">
                        <a href="product-details-default.html">
                          Handbags justo
                        </a>
                      </td>
                      <td className="product_price">$90.00</td>
                      <td className="product_size">L</td>{" "}
                      {/* Added Size value */}
                      <td className="product_quantity">
                        <label>Quantity</label>{" "}
                        <input
                          min={1}
                          max={100}
                          defaultValue={1}
                          type="number"
                        />
                      </td>
                      <td className="product_total">$180.00</td>
                      <td className="product_remove">
                        <a href="#">
                          <i className="fa fa-trash-o" />
                        </a>
                      </td>
                    </tr>{" "}
                    {/* End Cart Single Item*/}
                    {/* Start Cart Single Item*/}
                    <tr>
                      <td className="product_name">
                        <a href="product-details-default.html">Handbag elit</a>
                      </td>
                      <td className="product_price">$80.00</td>
                      <td className="product_size">S</td>{" "}
                      {/* Added Size value */}
                      <td className="product_quantity">
                        <label>Quantity</label>{" "}
                        <input
                          min={1}
                          max={100}
                          defaultValue={1}
                          type="number"
                        />
                      </td>
                      <td className="product_total">$160.00</td>
                      <td className="product_remove">
                        <a href="#">
                          <i className="fa fa-trash-o" />
                        </a>
                      </td>
                    </tr>{" "}
                    {/* End Cart Single Item*/}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* End Cart Table */}
    {/* Start Coupon Start */}
    <div className="coupon_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-6">
            <div
              className="coupon_code right"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <h3>Cart Totals</h3>
              <div className="coupon_inner">
                <div className="cart_subtotal">
                  <p>Giá</p>
                  <p className="cart_amount">$215.00</p>
                </div>
                <div className="cart_subtotal">
                  <p>Ship</p>
                  <p className="cart_amount">Free</p>
                </div>
                <div className="cart_subtotal">
                  <p>Tổng</p>
                  <p className="cart_amount">$215.00</p>
                </div>
                <div className="checkout_btn">
                  <a href="#" className="btn btn-md btn-pink">
                    Tiếp tục thanh toán
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* End Coupon Start */}
  </div>
</>

    )
}
export default Cart;