import React from 'react'
import { BrowserRouter as Router,Link } from "react-router-dom";
import "./Dropdown.css"
function Dropdown() {
    return (
        <Router> 
        <div className="dropDown">
            <div className="dropDown__links">
                <Link to="/contacts" className="link">Question Papers</Link>
            </div>
            <div className="dropDown__links">
                <Link to="/contacts" className="link">Time Table</Link>
            </div>
            <div className="dropDown__links">
                <Link to="/library" className="link">E-Library</Link>
            </div>
            <div className="dropDown__links">
                <Link to="/contacts" className="link">Quick Links</Link>
            </div>
            <div className="dropDown__links">
                <Link to="/contacts" className="link">Forms and Fee Links</Link>
            </div>
            <div className="dropDown__links">
                <Link to="/contacts" className="link">Softwares</Link>
            </div>
            <div className="dropDown__links">
                <Link to="/emergency-contacts" className="link">Emergency Contacts</Link>
            </div>
        </div>
        </Router>
    )
}

export default Dropdown
