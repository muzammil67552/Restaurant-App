import { assets } from '../../assets/assets';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>

                    <div className='footer-content-left'>
                        <img src={assets.logo}/>
                        <p>Visit To Our Restaurant at Chiko Chicken and explore more food as your desired test</p>
                        <div className='footer-social-icons'>
                            <img src={assets.facebook_icon}/>
                            <img src={assets.twitter_icon}/>
                            <img src={assets.linkedin_icon}/>
                        </div>
                    </div>
                    <div className='footer-content-center'>
                        <h2>UseFull Links</h2>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className='footer-content-left'>
                     <h2>Get In Touch With Our Restaurant</h2>
                       <ul>
                           <li>+123456789</li>
                           <li>chikoChiken@gmail.com</li>
                       </ul>
                    </div>
            </div>
            <hr/>
            <p className='footer-copyright'>Copyright 2024 © ChekoChicken.com - All Right Reserved</p>
        </div>
    );
};

export default Footer;