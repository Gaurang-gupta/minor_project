import React from 'react'
import programElective from '../programElective';
import Card from './Card';
import branches from '../branches';
import "./ProgramElective.css";
function ProgramElective({ branch }) {
    branch = branch.substring(16, branch.length);
    const br = branch.split('/');
    branch = br[0];
    return (
        <div>
            <h1 className="programElective__heading">{branches[branch]}</h1>
            <div className="programElective__container">
                {
                    Object.keys(programElective[branch]).map(key => (
                        <>
                            <Card heading={key} subjects={programElective[branch][key]} />
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default ProgramElective
