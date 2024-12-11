import React from "react";
const Login =()=>{
    return(
        <>
  <div className="breadcrumb-section ">
    <div className="breadcrumb-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="breadcrumb-title">Login</h3>
            <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
              <nav aria-label="breadcrumb">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="shop-grid-sidebar-left.html">Shop</a>
                  </li>
                  <li className="active" aria-current="page">
                    Login
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
  {/* ...:::: Start Customer Login Section :::... */}
  <div className="customer-login">
    <div className="container">
      <div className="row">
        {/*login area start*/}
        <div className="col-lg-6 col-md-6">
          <div className="account_form" data-aos="fade-up" data-aos-delay={0}>
            <h3>login</h3>
            <form action="#" method="POST">
              <div className="default-form-box">
                <label>
                  Username or email <span>*</span>
                </label>
                <input type="text" />
              </div>
              <div className="default-form-box">
                <label>
                  Passwords <span>*</span>
                </label>
                <input type="password" />
              </div>
              <div className="login_submit">
                <button
                  className="btn btn-md btn-black-default-hover mb-4"
                  type="submit"
                >
                  login
                </button>
                <label className="checkbox-default mb-4" htmlFor="offer">
                  <input type="checkbox" id="offer" />
                  <span>Remember me</span>
                </label>
                <a href="#">Lost your password?</a>
              </div>
            </form>
          </div>
        </div>
        {/*login area start*/}
        {/*register area start*/}
        <div className="col-lg-6 col-md-6">
          <div
            className="account_form register"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <h3>Register</h3>
            <form action="#">
              <div className="default-form-box">
                <label>
                  Email address <span>*</span>
                </label>
                <input type="text" />
              </div>
              <div className="default-form-box">
                <label>
                  Passwords <span>*</span>
                </label>
                <input type="password" />
              </div>
              <div className="login_submit">
                <button
                  className="btn btn-md btn-black-default-hover"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
        {/*register area end*/}
      </div>
    </div>
  </div>{" "}
  {/* ...:::: End Customer Login Section :::... */}
</>

    )
}
export default Login;