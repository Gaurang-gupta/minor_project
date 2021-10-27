import React from 'react'

function CE({ branch }) {
    return (
        <div className="branch__name">
            <h1 className="branch__name__heading">{branch}</h1>
            <ol className="branch__name__list">
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">ASPEN</h2>
                    <p>It is a process simulation software package widely used in industry today. ASPEN uses mathematical models to predict the performance of the process. ASPEN can handle very complex processes, including multiple-column separation systems, chemical reactors, distillation of chemically reactive compounds, and even electrolyte solutions like mineral acids and sodium hydroxide solutions.ASPEN does not design the process. It takes a design that the user supplies and simulates the performance of the process specified in that design.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">PIPENET</h2>
                    <p>PIPENET is used for the rapid fluid flow analysis of pipe and duct networks. Three modules (Standard Module, Spray/Sprinkler Module, Transient Module) ensure that, no matter how complex your network, PIPENET software will perform flow simulation fast and accurately.It is the leader in this category.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">CHEMCAD</h2>
                    <p>It broadens the approach and scope of the chemical engineers everywhere with enhanced process simulation software, It is used to enhance the productivity by solving day to day tasks and can solve the most difficult process models with its flexibility in handling.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">AFT Fathom</h2>
                    <p>For pressure drop calculations and pipe flow distributions AFT Fathom is one of the best. It can be used in low velocity profiles also. It can Model a wide range of system components for both design and operational cases. It has an additional feature that is can calculate the cost of system pipes and components</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">AutoCAD P&ID</h2>
                    <p>For piping and Instrumentation diagrams AutoCAD P&ID software is the leader in category.Its simple and approach allows a process engineer to create, modify, and manage piping and instrumentation diagrams. Most complicated flow sheets and Diagrams become simple to understand with this software</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Computational Fluid Dynamics (CFD)</h2>
                    <p>As process Engineers has to deal with different types of fluids ,so to analyse their behaviour   in different conditions is one of the toughest task ,CFD is the relief for this particular problem .It analyses laminar as well as turbulent flows, multiphase flows and compressible and Incompressible flows</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Matlab</h2>
                    <p>MATLAB is one of the best software packages in Chemical engineering to plot data and for numerical calculations. It is used to plot different equations in different conditions</p>
                </li>

            </ol>
        </div>
    )
}

export default CE
