import React,{useState} from 'react'
import "./Faq.css"
import Topcase from './Topcase';
import Dropdown from './Dropdown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import "./Navbar.css";
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
function Faq() {
    const [isDropDownOpen,setDropDownOpen] = useState(false);
    const [isNavOpen, setNavOpen] = useState(false);
    const dropDownChangeHandler = () => {
        setDropDownOpen(()=>(!isDropDownOpen));
    }

    const navChangeHandler = () =>{
        setNavOpen(()=>(!isNavOpen));
    }

    return (
        <>
        <Topcase heading={"Frequently asked questions"} content={" We tried to club some general querries asked by the students of NIT jalandhar. We hope you find them useful."}/>
        <div className="containerf">
       
     
         <div className="accordion">
            <div className="accordion-item" id="question1">

            <a className="accordion-link" href="#question1">
            Q. What are the timings of library and Ex-Hall?
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
              <p>  0ljtyRDyTEHJ7ZArWL4jOnuvf2LGLabYEK0rMcGDEjp8zWZ0egssxETO1QXJIVWI9eh68wTRntGBBFsH3XxCJJAaAZ9R60mZniwDAiT6xHmTpwBWSvhg0ltaIgwfgdvl</p>
            </div>
        </div>
            <div className="accordion-item" id="question2">

            <a className="accordion-link" href="#question2">
            Q. Can we move in/out of the campus any time?
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
             <p>   Yes. You live in a free country and a free campus. You are free to move in and out whenever you wish to. But from 1am- 6am, entry/exit is only through Main Gate.</p>
            </div>
        </div>
            <div className="accordion-item" id="question3">

            <a className="accordion-link" href="#question3">
            Q. Are girls allowed in boys hostel? and vice-versa?
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
              <p>  No. IIT Delhi is one of the strictest institutes in India when it comes to this. No girl can enter beyond the visitor's room in a boy's hostel and vice-versa.</p>
            </div>
        </div>
            <div className="accordion-item" id="question4">

            <a className="accordion-link" href="#question4">
            Q. When can we apply for department change?
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
             <p>   a. At the end of 1st year, after the end-sem exams, the forms are released in the internal web. You will be notified about it.
b. Also at the end of third year you can change from btech to dual degree course in same branch.
</p>
            </div>
            </div>
            <div className="accordion-item" id="question5">

            <a className="accordion-link" href="#question5">
            Q. Canteens/restaurants in/near the campus?
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
             <p>   0ljtyRDyTEHJ7ZArWL4jOnuvf2LGLabYEK0rMcGDEjp8zWZ0egssxETO1QXJIVWI9eh68wTRntGBBFsH3XxCJJAaAZ9R60mZniwDAiT6xHmTpwBWSvhg0ltaIgwfgdvl</p>
            </div>
            </div>
            <div className="accordion-item" id="question6">

            <a className="accordion-link" href="#question6">
            Q. What are the timings of bus?
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
             <p>   0ljtyRDyTEHJ7ZArWL4jOnuvf2LGLabYEK0rMcGDEjp8zWZ0egssxETO1QXJIVWI9eh68wTRntGBBFsH3XxCJJAaAZ9R60mZniwDAiT6xHmTpwBWSvhg0ltaIgwfgdvl</p>
            </div>
            </div>
            <div className="accordion-item" id="question7">

            <a className="accordion-link" href="#question7">
            Q. How to reach NIT campus?
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
             <p>   0ljtyRDyTEHJ7ZArWL4jOnuvf2LGLabYEK0rMcGDEjp8zWZ0egssxETO1QXJIVWI9eh68wTRntGBBFsH3XxCJJAaAZ9R60mZniwDAiT6xHmTpwBWSvhg0ltaIgwfgdvl</p>
            </div>
            </div>
            <div className="accordion-item" id="question8">

            <a className="accordion-link" href="#question8">
            Q. How can I be allowed to stay in hostel during vacations?
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
             <p>   Students are not allowed to stay in hostel during vacations unless they have beforehand informed the warden/care-taker about their stay. They will be permitted only in case they are doing a course/ project/internship within the binding of the institute.</p>
            </div>
            </div>
            <div className="accordion-item" id="question9">

            <a className="accordion-link" href="#question9">
            Q. Am I allowed to bring my bike/car to campus?
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
             <p>   No. No student residing within the campus is allowed to use a motorised vehicle(Not even a moped) within the campus. It would result in the immediate cancellation of the hostel seat, strict disciplinary action and a fine of Rs. 5000(for 2-wheelers) and Rs.10000(for 4-wheelers). Too much for a vehicle. Go Green. Go cycling.</p>
            </div>
            </div>
            <div className="accordion-item" id="question10">

            <a className="accordion-link" href="#question10">
            Q. What Medical facilities are available near the campus?
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
             <p>   Hospital in campus open 24hrs. If facilities are insufficient here, you are referred to AIIMS/Safdargunj. Ambulance is available on campus anytime. Just contact the nearest security guard and he will make sure the ambulance is right there within no time. Also, there are a lot of Private Hospitals near IITD. You may ask the ambulance to take you there instead if things are serious and cannot wait to reach AIIMS. Do not worry about the hospital fee as it is covered by your Medical Insurance.</p>
            </div>
            </div>
            <div className="accordion-item" id="question11">

            <a className="accordion-link" href="#question11">
            Q. What to do if I-Card is lost ?
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
             <p>   0ljtyRDyTEHJ7ZArWL4jOnuvf2LGLabYEK0rMcGDEjp8zWZ0egssxETO1QXJIVWI9eh68wTRntGBBFsH3XxCJJAaAZ9R60mZniwDAiT6xHmTpwBWSvhg0ltaIgwfgdvl</p>
            </div>
            </div>
            <div className="accordion-item" id="question12">

            <a className="accordion-link" href="#question12">
            Q. Nearby movie theatres
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
             <p>   0ljtyRDyTEHJ7ZArWL4jOnuvf2LGLabYEK0rMcGDEjp8zWZ0egssxETO1QXJIVWI9eh68wTRntGBBFsH3XxCJJAaAZ9R60mZniwDAiT6xHmTpwBWSvhg0ltaIgwfgdvl</p>
            </div>
            </div>
            <div className="accordion-item" id="question13">

            <a className="accordion-link" href="#question13">
           Q. Where to get pens, registers, calculators and lab coats from?
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
             <p>   0ljtyRDyTEHJ7ZArWL4jOnuvf2LGLabYEK0rMcGDEjp8zWZ0egssxETO1QXJIVWI9eh68wTRntGBBFsH3XxCJJAaAZ9R60mZniwDAiT6xHmTpwBWSvhg0ltaIgwfgdvl</p>
            </div>
            </div>
            <div className="accordion-item" id="question14">

            <a className="accordion-link" href="#question14">
            Q. Where to go for books?
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
             <p>   0ljtyRDyTEHJ7ZArWL4jOnuvf2LGLabYEK0rMcGDEjp8zWZ0egssxETO1QXJIVWI9eh68wTRntGBBFsH3XxCJJAaAZ9R60mZniwDAiT6xHmTpwBWSvhg0ltaIgwfgdvl</p>
            </div>
            </div>
            <div className="accordion-item" id="question15">

            <a className="accordion-link" href="#question15">
            Q. Where to get things like soap shampoo etc from ?
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
             <p>   0ljtyRDyTEHJ7ZArWL4jOnuvf2LGLabYEK0rMcGDEjp8zWZ0egssxETO1QXJIVWI9eh68wTRntGBBFsH3XxCJJAaAZ9R60mZniwDAiT6xHmTpwBWSvhg0ltaIgwfgdvl</p>
            </div>
            </div>
            <div className="accordion-item" id="question16">

            <a className="accordion-link" href="#question16">
            Q. How to get a medical booklet and what is the use of it?
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
             <p>   0ljtyRDyTEHJ7ZArWL4jOnuvf2LGLabYEK0rMcGDEjp8zWZ0egssxETO1QXJIVWI9eh68wTRntGBBFsH3XxCJJAaAZ9R60mZniwDAiT6xHmTpwBWSvhg0ltaIgwfgdvl</p>
            </div>
            </div>
            <div className="accordion-item" id="question17">

            <a className="accordion-link" href="#question17">
            Q. What is a medical certificate, what is the use and how to get it?
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
             <p>   0ljtyRDyTEHJ7ZArWL4jOnuvf2LGLabYEK0rMcGDEjp8zWZ0egssxETO1QXJIVWI9eh68wTRntGBBFsH3XxCJJAaAZ9R60mZniwDAiT6xHmTpwBWSvhg0ltaIgwfgdvl</p>
            </div>
            </div>
            <div className="accordion-item" id="question18">

            <a className="accordion-link" href="#question18">
            Q. Are we allowed to go anywhere in the IIT campus?
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
             <p>   0ljtyRDyTEHJ7ZArWL4jOnuvf2LGLabYEK0rMcGDEjp8zWZ0egssxETO1QXJIVWI9eh68wTRntGBBFsH3XxCJJAaAZ9R60mZniwDAiT6xHmTpwBWSvhg0ltaIgwfgdvl</p>
            </div>
            </div>
            <div className="accordion-item" id="question19">

            <a className="accordion-link" href="#question19">
            Q. Where to get things like soap shampoo etc from ?
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
             <p>   0ljtyRDyTEHJ7ZArWL4jOnuvf2LGLabYEK0rMcGDEjp8zWZ0egssxETO1QXJIVWI9eh68wTRntGBBFsH3XxCJJAaAZ9R60mZniwDAiT6xHmTpwBWSvhg0ltaIgwfgdvl</p>
            </div>
            </div>
            <div className="accordion-item" id="question20">

            <a className="accordion-link" href="#question20">
            Q. Can 1st year students go out of their hostels ?
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
             <p>   0ljtyRDyTEHJ7ZArWL4jOnuvf2LGLabYEK0rMcGDEjp8zWZ0egssxETO1QXJIVWI9eh68wTRntGBBFsH3XxCJJAaAZ9R60mZniwDAiT6xHmTpwBWSvhg0ltaIgwfgdvl</p>
            </div>
            </div>
            <div className="accordion-item" id="question21">

            <a className="accordion-link" href="#question21">
            Q. When will fresher's party is organized ?
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
             <p>   0ljtyRDyTEHJ7ZArWL4jOnuvf2LGLabYEK0rMcGDEjp8zWZ0egssxETO1QXJIVWI9eh68wTRntGBBFsH3XxCJJAaAZ9R60mZniwDAiT6xHmTpwBWSvhg0ltaIgwfgdvl</p>
            </div>
            </div>
            <div className="accordion-item" id="question22">

            <a className="accordion-link" href="#question22">
            Q. How can we access wifi in college campus ?
                <ArrowDropDownIcon className="down"/>
                <ArrowDropUpIcon className="up"/>
            </a>
            <div className="answer">
             <p>   0ljtyRDyTEHJ7ZArWL4jOnuvf2LGLabYEK0rMcGDEjp8zWZ0egssxETO1QXJIVWI9eh68wTRntGBBFsH3XxCJJAaAZ9R60mZniwDAiT6xHmTpwBWSvhg0ltaIgwfgdvl</p>
            </div>
            </div>
        </div> 
        </div>

        {/* <a data-toggle="collapse" href="#collapse1">
                                                    <div class="panel-heading mt-1" >
                                                            <h5 class="panel-title">
                                                                Q. When can I contact the BSW representatives/ secretaries? 
                                                            <span class="float-md-right ml-sm-2 rotate ml-md-0 mt-1 mr-2 fa fa-arrow-up"  id="arrow-faq1"></span></h5>
                                                        </div>
                                                    </a>
                                                    <div id="collapse1" class="panel-collapse collapse ">
                                                        <div class="panel-body" >You can contact any rep or secy
                                                            at any time regarding any problem through the contact details given in the
                                                            Contact Us page.
                                                        </div>
                                                    </div>
                                                
                <ul >
                   
                    <li >
                        <div onClick={dropDownChangeHandler}>
                        Q. When can we apply for department change? {!isDropDownOpen ? <ArrowDropDownIcon/> : <ArrowDropUpIcon/>}
                        </div>
                        <div className="toggle">
                <Button onClick={navChangeHandler}>{isNavOpen ? <ArrowDropUpIcon/>:<ArrowDropDownIcon/>}</Button>
            </div>
                        {isDropDownOpen && 
                        <div> a. At the end of 1st year, after the end-sem exams, the forms are released in the internal web. You will be notified about it.
                        b. Also at the end of third year you can change from btech to dual degree course in same branch.
                        </div>
                        }
                    </li>
                    <li >
                        <div onClick={dropDownChangeHandler}>
                        Q. Canteens/restaurants in/near the campus? {!isDropDownOpen ? <ArrowDropDownIcon/> : <ArrowDropUpIcon/>}
                        </div>
                        {isDropDownOpen && 
                        <div> a. At the end of 1st year, after the end-sem exams, the forms are released in the internal web. You will be notified about it.
                        b. Also at the end of third year you can change from btech to dual degree course in same branch.
                        </div>
                        }
                    </li>
                    <li >
                        <div onClick={dropDownChangeHandler}>
                        Q. When can we apply for department change? {!isDropDownOpen ? <ArrowDropDownIcon/> : <ArrowDropUpIcon/>}
                        </div>
                        {isDropDownOpen && 
                        <div> a. At the end of 1st year, after the end-sem exams, the forms are released in the internal web. You will be notified about it.
                        b. Also at the end of third year you can change from btech to dual degree course in same branch.
                        </div>
                        }
                    </li>
                    <li >
                        <div onClick={dropDownChangeHandler}>
                        Q. When can we apply for department change? {!isDropDownOpen ? <ArrowDropDownIcon/> : <ArrowDropUpIcon/>}
                        </div>
                        {isDropDownOpen && 
                        <div> a. At the end of 1st year, after the end-sem exams, the forms are released in the internal web. You will be notified about it.
                        b. Also at the end of third year you can change from btech to dual degree course in same branch.
                        </div>
                        }
                    </li>
                    <li >
                        <div onClick={dropDownChangeHandler}>
                        Q. When can we apply for department change? {!isDropDownOpen ? <ArrowDropDownIcon/> : <ArrowDropUpIcon/>}
                        </div>
                        {isDropDownOpen && 
                        <div> a. At the end of 1st year, after the end-sem exams, the forms are released in the internal web. You will be notified about it.
                        b. Also at the end of third year you can change from btech to dual degree course in same branch.
                        </div>
                        }
                    </li>
                    
                </ul>
          
            */}
       </>
    )
}

export default Faq