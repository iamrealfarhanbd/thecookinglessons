import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "Slideswiper/swiper.scss";

const Swiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div classname="intro11-section swiper-slide section-fluid-two">
          <div classname="container">
            <div classname="row align-items-center">
              {"{"}/* Intro Content Start */{"}"}
              <div classname="col-lg-6 col-md-6">
                <div classname="intro11-content text-left">
                  <span classname="sub-title">Family Nutritionnn</span>
                  <h2 classname="title">Good food changes the mood</h2>
                  <a
                    href="JavaScript:Void(0);"
                    classname="btn btn-primary-three btn-hover-secondary-three"
                  >
                    {"{"}" "{"}"}
                    Get started today{"{"}" "{"}"}
                  </a>
                </div>
              </div>
              {"{"}/* Intro Content End */{"}"}
              {"{"}/* Intro Image Start */{"}"}
              <div classname="col-lg-6 col-md-6">
                <div classname="intro-image">
                  <img
                    src="assets/images/intro/intro11/kitchen-hero-slider-slide-01-image.jpg"
                    alt="intro"
                  />
                </div>
              </div>
              {"{"}/* Intro Image End */{"}"}
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="intro11-section swiper-slide section-fluid-two">
          <div className="container">
            <div className="row align-items-center">
              {/* Intro Content Start */}
              <div className="col-lg-6 col-md-6">
                <div className="intro11-content text-left">
                  <span className="sub-title">Life Mastery</span>
                  <h2 className="title">
                    Be Happy, Healthy And Successful Simplified{" "}
                  </h2>
                  <a
                    href="JavaScript:Void(0);"
                    className="btn btn-primary-three btn-hover-secondary-three"
                  >
                    {" "}
                    Let’s Cook Food{" "}
                  </a>
                </div>
              </div>
              {/* Intro Content End */}
              {/* Intro Image Start */}
              <div className="col-lg-6 col-md-6">
                <div className="intro-image">
                  <img
                    src="assets/images/intro/intro11/kitchen-hero-slider-slide-02-image.jpg"
                    alt="intro"
                  />
                </div>
              </div>
              {/* Intro Image End */}
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="intro11-section swiper-slide section-fluid-two">
          <div className="container">
            <div className="row align-items-center">
              {/* Intro Content Start */}
              <div className="col-lg-6 col-md-6">
                <div className="intro11-content text-left">
                  <span className="sub-title">Cook with me!</span>
                  <h2 className="title">
                    The truth about dieting for weight loss, healthy eating
                  </h2>
                  <a
                    href="JavaScript:Void(0);"
                    className="btn btn-primary-three btn-hover-secondary-three"
                  >
                    {" "}
                    Discover now{" "}
                  </a>
                </div>
              </div>
              {/* Intro Content End */}
              {/* Intro Image Start */}
              <div className="col-lg-6 col-md-6">
                <div className="intro-image">
                  <img
                    src="assets/images/intro/intro11/kitchen-hero-slider-slide-03-image.jpg"
                    alt="intro"
                  />
                </div>
              </div>
              {/* Intro Image End */}
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slideswiper;
