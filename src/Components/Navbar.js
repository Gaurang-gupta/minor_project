import React, { useState } from 'react'
import Dropdown from './Dropdown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "./Navbar.css";
import { Button } from '@material-ui/core';
function Navbar() {
    const [isDropDownOpen,setDropDownOpen] = useState(false);
    const [isNavOpen, setNavOpen] = useState(false);
    const dropDownChangeHandler = () => {
        setDropDownOpen(()=>(!isDropDownOpen));
    }

    const navChangeHandler = () =>{
        setNavOpen(()=>(!isNavOpen));
        console.log(isNavOpen)
    }
    

    return (
        <div className={`navbar ${isNavOpen && "open"}`}>
            <div className="navbar__left">
                <img className="navbar__logo" src="https://img.freepik.com/free-psd/metallic-logo-mockup-blue-wall_1389-1178.jpg?size=626&ext=jpg&ga=GA1.2.1983957354.1630997304" alt="logo"/>
                <div className="navbar__title">Title</div>
            </div>
            <div className={`navbar__right`}>
                <ul className={`navbar__list ${isNavOpen && "open"}`}>
                    <li className='navbar__listItem'>About Us</li>
                    <li className='navbar__listItem' >
                        <li className="resources" onClick={dropDownChangeHandler}>
                            Resources {!isDropDownOpen ? <ArrowDropDownIcon/> : <ArrowDropUpIcon/>}
                        </li>
                        {isDropDownOpen && 
                        <ul className="dropDown__nav dropDown__nav__open">
                            <li onClick={dropDownChangeHandler}>
                                <Dropdown link="/contacts" title="Question Papers"/>
                            </li>
                            <li onClick={dropDownChangeHandler}>
                                <Dropdown link="/contacts" title="Time Table"/>
                            </li>
                            <li onClick={dropDownChangeHandler}>
                                <Dropdown link="/library" title="E - Library"/>
                            </li>
                            <li onClick={dropDownChangeHandler}>
                                <Dropdown link="/contacts" title="Quick Links"/>
                            </li>    
                            <li onClick={dropDownChangeHandler}>
                                <Dropdown link="/feeform" title="Forms and Fee Links"/>
                            </li>
                            <li onClick={dropDownChangeHandler}>
                                <Dropdown link="/contacts" title="Softwares"/>
                            </li>   
                            <li onClick={dropDownChangeHandler}>
                                <Dropdown link="/contacts" title="Emergency Contacts"/>
                            </li>   
                        </ul>
                        }
                    </li>
                    
                    <li className={`navbar__listItem`}>FAQs</li>
                    <li className={`navbar__listItem`}>Contact Us</li>
                </ul>
            </div>
            <div className="toggle">
                <Button onClick={navChangeHandler}>{isNavOpen ? <ArrowDropUpIcon/>:<ArrowDropDownIcon/>}</Button>
            </div>
        </div>
    )
}

export default Navbar
