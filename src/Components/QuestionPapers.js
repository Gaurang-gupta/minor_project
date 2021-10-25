import React from 'react'
import Topcase from './Topcase'
import { Link } from 'react-router-dom'
import "./QuestionPapers.css"
function QuestionPapers() {
    return (
        <>
        <Topcase heading={"Question Papers"} content={"Below you can find question papers of different subjects of respective departments"}/>
        <div className="questionPapers">
            <div className="questionPapers__link">
                <Link to="/questionPapers/CSE">
                    Computer Science and Engineering
                </Link>
            </div>
            <div className="questionPapers__link">
                <Link to="/questionPapers/IT">
                    Information Technology
                </Link>
            </div>
            <div className="questionPapers__link">
                <Link to="/questionPapers/ECE">
                    Electronics and Communication Engineering
                </Link>
            </div>
            <div className="questionPapers__link">
                <Link to="/questionPapers/ICE">
                    Instrumentation and Control Engineering
                </Link>
            </div>
            <div className="questionPapers__link">
                <Link to="/questionPapers/IPE">
                    Industrial and Production Engineering
                </Link>
            </div>
            <div className="questionPapers__link">
                <Link to="/questionPapers/ME">
                    Mechanical Engineering
                </Link>
            </div>
            <div className="questionPapers__link">
                <Link to="/questionPapers/CIE">
                    Civil Engineering
                </Link>
            </div>
            <div className="questionPapers__link">
                <Link to="/questionPapers/TE">
                    Textile Engineering
                </Link>
            </div>
            <div className="questionPapers__link">
                <Link to="/questionPapers/CE">
                    Chemical Engineering
                </Link>
            </div>
            <div className="questionPapers__link">
                <Link to="/questionPapers/EE">
                    Electrical Engineering
                </Link>
            </div>
            <div className="questionPapers__link">
                <Link to="/questionPapers/BT">
                    Biotechnology
                </Link>
            </div>
        </div>
        </>
    )
}

export default QuestionPapers
