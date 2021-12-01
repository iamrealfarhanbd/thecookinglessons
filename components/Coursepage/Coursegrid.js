import {useEffect} from 'react';
const Coursegrid = () => {
  useEffect(()=>{
    AOS.init();
})
    return (
          

      
            <div className="section section-padding-bottom">
              <div className="container">
                <div className="row justify-content-between align-items-center max-mb-20">
                  <div className="col-sm-auto col-12 max-mb-10">
                    <p className="result-count">We found <span>22</span> courses available for you</p>
                  </div>
                  <div className="col-sm-auto col-12 max-mb-10">
                    <select className="sort-by">
                      <option selected="selected">Default</option>
                      <option value="popularity">Popularity</option>
                      <option value="date">Latest</option>
                      <option value="price">Price: low to high</option>
                      <option value="price-desc">Price: high to low</option>
                    </select>
                  </div>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 max-mb-n30">
                  <div className="col max-mb-30" data-aos="fade-up">
                    <div className="course">
                      <div className="thumbnail">
                        <a href="course-details-standard-sidebar.html" className="image"><img src="assets/images/courses/370/course-1.jpg" alt="Course Image" /></a>
                      </div>
                      <div className="info">
                        <span className="price">$40<span>.00</span></span>
                        <h3 className="title"><a href="course-details-standard-sidebar.html">Learning to Write as a Professional Author</a></h3>
                        <ul className="meta">
                          <li><i className="far fa-file-alt" />20 Lessons</li>
                          <li><i className="far fa-user-alt" />51 Students</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col max-mb-30" data-aos="fade-up">
                    <div className="course">
                      <div className="thumbnail">
                        <span className="badge">Free</span>
                        <a href="course-details-standard-sidebar.html" className="image"><img src="assets/images/courses/370/course-2.jpg" alt="Course Image" /></a>
                      </div>
                      <div className="info">
                        <span className="price">$0<span>.00</span></span>
                        <h3 className="title"><a href="course-details-standard-sidebar.html">Customer-centric Info-Tech Strategies</a></h3>
                        <ul className="meta">
                          <li><i className="far fa-file-alt" />23 Lessons</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col max-mb-30" data-aos="fade-up">
                    <div className="course">
                      <div className="thumbnail">
                        <a href="course-details-standard-sidebar.html" className="image"><img src="assets/images/courses/370/course-3.jpg" alt="Course Image" /></a>
                      </div>
                      <div className="info">
                        <span className="price">$19<span>.00</span></span>
                        <h3 className="title"><a href="course-details-standard-sidebar.html">Open Programming Courses for Everyone: Python</a></h3>
                        <ul className="meta">
                          <li><i className="far fa-file-alt" />16 Lessons</li>
                          <li><i className="far fa-user-alt" />57 Students</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col max-mb-30" data-aos="fade-up">
                    <div className="course">
                      <div className="thumbnail">
                        <a href="course-details-standard-sidebar.html" className="image"><img src="assets/images/courses/370/course-4.jpg" alt="Course Image" /></a>
                      </div>
                      <div className="info">
                        <span className="price">$26<span>.00</span></span>
                        <h3 className="title"><a href="course-details-standard-sidebar.html">Academic Listening and Note-taking</a></h3>
                        <ul className="meta">
                          <li><i className="far fa-file-alt" />14 Lessons</li>
                          <li><i className="far fa-user-alt" />67 Students</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col max-mb-30" data-aos="fade-up">
                    <div className="course">
                      <div className="thumbnail">
                        <a href="course-details-standard-sidebar.html" className="image"><img src="assets/images/courses/370/course-5.jpg" alt="Course Image" /></a>
                      </div>
                      <div className="info">
                        <span className="price">$39<span>.00</span></span>
                        <h3 className="title"><a href="course-details-standard-sidebar.html">Master jQuery in a Short Period of Time</a></h3>
                        <ul className="meta">
                          <li><i className="far fa-file-alt" />6 Lessons</li>
                          <li><i className="far fa-user-alt" />45 Students</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col max-mb-30" data-aos="fade-up">
                    <div className="course">
                      <div className="thumbnail">
                        <a href="course-details-standard-sidebar.html" className="image"><img src="assets/images/courses/370/course-6.jpg" alt="Course Image" /></a>
                      </div>
                      <div className="info">
                        <span className="price">$59<span>.00</span></span>
                        <h3 className="title"><a href="course-details-standard-sidebar.html">Introduction to Javascript for Beginners</a></h3>
                        <ul className="meta">
                          <li><i className="far fa-file-alt" />14 Lessons</li>
                          <li><i className="far fa-user-alt" />70 Students</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col max-mb-30" data-aos="fade-up">
                    <div className="course">
                      <div className="thumbnail">
                        <a href="course-details-standard-sidebar.html" className="image"><img src="assets/images/courses/370/course-7.jpg" alt="Course Image" /></a>
                      </div>
                      <div className="info">
                        <span className="price">$26<span>.00</span></span>
                        <h3 className="title"><a href="course-details-standard-sidebar.html">Problem-solving Skills for Better Success</a></h3>
                        <ul className="meta">
                          <li><i className="far fa-file-alt" />15 Lessons</li>
                          <li><i className="far fa-user-alt" />4001 Students</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col max-mb-30" data-aos="fade-up">
                    <div className="course">
                      <div className="thumbnail">
                        <a href="course-details-standard-sidebar.html" className="image"><img src="assets/images/courses/370/course-8.jpg" alt="Course Image" /></a>
                      </div>
                      <div className="info">
                        <span className="price">$22<span>.00</span></span>
                        <h3 className="title"><a href="course-details-standard-sidebar.html">Speed Reading Techniques in University</a></h3>
                        <ul className="meta">
                          <li><i className="far fa-file-alt" />18 Lessons</li>
                          <li><i className="far fa-user-alt" />40 Students</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col max-mb-30" data-aos="fade-up">
                    <div className="course">
                      <div className="thumbnail">
                        <a href="course-details-standard-sidebar.html" className="image"><img src="assets/images/courses/370/course-9.jpg" alt="Course Image" /></a>
                      </div>
                      <div className="info">
                        <span className="price">$22<span>.00</span></span>
                        <h3 className="title"><a href="course-details-standard-sidebar.html">Database &amp; SQL for Computer Science</a></h3>
                        <ul className="meta">
                          <li><i className="far fa-file-alt" />15 Lessons</li>
                          <li><i className="far fa-user-alt" />96 Students</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col max-mb-30" data-aos="fade-up">
                    <div className="course">
                      <div className="thumbnail">
                        <a href="course-details-standard-sidebar.html" className="image"><img src="assets/images/courses/370/course-10.jpg" alt="Course Image" /></a>
                      </div>
                      <div className="info">
                        <span className="price">$22<span>.00</span></span>
                        <h3 className="title"><a href="course-details-standard-sidebar.html">Intermediate English Speaking Practice</a></h3>
                        <ul className="meta">
                          <li><i className="far fa-file-alt" />18 Lessons</li>
                          <li><i className="far fa-user-alt" />499 Students</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col max-mb-30" data-aos="fade-up">
                    <div className="course">
                      <div className="thumbnail">
                        <a href="course-details-standard-sidebar.html" className="image"><img src="assets/images/courses/370/course-11.jpg" alt="Course Image" /></a>
                      </div>
                      <div className="info">
                        <span className="price">$28<span>.00</span></span>
                        <h3 className="title"><a href="course-details-standard-sidebar.html">Complete Fitness Trainer: Beginner to Advanced</a></h3>
                        <ul className="meta">
                          <li><i className="far fa-file-alt" />8 Lessons</li>
                          <li><i className="far fa-user-alt" />47 Students</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col max-mb-30" data-aos="fade-up">
                    <div className="course">
                      <div className="thumbnail">
                        <a href="course-details-standard-sidebar.html" className="image"><img src="assets/images/courses/370/course-12.jpg" alt="Course Image" /></a>
                      </div>
                      <div className="info">
                        <span className="price">$22<span>.00</span></span>
                        <h3 className="title"><a href="course-details-standard-sidebar.html">Lazy Dancer Ballet Burn – 30 days programme</a></h3>
                        <ul className="meta">
                          <li><i className="far fa-file-alt" />6 Lessons</li>
                          <li><i className="far fa-user-alt" />47 Students</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row max-mt-50">
                  <div className="col text-center">
                    <a href="JavaScript:Void(0);" className="btn btn-outline-primary load-more-btn">Load More <i className="fal fa-redo ml-3" /></a>
                  </div>
                </div>
              </div>
            </div>


    )
}

export default Coursegrid
