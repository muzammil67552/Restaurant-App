import { useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState("menu");

    return (
        <div className='navbar'>
            <img src={assets.logo} alt='logo' className='logo'/>
            <ul className='navbar-menu'>
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""} >Home</li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""} >Menu</li>
                <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""} >Mobile App</li>
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""} >Contact Us</li>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt='search icon' className='navbar-search-icon'/>

                {/* Basket */}
                <div className='navbar-basket-icon'>
                    <img src={assets.basket_icon} alt=''/>
                    <div className='dot'></div>
                </div>

                <button className='navbar-button'>Sign in</button>
            </div>
        </div>
    );
};

export default Navbar;
