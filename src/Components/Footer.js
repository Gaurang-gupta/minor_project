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
                <p>Constructive criticism is well apreciated</p>
                <div className="footer__heading__links">
                    <a className="footer__header__link" href="#">Click here for feedback form</a>
                    <a className="footer__header__link" href="#">Privacy Policy</a>
                    <a className="footer__header__link" href="#">Copyright Policy</a>
                </div>
            </div>
            <div className="footer__logo">
                <Link to="/">
                    <div>
                        <img className="footer__image" src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="logo" />
                    </div>
                </Link>
                <div className="footer__title">
                    SWP
                </div>
            </div>
            <div className="footer__connect">
                <p>Contact Us</p>
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
