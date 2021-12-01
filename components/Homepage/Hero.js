import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="intro11-slider-wrap section">
      <div className="intro11-slider swiper-container">
        <div className="swiper-wrapper">
          <div className="intro11-section swiper-slide section-fluid-two">
            <div className="container">
              <div className="row align-items-center">
                {/* Intro Content Start */}
                <div className="col-lg-6 col-md-6">
                  <div className="intro11-content text-left">
                    <span className="sub-title">Family Nutritionnn</span>
                    <h2 className="title">Good food changes the mood</h2>
                    <a
                      href="JavaScript:Void(0);"
                      className="btn btn-primary-three btn-hover-secondary-three"
                    >
                      {" "}
                      Get started today{" "}
                    </a>
                  </div>
                </div>
                {/* Intro Content End */}
                {/* Intro Image Start */}
                <div className="col-lg-6 col-md-6">
                  <div className="intro-image">
                    <img
                      src="assets/images/intro/intro11/kitchen-hero-slider-slide-01-image.jpg"
                      alt="intro"
                    />
                  </div>
                </div>
                {/* Intro Image End */}
              </div>
            </div>
          </div>
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
        </div>
        <div className="home11-slider-prev swiper-button-prev main-slider-nav">
          <i className="fal fa-angle-left" />
        </div>
        <div className="home11-slider-next swiper-button-next main-slider-nav">
          <i className="fal fa-angle-right" />
        </div>
      </div>
      {/* Animation Shape Start */}
      <div className="shape shape-1 scene">
        <span data-depth={3}>
          <img src="assets/images/intro/intro11/maxcoach-shape-15.png" alt="" />
        </span>
      </div>
      <div className="shape shape-2 scene">
        <span data-depth={3}>
          <img
            src="assets/images/intro/intro11/kitchen-shape-strawberry.png"
            alt=""
          />
        </span>
      </div>
      <div className="shape shape-3 scene">
        <span data-depth={3}>
          <img
            src="assets/images/shape-animation/maxcoach-shape-16.png"
            alt=""
          />
        </span>
      </div>
      {/* Animation Shape End */}
    </div>
  );
};

export default Hero;
