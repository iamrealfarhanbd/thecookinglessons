import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';
import Searchbox from "./Searchbox";
import Popularposts from "./Popularposts";



const Maincontent = () => {

    useEffect(()=>{
        AOS.init();
    })
    return (
          
                <div className="section section-padding-bottom fix">
                  <div className="container">
                    <div className="row max-mb-n50">
                      <div className="col-lg-8 col-12 order-lg-2 max-mb-50">
                        {/* Blog Wrapper Start */}
                        <div className="row row-cols-1 no-gutters">
                          {/* Blog Start */}
                          <div className="blog-3 col" data-aos="fade-up">
                            <div className="thumbnail">
                              <a href="blog-details.html" className="image"><img src="assets/images/blog/770/blog-1.jpg" alt="Blog Image" /></a>
                            </div>
                            <div className="info">
                              <a href="blog-details.html" className="category">Gym Coaching</a>
                              <h3 className="title"><a href="blog-details.html">10 Essential Bodyweight Exercises</a></h3>
                              <ul className="meta">
                                <li><a href="blog-details.html"><img src="assets/images/blog/blog-avatar.jpg" alt="" className="avatar" />Owen Christ</a></li>
                                <li><i className="far fa-calendar" />Apr 06, 2020</li>
                                <li><i className="far fa-eye" />70 views</li>
                              </ul>
                              <div className="desc">
                                <p>Essential bodyweight exercises are crucial to a well-rounded training routine because they’re versatile and can be done anywhere. …</p>
                              </div>
                              <div className="row justify-content-between max-mt-30">
                                <div className="col-auto">
                                  <a href="blog-details.html" className="btn btn-primary btn-hover-secondary">Read More</a>
                                </div>
                                <div className="col-auto">
                                  <div className="post-share">
                                    <span className="label">Share this post</span>
                                    <div className="media">
                                      <span className="icon"><i className="fas fa-share-alt" /></span>
                                      <div className="list">
                                        <a href="JavaScript:Void(0);"><i className="fab fa-facebook-f" /></a>
                                        <a href="JavaScript:Void(0);"><i className="fab fa-twitter" /></a>
                                        <a href="JavaScript:Void(0);"><i className="fab fa-linkedin" /></a>
                                        <a href="JavaScript:Void(0);"><i className="fab fa-tumblr-square" /></a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Blog End */}
                          {/* Blog Start */}
                          <div className="blog-3 col" data-aos="fade-up">
                            <div className="thumbnail">
                              <a href="blog-details.html" className="image"><img src="assets/images/blog/770/blog-2.jpg" alt="Blog Image" /></a>
                            </div>
                            <div className="info">
                              <a href="blog-details.html" className="category">Gym Coaching</a>
                              <h3 className="title"><a href="blog-details.html">How to Keep Workouts Fresh in the New Year</a></h3>
                              <ul className="meta">
                                <li><a href="blog-details.html"><img src="assets/images/blog/blog-avatar.jpg" alt="" className="avatar" />Owen Christ</a></li>
                                <li><i className="far fa-calendar" />Apr 06, 2020</li>
                                <li><i className="far fa-eye" />64 views</li>
                              </ul>
                              <div className="desc">
                                <p>Instead, begin the new year by considering four simple ways to refresh your classes that will prove equally beneficial for you, your faithful front row, and your fresh-faced resolutioners. …</p>
                              </div>
                              <div className="row justify-content-between max-mt-30">
                                <div className="col-auto">
                                  <a href="blog-details.html" className="btn btn-primary btn-hover-secondary">Read More</a>
                                </div>
                                <div className="col-auto">
                                  <div className="post-share">
                                    <span className="label">Share this post</span>
                                    <div className="media">
                                      <span className="icon"><i className="fas fa-share-alt" /></span>
                                      <div className="list">
                                        <a href="JavaScript:Void(0);"><i className="fab fa-facebook-f" /></a>
                                        <a href="JavaScript:Void(0);"><i className="fab fa-twitter" /></a>
                                        <a href="JavaScript:Void(0);"><i className="fab fa-linkedin" /></a>
                                        <a href="JavaScript:Void(0);"><i className="fab fa-tumblr-square" /></a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Blog End */}
                          {/* Blog Start */}
                          <div className="blog-3 col" data-aos="fade-up">
                            <div className="thumbnail">
                              <a href="blog-details.html" className="image"><img src="assets/images/blog/770/blog-3.jpg" alt="Blog Image" /></a>
                            </div>
                            <div className="info">
                              <a href="blog-details.html" className="category">Gym Coaching</a>
                              <h3 className="title"><a href="blog-details.html">15 RD-Approved Foods to Support a Healthy Immune System</a></h3>
                              <ul className="meta">
                                <li><a href="blog-details.html"><img src="assets/images/blog/blog-avatar.jpg" alt="" className="avatar" />Owen Christ</a></li>
                                <li><i className="far fa-calendar" />Apr 06, 2020</li>
                                <li><i className="far fa-eye" />47 views</li>
                              </ul>
                              <div className="desc">
                                <p>While quality sleep, regular exercise, proper hand-washing and social distancing are all important factors that contribute to a healthy immune system, the foods you eat can also play a key role. …</p>
                              </div>
                              <div className="row justify-content-between max-mt-30">
                                <div className="col-auto">
                                  <a href="blog-details.html" className="btn btn-primary btn-hover-secondary">Read More</a>
                                </div>
                                <div className="col-auto">
                                  <div className="post-share">
                                    <span className="label">Share this post</span>
                                    <div className="media">
                                      <span className="icon"><i className="fas fa-share-alt" /></span>
                                      <div className="list">
                                        <a href="JavaScript:Void(0);"><i className="fab fa-facebook-f" /></a>
                                        <a href="JavaScript:Void(0);"><i className="fab fa-twitter" /></a>
                                        <a href="JavaScript:Void(0);"><i className="fab fa-linkedin" /></a>
                                        <a href="JavaScript:Void(0);"><i className="fab fa-tumblr-square" /></a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Blog End */}
                        </div>
                        {/* Blog Wrapper End */}
                        {/* Pagination Start */}
                        <div className="row">
                          <div className="col">
                            <ul className="pagination center">
                              <li><a href="#" className="prev">PREV</a></li>
                              <li><a href="#" className="active">1</a></li>
                              <li><a href="#">2</a></li>
                              <li><a href="#" className="next">NEXT</a></li>
                            </ul>
                          </div>
                        </div>
                        {/* Pagination End */}
                      </div>
                      <div className="col-lg-4 col-12 order-lg-1 max-mb-50">
                        <div className="sidebar-widget-wrapper">
                          <div className="sidebar-widget">
                            <h3 className="sidebar-widget-title">Search</h3>
                            <div className="sidebar-widget-content">
                              <Searchbox />
                            </div>
                          </div>
                          <div className="sidebar-widget">
                            <Popularposts />
                          </div>
                          <div className="sidebar-widget">
                            <h3 className="sidebar-widget-title">Popular tags</h3>
                            <div className="sidebar-widget-content">
                              <div className="tagcloud">
                                <a href="JavaScript:Void(0);">course</a>
                                <a href="JavaScript:Void(0);">education</a>
                                <a href="JavaScript:Void(0);">general</a>
                                <a href="JavaScript:Void(0);">gym coaching</a>
                                <a href="JavaScript:Void(0);">health coaching</a>
                                <a href="JavaScript:Void(0);">learning</a>
                                <a href="JavaScript:Void(0);">methodology</a>
                                <a href="JavaScript:Void(0);">online</a>
                                <a href="JavaScript:Void(0);">pinterest</a>
                                <a href="JavaScript:Void(0);">strategies</a>
                                <a href="JavaScript:Void(0);">teaching</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

    )
}

export default Maincontent
