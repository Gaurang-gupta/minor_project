import React from 'react'
import './Showcase.css';
import arialimage from '../campus images/central seminar hall.jpg'
function Showcase() {
    return (
        <div className="showcase">
            <img class="video-feature--mobile-img" src={arialimage} alt="Aerial view of campus" />
            <div className="para">
                <h1 className="pheading"> NITJ Student welfare portal</h1> </div>
            {/* <img class="video-feature--mobile-img" src="https://www.oberlin.edu/sites/default/files/styles/width_1600/public/content/home/header-video-cover-image/aerial-campus-wbradford-40.jpg?itok=OPGqFteY" alt="Aerial view of campus" />
            <div className="para"> 
                <h1 className="pheading">Student Council Welfare </h1> 
            </div> */}
        </div>
    )
}

export default Showcase