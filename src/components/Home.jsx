import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    height="545px"
                    width="1400px"
                    src="https://quotefancy.com/media/wallpaper/3840x2160/5048415-Paulo-Coelho-Quote-Writing-means-sharing-It-s-part-of-the-human.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    height="545px"
                    width="1400px"
                    src="https://t3.ftcdn.net/jpg/05/39/22/08/360_F_539220880_b57wMJVyhVFUSN73exTkBV0cnGi4jOzm.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            {/* carousal end */}
            <br></br>
            <br></br>
            <br></br>
           
        
        <h3 class="card-title text-center text-body-tertiary text-font-Sans serif">Share Here....</h3>
        <br></br>
        <br></br>
        <br></br>
        
        <div className="row g-3">
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
            <div class="card">
            <img src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..."></img>
            <div class="card-body">
            <h5 class="card-title text-secondary text-end fst-italic">Cooking Blog</h5>
            </div>
            </div>
            </div>

            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
            <div class="card">
            <img height="465px"  src="https://images.unsplash.com/photo-1580598506092-12160ea975d7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..."></img>
            <div class="card-body">
            <h5 class="card-title card-title text-secondary text-end fst-italic">Personal Blogs</h5>
            </div>
            </div>
            </div>
            
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
            <div class="card">
            <img height="465px" src="https://images.unsplash.com/photo-1560233026-ad254fa8da38?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..."></img>
            <div class="card-body">
            <h5 class="card-title card-title text-secondary text-end fst-italic">Health Blogs</h5>
            </div>
            </div>
            </div>

            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
            <div class="card">
            <img src="https://plus.unsplash.com/premium_photo-1668424271158-d59b0381425b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..."></img>
            <div class="card-body">
            <h5 class="card-title card-title text-secondary text-end fst-italic">Travelling Blogs</h5>
            </div>
            </div>
            </div>
        </div>
        <br></br>
        <br></br><br></br>
        {/* card end */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
