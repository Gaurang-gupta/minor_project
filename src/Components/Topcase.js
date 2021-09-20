import React from 'react'
import "./Topcase.css"
function Topcase({heading,content}) {
    return (
        <div className="topdiv">
            <br/>
            <div className="container"> 
                <div className="headingdiv">
                    <h1>{heading}</h1>
                </div> 
                <div className="contentdiv"> 
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default Topcase
