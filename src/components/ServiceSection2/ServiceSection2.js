import React from 'react'
import Services from '../../api/service'
import { Link } from 'react-router-dom'


const ServiceSection2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <div className="wpo-service-area section-padding">
            <div className="wpo-service-wrap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-8 col-12">
                            <div className="wpo-service-content">
                                <h2>We are Providing You Our Best Facilities </h2>
                                <p>Escape the crowds and find tranquility at Hotel Saket Gange. Our newly constructed hotel offers a sanctuary of peace
and comfort during your Kumbh Mela pilgrimage. Indulge in modern amenities, warm hospitality,
and a convenient location, allowing you to focus on your spiritual journey. </p>
                                <a className="theme-btn" href="service.html">Discover More</a>
                            </div>
                        </div>
                        <div className="col-xl-8 col-12">
                            <div style={{justifyContent:"flex-start"}} className="wpo-service-items">
                                {Services.map((service, sitem) => (
                                    <div className="wpo-service-item" key={sitem}>
                                        <i className={`fi ${service.fIcon}`}></i>
                                        <Link onClick={ClickHandler} to={`/service-single/${service.id}`}>{service.title}</Link>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection2;