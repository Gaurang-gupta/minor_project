import React from 'react'
import Card2 from './Card2';
import "./QuestionPaperPage.css"
function QuestionPapersPage({ head, search }) {
    console.log(head);
    console.log(search);
    const br = head.split('/');
    const h = br[br.length - 1];
    return (
        <div>
            <h1 className="questionPapersPage__heading">{h}</h1>
            <div className="questionPapersPage__container">
                <Card2 heading="Minor 1" papers={["test"]} />
                <Card2 heading="Minor 2" papers={["test"]} />
                <Card2 heading="End Semester" papers={["test"]} />
            </div>
        </div>
    )
}

export default QuestionPapersPage
