import React from 'react'
import { FaTwitter, FaInstagram, FaMailBulk } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Footer.css";
function Footer() {
    return (
        <div className="footer">
            <div className="footer__feedback">
                <h2 className="footer__heading">Feedback</h2>
                <p>Please give us your suggestions and feedback</p>
                <div className="footer__heading__links">
                    <a className="footer__header__link" target="_blank" href="https://forms.gle/bEyCcJW5XHGz1HJt6">Click here for sending pdfs</a>
                    <a className="footer__header__link" href="#">Privacy Policy</a>
                    <a className="footer__header__link" target="_blank" href="https://forms.gle/MU7mchfsLYZrWnqa6">Join Us</a>
                </div>
            </div>
            <div className="footer__logo">
                <Link className='footer__logoLink' to="/">
                    <div>
                        <img className="footer__image" src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="logo" />
                    </div>
                    <div className="footer__title">
                        SWP
                    </div>
                </Link>
            </div>
            <div className="footer__connect">
                <p>
                    <Link className='footer__link' to="/contactUs">Contact Us</Link>
                </p>
                <p>Follow Us</p>
                <p className="footer__social">
                    <FaInstagram className='instagram' />
                    <FaMailBulk className="social" />
                    <FaTwitter className="social" />
                </p>
                <p>&#169; SWP</p>
                <p>All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
