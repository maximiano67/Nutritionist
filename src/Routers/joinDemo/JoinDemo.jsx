import './JoinDemo.css'
import joindemoImg from '../../assets/joinDemoImg/joinDemo.png'
import joinDemoIcons from '../../assets/joinDemoImg/Icon.png'
//icons
import { TiArrowRight } from "react-icons/ti";

const JoinDemo = () => {
  return (
    <div className='main-joinDemo'>
        <div className="cart-joinDemo">
            <div className="cart-joinDemoImg"><img src={joindemoImg}/></div>
            <p><img src={joinDemoIcons}/>Join Our Personalized Nutrition Demo For Free<TiArrowRight /></p>
            <div className="cart-joinDemoImg"><img src={joindemoImg}/></div>
        </div>
    </div>
  )
}

export default JoinDemo