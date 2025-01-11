import React from "react";
import { Link } from "react-router-dom";
import abimg from "../../images/about2.jpg";

const About3 = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="wpo-about-section-s3 section-padding">
      <div className="container">
        <div className="wpo-about-section-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-img">
                <img src={abimg} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-content">
                <div className="about-title">
                  <span>About Us</span>
                  <h2>
                    Explore the world’s wonders with comfort at our exceptional
                    hotel.
                  </h2>
                </div>
                <div className="wpo-about-content-inner">
                  <p>
                    Experience Kumbh Mela's sanctity at Hotel Saket Gange, a
                    tranquil haven 500 meters from the ghats. Newly built in
                    2024, it offers modern comforts and a relaxing atmosphere
                    for pilgrims and travellers seeking a serene stay.
                  </p>
                  <Link
                    className="theme-btn"
                    onClick={ClickHandler}
                    to="/about"
                  >
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About3;
