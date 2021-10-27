import React from 'react'

function BT({ branch }) {
    return (
        <div className="branch__name">
            <h1 className="branch__name__heading">{branch}</h1>
            <ol className="branch__name__list">
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Python & R</h2>
                    <p>The most important and useful languages to put attention to right now in bioinformatics are Python and R. But it depends on you and your goals that which one you are going to start with. In bioinformatics one can choose to develop new softwares using python for better visualization or they can choose R for data analysis</p>
                </li>
            </ol>
        </div>
    )
}

export default BT
