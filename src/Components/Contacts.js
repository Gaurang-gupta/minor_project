import React, { useState } from 'react'
import Topcase from './Topcase';
import './Contacts.css';
function Contacts() {
    const [hostel,setHostel] = useState(true);
    const [bank,setBank] = useState(true);
    const [dept,setDept] = useState(true);
    const [disp,setDisp] = useState(true);
    const [po,setPO] = useState(true);
    const clickHostel = ()=>{
        setHostel(()=>(!hostel));
        console.log(hostel);
    }

    const clickBank = ()=>{
        setBank(()=>(!bank));
    }

    const clickDept = ()=>{
        setDept(()=>(!dept));
    }

    const clickDisp = ()=>{
        setDisp(()=>(!disp));
    }

    const clickPO = ()=>{
        setPO(()=>(!po));
    }
    
    return (
        <>
        <Topcase heading={"Emergency Contacts"} content={"Detailed below are the websites of E-Books available for the Institute:"}/>
        <div className="contacts">
            <div onClick={clickHostel} className="contacts__row" id={!hostel && "row__one"}>
                <div className={hostel ? "contacts__heading" : 'contacts__heading__new rotate'}><span>Hostels</span></div>
                <div className={hostel ? "contacts__content" : 'contacts__content__new'}>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>5</li>
                    </ul>
                </div>
            </div>
            <div onClick={clickBank} className="contacts__row" id={!bank && "row__two"}>
                <div className={bank ? "contacts__heading" : 'contacts__heading__new rotate'}><span>Banks</span></div>
                <div className={bank ? "contacts__content" : 'contacts__content__new'}>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>5</li>
                    </ul>
                </div>
            </div>
            <div onClick={clickDept} className="contacts__row" id={!dept && "row__three"}>
                <div className={dept ? "contacts__heading" : 'contacts__heading__new rotate'}><span>Departments</span></div>
                <div className={dept ? "contacts__content" : 'contacts__content__new'}>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>5</li>
                    </ul>
                </div>
            </div>
            <div onClick={clickDisp} className="contacts__row" id={!disp && "row__four"}>
                <div className={disp ? "contacts__heading" : 'contacts__heading__new rotate'}><span>Dispensary</span></div>
                <div className={disp ? "contacts__content" : 'contacts__content__new'}>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>5</li>
                    </ul>
                </div>
            </div>
            <div onClick={clickPO} className="contacts__row" id={!po && "row__five"}>
                <div className={po ? "contacts__heading" : 'contacts__heading__new rotate'}><span>Post Office</span></div>
                <div className={po ? "contacts__content" : 'contacts__content__new'}>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>5</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contacts
