import React from 'react'
import { Link } from "react-router-dom";
import "./Dropdown.css"
function Dropdown(props) {
    return (
        <div className="dropDown">
            <div className="dropDown__links">
                <Link to={props.link} className="link">{props.title}</Link>
            </div>
        </div>
    )
}

export default Dropdown