import React, { useState } from 'react'
import { VscChevronDown } from "react-icons/vsc";
import { VscChevronUp } from "react-icons/vsc"
import "./FaqQuestion.css"
const FaqQuestion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isAnswer = () => {
        setIsOpen(() => (!isOpen))
    }
    return (
        <div className='FaqQuestion__container'>
            <div onClick={() => isAnswer()} className="FaqQuestion__question">
                {question}
                {isOpen ? <VscChevronUp /> : <VscChevronDown />}
            </div>
            <div className={`${!isOpen && "FaqQuestion__answerDisplay"} FaqQuestion__answer`}>
                <p className='FaqQuestion__answerPara'>
                    {answer}
                </p>
            </div>
        </div>
    )
}

export default FaqQuestion
