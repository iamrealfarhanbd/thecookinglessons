const Header = () => {
  return (
    <div className="header-section header-fluid sticky-header section">
      <div className="header-inner">
        <div className="container position-relative">
          <div className="row justify-content-between align-items-center">
            {/* Header Logo Start */}
            <div className="col-xl-3 col-auto">
              <div className="header-logo">
                <a href="index.html">
                  <img
                    className="dark-logo"
                    src="assets/images/logo/dark-logo.png"
                    alt="Learts Logo"
                  />
                  <img
                    className="light-logo"
                    src="assets/images/logo/light-logo.png"
                    alt="Learts Logo"
                  />
                </a>
              </div>
            </div>
            {/* Header Logo End */}
            {/* Header Main Menu Start */}
            <div className="col d-none d-xl-block position-static">
              <nav className="site-main-menu">
                <ul>
                  <li className="position-static">
                    <a href="#">
                      <span className="menu-text">Home</span>
                    </a>
                    <span className="menu-toggle">
                      <i className="far fa-angle-down" />
                    </span>
                  </li>
                  <li className="position-static">
                    <a href="#">
                      <span className="menu-text">All Courses</span>
                    </a>
                    <span className="menu-toggle">
                      <i className="far fa-angle-down" />
                    </span>
                  </li>
                  <li className="position-static">
                    <a href="#">
                      <span className="menu-text">Special Deal</span>
                    </a>
                    <span className="menu-toggle">
                      <i className="far fa-angle-down" />
                    </span>
                  </li>
                  <li className="position-static">
                    <a href="#">
                      <span className="menu-text">Blog</span>
                    </a>
                    <span className="menu-toggle">
                      <i className="far fa-angle-down" />
                    </span>
                  </li>
                  <li className="position-static">
                    <a href="#">
                      <span className="menu-text">Free Resources</span>
                    </a>
                    <span className="menu-toggle">
                      <i className="far fa-angle-down" />
                    </span>
                  </li>
                  <li className="position-static">
                    <a href="#">
                      <span className="menu-text">Login</span>
                    </a>
                    <span className="menu-toggle">
                      <i className="far fa-angle-down" />
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Header Main Menu End */}
            {/* Header Right Start */}
            <div className="col-xl-3 col-auto">
              <div className="header-right">
                <div className="inner">
                  {/* Header Cart Start */}
                  <div className="header-cart">
                    <a className="header-cart-btn" href="shopping-cart.html">
                      <span className="cart-count">2</span>
                      <i className="far fa-shopping-cart" />
                    </a>
                    {/* Header Mini Cart Start */}
                    <div className="header-mini-cart">
                      <div className="inner">
                        {/* Header Mini Cart Product Start */}
                        <div className="mini-cart-products">
                          <div className="mini-cart-product">
                            <a href="#" className="thumb">
                              <img
                                src="assets/images/products/mini-cart/product-1.jpg"
                                alt=""
                              />
                            </a>
                            <div className="content">
                              <a href="#" className="title">
                                Online Student: Strategies for Effective
                                Learning
                              </a>
                              <span className="quantity">
                                1 x <span className="price">$67.00</span>
                              </span>
                            </div>
                            <a href="#" className="remove">
                              <i className="far fa-times" />
                            </a>
                          </div>
                          <div className="mini-cart-product">
                            <a href="#" className="thumb">
                              <img
                                src="assets/images/products/mini-cart/product-2.jpg"
                                alt=""
                              />
                            </a>
                            <div className="content">
                              <a href="#" className="title">
                                Principles of Business Administration
                              </a>
                              <span className="quantity">
                                1 x <span className="price">$52.00</span>
                              </span>
                            </div>
                            <a href="#" className="remove">
                              <i className="far fa-times" />
                            </a>
                          </div>
                        </div>
                        {/* Header Mini Cart Product End */}
                        {/* Header Mini Cart Footer Start */}
                        <div className="mini-cart-footer">
                          <div className="mini-cart-total">
                            <b>Total:</b>
                            <span className="amount">$119.00</span>
                          </div>
                          <div className="mini-cart-buttons">
                            <a
                              href="shopping-cart.html"
                              className="btn btn-primary btn-hover-secondary"
                            >
                              View Cart
                            </a>
                            <a
                              href="checkout.html"
                              className="btn btn-primary btn-hover-secondary"
                            >
                              Checkout
                            </a>
                          </div>
                        </div>
                        {/* Header Mini Cart Footer End */}
                      </div>
                    </div>
                    {/* Header Mini Cart End */}
                  </div>
                  {/* Header Cart End */}
                  {/* Header Login Start */}
                  <div className="header-login">
                    <a href="profile.html">
                      <i className="far fa-user-circle" />
                    </a>
                  </div>
                  {/* Header Login End */}
                  {/* Header Search Start */}
                  <div className="header-search">
                    <button className="header-search-toggle">
                      <i className="far fa-search" />
                    </button>
                    <div className="header-search-form">
                      <form action="#">
                        <input type="text" placeholder="Search..." />
                        <button>
                          <i className="fas fa-search" />
                        </button>
                      </form>
                    </div>
                  </div>
                  {/* Header Search End */}
                  {/* Header Mobile Menu Toggle Start */}
                  <div className="header-mobile-menu-toggle d-xl-none ml-sm-2">
                    <button className="toggle">
                      <i className="icon-top" />
                      <i className="icon-middle" />
                      <i className="icon-bottom" />
                    </button>
                  </div>
                  {/* Header Mobile Menu Toggle End */}
                </div>
              </div>
            </div>
            {/* Header Right End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
