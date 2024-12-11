import React from 'react';

const products = [
  {
    id: 1,
    image: '/images/products/xe1.png',
    name: 'Aliquam lobortis',
    price: '$75.00 - $85.00',
    tag: 'sale',
    stars: 4,
  },
  {
    id: 2,
    image: '/images/products/xe1.png',
    name: 'Condimentum posuere',
    price: '$80.00',
    tag: 'sale',
    stars: 4,
  },
  {
    id: 3,
    image: '/images/products/xe1.png',
    name: 'Cras neque metus',
    price: '$60.00',
    tag: 'sale',
    stars: 4,
  },
  {
    id: 4,
    image: '/images/products/xe1.png',
    name: 'Donec eu libero ac',
    price: '$74.00',
    stars: 4,
  },
  
];


const Content = () => {
  return (
    <div>
      <div className="service-promo-section section-top-gap-100">
  <div className="service-wrapper">
    <div className="container">
      <div className="row">
        {/* Start Service Promo Single Item */}
        <div className="col-lg-3 col-sm-6 col-12">
          <div
            className="service-promo-single-item"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            <div className="image">
              <img src="/images/service-promo-5.png" alt="" />
            </div>
            <div className="content">
              <h6 className="title">FREE SHIPPING</h6>
              <p>
                Get 10% cash back, free shipping, free returns, and more at
                1000+ top retailers!
              </p>
            </div>
          </div>
        </div>
        {/* End Service Promo Single Item */}
        {/* Start Service Promo Single Item */}
        <div className="col-lg-3 col-sm-6 col-12">
          <div
            className="service-promo-single-item"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="image">
              <img src="/images/service-promo-6.png" alt="" />
            </div>
            <div className="content">
              <h6 className="title">30 DAYS MONEY BACK</h6>
              <p>
                100% satisfaction guaranteed, or get your money back within 30
                days!
              </p>
            </div>
          </div>
        </div>
        {/* End Service Promo Single Item */}
        {/* Start Service Promo Single Item */}
        <div className="col-lg-3 col-sm-6 col-12">
          <div
            className="service-promo-single-item"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <div className="image">
              <img src="/images/service-promo-7.png" alt="" />
            </div>
            <div className="content">
              <h6 className="title">SAFE PAYMENT</h6>
              <p>
                Pay with the world’s most popular and secure payment methods.
              </p>
            </div>
          </div>
        </div>
        {/* End Service Promo Single Item */}
        {/* Start Service Promo Single Item */}
        <div className="col-lg-3 col-sm-6 col-12">
          <div
            className="service-promo-single-item"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            <div className="image">
              <img src="/images/service-promo-8.png" alt="" />
            </div>
            <div className="content">
              <h6 className="title">LOYALTY CUSTOMER</h6>
              <p>
                Card for the other 30% of their purchases at a rate of 1% cash
                back.
              </p>
            </div>
          </div>
        </div>
        {/* End Service Promo Single Item */}
      </div>
    </div>
  </div>
</div>

    <div className="product-default-slider-section section-top-gap-100 section-fluid">
      
      {/* Start Section Content Text Area */}
      <div className="section-title-wrapper" data-aos="fade-up" data-aos-delay="0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-content-gap">
                <div className="secton-content">
                  <h3 className="section-title">XE ĐẠP ĐUA</h3>
                  <p><a href='#'>Tất cả sản phẩm</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Section Content Text Area */}

      {/* Start Product Wrapper */}
      <div className="product-wrapper" data-aos="fade-up" data-aos-delay="200">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Product Items */}
              <div className="row">
                {products.map((product) => (
                  <div key={product.id} className="col-12 col-md-3 mb-4">
                    <div className="product-default-single-item product-color--pink">
                      <div className="image-box">
                        <a href="product-details-default.html" className="image-link">
                          <img src={product.image} alt={product.name} />
                        </a>
                        {product.tag && (
                          <div className="tag">
                            <span>{product.tag}</span>
                          </div>
                        )}
                        <div className="action-link">
                          <div className="action-link-left">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">
                              Add to Cart
                            </a>
                          </div>
                          <div className="action-link-right">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview">
                              <i className="icon-magnifier" />
                            </a>
                            <a href="wishlist.html">
                              <i className="icon-heart" />
                            </a>
                            <a href="compare.html">
                              <i className="icon-shuffle" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="content">
                        <div className="content-left">
                          <h6 className="title">
                            <a href="product-details-default.html">{product.name}</a>
                          </h6>
                          <ul className="review-star">
                            {[...Array(5)].map((_, index) => (
                              <li className={index < product.stars ? 'fill' : 'empty'} key={index}>
                                <i className="ion-android-star" />
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="content-right">
                          <span className="price">{product.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Product Wrapper */}
      <div className="product-default-slider-section section-top-gap-100 section-fluid">
      {/* Start Section Content Text Area */}
      <div className="section-title-wrapper" data-aos="fade-up" data-aos-delay="0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-content-gap">
                <div className="secton-content">
                  <h3 className="section-title">XE ĐẠP ĐỊA HÌNH</h3>
                  <p><a href='#'>Tất cả sản phẩm</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Section Content Text Area */}

      {/* Start Product Wrapper */}
      <div className="product-wrapper" data-aos="fade-up" data-aos-delay="200">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Product Items */}
              <div className="row">
                {products.map((product) => (
                  <div key={product.id} className="col-12 col-md-3 mb-4">
                    <div className="product-default-single-item product-color--pink">
                      <div className="image-box">
                        <a href="product-details-default.html" className="image-link">
                          <img src={product.image} alt={product.name} />
                        </a>
                        {product.tag && (
                          <div className="tag">
                            <span>{product.tag}</span>
                          </div>
                        )}
                        <div className="action-link">
                          <div className="action-link-left">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">
                              Add to Cart
                            </a>
                          </div>
                          <div className="action-link-right">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview">
                              <i className="icon-magnifier" />
                            </a>
                            <a href="wishlist.html">
                              <i className="icon-heart" />
                            </a>
                            <a href="compare.html">
                              <i className="icon-shuffle" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="content">
                        <div className="content-left">
                          <h6 className="title">
                            <a href="product-details-default.html">{product.name}</a>
                          </h6>
                          <ul className="review-star">
                            {[...Array(5)].map((_, index) => (
                              <li className={index < product.stars ? 'fill' : 'empty'} key={index}>
                                <i className="ion-android-star" />
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="content-right">
                          <span className="price">{product.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Product Wrapper */}
    </div>
    </div>
    </div>
  );
};

export default Content;