import './SecaoHomeBanner.css'

import mulherImg from '../../../assets/bannerHomer/Image.png'
import ImgUm from '../../../assets/bannerHomer/happysCustomers/ImageUm.jpg'
import ImgDois from '../../../assets/bannerHomer/happysCustomers/ImageDois.jpg'
import ImgTres from '../../../assets/bannerHomer/happysCustomers/ImageTreis.jpg'


const SecaoHomeBanner = () => {
  return (
    <div className='main-secao-home'>
      <div className='secao-home'>
        <div className="secao-home-img">
          <div className="secao-home-fundo">
          </div>
          <div className="secao-home-mulher">
            <img src={mulherImg} alt="" />
          </div>
        </div>
        <div className="secao-home-infos">
          <div className="secao-home-info">
            <div className="home-info">
              <div className="secao-home-header">
                <h5>Transform Your ❤️ Health with</h5>
                <div className="secao-home-title">
                <h1>Personalized Nutrition Coaching</h1>
              </div>
              </div>
              
              <div className="secao-home-descript">
                <p>Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey, providing customized plans and ongoing support. Start your transformation today and experience the power of personalized nutrition coaching.</p>
              </div>

              <div className="secao-home-butaos">
                <button className='btn-1'>Get Start Today</button>
                <button className='btn-2'>Book a Demo</button>
              </div>
            </div>
            <div className='secao-home-happy'>
              <div className="secao-home-happy-imgs">
                <div className="home-happy-img img1">
                  <img src={ImgUm} alt="" />
                </div>
                <div className="home-happy-img img2">
                  <img src={ImgDois} alt="" />
                </div>
                <div className="home-happy-img img3">
                  <img src={ImgTres} alt="" />
                </div>
              </div>
              <div className="secao-home-happy-info">
                <p><span>430+</span> Happy Customers</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default SecaoHomeBanner