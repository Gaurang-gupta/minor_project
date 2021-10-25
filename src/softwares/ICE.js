import React from 'react'
import "./ECE.css"
function ICE({ branch }) {
    return (
        <div className="branch__name">
            <h1 className="branch__name__heading">{branch}</h1>
            <ol className="branch__name__list">
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Matlab</h2>
                    <p>MATLAB (MATrix LABarotary) is the most popular electrical engineering software among Electrical Engineering students. It was launched in 1983 by Mathworks Inc. and was one of the first commercial packages for linear algebra. It has evolved over time and has become the most comprehensive software for Numerical Computing, Dyanimc System Simulations, Algebraic Solutions, Symbolic Mathematics etc. It contains add-on packages (called Toolboxes) for various functionalities. Toolboxes provide built-in functions to perform numerical computations including but not limited to Ordinary & Partial Differential Equations, Optimization, Linear System Implementation, Linear Algebra, Control System Design, System Identification, Curve Fitting.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">LabVIEW (Designing Interfacing and HMIs)</h2>
                    <p>LabVIEW (Laborartory Virtual Instruments Engineering Workbench) is a systems engineering software for applications that require test, measurement, and control with rapid access to hardware and data insights. The LabVIEW software offers a graphical programming approach that helps you visualize every aspect of your application, including hardware configuration, measurement data, and debugging. This visualization makes it simple to integrate measurement hardware from any vendor, represent complex logic on the diagram, develop data analysis algorithms, and design custom engineering user interfaces.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Computer Aided Design (CAD) Software</h2>
                    <p>A 3D CAD (Computer Aided Design) package is especially useful to any engineer with a focus on design. This software allows you to build 3D models of parts and assemblies. For instance, you could model all of the individual parts of an engine, and then combine them into an assembly. This will allow you to ensure that all of the parts fit together as intended. Many CAD packages allow you to do things like allow motion of parts (i.e. to allow a shaft to rotate) and to check for interferences between parts. Most CAD packages have a drafting component that allows you to create 2D drawings of your parts so that they can be manufactured. Many CAD tools also have direct integration into an FEA (Finite Element Analysis) package so you can iterate seamlessly between design and analysis. Popular examples of 3D CAD software include SolidWorks, Unigraphics NX, CATIA, and Autodesk Inventor.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">SPI- Smart Plant Instrumentation (INTools)</h2>
                    <p>This is a leading software in Instrumentation management, control valve and orifice plate sizing, instrumentation data sheet, Programmable Logic Controller (PLC) wiring, PLC-DCS I/O assignment, and many more. However, this software is required to be known to those in designing field of instrumentation, it’s of little use to those in maintenance field.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">ModScan</h2>
                    <p>ModScan is a Windows application which operates as a modbus master. It allows you to access and change data points in a connected slave device using either the RTU or ASCII Transmission mode. ModScan is ideally suited for quick and easy compliance testing of the modbus protocol and its built-in display of serial traffic allows effective troubleshooting of field connections. The CE version of ModScan operates on any PocketPC running Windows CE 3.00, such as the ComPAQ iPAQ, ComPAQ Aero, HP Jornada, and Casio E-115.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">PLC logic software</h2>
                    <p>These will be essential to learn but at the same time it is not practical for any one to be completely proficient in all the PLCs available but at least be good in a few. These software are used to write down the logic programs. Simatic S7 series by Siemens, RS Logix by Allen Bradley, Unity Pro XL by Schneider are few that can be expertized over.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">PLC Scada software</h2>
                    <p>Now these are different from the above ones, these are used to create Human Machine Interface graphic drawings which are ultimately linked up with the above software for logic implementation. WinCC Professional by Siemens, Vijeo Citect by Schneider, Factory talk view SE- Rockwell, GE – Cimplicity are few to be named</p>
                </li>

            </ol>
        </div>
    )
}

export default ICE
