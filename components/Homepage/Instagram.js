import { useEffect } from "react";
const Instagram = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="instagram-section section section-padding">
      <div className="container-fluid">
        {/* Instagram Section Title Start */}
        <div className="instagram-section-title-two text-center">
          <h2 className="title">Follow me on instagram</h2>
          <span className="sub-title">
            <a href="JavaScript:Void(0);">@nytcooking</a>
          </span>
        </div>
        {/* Instagram Section Title End */}
        <div className="row">
          <div className="col-12">
            <div className="mc-intagram-list instagram-grid">
              <div className="instagram-grid-wrap instagram-grid-5">
                {/* Start Single Instagram */}
                <div className="item-grid grid-style--1">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src="assets/images/instagram/Rectangle 11.jpg"
                        alt="instagram images"
                      />
                    </a>
                    <div className="item-info">
                      <div className="inner">
                        <a href="#">
                          <i className="fas fa-heart" />
                          1k
                        </a>
                        <a href="#">
                          <i className="fas fa-comment-dots" />9
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Start Single Instagram */}
                {/* Start Single Instagram */}
                <div className="item-grid grid-style--1">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src="assets/images/instagram/Rectangle 12.jpg"
                        alt="instagram images"
                      />
                    </a>
                    <div className="item-info">
                      <div className="inner">
                        <a href="#">
                          <i className="fas fa-heart" />
                          4k
                        </a>
                        <a href="#">
                          <i className="fas fa-comment-dots" />9
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Start Single Instagram */}
                {/* Start Single Instagram */}
                <div className="item-grid grid-style--1">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src="assets/images/instagram/Rectangle 13.jpg"
                        alt="instagram images"
                      />
                    </a>
                    <div className="item-info">
                      <div className="inner">
                        <a href="#">
                          <i className="fas fa-heart" />
                          1k
                        </a>
                        <a href="#">
                          <i className="fas fa-comment-dots" />9
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Start Single Instagram */}
                {/* Start Single Instagram */}
                <div className="item-grid grid-style--1">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src="assets/images/instagram/Rectangle 14.jpg"
                        alt="instagram images"
                      />
                    </a>
                    <div className="item-info">
                      <div className="inner">
                        <a href="#">
                          <i className="fas fa-heart" />
                          1k
                        </a>
                        <a href="#">
                          <i className="fas fa-comment-dots" />9
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Start Single Instagram */}
                {/* Start Single Instagram */}
                <div className="item-grid grid-style--1">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src="assets/images/instagram/Rectangle 15.jpg"
                        alt="instagram images"
                      />
                    </a>
                    <div className="item-info">
                      <div className="inner">
                        <a href="#">
                          <i className="fas fa-heart" />
                          1k
                        </a>
                        <a href="#">
                          <i className="fas fa-comment-dots" />9
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Start Single Instagram */}
                {/* Start Single Instagram */}
                <div className="item-grid grid-style--1">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src="assets/images/instagram/Rectangle 16.jpg"
                        alt="instagram images"
                      />
                    </a>
                    <div className="item-info">
                      <div className="inner">
                        <a href="#">
                          <i className="fas fa-heart" />
                          1k
                        </a>
                        <a href="#">
                          <i className="fas fa-comment-dots" />9
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Start Single Instagram */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
