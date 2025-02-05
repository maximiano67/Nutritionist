import './OurTestimonials.css'
// icons
import { RiDoubleQuotesL } from "react-icons/ri";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
//imagems
import perfilUm from '../../../assets/testimoniasl/Image-perfil-01.jpg'
import perfilDois from '../../../assets/testimoniasl/Image-perfil-02.jpg'
import perfilTres from '../../../assets/testimoniasl/Image-perfil-03.jpg'

const TestimonialsItems = [
    {
        id: 1,
        comment: "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
        img: perfilUm,
        name: 'Jennifer Anderson'
    },
    {
        id: 2,
        comment: "Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",
        img: perfilDois,
        name: 'Robert Johnson'
    },
    {
        id: 3,
        comment: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
        img: perfilTres,
        name: 'Emily Davis'
    },
    {
        id: 4,
        comment: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
        img: perfilTres,
        name: 'Emily Davis'
    },
    {
        id: 5,
        comment: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
        img: perfilTres,
        name: 'Emily Davis'
    },
    {
        id: 6,
        comment: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
        img: perfilTres,
        name: 'Emily Davis'
    },
]

import { useState } from 'react';



const OurTestimonials = () => {

    const [postion, setPosition] = useState({ x: 0 })
    const [activeIcon, setActive] = useState('icons01')

    const next = () => {
        setPosition({ x: postion.x = -1618 });
        setActive("icons02")

    }
    const prev = () => {
        setPosition({ x: postion.x = 0 })
        setActive("icons01")
    }
    return (
        <div className='main-testimonials'>
            <div className="cart-testimonials">
                <div className="testimonials-title">
                    <div className="cart-title">
                        <h1>Our testimonials</h1>
                        <p>Our satisfied clients share their success stories and experiences on their journey to better health and well-being.</p>
                    </div>
                </div>

                <div className="cart-testimonials-comments">
                    <ul className='cart-listas' style={{
                        transform: `translate(${postion.x}px`,
                        transition: 'transform 1.9s ease'
                    }}>
                        {TestimonialsItems.map((item) => (
                            <li key={item.id} className="cart-list">
                                <div className="cart-comments">
                                    <div className="icons-comment">
                                        <RiDoubleQuotesL />
                                    </div>
                                    <div className="comment">
                                        <p>{item.comment}</p>
                                    </div>
                                </div>

                                <div className="cart-perfil">
                                    <div className="cart-perfil-comment-img">
                                        <img src={item.img} />
                                    </div>
                                    <div className="commet-perfil-name">
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="testimonials-comments-carrosel-btns">
                        <button className='scroll-btn'
                            onClick={prev}
                        ><MdOutlineArrowBackIosNew />
                        </button>

                        <div className="ciculo">
                            <span className={`icons01 ${activeIcon === 'icons01' ? 'active' : ''}`} ></span>
                            <span className={`icons02 ${activeIcon === 'icons02' ? 'active' : ''}`} ></span>
                        </div>

                        <button className='scroll-btn'
                            onClick={next}
                        ><MdOutlineArrowForwardIos />
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default OurTestimonials