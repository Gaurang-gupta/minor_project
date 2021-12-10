import React from 'react'
import "./Card.css"
function Card2({ heading, papers }) {
    return (
        <div className="card">
            <div className="card__headingContainer">
                <h1 className="card__heading">{heading}</h1>
            </div>
            <div className="card__listContainer card2">
                <ul className="card__list">
                    {papers.map((paper, index) => (
                        <li className="card__listItem" key={index}>
                            {paper}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Card2
