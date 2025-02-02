import HomeFeatures from './features/HomeFeatures'
import './Home.css'
import SecaoHomeBanner from './secaoHome-01/SecaoHomeBanner'

const Home = () => {
  return (
    <div className='main-home'>
      <SecaoHomeBanner/>
      <HomeFeatures/>
    </div>
  )
}

export default Home