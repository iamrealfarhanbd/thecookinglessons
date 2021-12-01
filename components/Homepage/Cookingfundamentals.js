import {useEffect} from 'react';

const Cookingfundamentals = () => {
    useEffect(()=>{
        AOS.init();
    })
    return (

          
                <div className="cooking-fundamentals-section section section-padding" data-bg-color="#f1f4f2">
                  <div className="container">
                    {/* Section Title Start */}
                    <div className="section-title-five text-center" data-aos="fade-up">
                      <h2 className="title">How is The Cooking Lessons saving your time, money and  &amp; stress</h2>
                    </div>
                    {/* Section Title End */}
                    <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 max-mb-n30">
                      <div className="col max-mb-30">
                        <div className="coaching-box cooking-box text-center">
                          <div className="image">
                            <img src="assets/images/ketchen/ketchen-box-image-1.png" alt="" />
                          </div>
                          <div className="content">
                            <h3 className="title">Get Confident</h3>
                            <p>Learn about awesome
dishes on-the-go. The
well-structured courses
will make you a confident
cooking expert.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col max-mb-30">
                        <div className="coaching-box cooking-box text-center">
                          <div className="image">
                            <img src="assets/images/ketchen/ketchen-box-image-2.png" alt="" />
                          </div>
                          <div className="content">
                            <h3 className="title">Cooking Hacks</h3>
                            <p>Ultimate cooking hacks
to fast-track your culinary
skills and lessen the
cooking hassle.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col max-mb-30">
                        <div className="coaching-box cooking-box text-center">
                          <div className="image">
                            <img src="assets/images/ketchen/ketchen-box-image-3.png" alt="" />
                          </div>
                          <div className="content">
                            <h3 className="title">Budget-friendly</h3>
                            <p>All our affordable
premium courses will
make you believe in
being self-sufficient.
You&#39;ll never have to rely
on eateries.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col max-mb-30">
                        <div className="coaching-box cooking-box text-center">
                          <div className="image">
                            <img src="assets/images/ketchen/ketchen-box-image-4.png" alt="" />
                          </div>
                          <div className="content">
                            <h3 className="title">Healthy Diet</h3>
                            <p>Special recipe plans
based on your interest &amp;
health-situation to help
you keep fit while
satisfying your cravings</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

    )
}

export default Cookingfundamentals
