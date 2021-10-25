import React from 'react'
import "./ECE.css"
function EE({ branch }) {
    return (
        <div className="branch__name">
            <h1 className="branch__name__heading">{branch}</h1>
            <ol className="branch__name__list">
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Matlab</h2>
                    <p>MATLAB (MATrix LABarotary) is the most popular electrical engineering software among Electrical Engineering students. It was launched in 1983 by Mathworks Inc. and was one of the first commercial packages for linear algebra. It has evolved over time and has become the most comprehensive software for Numerical Computing, Dyanimc System Simulations, Algebraic Solutions, Symbolic Mathematics etc. It contains add-on packages (called Toolboxes) for various functionalities. Toolboxes provide built-in functions to perform numerical computations including but not limited to Ordinary & Partial Differential Equations, Optimization, Linear System Implementation, Linear Algebra, Control System Design, System Identification, Curve Fitting.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Simulink (GUI based software for Dynamic System Simulation)</h2>
                    <p>Simulink is the GUI based companion software for Matlab. It is powered by Matlab programming language. Many electrical engineers find Simulink much easier to use than MATLAB. When you use MATLAB® and Simulink® together, you combine textual and graphical programming to design your system in a simulation environment. Directly using the thousands of algorithms that are already in MATLAB. Use MATLAB to create input data sets to drive simulation. Run thousands of simulations in parallel. Then analyze and visualize the data in MATLAB.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Pspice (Electrical Schematic Software)</h2>
                    <p>OrCAD EE PSpice is a SPICE circuit simulator application for simulation and verification of analog and mixed-signal circuits. PSpice is an acronym for Personal Simulation Program with Integrated Circuit Emphasis. OrCAD EE typically runs simulations for circuits defined in OrCAD Capture, and can optionally integrate with the MATLAB/Simulink, using the Simulink to PSpice Interface (SLPS). OrCAD Capture and PSpice Designer together provide a complete circuit simulation and verification solution with schematic entry, native analog, mixed-signal, and analysis engines.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Multisim (Circuit Simulation & PCB Design Software)</h2>
                    <p>Multisim integrates industry-standard SPICE simulation with an interactive schematic environment to instantly visualize and analyze electronic circuit behavior. Its intuitive interface helps educators reinforce circuit theory and improve retention of theory throughout engineering curriculum. By adding powerful circuit simulation and analyses to the design flow, Multisim helps researchers and designers reduce printed circuit board (PCB) prototype iterations and save development costs.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">ETAP (An Electrical Engineering Software for Power Systems)</h2>
                    <p>Being an industry-standard software, ETAP (Electrical Transient Analyzer Program) is a full spectrum analytical electrical engineering software company specializing in the analysis, simulation, monitoring, control, optimization, and automation of electrical power systems. The ETAP software offers the best and most comprehensive suite of integrated power system enterprise solution that spans from modeling to operation.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Power World Simulator (Visual Electrical Engineering Software software)</h2>
                    <p>PowerWorld Simulator is an interactive power system simulation package designed to simulate high voltage power system operation on a time frame ranging from several minutes to several days. The software contains a highly effective power flow analysis package capable of efficiently solving systems of up to 250,000 buses.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">PSCAD (Electromagnetic Transient Analysis Software)</h2>
                    <p>PSCAD is an electrical engineering software package for electromagnetic transient analysis in power systems. It is developed by Manitoba Hydro Int. Ltd. based on the slogan “If you can dream it, you can simulate it. As power systems evolve, the need for accurate, intuitive simulation tools becomes more and more important. With PSCAD™/EMTDC™ you can build, simulate, and model your systems with ease, providing limitless possibilities in power system simulation. Included is a comprehensive library of system models ranging from simple passive elements and control functions to electric machines and other complex devices.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">PSS/E (An Electrical Engineering Software for Power System Simulations)</h2>
                    <p>PSSE is used by planning and operations engineers, consultants, universities, and research labs around the world. PSSE allows you to perform a wide variety of analysis functions, including power flow, dynamics, short circuit, contingency analysis, optimal power flow, voltage stability, transient stability simulation, and much more.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">LabVIEW (Designing Interfacing and HMIs)</h2>
                    <p>LabVIEW (Laborartory Virtual Instruments Engineering Workbench) is a systems engineering software for applications that require test, measurement, and control with rapid access to hardware and data insights. The LabVIEW software offers a graphical programming approach that helps you visualize every aspect of your application, including hardware configuration, measurement data, and debugging. This visualization makes it simple to integrate measurement hardware from any vendor, represent complex logic on the diagram, develop data analysis algorithms, and design custom engineering user interfaces.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Keil uVision</h2>
                    <p>For designing and testing embedded systems, microcontrollers are used extensively for control electrical instruments. Keil uVision provides an all-in-one solution for programming embedded devices.</p>
                </li>
            </ol>
        </div>
    )
}

export default EE
