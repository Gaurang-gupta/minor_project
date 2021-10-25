import React from 'react'
import "./ECE.css"

function ME({ branch }) {
    return (
        <div className="branch__name">
            <h1 className="branch__name__heading">{branch}</h1>
            <ol className="branch__name__list">
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Mathcad</h2>
                    <p>Mathcad is possibly the one piece of software that is useful to every mechanical engineer, regardless of job function. Mathcad gives you the ability to do math within a document, as well as to add relevant images and text to explain your work. You can add plots which either read from arrays of data, or which can be linked to defined equations. The result is a beautifully formatted document containing your "hand" calculations.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Computer Aided Design (CAD) Software</h2>
                    <p>A 3D CAD (Computer Aided Design) package is especially useful to any engineer with a focus on design. This software allows you to build 3D models of parts and assemblies. For instance, you could model all of the individual parts of an engine, and then combine them into an assembly. This will allow you to ensure that all of the parts fit together as intended. Many CAD packages allow you to do things like allow motion of parts (i.e. to allow a shaft to rotate) and to check for interferences between parts. Most CAD packages have a drafting component that allows you to create 2D drawings of your parts so that they can be manufactured. Many CAD tools also have direct integration into an FEA (Finite Element Analysis) package so you can iterate seamlessly between design and analysis. Popular examples of 3D CAD software include SolidWorks, Unigraphics NX, CATIA, and Autodesk Inventor.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Finite Element Analysis (FEA) Software</h2>
                    <p>Finite Element Analysis (FEA) is useful to any engineer that needs to perform structural analysis. This software allows you to analyze stresses and deflections in complex structures. Popular examples include ANSYS and Nastran. Typically a structure will be modeled in a 3D CAD program and then ported over to the FEA software. Previously, the porting process involved exporting the CAD model to a file format that could then be interpreted by the FEA software, but now many FEA packages integrate directly with CAD packages to make the transition seamless. Once the geometry is built, a mesh is created to discretize the structure into elements. Forces and constraints are applied, and the model can then be solved. From the solved model you can interrogate stresses and deflections in the structure.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Microsoft Excel</h2>
                    <p>Excel is probably the most versatile software used not just by mechanical engineers, but by nearly every office worker. Excel is useful for quick calculations, for tabulating data, for laying out ideas, for drawing with shapes, for basic programming -- the possibilities are endless.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Visual Basic for Applications (VBA)</h2>
                    <p>Visual Basic for Applications (VBA) is the programming language built into all of the Microsoft Office products. It is useful for automating Excel files, Access files, Word files, and any other files created using the MS Office suite. It can be a bit clunky and awkward to use compared to other more full-featured programming languages, but its direct integration into MS Office makes it an incredibly compelling option for implementing small scripts to perform basic automation tasks.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">MATLAB</h2>
                    <p>MATLAB is the programming language/environment of choice among mechanical engineers. MATLAB is essential for doing more complex numerical analysis where simple math doesn't cut it and a programming solution is required. MATLAB is especially well suited for calculations with matrices and vectors. It has an excellent plotting capability, so it is easy to run a simulation and then quickly display results. There are many additional libraries available for purchase for doing more complicated things such as optimization and control system design, among others.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">Python</h2>
                    <p>Python is a general-purpose programming language with a strong capability for scientific programming. Because of this, Python is an excellent alternative to MATLAB. Python is open-source, and many useful libraries are actively developed and maintained by the widespread Python community. Comparable functionality to MATLAB can be achieved by installing the NumPy, SciPy, and Matplotlib libraries. There are many other scientific libraries available such as Pandas that are worth looking into as well.</p>
                </li>
                <li className="branch__name__listItem">
                    <h2 className="branch__name__software__heading">MechaniCalc</h2>
                    <p> MechaniCalc is a suite of web-based calculators focused on machine design and structural analysis. These calculators perform analysis with a level of detail and comprehensiveness that would be expected in industry while also being intuitive and accessible. Use these calculators to move through design and analysis cycles more quickly and with greater confidence.</p>
                </li>
            </ol>

        </div>
    )
}

export default ME
