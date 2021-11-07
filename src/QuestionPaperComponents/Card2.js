import React from 'react'
import "./Card.css"
function Card2({ heading, subjects }) {
    return (
        <div className="card">
            <div className="card__headingContainer">
                <h1 className="card__heading">{heading}</h1>
            </div>
            <div className="card__listContainer">
                <ul className="card__list">
                    {subjects.map((subject, index) => (
                        <li className="card__listItem" key={index}>
                            {subject}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Card2
