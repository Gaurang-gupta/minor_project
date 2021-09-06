import React from 'react'
import { Link } from "react-router-dom";
import "./Dropdown.css"
function Dropdown(props) {
    return (
        <div className="dropDown">
            <div className="dropDown__links">
                <Link to={props.link} className="link">{props.title}</Link>
            </div>
            {/* Question Papers */}

            {/* <div className="dropDown__links">
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
                <Link to="/softwares" className="link">Softwares</Link>
            </div>
            <div className="dropDown__links">
                <Link to="/emergency-contacts" className="link">Emergency Contacts</Link>
            </div> */}
        </div>
    )
}

export default Dropdown
