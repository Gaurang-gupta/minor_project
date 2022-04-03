import React from 'react'
import "./Home.css";


// <<<<<<< main
import { Link } from 'react-router-dom';
// import { Button } from '@material-ui/core';
function Home() {
    return (
        <>

            <div className="about">
                {/* <h1 clasName="first">Saving your time is what we intent.</h1> */}
                <h2 className="second-head">
                    Welcome to SWP
                </h2>
                <p className="fpara" style={{ fontSize: "19px" }}>
                    {/* We at SWP(Student welfare portal) ensures that all your difficulties related to academics,  hostels, medical care get resolved. We are a student body consisting of student representatives. The solely purpose of establishing this portal is to get rid of the chaos and hustle in searching the required information and saving your precious time. */}
                    SWP's primary objective is identifying the issues faced by the student community related to academics, social life, mental health and career, and address them through this portal. We are a student body consisting of student representatives. </p>
            </div>
            <div className="contentdata">
                <h1>Where to find what?</h1>
                <div className="gridbox">
                    <div className="box1">
                        <h3 className='home__heading'>Question papers</h3>
                        <p>Here you can find available previous year papers and you can upload if you have any.</p>

                        <button className="cstmbtn1 home__btn">
                            <Link to="/questionPapers"> Learn More</Link> </button>

                    </div>

                    <div className="box2">
                        <h3 className='home__heading'>Time Table/Calendar</h3>
                        <p>Get the time table of all the branches with syllabus and NITJ Academic calendar.</p>
                        <button className="cstmbtn2 home__btn"> <Link to="/Timetable"> Learn More </Link> </button>
                    </div>
                    <div className="box3">
                        <h3 className='home__heading'>E-Library</h3>
                        <p>Find the book of your interest in NITJ'S E-library and Ntional Digital Library.</p>
                        <button className="cstmbtn3 home__btn"> <Link to="/library"> Learn More</Link> </button>
                    </div>
                    <div className="box4">
                        <h3 className='home__heading'>Fee & Form Links</h3>
                        <p>We attached all important fee and form links here to save your time. </p>
                        <button className="cstmbtn4 home__btn"> <Link to="/feeform"> Learn More</Link> </button>
                    </div>
                    <div className="box5">
                        <h3 className='home__heading'>Softwares</h3>
                        <p>Here you can find software our college has purchased and are necessary for your smooth studies. </p>
                        <button className="cstmbtn5 home__btn"> <Link to="/softwares"> Learn More</Link> </button>
                    </div>
                    <div className="box6">
                        <h3 className='home__heading'>Contacts</h3>
                        <p> We tried to get all the offical contacts you might need in your college journey.</p>
                        <button className="cstmbtn6 home__btn"> <Link to="/contacts"> Learn More</Link> </button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Home
