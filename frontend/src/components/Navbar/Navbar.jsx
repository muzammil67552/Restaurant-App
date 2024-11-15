/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link if using react-router
import { assets } from '../../assets/assets';
import './Navbar.css';

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("menu");

    return (
        <div className='navbar'>
           <Link to="/"><img src={assets.logo} alt='logo' className='logo'/></Link>
            <ul className='navbar-menu'>
                <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt='search icon' className='navbar-search-icon'/>

                {/* Basket */}
                <div className='navbar-basket-icon'>
                    <Link to="/cart"><img src={assets.basket_icon} alt=''/></Link>
                    <div className='dot'></div>
                </div>

                <button onClick={()=> setShowLogin(true)} className='navbar-button'>Sign in</button>
            </div>
        </div>
    );
};

export default Navbar;
