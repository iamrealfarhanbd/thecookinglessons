import { useEffect } from "react";

const Event = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="section section-padding section-fluid-two">
      <div className="container">
        {/* Section Title Start */}
        <div className="section-title-four text-center" data-aos="fade-up">
          <span className="sub-title">Upcoming events</span>
          <h2 className="title fz-48">Stimulated to take part in? </h2>
        </div>
        {/* Section Title End */}
        {/* Event Wrapper Start */}
        <div
          className="event-slider-four-item swiper-container"
          data-aos="fade-up"
        >
          <div className="swiper-wrapper">
            {/* Event Start */}
            <div className="swiper-slide">
              <div className="event primary-three mb-30">
                <div className="thumbnail">
                  <a href="event-details.html" className="image">
                    <img
                      src="assets/images/event/370/Rectangle 11.png"
                      alt="Event Image"
                    />
                  </a>
                  <div className="event-overlay-background" />
                  <div className="event-overlay-content">
                    <a
                      className="btn btn-md btn-light btn-hover-light theme-color"
                      href="event-details.html"
                    >
                      Get ticket
                    </a>
                  </div>
                </div>
                <div className="info">
                  <span className="date">Nov 22, 2020</span>
                  <h3 className="title">
                    <a href="event-details.html">Storytelling Workshop</a>
                  </h3>
                  <ul className="event-location">
                    <li>
                      <i className="far fa-map-marker-alt" />
                      Texas, US
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Event End */}
            {/* Event Start */}
            <div className="swiper-slide">
              <div className="event primary-three mb-30">
                <div className="thumbnail">
                  <a href="event-details.html" className="image">
                    <img
                      src="assets/images/event/370/Rectangle 12.png"
                      alt="Event Image"
                    />
                  </a>
                  <div className="event-overlay-background" />
                  <div className="event-overlay-content">
                    <a
                      className="btn btn-md btn-light btn-hover-light theme-color"
                      href="event-details.html"
                    >
                      Get ticket
                    </a>
                  </div>
                </div>
                <div className="info">
                  <span className="date">Oct 10, 2020</span>
                  <h3 className="title">
                    <a href="event-details.html">Painting Art Contest 2020</a>
                  </h3>
                  <ul className="event-location">
                    <li>
                      <i className="far fa-map-marker-alt" />
                      New York, US
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Event End */}
            {/* Event Start */}
            <div className="swiper-slide">
              <div className="event primary-three mb-30">
                <div className="thumbnail">
                  <a href="event-details.html" className="image">
                    <img
                      src="assets/images/event/370/Rectangle 13.png"
                      alt="Event Image"
                    />
                  </a>
                  <div className="event-overlay-background" />
                  <div className="event-overlay-content">
                    <a
                      className="btn btn-md btn-light btn-hover-light theme-color"
                      href="event-details.html"
                    >
                      Get ticket
                    </a>
                  </div>
                </div>
                <div className="info">
                  <span className="date">Nov 23, 2020</span>
                  <h3 className="title">
                    <a href="event-details.html">International Art Fair 2020</a>
                  </h3>
                  <ul className="event-location">
                    <li>
                      <i className="far fa-map-marker-alt" />
                      Hamburg, Germany
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Event End */}
            {/* Event Start */}
            <div className="swiper-slide">
              <div className="event primary-three mb-30">
                <div className="thumbnail">
                  <a href="event-details.html" className="image">
                    <img
                      src="assets/images/event/370/Rectangle 14.png"
                      alt="Event Image"
                    />
                  </a>
                  <div className="event-overlay-background" />
                  <div className="event-overlay-content">
                    <a
                      className="btn btn-md btn-light btn-hover-light theme-color"
                      href="#"
                    >
                      Get ticket
                    </a>
                  </div>
                </div>
                <div className="info">
                  <span className="date">Dec 15, 2020</span>
                  <h3 className="title">
                    <a href="event-details.html">
                      Street Performance: Call for Artist
                    </a>
                  </h3>
                  <ul className="event-location">
                    <li>
                      <i className="far fa-map-marker-alt" />
                      Illinois, US
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Event End */}
            {/* Event Start */}
            <div className="swiper-slide">
              <div className="event primary-three mb-30">
                <div className="thumbnail">
                  <a href="event-details.html" className="image">
                    <img
                      src="assets/images/event/370/event5.jpg"
                      alt="Event Image"
                    />
                  </a>
                  <div className="event-overlay-background" />
                  <div className="event-overlay-content">
                    <a
                      className="btn btn-md btn-light btn-hover-light theme-color"
                      href="#"
                    >
                      Get ticket
                    </a>
                  </div>
                </div>
                <div className="info">
                  <span className="date">Jul 22, 2020</span>
                  <h3 className="title">
                    <a href="event-details.html">
                      Consumer Food Safety Education Conference
                    </a>
                  </h3>
                  <ul className="event-location">
                    <li>
                      <i className="far fa-map-marker-alt" />
                      Illinois, US
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Event End */}
          </div>
          <div className="swiper-pagination" />
        </div>
        {/* Event Wrapper End */}
        <div className="row max-mt-40">
          <div className="text-center col-lg-7 mx-auto">
            <a className="link link-lg primary-three" href="event.html">
              We love to see you at our events.​​{" "}
              <mark>
                Check out events <i className="far fa-long-arrow-right" />
              </mark>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
