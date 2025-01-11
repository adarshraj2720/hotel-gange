import React from 'react'
import { Link } from 'react-router-dom'
import abimg from '../../images/about.jpg'

const About2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-about-section section-padding">
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
                                    <span>Exclusive Offer</span>
                                    <h2>Experience Kumbh, Redefined</h2>
                                </div>
                                <div className="wpo-about-content-inner">
                                    <p>Super Deluxe Room:Indulge in spacious comfort and modern
luxury. Our Deluxe Rooms offer a premium experience with a plush
king-size bed, a flat-screen TV, a cozy seating area, and a lavish
bathroom. Stay warm with a room heater and enjoy a hot beverage
with provided tea amenities.</p>
                                    <div className="about-info-wrap">
                                        {/* <div className="about-info-left">
                                            <p>4+ Rooms</p>
                                            <ul>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><span><i className="fa fa-star" aria-hidden="true"></i></span></li>
                                            </ul>
                                        </div> */}
                                        <div className="about-info-right">
                                            {/* <p>Only</p> */}
                                            <h3>Rs 14,999/-
                                            </h3>
                                            <p>Including Free Breakfast </p>
                                        </div>
                                    </div>
                                    <Link className="theme-btn" onClick={ClickHandler} to='/room'>Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;