import Sidebar from "./Sidebar"
import Sidebarmenu from "./Sidebarmenu"


const Maincontent = () => {
    return (
          
                <div className="section section-padding-bottom">
                  <div className="container">
                    <div className="row max-mb-n50">
                      <div className="col-lg-8 col-12 order-lg-2 max-mb-50">
                        {/* Terms of Service Wrapper Start */}
                        <div className="terms-of-service-wrapper">
                          <div className="image">
                            <img src="assets/images/purchase-guide/terms-of-service.jpg" alt="purchase guide" />
                          </div>
                          <div className="content">
                            <h3 className="title">Our website</h3>
                            <p>Our website address is: https://hasthemes.com</p>
                            <h3 className="title">Definitions of basic terms, rights and restriction:</h3>
                            <h4>Basic terms</h4>
                            <p>These Terms of Service for MaxCoach Online Course Educational Center constitute a binding contract between you (“Member” or “Customer” or “You”) and ThemeMove company, a corporation registered in California, USA (“Company”), regarding the terms under which the Company will provide You with access to online courses (or parts thereof) purchased by You.</p>
                            <h4>Rights &amp; restrictions</h4>
                            <ol>
                              <li>Members must be at least 18 years of age.</li>
                              <li>Members are granted a time-limited, non-exclusive, revocable, nontransferable, and non-sublicenseable right to access that portion of the online course corresponding to the purchase.</li>
                              <li>The portion of the online course corresponding to the purchase will be available to the Member as long as the course is maintained by the Company, which will be a minimum of one year after Member’ purchase.</li>
                              <li>The videos in the course are provided as a video stream and are not downloadable.</li>
                              <li>By agreeing to grant such access, the Company does not obligate itself to maintain the course, or to maintain it in its present form.</li>
                            </ol>
                          </div>
                        </div>
                        {/* Terms of Service Wrapper End */}
                      </div>
                      <div className="col-lg-4 col-12 order-lg-1 max-mb-50">
                        <div className="sidebar-widget-wrapper">
                          <Sidebarmenu />
                          <Sidebar />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

    )
}

export default Maincontent
