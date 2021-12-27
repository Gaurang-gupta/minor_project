import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"
function Card({ heading, subjects, isProgramElective, setProgramElective, branch }) {
    return (
        <div className='card'>
            <div className="card__headingContainer">
                <h1 className="card__heading">{heading}</h1>
            </div>
            <div className={`card__listContainer ${setProgramElective && "card__hieght"}`}>
                <ul className="card__list">
                    {subjects.map((subject, index) => (
                        <li className="card__listItem" key={index}>
                            <Link to={`/questionPapers/${branch ? branch : heading}/departmentElective/${subject}?${branch && "programElective"}`}>{subject}</Link>
                        </li>
                    ))}
                </ul>
                {isProgramElective &&
                    <Link to={`/questionPapers/${heading}/programElective`} className="card__elective">Program Electives</Link>
                }
            </div>
        </div>
    )
}

export default Card
