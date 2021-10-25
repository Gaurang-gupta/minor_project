import React from 'react'
import "./ECE.css"
function ECE({ branch }) {
    return (
        <div className="branch__name">
            <h1 className="branch__name__heading">{branch}</h1>
            <ol className="branch__name__list">
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Matlab</h2>
                    <p>MATLAB is a programming and numeric computing platform used by millions of engineers and scientists to analyze data, develop algorithms, and create models.MATLAB combines a desktop environment tuned for iterative analysis and design processes with a programming language that expresses matrix and array mathematics directly. It includes the Live Editor for creating scripts that combine code, output, and formatted text in an executable notebook.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">NI Multisim</h2>
                    <p>
                        NI Multisim (formerly MultiSIM) is an electronic schematic capture and simulation program which is part of a suite of circuit design programs, along with NI Ultiboard. Multisim is one of the few circuit design programs to employ the original Berkeley SPICE based software simulation. Multisim was originally created by a company named Electronics Workbench Group, which is now a division of National Instruments. Multisim includes microcontroller simulation (formerly known as MultiMCU), as well as integrated import and export features to the printed circuit board layout software in the suite, NI Ultiboard.

                        Multisim is widely used in academia and industry for circuits education, electronic schematic design and SPICE simulation.
                    </p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">C/C++ language</h2>
                    <p>
                        C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms.
                    </p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Pspice software.</h2>
                    <p>
                        SPICE ("Simulation Program with Integrated Circuit Emphasis") is a general-purpose, open-source analog electronic circuit simulator. It is a program used in integrated circuit and board-level design to check the integrity of circuit designs and to predict circuit behavior. It's first two versions are written in Fortran language and the latest SPICE 3 is written in C language.
                    </p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">AWR for microwave circuit simulation.</h2>
                    <p>
                        AWR Corporation is an electronic design automation (EDA) software company, formerly known as Applied Wave Research, and then acquired by National Instruments
                        The company develops, markets, sells and supports engineering software, which provides a computer-based environment for the design of hardware for wireless and high speed digital products. AWR software is used for radio frequency (RF), microwave and high frequency analog circuit and system design. Typical applications include cellular and satellite communications systems and defense electronics including radar, electronic warfare and guidance systems.
                    </p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">System view</h2>
                    <p>
                        SystemView is an application (for Windows, macOS or Linux) that performs system analysis and verification of embedded systems.
                        No changes are required to the hardware or to the software of Target Systems when using a supported RTOS.
                        For other systems, a small software module, that comes with SystemView (the recorder), has to be added.
                        SystemView can be used with any embedded system and is best with streaming data transfer, through J-Link, UART or TCP/IP.
                    </p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">HFSS by Ansys for antenna design and simulation.</h2>
                    <p>It stands for High Frequency Structure Simulator. It is a Multipurpose, full wave 3D electromagnetic (EM) simulation software for designing and simulating high-frequency electronic products such as antennas, components, interconnects, connectors, ICs and PCBs.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">LabVIEW</h2>
                    <p>
                        Laboratory Virtual Instrument Engineering Workbench (LabVIEW) is a system-design platform and development environment for a visual programming language from National Instruments. The graphical language is named "G"; not to be confused with G-code. The G dataflow language was originally developed by Labview,[2] LabVIEW is commonly used for data acquisition, instrument control, and industrial automation on a variety of operating systems (OSs), including Microsoft Windows as well as various versions of Unix, Linux, and macOS.
                    </p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">EDA tool for logic circuit simulation.</h2>
                    <p>
                        Electronic design automation (EDA), also referred to as electronic computer-aided design (ECAD), is a category of software tools for designing electronic systems such as integrated circuits and printed circuit boards. The tools work together in a design flow that chip designers use to design and analyze entire semiconductor chips. Since a modern semiconductor chip can have billions of components, EDA tools are essential for their design; this article in particular describes EDA specifically with respect to integrated circuits (ICs).
                    </p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Cadence Virtuoso</h2>
                    <p>
                        The Cadence Virtuoso System Design Platform is a holistic, system-based solution that provides the functionality to drive simulation and LVS-clean layout of ICs and packages from a single schematic. There are two key flows: implementation and analysis.The implementation flow is used to create an IC package schematic in Virtuoso Schematic Editor and then transfer the schematic data to Cadence SiP Layout to layout the physical design. In addition, this flow offers the capability to generate and verify library parts, output a bill of materials (BOM), and
                        perform layout versus schematic (LVS) checking.
                    </p>
                </li>
            </ol>
        </div>
    )
}

export default ECE
