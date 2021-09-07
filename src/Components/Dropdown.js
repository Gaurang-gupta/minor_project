import React from 'react'
import { Link } from "react-router-dom";
import "./Dropdown.css"
function Dropdown() {
    return (
        <div className="dropDown">
            <div className="dropDown__links">
                <Link to="/contacts" className="link">Question Papers</Link>
            </div>
            <div className="dropDown__links">
                <Link to="/contacts" className="link">Time Table & Calender</Link>
            </div>
            <div className="dropDown__links">
                <Link to="/library" className="link">E-Library</Link>
            </div>
            <div className="dropDown__links">
                <Link to="/contacts" className="link">Quick Links</Link>
            </div>
            <div className="dropDown__links">
                <Link to="/feeform" className="link">Forms and Fee Links</Link>
            </div>
            <div className="dropDown__links">
                <Link to="/softwares" className="link">Softwares</Link>
            </div>
            <div className="dropDown__links">
                <Link to="/emergency-contacts" className="link">Emergency Contacts</Link>
            </div>
        </div>
    )
}

export default Dropdown
