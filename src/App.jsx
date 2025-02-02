//npm i -D react-router-dom installei isso
import './App.css'
import Home from './Routers/home/Home'
import NavBar from './conponents/NavBar/NavBar'
import Footer from './conponents/footer/Footer'
//pages

//import Home from './Routers/home/Home'

function App() {


  return (
    <div className='App'>
      <div className='global'>

        <NavBar/>
        <div className="globo-main">
          <Home />
        </div>
        <Footer/>
        
      </div>
    </div>
  )
}

export default App
