const Footer = () => {
  return (
    <div className="footer-section section" data-bg-color="#171621">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-5 col-12 max-mb-50">
            <div className="footer-widget light-color">
              <h4 className="footer-widget-title">Address</h4>
              <div className="footer-widget-content">
                <div className="content">
                  <p>382 NE 191st St # 87394 Miami, FL 33179-3899</p>
                  <p>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday) </p>
                  <p>
                    <a href="#">info@example.com </a>
                  </p>
                </div>
                <div className="footer-social-inline">
                  <a href="#">
                    <i className="fab fa-facebook-square" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-7 col-12 max-mb-50">
            <div className="footer-widget light-color">
              <h4 className="footer-widget-title">Explore</h4>
              <div className="footer-widget-content">
                <ul className="column-2">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Success Stories</a>
                  </li>
                  <li>
                    <a href="#">All Courses</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-3 col-sm-5 col-12 max-mb-50">
            <div className="footer-widget light-color">
              <h4 className="footer-widget-title">Information</h4>
              <div className="footer-widget-content">
                <ul>
                  <li>
                    <a href="#">Terms of use</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Our Partners </a>
                  </li>
                  <li>
                    <a href="#">Redeem Voucher</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row max-mt-20">
          <div className="col">
            <p className="copyright">
              © 2020 Maxcoach.{" "}
              <a href="https://hasthemes.com/">All Rights Reserved</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
