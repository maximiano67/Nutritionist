import './NavBar.css';
import logoImg from '../../assets/imgLogo/iconsLogo.png'
//Router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import JoinDemo from '../../Routers/joinDemo/JoinDemo';
//pages




const NavBar = () => {
    return (
        <div className='main-nav-bar'>
            <JoinDemo />
            <div className="nav-bar">
                <Router>
                    <nav className="nav">

                        <ul className="nav-bar-logo">
                            <li>
                                <Link to="/">
                                    <img src={logoImg} alt="Logo nutrição" />
                                    <h1>Nutritionist</h1>
                                </Link>
                            </li>
                        </ul>


                        <div className="nav-bar-links">
                            <ul className="links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/team">Team</Link></li>
                                <li><Link to="/process">Process</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                            </ul>

                            <button className='btn'>Contact Us</button>

                        </div>
                        <Routes>
                            <Route path="/" />
                        </Routes>

                    </nav>

                </Router>
            </div>
        </div>
    )
}

export default NavBar