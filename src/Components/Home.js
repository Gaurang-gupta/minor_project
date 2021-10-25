import React from 'react'
import "./Home.css";
// import { Button } from '@material-ui/core';
function Home() {
    return (
        <>
            <div className="about">
                <h1 clasName="first">Saving your time is what we intent.</h1>
                <h2 className="second-head">
                    A Biola education prepares you completely.
                </h2>
                <p className="fpara">BSW (Board for Student Welfare) is primarily a student body consisting of student representatives from each hostel and a few faculty members. The Board has been constituted to formulate various welfare initiatives, organise social events and provide mentorship to students across multiple domains. Our work includes giving financial help, informative sessions, counselling, mentorship, etc. </p>
            </div>
            <div className="contentdiv">
                <h1>Where to find what?</h1>
                <div className="gridbox">
                    <div className="box1">
                        <h3>Question papers</h3>
                        <p>Here you can find available previous year papers of 10 years.</p>
                        <button className="cstmbtn1"> Learn More </button>
                       
                    </div>
                    <div className="box2">
                        <h3>Time Table/Calendar</h3>
                        <p>Get the time table of all the branches with syllabus and NITJ Academic calendar.</p>
                        <button className="cstmbtn2"> Learn More </button>
                    </div>
                    <div className="box3">
                        <h3>E-Library</h3>
                        <p>Find the book of your interest in NITJ'S E-library and Ntional Digital Library.</p>
                        <button className="cstmbtn3"> Learn More </button>
                    </div>
                    <div className="box4">
                        <h3>Fee & From Links</h3>
                        <p>We attached all important fee and form links to ease the last day hustle. </p>
                        <button className="cstmbtn4"> Learn More </button>
                    </div>
                    <div className="box5">
                        <h3>Softwares</h3>
                        <p>Here you can find software our college purchased and complete guide to install them. </p>
                        <button className="cstmbtn5"> Learn More </button>
                    </div>
                    <div className="box6">
                        <h3>Contacts</h3>
                        <p> We tried to get all the contacts you might need in your college journey.</p>
                        <button className="cstmbtn6"> Learn More </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home
