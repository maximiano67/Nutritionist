import './OurPricing.css'

const OurPricing = () => {
    return (
        <div className='main-ourPricing'>
            <main className="OurPricing">
                <div className="main-ourPricing-title">
                    <div className="title">
                        <h1>Our Pricing</h1>
                    </div>
                    <div className="descrition">
                        <p>We outline our flexible and affordable options to support you on your journey to optimal health and nutrition. We believe that everyone deserves access to personalized nutrition guidance and resources</p>
                    </div>
                </div>

                <div className="OurPricing-cart-price">
                    <div className="cart-btns">
                        <div className="btn-price">
                            <button className='btn-monthly'>Monthly</button>
                            <button className='btn-yearly'>Yearly</button>
                        </div>
                        <div className="descrition">
                            <p>Save 50% on Yearly</p>
                        </div>
                    </div>

                    <div className="OurPricing-cards-plans">
                        <ul className="cards-OurPricing">
                            <li className="cart-pricing-plan">
                                <div className="card-plan-title">
                                    <div className="cart-title">
                                        <h1>Basic Plan</h1>
                                        <p>Up to 50% off on Yearly Plan</p>
                                    </div>

                                    <div className="cart-descrition">
                                        <p>Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.</p>
                                    </div>
                                    <div className="cart-price-btn">
                                        <div className="cart-price">
                                            <h1>$49</h1>
                                            <span>/month</span>
                                        </div>

                                        <div className="btn-plan">
                                            <button className='btn'>
                                                Choose Plan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="cart-pricing-plan">
                                <div className="card-plan-title">
                                    <div className="cart-title">
                                        <h1>Premium Plan</h1>
                                        <p>Up to 50% off on Yearly Plan</p>
                                    </div>

                                    <div className="cart-descrition">
                                        <p>Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you´ll receive video consultations, priority support, and personalized recipe recommendations.</p>
                                    </div>
                                    <div className="cart-price-btn">
                                        <div className="cart-price">
                                            <h1>$79</h1><span>/month</span>
                                        </div>

                                        <div className="btn-plan">
                                            <button className='btn'>
                                                Choose Plan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="cart-pricing-plan">
                                <div className="card-plan-title">
                                    <div className="cart-title">
                                        <h1>Ultimate Plan</h1>
                                        <p>Up to 50% off on Yearly Plan</p>
                                    </div>

                                    <div className="cart-descrition">
                                        <p>Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.</p>
                                    </div>
                                    <div className="cart-price-btn">
                                        <div className="cart-price">
                                            <h1>$99</h1><span>/month</span>
                                        </div>

                                        <div className="btn-plan">
                                            <button className='btn'>
                                                Choose Plan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
            </main>

        </div>
    )
}

export default OurPricing