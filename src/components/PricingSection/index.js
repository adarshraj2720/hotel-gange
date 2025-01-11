import React from 'react'
import { Link } from 'react-router-dom'
import PrImg1 from '../../images/pricing/1.jpg'
import PrImg2 from '../../images/pricing/2.jpg'
import PrImg3 from '../../images/pricing/3.jpg'
import SectionTitleS2 from '../SectionTitleS2'


const Pricing = [
    {
        prImg: PrImg1,
        pakage: 'Deluxe Room',
        price: '12,999',
        subs: 'Room',
        l1: 'Free WIFI – High Speed',
        l2: 'Free Breakfast',
        l3: 'Extra Mattress Rs 2500/-',
        l4: '3 Person Max'
    },
    {
        prImg: PrImg2,
        pakage: 'Super Deluxe Room',
        price: '17,999',
        subs: 'Room',
        l1: 'Free WIFI – High Speed',
        l2: 'Free Breakfast',
        l3: 'Extra Mattress Rs 2500/-',
        l4: '3 Person Max'
    },
    {
        prImg: PrImg3,
        pakage: 'Family Suite',
        price: '22,999',
        subs: 'Room',
        l1: 'Free WIFI – High Speed',
        l2: 'Free Breakfast',
        l3: 'Extra Mattress Rs 2500/-',
        l4: '3 Person Max'
    },
]

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const PricingSection = (props) => {

    return (
        <section className="wpo-pricing-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <SectionTitleS2 MainTitle={'Regular Snan Price'} />
                    </div>
                </div>
                <div className="wpo-pricing-wrap">
                    <div className="row">
                        {Pricing.map((pricing, pitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={pitem}>
                                <div className="wpo-pricing-item">
                                    <div className="wpo-pricing-top">
                                        <div className="wpo-pricing-img">
                                            <img src={pricing.prImg} alt="" />
                                        </div>
                                        <div className="wpo-pricing-text">
                                            <h4>{pricing.pakage}</h4>
                                            <h2>Rs{pricing.price}<span>/ {pricing.subs}</span></h2>
                                        </div>
                                    </div>
                                    <div className="wpo-pricing-bottom">
                                        <div className="wpo-pricing-bottom-text">
                                            <ul>
                                                <li>{pricing.l1}</li>
                                                <li>{pricing.l2}</li>
                                                <li>{pricing.l4}</li>
                                                <li>{pricing.l3}</li>
                                            </ul>
                                            <Link onClick={ClickHandler} className="theme-btn" to="/pricing">Book Rooms</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PricingSection;