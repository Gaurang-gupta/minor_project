import React from 'react'
import "./QuestionPapersOfBranches.css"
import branches from '../branches'
function QuestionPapersOfBranches({branch}) {
    const br = branch.substring(16,branch.length);
    console.log(br);
    return (
        <div className="QuestionPapersOfBranches">
            <h1>{branches[br]}</h1>
        </div>
    )
}

export default QuestionPapersOfBranches
