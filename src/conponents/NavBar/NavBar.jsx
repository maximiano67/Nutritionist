import './NavBar.css';
import logoImg from '../../assets/imgLogo/iconsLogo.png'
import { Link, useLocation } from 'react-router-dom';

//pages
import JoinDemo from '../../Routers/joinDemo/JoinDemo';



const NavBar = () => {
const location = useLocation();
    return (
        <div className='main-nav-bar'>
            <JoinDemo />
            <div className="nav-bar">

                <nav className="nav">

                    <ul className="nav-bar-logo">
                        <li><Link to={'/'}><img src={logoImg} alt="Logo nutrição" /></Link>

                            <h1><Link to={'/'}>Nutritionist</Link>  </h1>

                        </li>
                    </ul>


                    <div className="nav-bar-links">
                        <ul className="links">
                            <li><Link to={'/home'}
                            className={location.pathname === '/' || location.pathname === '/home' ? 'active' : ''} 
                            >Home</Link></li>

                            <li><Link to={'/about'}
                             className={location.pathname === '/about'? 'active' : ''} 
                            >About</Link></li>

                            <li><Link to={'/team'}
                             className={location.pathname === '/team'? 'active' : ''}
                            >Team</Link></li>
                            
                            <li><Link to={'/process'}
                             className={location.pathname === '/process'? 'active' : ''}
                            >Process</Link></li>
                            
                            <li><Link to={'/pricing'}
                             className={location.pathname === '/pricing'? 'active' : ''}
                            >Pricing</Link></li>
                            
                            <li><Link to={'/blog'}
                             className={location.pathname === '/blog'? 'active' : ''}
                            >Blog</Link></li>
                        </ul>

                        <button className='btn'><Link to={'/contact'}>Contact Us</Link></button>

                    </div>

                </nav>


            </div>
        </div>
    )
}

export default NavBar