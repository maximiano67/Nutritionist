
import './Home.css'
import SecaoHomeBanner from './secaoHome-01/SecaoHomeBanner'
import HomeFeatures from './features/HomeFeatures'
import OurBlogs from './OurBlogs/OurBlogs'

const Home = () => {
  return (
    <div className='main-home'>
      <SecaoHomeBanner/>
      <HomeFeatures/>
      <OurBlogs/>
    </div>
  )
}

export default Home