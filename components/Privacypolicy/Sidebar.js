

const Sidebar = () => {
    return (
        <div className="sidebar-widget">
                            <h3 className="sidebar-widget-title">Recent Courses</h3>
                            
                            <div className="sidebar-widget-content">
                              <ul className="sidebar-widget-course">
                                <li className="widget-course">
                                  <div className="thumbnail">
                                    <a href="course-details-sticky-feature-bar.html" className="image"><img src="assets/images/courses/170/course-1.jpg" alt="Course Image" /></a>
                                  </div>
                                  <div className="info">
                                    <span className="price">$40<span>.00</span></span>
                                    <h6 className="title"><a href="course-details-sticky-feature-bar.html">Learning to Write as a Professional Author</a></h6>
                                  </div>
                                </li>
                                <li className="widget-course">
                                  <div className="thumbnail">
                                    <a href="course-details-sticky-feature-bar.html" className="image"><img src="assets/images/courses/170/course-2.jpg" alt="Course Image" /></a>
                                  </div>
                                  <div className="info">
                                    <span className="price">Free</span>
                                    <h6 className="title"><a href="course-details-sticky-feature-bar.html">Customer-centric Info-Tech Strategies</a></h6>
                                  </div>
                                </li>
                                <li className="widget-course">
                                  <div className="thumbnail">
                                    <a href="course-details-sticky-feature-bar.html" className="image"><img src="assets/images/courses/170/course-3.jpg" alt="Course Image" /></a>
                                  </div>
                                  <div className="info">
                                    <span className="price">$19<span>.00</span></span>
                                    <h6 className="title"><a href="course-details-sticky-feature-bar.html">Open Programming Courses for Everyone: Python</a></h6>
                                  </div>
                                </li>
                                <li className="widget-course">
                                  <div className="thumbnail">
                                    <a href="course-details-sticky-feature-bar.html" className="image"><img src="assets/images/courses/170/course-4.jpg" alt="Course Image" /></a>
                                  </div>
                                  <div className="info">
                                    <span className="price">$26<span>.00</span></span>
                                    <h6 className="title"><a href="course-details-sticky-feature-bar.html">Academic Listening and Note-taking</a></h6>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
    )
}

export default Sidebar
