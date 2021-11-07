import React from 'react'
import "./ECE.css"
function TE({ branch }) {
    return (
        <div className="branch__name">
            <h1 className="branch__name__heading">{branch}</h1>
            <ol className="branch__name__list">
                <p className="branch__name__error">
                    Sorry, Can't find any softwares.
                </p>

            </ol>
        </div>
    )
}

export default TE
