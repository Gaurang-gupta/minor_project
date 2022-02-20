import Card2 from './Card2';
import "./QuestionPaperPage.css"
function QuestionPapersPage({ head, search }) {
    const br = head.split('/');
    const h = br[br.length - 1];
    return (
        <div>
            <h1 className="questionPapersPage__heading">{h}</h1>
            <div className="questionPapersPage__container">
                <Card2 heading="Minor 1" head={head} search={search} />
                <Card2 heading="Minor 2" head={head} search={search} />
                <Card2 heading="End Semester" head={head} search={search} />
            </div>
        </div>
    )
}

export default QuestionPapersPage
