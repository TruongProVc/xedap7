import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/css"; // Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import các module Swiper từ gói con
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const Slidebar = () => {
  return (
    <>
      <div className="slider-container">
        <Swiper
          loop={true} 
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false,
          }}
          navigation={true} // Enable navigation buttons
          pagination={{ clickable: true }} // Enable clickable pagination
          modules={[Navigation, Pagination, Autoplay]} // Use required modules
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="slide">
              <img src="/images/slidebar1.png" alt="Slide 1" />
             
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="slide">
              <img src="/images/slidebar2.png" alt="Slide 2" />
             
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="slide">
              <img src="/images/slidebar3.png" alt="Slide 3" />
             
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* CSS nhúng trực tiếp */}
      <style>
      {`
         
          .slider-container {
            width: 100vw; 
            height: 100vh; 
            position: relative;
          }

          .mySwiper {
            width: 100%;
            height: 100%;
          }

         
          .slide {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          .slide img {
            width: 100%;
            height: 100%;
            object-fit: cover; 
          }

          .slide-content {
            position: absolute;
            bottom: 20px;
            left: 20px;
            background: rgba(0, 0, 0, 0.6); 
            color: #fff;
            padding: 10px 20px;
            border-radius: 8px;
            max-width: 400px;
          }

          .slide-content h2 {
            margin: 0 0 10px;
            font-size: 24px;
          }

          .slide-content p {
            margin: 0;
            font-size: 16px;
          }
            .swiper-button-next, .swiper-button-prev {
            color: black; 
            }

            .swiper-button-next:hover, .swiper-button-prev:hover {
            color: red;
            }

            .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 30px; /* Tăng kích thước biểu tượng mũi tên */
            }
        `}
      </style>
    </>
  );
};

export default Slidebar;
