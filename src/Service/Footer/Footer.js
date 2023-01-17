import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <>
            <div className="footer mt-auto bg-dark text-light">

                <div className='container py-3'>

                    <div className='row d-flex footer-items'>

                        <div className='col'>
                            <h5>Categories</h5>
                            <ul>
                                <li>Watches</li>
                                <li>Mobiles</li>
                                <li>Tables</li>
                                <li>Audio</li>
                                <li>Drones</li>
                            </ul>
                        </div>

                        <div className='col'>
                            <h5>Usefull Links</h5>
                            <ul>
                                <li>Terms</li>
                                <li>Privacy</li>
                                <li>About Us</li>
                                <li>Mission</li>
                            </ul>
                        </div>

                        <div className='col'>
                            <h5>Get Updates</h5>
                            <input type={'text'} className="form-control rounded-0 shadow-none" />
                            <button className='footer-btn rounded-0 shadow-none'>Subscribe</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer;