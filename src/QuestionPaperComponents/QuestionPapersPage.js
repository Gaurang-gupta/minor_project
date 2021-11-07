import React from 'react'
import Card2 from './Card2';
import "./QuestionPaperPage.css"
function QuestionPapersPage({ head }) {
    const br = head.split('/');
    const h = br[br.length - 1];
    return (
        <div>
            <h1 className="questionPapersPage__heading">{h}</h1>
            <div className="questionPapersPage__container">
                <Card2 heading="Minor 1" subjects={["test"]} />
                <Card2 heading="Minor 2" subjects={["test"]} />
                <Card2 heading="End Semester" subjects={["test"]} />
            </div>
        </div>
    )
}

export default QuestionPapersPage
