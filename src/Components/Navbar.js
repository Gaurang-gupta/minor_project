import React, { useState } from 'react'
import Dropdown from './Dropdown';
import { VscChevronDown } from "react-icons/vsc";
import { VscChevronUp } from "react-icons/vsc"
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
    const [isDropDownOpen, setDropDownOpen] = useState(false);
    const [isNavOpen, setNavOpen] = useState(false);
    const dropDownChangeHandler = () => {
        setDropDownOpen(() => (!isDropDownOpen));
    }

    const navChangeHandler = () => {
        setNavOpen(() => (!isNavOpen));
        setDropDownOpen(false);
    }

    return (
        <div className={`navbar ${isNavOpen && "open"}`}>
            <div className='navbar__view'>
                <div className="navbar__left">
                    <img className="navbar__logo" src="test.svg" alt="logo" />
                    <Link to="/" className="navbar__title">SWP</Link>
                </div>
                <div className="toggle">
                    <div onClick={() => navChangeHandler()}>{isNavOpen ? <VscChevronUp /> : <VscChevronDown />}</div>
                </div>
            </div>
            <div className={`navbar__right ${!isNavOpen ? "navbar__right__util padding__remove" : "padding"}`}>
                <ul className={`navbar__list ${isNavOpen && "open"}`}>
                    <li onClick={navChangeHandler} className='navbar__listItem'>
                        <Link className='navbar__link' to="/aboutUs">About Us</Link>
                    </li>
                    <li className='navbar__listItem' >
                        <li className="resources" onClick={dropDownChangeHandler}>
                            Resources {!isDropDownOpen ? <VscChevronDown /> : <VscChevronUp />}
                        </li>
                        {isDropDownOpen &&
                            <ul onClick={navChangeHandler} className="dropDown__nav dropDown__nav__open">
                                <li onClick={dropDownChangeHandler}>
                                    <Dropdown link="/questionPapers" title="Question Papers" />
                                </li>
                                <li onClick={dropDownChangeHandler}>
                                    <Dropdown link="/Timetable" title="Time Table/Calendar" />
                                </li>
                                <li onClick={dropDownChangeHandler}>
                                    <Dropdown link="/library" title="E - Library" />
                                </li>
                                <li onClick={dropDownChangeHandler}>
                                    <Dropdown link="/feeform" title="Forms and Fee Links" />
                                </li>
                                <li onClick={dropDownChangeHandler}>
                                    <Dropdown link="/softwares" title="Software" />
                                </li>
                                <li onClick={dropDownChangeHandler}>
                                    <Dropdown link="/contacts" title="Emergency Contacts" />
                                </li>
                            </ul>
                        }
                    </li>

                    <div onClick={navChangeHandler} className='navbar__listItem'>
                        <Link className="navbar__contact" to="/Faqs">
                            FAQs
                        </Link>
                    </div>
                    <div onClick={navChangeHandler} className='navbar__listItem'>
                        <Link className="navbar__contact" to="/contactUs">
                            Contact Us
                        </Link>
                    </div>
                </ul>
            </div>

        </div>
    )
}

export default Navbar