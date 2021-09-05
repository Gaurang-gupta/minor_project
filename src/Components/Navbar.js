import React, { useState } from 'react'
import Dropdown from './Dropdown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "./Navbar.css";
function Navbar() {
    const [isDropDownOpen,setDropDownOpen] = useState(false);

    const dropDownChangeHandler = () => {
        setDropDownOpen(()=>(!isDropDownOpen));
    }

    return (
        <div className="navbar">
            <div className="navbar__left">
                <img className="navbar__logo" src="data:image/jpeg;base64,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" alt="logo"/>
                <div className="navbar__title">Title</div>
            </div>
            <div className="navbar__right">
                <ul className="navbar__list">
                    <li className="navbar__listItem">About Us</li>
                    <li className="navbar__listItem" onClick={dropDownChangeHandler}>
                        <div className="resources">
                            Resources {!isDropDownOpen ? <ArrowDropDownIcon/> : <ArrowDropUpIcon/>}
                        </div>
                        <div className="dropDown__nav">
                            {isDropDownOpen && <Dropdown/>}
                        </div>
                    </li>
                    <li className="navbar__listItem">FAQs</li>
                    <li className="navbar__listItem">Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
