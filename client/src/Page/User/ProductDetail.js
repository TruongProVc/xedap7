import React from "react";
const ProductDetail =()=>{
    return (
<>
  <div className="breadcrumb-section">
    <div className="breadcrumb-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="breadcrumb-title">Product Details - Affiliate</h3>
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
                    Product Details Affiliate
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
  {/* Start Product Details Section */}
  <div className="product-details-section">
    <div className="container">
      <div className="row">
        <div className="col-xl-5 col-lg-6">
          <div
            className="product-details-gallery-area"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            {/* Start Large Image */}
            <div className="product-large-image product-large-image-horaizontal swiper-container">
              <div className="swiper-wrapper">
                <div className="product-image-large-image   ">
                  <img
                    src="/images/products/xe1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* End Large Image */}
            {/* Start Thumbnail Image */}
            <div className="product-image-thumb product-image-thumb-horizontal swiper-container "></div>
            {/* End Thumbnail Image */}
          </div>
        </div>
        <div className="col-xl-7 col-lg-6">
          <div
            className="product-details-content-area "
            data-aos="fade-up"
            data-aos-delay={200}
          >
            {/* Start  Product Details Text Area*/}
            <div className="product-details-text">
              <h4 className="title">Nike</h4>
              <div className="d-flex align-items-center">
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
              <div className="price">$80.00</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                fringilla augue nec est tristique auctor. Donec non est at
                libero vulputate rutrum. Morbi ornare lectus quis
              </p>
            </div>{" "}
            {/* End  Product Details Text Area*/}
            {/* Start Product Variable Area */}
            <div className="product-details-variable">
              <h4 className="title">Available Options</h4>
              {/* Product Variable Single Item */}
              <div className="variable-single-item">
                <div className="product-stock">
                  {" "}
                  <span className="product-stock-in">
                    <i className="ion-checkmark-circled" />
                  </span>{" "}
                  200 IN STOCK
                </div>
              </div>
              {/* Product Variable Single Item */}
              <div className="variable-single-item">
                <span>Size</span>
                <select className="product-variable-size">
                  <option selected="" value={1}>
                    {" "}
                    size in option
                  </option>
                  <option value={2}>40</option>
                  <option value={3}>41</option>
                  <option value={4}>42</option>
                  <option value={5}>43</option>
                  <option value={6}>44</option>
                  <option value={7}>44.5</option>
                </select>
              </div>
              {/* Product Variable Single Item */}
              <div className="d-flex align-items-center ">
                <div className="product-add-to-cart-btn">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#modalAddcart"
                  >
                    {" "}
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>{" "}
            {/* End Product Variable Area */}
            {/* Start  Product Details Social Area*/}
            <div className="product-details-social">
              <span className="title">SHARE THIS PRODUCT:</span>
              {/* <ul>
                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                          <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                          <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                      </ul> */}
            </div>{" "}
            {/* End  Product Details Social Area*/}
          </div>
        </div>
      </div>
    </div>
  </div>{" "}
  {/* End Product Details Section */}
  {/* Start Product Content Tab Section */}
  <div className="product-details-content-tab-section section-top-gap-100">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div
            className="product-details-content-tab-wrapper"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            {/* Start Product Details Tab Button */}
            <ul className="nav tablist product-details-content-tab-btn d-flex justify-content-center">
              <li>
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#review"
                >
                  Reviews (1)
                </a>
              </li>
            </ul>{" "}
            {/* End Product Details Tab Button */}
            {/* Start Product Details Tab Content */}
            <div className="product-details-content-tab">
              <div className="tab-content">
                {/* Start Product Details Tab Content Singel */}
                <div className="tab-pane active show" id="review">
                  <div className="single-tab-content-item">
                    {/* Start - Review Comment */}
                    <ul className="comment">
                      {/* Start - Review Comment list*/}
                      <li className="comment-list">
                        <div className="comment-wrapper">
                          <div className="comment-content">
                            <div className="comment-content-top">
                              <div className="comment-content-left">
                                <h6 className="comment-name">Kaedyn Fraser</h6>
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
                            </div>
                            <div className="para-content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Tempora inventore dolorem a
                                unde modi iste odio amet, fugit fuga aliquam,
                                voluptatem maiores animi dolor nulla magnam ea!
                                Dignissimos aspernatur cumque nam quod sint
                                provident modi alias culpa, inventore deserunt
                                accusantium amet earum soluta consequatur quasi
                                eum eius laboriosam, maiores praesentium
                                explicabo enim dolores quaerat! Voluptas ad
                                ullam quia odio sint sunt. Ipsam officia, saepe
                                repellat.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>{" "}
                      {/* End - Review Comment list*/}
                      {/* Start - Review Comment list*/}
                      <li className="comment-list">
                        <div className="comment-wrapper">
                          <div className="comment-content">
                            <div className="comment-content-top">
                              <div className="comment-content-left">
                                <h6 className="comment-name">Kaedyn Fraser</h6>
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
                            </div>
                            <div className="para-content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Tempora inventore dolorem a
                                unde modi iste odio amet.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>{" "}
                      {/* End - Review Comment list*/}
                    </ul>{" "}
                    {/* End - Review Comment */}
                    <div className="review-form">
                      <div className="review-form-text-top">
                        <h5>ADD A REVIEW</h5>
                      </div>
                      <form action="#" method="post">
                        <div className="row">
                          <div className="col-12">
                            <div className="default-form-box">
                              <label htmlFor="comment-review-text">
                                Your review
                                <span>*</span>
                              </label>
                              <textarea
                                id="comment-review-text"
                                placeholder="Write a review"
                                required=""
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <button
                              className="btn btn-md btn-pink"
                              type="submit"
                            >
                              Gửi
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>{" "}
                {/* End Product Details Tab Content Singel */}
              </div>
            </div>{" "}
            {/* End Product Details Tab Content */}
          </div>
        </div>
      </div>
    </div>
  </div>{" "}
  {/* End Product Content Tab Section */}
</>

    )
}
export default ProductDetail;
