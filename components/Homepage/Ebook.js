import {useEffect} from 'react';

const Ebook = () => {
    useEffect(()=>{
        AOS.init();
    })
    return (


          
                <div className="ebook-section section section-padding" data-bg-color="#f6f1ed">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="ebook-content text-center">
                          <div className="section-title-four text-center">
                            <span className="sub-title">​Download my</span>
                            <h2 className="title">​​FREE resources for your better cooking skills</h2>
                            <p></p>
                          </div>
                          <a href="login-register.html" className="btn btn-primary-three btn-hover-secondary-three btn-width-300"> Get started for free</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Animation Shape Start */}
                  <div className="shape shape-1">
                    <span data-depth={3}>
                      <img src="assets/images/ebook/ketchen-ebook-section-image-01.png" alt="" />
                    </span>
                  </div>
                  <div className="shape shape-2">
                    <span data-depth={3}>
                      <img src="assets/images/ebook/ketchen-ebook-section-image-02.png" alt="" />
                    </span>
                  </div>
                  {/* Animation Shape End */}
                </div>


    )
}

export default Ebook
