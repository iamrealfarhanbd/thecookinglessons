import { useEffect } from "react";
const Testimonial = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="testimonial-section section section-fluid-two section-padding-top">
      <div className="container">
        {/* Section Title Start */}
        <div className="section-title-four text-center" data-aos="fade-up">
          <span className="sub-title">Testimonials</span>
          <h2 className="title fz-48">Why do people love me? </h2>
        </div>
        {/* Section Title End */}
        <div className="testimonial-slider-three-item swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-two testimonial-three testimonial-kitchen">
                <div className="testimonial-quote-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="50px"
                    height="40px"
                    viewBox="0 0 50 40"
                  >
                    <path d="M21.8750977,2.18046875 C22.4503906,2.18046875 22.9167969,1.7140625 22.9167969,1.13876953 C22.9167969,0.563476562 22.4503906,0.0970703125 21.8750977,0.0970703125 C9.79960938,0.110839844 0.0138671875,9.89658203 2.76635467e-06,21.9720703 L2.76635467e-06,28.2220703 C-0.01796875,34.56875 5.11230469,39.728418 11.4588867,39.7465793 C17.8055664,39.7645508 22.9652344,34.6342773 22.9833957,28.2876953 C23.0013672,21.9410156 17.8710938,16.7813477 11.5245117,16.7632813 C7.77705078,16.7526367 4.25966797,18.5698242 2.10009766,21.6325195 C2.29296875,10.8446289 11.0853516,2.19580078 21.8750977,2.18046875 Z" />
                    <path d="M38.5416992,16.7638672 C34.8157227,16.7667969 31.3244141,18.5832031 29.1833984,21.6326172 C29.3763672,10.8446289 38.16875,2.19580078 48.9583984,2.18056641 C49.5336914,2.18056641 50.0000977,1.71416016 50.0000977,1.13886719 C50.0000977,0.563574219 49.5336914,0.0971679688 48.9583984,0.0971679688 C36.8829102,0.1109375 27.097168,9.89667969 27.0833984,21.972168 L27.0833984,28.222168 C27.0833984,34.5503906 32.2134766,39.6804687 38.5416992,39.6804687 C44.8699219,39.6804687 50.0000977,34.5503906 50.0000977,28.222168 C50.0000977,21.8939453 44.8700195,16.7638672 38.5416992,16.7638672 Z" />
                  </svg>
                </div>
                <div className="content">
                  <h4 className="title">Great quality!</h4>
                  <p>
                    I'm CEO of Mina Kitchen Coach, I made my website by MaxCoach
                    and I love that. The support team is helpful &amp; nice.
                  </p>
                </div>
                <div className="author-info">
                  <div className="image">
                    <img
                      src="assets/images/testimonial/70/Ellipse 1.png"
                      alt=""
                    />
                  </div>
                  <div className="cite">
                    <h6 className="name">Mina Hollace</h6>
                    <span className="position">/ CEO</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-two testimonial-three testimonial-kitchen">
                <div className="testimonial-quote-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="50px"
                    height="40px"
                    viewBox="0 0 50 40"
                  >
                    <path d="M21.8750977,2.18046875 C22.4503906,2.18046875 22.9167969,1.7140625 22.9167969,1.13876953 C22.9167969,0.563476562 22.4503906,0.0970703125 21.8750977,0.0970703125 C9.79960938,0.110839844 0.0138671875,9.89658203 2.76635467e-06,21.9720703 L2.76635467e-06,28.2220703 C-0.01796875,34.56875 5.11230469,39.728418 11.4588867,39.7465793 C17.8055664,39.7645508 22.9652344,34.6342773 22.9833957,28.2876953 C23.0013672,21.9410156 17.8710938,16.7813477 11.5245117,16.7632813 C7.77705078,16.7526367 4.25966797,18.5698242 2.10009766,21.6325195 C2.29296875,10.8446289 11.0853516,2.19580078 21.8750977,2.18046875 Z" />
                    <path d="M38.5416992,16.7638672 C34.8157227,16.7667969 31.3244141,18.5832031 29.1833984,21.6326172 C29.3763672,10.8446289 38.16875,2.19580078 48.9583984,2.18056641 C49.5336914,2.18056641 50.0000977,1.71416016 50.0000977,1.13886719 C50.0000977,0.563574219 49.5336914,0.0971679688 48.9583984,0.0971679688 C36.8829102,0.1109375 27.097168,9.89667969 27.0833984,21.972168 L27.0833984,28.222168 C27.0833984,34.5503906 32.2134766,39.6804687 38.5416992,39.6804687 C44.8699219,39.6804687 50.0000977,34.5503906 50.0000977,28.222168 C50.0000977,21.8939453 44.8700195,16.7638672 38.5416992,16.7638672 Z" />
                  </svg>
                </div>
                <div className="content">
                  <h4 className="title">Code Quality</h4>
                  <p>
                    Thanks for always keeping MaxCoach theme up to date. Your
                    level of support and dedication is second to none.
                  </p>
                </div>
                <div className="author-info">
                  <div className="image">
                    <img
                      src="assets/images/testimonial/70/Ellipse 2.png"
                      alt=""
                    />
                  </div>
                  <div className="cite">
                    <h6 className="name">Madley Pondor</h6>
                    <span className="position">/ IT Specialist</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-two testimonial-three testimonial-kitchen">
                <div className="testimonial-quote-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="50px"
                    height="40px"
                    viewBox="0 0 50 40"
                  >
                    <path d="M21.8750977,2.18046875 C22.4503906,2.18046875 22.9167969,1.7140625 22.9167969,1.13876953 C22.9167969,0.563476562 22.4503906,0.0970703125 21.8750977,0.0970703125 C9.79960938,0.110839844 0.0138671875,9.89658203 2.76635467e-06,21.9720703 L2.76635467e-06,28.2220703 C-0.01796875,34.56875 5.11230469,39.728418 11.4588867,39.7465793 C17.8055664,39.7645508 22.9652344,34.6342773 22.9833957,28.2876953 C23.0013672,21.9410156 17.8710938,16.7813477 11.5245117,16.7632813 C7.77705078,16.7526367 4.25966797,18.5698242 2.10009766,21.6325195 C2.29296875,10.8446289 11.0853516,2.19580078 21.8750977,2.18046875 Z" />
                    <path d="M38.5416992,16.7638672 C34.8157227,16.7667969 31.3244141,18.5832031 29.1833984,21.6326172 C29.3763672,10.8446289 38.16875,2.19580078 48.9583984,2.18056641 C49.5336914,2.18056641 50.0000977,1.71416016 50.0000977,1.13886719 C50.0000977,0.563574219 49.5336914,0.0971679688 48.9583984,0.0971679688 C36.8829102,0.1109375 27.097168,9.89667969 27.0833984,21.972168 L27.0833984,28.222168 C27.0833984,34.5503906 32.2134766,39.6804687 38.5416992,39.6804687 C44.8699219,39.6804687 50.0000977,34.5503906 50.0000977,28.222168 C50.0000977,21.8939453 44.8700195,16.7638672 38.5416992,16.7638672 Z" />
                  </svg>
                </div>
                <div className="content">
                  <h4 className="title">Customer Support</h4>
                  <p>
                    Deserves 5 star for theme’s features, design quality,
                    flexibility, customizability and support service!
                  </p>
                </div>
                <div className="author-info">
                  <div className="image">
                    <img
                      src="assets/images/testimonial/70/Ellipse 3.png"
                      alt=""
                    />
                  </div>
                  <div className="cite">
                    <h6 className="name">Luvic Dubble</h6>
                    <span className="position">/ Private Tutor</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-two testimonial-three testimonial-kitchen">
                <div className="testimonial-quote-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="50px"
                    height="40px"
                    viewBox="0 0 50 40"
                  >
                    <path d="M21.8750977,2.18046875 C22.4503906,2.18046875 22.9167969,1.7140625 22.9167969,1.13876953 C22.9167969,0.563476562 22.4503906,0.0970703125 21.8750977,0.0970703125 C9.79960938,0.110839844 0.0138671875,9.89658203 2.76635467e-06,21.9720703 L2.76635467e-06,28.2220703 C-0.01796875,34.56875 5.11230469,39.728418 11.4588867,39.7465793 C17.8055664,39.7645508 22.9652344,34.6342773 22.9833957,28.2876953 C23.0013672,21.9410156 17.8710938,16.7813477 11.5245117,16.7632813 C7.77705078,16.7526367 4.25966797,18.5698242 2.10009766,21.6325195 C2.29296875,10.8446289 11.0853516,2.19580078 21.8750977,2.18046875 Z" />
                    <path d="M38.5416992,16.7638672 C34.8157227,16.7667969 31.3244141,18.5832031 29.1833984,21.6326172 C29.3763672,10.8446289 38.16875,2.19580078 48.9583984,2.18056641 C49.5336914,2.18056641 50.0000977,1.71416016 50.0000977,1.13886719 C50.0000977,0.563574219 49.5336914,0.0971679688 48.9583984,0.0971679688 C36.8829102,0.1109375 27.097168,9.89667969 27.0833984,21.972168 L27.0833984,28.222168 C27.0833984,34.5503906 32.2134766,39.6804687 38.5416992,39.6804687 C44.8699219,39.6804687 50.0000977,34.5503906 50.0000977,28.222168 C50.0000977,21.8939453 44.8700195,16.7638672 38.5416992,16.7638672 Z" />
                  </svg>
                </div>
                <div className="content">
                  <h4 className="title">Good Design!</h4>
                  <p>
                    I love what they do with their themes. Update &amp; upgrade
                    frequently. Then, I and other customers can earn the best
                    from it.
                  </p>
                </div>
                <div className="author-info">
                  <div className="image">
                    <img
                      src="assets/images/testimonial/70/testimonial-4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="cite">
                    <h6 className="name">Florence Themes</h6>
                    <span className="position">/ Multimedia Admin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="circle-slider-prev swiper-button-prev ht-swiper-button-nav">
            <i className="fal fa-angle-left" />
          </div>
          <div className="circle-slider-next swiper-button-next ht-swiper-button-nav">
            <i className="fal fa-angle-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
