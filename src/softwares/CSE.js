import React from 'react'

function CSE({ branch }) {
    return (
        <div className="branch__name">
            <h1 className="branch__name__heading">{branch}</h1>
            <ol className="branch__name__list">
            <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">C/C++ language</h2>
                    <p>
                        C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms.
                    </p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Java</h2>
                    <p>
                    Java is a general-purpose, class-based, object-oriented programming language designed for having lesser implementation dependencies. It is a computing platform for application development. Java is fast, secure, and reliable, therefore. It is widely used for developing Java applications in laptops, data centers, game consoles, scientific supercomputers, cell phones, etc.
                    </p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Sublime Text/VS Code/Notepad+/Pycharm/Jupyter Notebook/DevC++</h2>
                    <p>
                    An integrated development environment (IDE) is a software application that provides comprehensive facilities to computer programmers for software development.
                    An IDE allows developers to start programming new applications quickly because multiple utilities don’t need to be manually configured and integrated as part of the setup process. Developers also don’t need to spend hours individually learning how to use different tools.
                    </p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">HTML/CSS/Java Script</h2>
                    <p>
                   
                    HTML provides the basic structure of sites, which is enhanced and modified by other technologies like CSS and JavaScript.
                    CSS is used to control presentation, formatting, and layout.
                    JavaScript is used to control the behavior of different elements.

                    </p>
                </li>
                 <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Linux</h2>
                    <p>
                    Just like Windows, iOS, and Mac OS, Linux is an operating system. In fact, one of the most popular platforms on the planet, Android, is powered by the Linux operating system. As an operating system, Linux is software that sits underneath all of the other software on a computer, receiving requests from those programs and relaying these requests to the computer’s hardware.
                    </p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Cygwin</h2>
                    <p>
                    Cygwin is an open source collection of tools that allows Unix or Linux applications to be compiled and run on a Windows operating system from within a Linux-like interface. This capability helps developers to migrate applications from Unix or Linux to Windows-based systems, and makes it easier to support their applications running on the Windows platform. Cygwin includes a dynamic link library (DLL) and a collection of tools. The DLL serves as a Linux emulator, and the tool set provides the Linux-like development environment.
                    </p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Papyrus</h2>
                    <p>
                    Papyrus is a graphical editing tool for UML2 as defined by OMG. Papyrus provides support for UML profiles. Every part of Papyrus may be customized: model explorer, diagram editors, property editors, etc.
                    Papyrus also provides a complete support to SysML in order to enable model-based system engineering. It includes an implementation of the SysML static profile and the specific graphical editors required for SysML. 
                    </p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Emulator</h2>
                    <p>
                    An emulator is software or hardware that allows one computer system (host) to function like another computer system. Usually, it allows the host machine to run software or use guest system-designed peripheral devices.
                    </p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Keil</h2>
                    <p>
                    Keil MDK is the complete software development environment for a range of Arm Cortex-M based microcontroller devices. MDK includes the µVision IDE and debugger, Arm C/C++ compiler, and essential middleware components. It supports all silicon vendors with more than 9,000 devices and is easy to learn and use.
                    </p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">MySQL</h2>
                    <p>
                    MySQL is a relational database management system (RDBMS) developed by Oracle that is based on structured query language (SQL).
                    MySQL is one of the most recognizable technologies in the modern big data ecosystem. Often called the most popular database and currently enjoying widespread, effective use regardless of industry, it’s clear that anyone involved with enterprise data or general IT should at least aim for a basic familiarity of MySQL.
                    </p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">8085/8086 Simulator</h2>
                    <p>
                    Sim8085 is a online development environment for writing Intel 8085 microprocessor code. It can assemble, debug 8085 assembly code and simulate the 8085 microprocessor.

                    The simulator has two parts, an assembler (built using PEGjs) which translates 8085 assembly code to machine code and a 8085 microprocessor simulator (written in C and compiled to JS using Emscripten) which executes machine code. This web application is a graphical interface for the simulator. 
                    </p>
                </li>
            </ol>
        </div>
    )
}

export default CSE
