import {useEffect} from 'react';

const Brand = () => {
    useEffect(()=>{
        AOS.init();
    })
    return (
          
                <div className="brand-section section section-padding-bottom brand-shape-animation">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="brand-wrapper">
                          <div className="brand-list">
                            <div className="brand-carousel swiper-container" data-aos="fade-up">
                              <div className="swiper-wrapper">
                                <div className="swiper-slide brand">
                                  <a href="#">
                                    <img src="assets/images/brand/kitchen-client-logo-01.png" alt="logo image" />
                                  </a>
                                </div>
                                <div className="swiper-slide brand">
                                  <a href="#">
                                    <img src="assets/images/brand/kitchen-client-logo-02.png" alt="logo image" />
                                  </a>
                                </div>
                                <div className="swiper-slide brand">
                                  <a href="#">
                                    <img src="assets/images/brand/kitchen-client-logo-03.png" alt="logo image" />
                                  </a>
                                </div>
                                <div className="swiper-slide brand">
                                  <a href="#">
                                    <img src="assets/images/brand/kitchen-client-logo-04.png" alt="logo image" />
                                  </a>
                                </div>
                                <div className="swiper-slide brand">
                                  <a href="#">
                                    <img src="assets/images/brand/kitchen-client-logo-05.png" alt="logo image" />
                                  </a>
                                </div>
                                <div className="swiper-slide brand">
                                  <a href="#">
                                    <img src="assets/images/brand/kitchen-client-logo-06.png" alt="logo image" />
                                  </a>
                                </div>
                                <div className="swiper-slide brand">
                                  <a href="#">
                                    <img src="assets/images/brand/kitchen-client-logo-07.png" alt="logo image" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="brand-title">
                          <h3 className="title">"Gain certified cooking excellence here by top culinary institutes."</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Animation Shape Start */}
                  <div className="shape shape-1 scene">
                    <span data-depth={3}>
                      <img src="assets/images/shape-animation/kitchen-shape-radish.png" alt="" />
                    </span>
                  </div>
                  {/* Animation Shape End */}
                </div>

    )
}

export default Brand
