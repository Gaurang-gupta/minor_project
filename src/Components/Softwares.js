import React from 'react'
import Topcase from './Topcase'
import { Link } from 'react-router-dom'
import "./Softwares.css"
function Softwares() {
    return (
        <>
        <Topcase heading={"Softwares"} content={"Below you can find about different softwares our college has purchased and a brief introduction about them."}/>
        <div className="softwares">
            <div className="softwares__link">
                <Link to="/softwares/CSE">
                    Computer Science and Engineering
                </Link>
            </div>
            <div className="softwares__link">
                <Link to="/softwares/IT">
                    Information Technology
                </Link>
            </div>
            <div className="softwares__link">
                <Link to="/softwares/ECE">
                    Electronics and Communication Engineering
                </Link>
            </div>
            <div className="softwares__link">
                <Link to="/softwares/ICE">
                    Instrumentation and Control Engineering
                </Link>
            </div>
            <div className="softwares__link">
                <Link to="/softwares/IPE">
                    Industrial and Production Engineering
                </Link>
            </div>
            <div className="softwares__link">
                <Link to="/softwares/ME">
                    Mechanical Engineering
                </Link>
            </div>
            <div className="softwares__link">
                <Link to="/softwares/CIE">
                    Civil Engineering
                </Link>
            </div>
            <div className="softwares__link">
                <Link to="/softwares/TE">
                    Textile Engineering
                </Link>
            </div>
            <div className="softwares__link">
                <Link to="/softwares/CE">
                    Chemical Engineering
                </Link>
            </div>
            <div className="softwares__link">
                <Link to="/softwares/EE">
                    Electrical Engineering
                </Link>
            </div>
            <div className="softwares__link">
                <Link to="/softwares/BT">
                    Biotechnology
                </Link>
            </div>
        </div>
        </>
    )
}

export default Softwares
