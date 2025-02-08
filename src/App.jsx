//npm i -D react-router-dom installei isso
import './App.css'
import { Outlet } from 'react-router-dom'
//pages
import NavBar from './conponents/NavBar/NavBar'
import Footer from './conponents/footer/Footer'

function App() {


  return (
    <div className='App'>
      <div className='global'>

        <NavBar />
        <div className="globo-main">
          <Outlet />
        </div>
        <Footer /> 
      </div>
    </div>
  )
}

export default App
