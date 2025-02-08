import './OurPricing.css'
import './ResponsividadePricing.css'

const OurPricing = () => {

    const pricingItem = [
        {
            id: 1,
            title: 'Basic Plan',
            p: 'Up to 50% off on Yearly Plan',
            descricao: 'Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.',
            price: '$49',
            span: '/month'
        },
        {
            id: 2,
            title: 'Premium Plan',
            p: 'Up to 50% off on Yearly Plan',
            descricao: 'Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you´ll receive video consultations, priority support, and personalized recipe recommendations.',
            price: '$79',
            span: '/month'
        },
        {
            id: 3,
            title: 'Ultimate Plan',
            p: 'Up to 50% off on Yearly Plan',
            descricao: 'Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.',
            price: '$99',
            span: '/month'
        },
    ]

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
                            {pricingItem.map((item) => (

                                <li key={item.id} className='cart-pricing-plan'>
                                    <div className="card-plan-title">

                                        <div className="cart-title-pricing">
                                            <h1>{item.title}</h1>
                                            <p>{item.p}</p>
                                        </div>

                                        <div className="cart-descrition">
                                            <p>{item.descricao}</p>
                                        </div>

                                        <div className="cart-price-btn">

                                            <div className="cart-price">
                                                <h1>{item.price}</h1>
                                                <span>{item.span}</span>
                                            </div>

                                            <div className="btn-plan">
                                                <button className='btn'>
                                                    Choose Plan
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </main>

        </div>
    )
}

export default OurPricing