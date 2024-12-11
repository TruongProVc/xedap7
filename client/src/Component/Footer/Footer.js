import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section footer-bg section-top-gap-100">
    <div className="footer-wrapper">
      {/* Start Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="row mb-n6">
            <div className="col-lg-3 col-sm-6 mb-6">
              {/* Start Footer Single Item */}
              <div
                className="footer-widget-single-item footer-widget-color--pink"
                data-aos="fade-up"
                data-aos-delay={0}
              >
                <h5 className="title">INFORMATION</h5>
                <ul className="footer-nav">
                  <li>
                    <a href="#">Delivery Information</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact</a>
                  </li>
                  <li>
                    <a href="#">Returns</a>
                  </li>
                </ul>
              </div>
              {/* End Footer Single Item */}
            </div>
            <div className="col-lg-3 col-sm-6 mb-6">
              {/* Start Footer Single Item */}
              <div
                className="footer-widget-single-item footer-widget-color--pink"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <h5 className="title">MY ACCOUNT</h5>
                <ul className="footer-nav">
                  <li>
                    <a href="my-account.html">My account</a>
                  </li>
                  <li>
                    <a href="wishlist.html">Wishlist</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="faq.html">Frequently Questions</a>
                  </li>
                  <li>
                    <a href="#">Order History</a>
                  </li>
                </ul>
              </div>
              {/* End Footer Single Item */}
            </div>
            <div className="col-lg-3 col-sm-6 mb-6">
              {/* Start Footer Single Item */}
              <div
                className="footer-widget-single-item footer-widget-color--pink"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <h5 className="title">CATEGORIES</h5>
                <ul className="footer-nav">
                  <li>
                    <a href="#">Decorative</a>
                  </li>
                  <li>
                    <a href="#">Kitchen utensils</a>
                  </li>
                  <li>
                    <a href="#">Chair &amp; Bar stools</a>
                  </li>
                  <li>
                    <a href="#">Sofas and Armchairs</a>
                  </li>
                  <li>
                    <a href="#">Interior lighting</a>
                  </li>
                </ul>
              </div>
              {/* End Footer Single Item */}
            </div>
            <div className="col-lg-3 col-sm-6 mb-6">
              {/* Start Footer Single Item */}
              <div
                className="footer-widget-single-item footer-widget-color--pink"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <h5 className="title">ABOUT US</h5>
                <div className="footer-about">
                  <p>
                    We are a team of designers and developers that create high
                    quality Magento, Prestashop, Opencart.
                  </p>
                  <address>
                    <span>Address: Your address goes here.</span>
                    <span>Email: demo@example.com</span>
                  </address>
                </div>
              </div>
              {/* End Footer Single Item */}
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Top */}
      {/* Start Footer Center */}
      {/* Start Footer Center */}
      {/* Start Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row justify-content-between align-items-center align-items-center flex-column flex-md-row mb-n6">
            <div className="col-auto mb-6"></div>
          </div>
        </div>
      </div>
      {/* Start Footer Bottom */}
    </div>
  </footer>
  
  );
};

export default Footer;
