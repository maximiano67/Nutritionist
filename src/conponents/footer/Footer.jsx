import './Footer.css'
//icons
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

import logoImg from '../../assets/imgLogo/iconsLogo.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer">

        <div className="info-about">
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
                  <li><Link to="/blog">Contact</Link></li>
                </ul>

              </div>
              <Routes>
                <Route path="/" />
              </Routes>

            </nav>

          </Router>
        </div>

        <div className="footer-cart-contact">
          <div className="info-contact">
            <div className="email">
              <MdEmail />
              <p>hello@squareup.com</p>
            </div>
            <div className="call">
              <IoCall />
              <p>+91 91813 23 2309</p>
            </div>
            <div className="location">
              <FaLocationDot />
              <p>Somewhere in the World</p>
            </div>
          </div>
          <p>© 2023 Nutritionist. All rights reserved.</p>
        </div>



      </div>

    </footer>
  )
}

export default Footer