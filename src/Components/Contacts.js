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
        <Topcase heading={"Emergency Contacts"} content={"Below are the enrgency contacts of the Institute:"}/>
        {/* <div className="contacts">
            <div onClick={clickHostel} className="contacts__row" id={!hostel && "row__one"}>
                <div className={hostel ? "contacts__heading" : 'contacts__heading__new rotate'}><span>Hostels</span></div>
                <div className={hostel ? "contacts__content" : 'contacts__content__new'}>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
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
                    </ul>
                </div>
            </div>
        </div> */}
         <div className="emergency">
            <h1>Department Contact info</h1>
            <ul>
                <li>
                    <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/index/52">
                    Computer Science and Engineering
                    </a>
                </li>
                <li>
                    <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/index/57">
                    Information Technology
                    </a>
                </li>
                <li>

                    <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/index/54">
                    Electronics and Communication Engineering
                    </a>
                </li>
                <li>
                    <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/index/58">
                    Instrumentation and Control Engineering
                    </a>
                </li>
                <li>
                    <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/index/56">
                    Industrial and Production Engineering
                    </a>
                </li>
                <li>
                    <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/index/60">
                    Mechanical Engineering
                    </a>
                </li>
                <li>
                    <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/index/51">
                    Civil Engineering
                    </a>
                </li>
                <li>
                    <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/index/63">
                    Textile Engineering
                    </a>
                </li>
                <li>
                    <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/index/47">
                    Chemical Engineering
                    </a>
                </li>
                <li>
                    <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/index/53">
                    Electrical Engineering
                    </a>
                </li>
                <li>
                    <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/index/46">
                    Biotechnology
                    </a>
                </li>
              
            </ul>

        </div>
        <div className="emergency">
            <h1>Hostel staff</h1>
            <div className="upper-part">
                <div className="table-contents">
                   
                    <div className="table-block">
                        <table >

                            <thead className="table-head">
                                <tr>
                                    <th>Hostel</th>
                                    <th>Name</th>
                                    <th>Designation</th>
                                    <th>Contact no.</th>
                                    <th>Email</th>
                                    

                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td className="apply">  
                                    Boys Hostel - 01  </td>
                                    <td className="apply">  
                                       <tr>Mr. Umesh Kumar</tr>
                                       <tr>Mr. Vinod Kumar</tr>
                                       <tr>Mr. Satya Dew</tr> 
                                       </td>
                                    <td className="apply">  
                                    <tr>Clerk</tr>
                                    <tr>Attendant</tr>
                                    <tr>Attendant</tr>
                                     </td>
                                     <td className="apply">  
                                    <tr>9023850798</tr>
                                    <tr>9779946937</tr>
                                    <tr>8968550509</tr>
                                     </td>
                                     <td className="apply">
                                     hwb1@nitj.ac.in
                                     </td>
                                   
                                </tr>
                                <tr>
                                    <td className="apply">  
                                    Boys Hostel - 02 </td>
                                    <td className="apply">  
                                       <tr>Mr. Ashish Kumar</tr>
                                       <tr>Mr. Pramod Kumar</tr>
                                       <tr>Mr. Pramod Kumar</tr> 
                                       <tr>Mr. Dhananjay Tiwari</tr> 
                                       </td>
                                    <td className="apply">  
                                    <tr>Clerk</tr>
                                    <tr>Attendant</tr>
                                    <tr>Attendant</tr>
                                    <tr>Attendant</tr>
                                     </td>
                                     <td className="apply">  
                                    <tr>7307236134</tr>
                                    <tr>9417310329</tr>
                                    <tr>7710463092</tr>
                                    <tr>9501811427</tr>
                                     </td>
                                     <td className="apply">
                                     hwb2@nitj.ac.in
                                     </td>
                                   
                                </tr>
                                <tr>
                                    <td className="apply">  
                                    Boys Hostel - 01  </td>
                                    <td className="apply">  
                                       <tr>Mr. Umesh Kumar</tr>
                                       <tr>Mr. Vinod Kumar</tr>
                                       <tr>Mr. Satya Dew</tr> 
                                       </td>
                                    <td className="apply">  
                                    <tr>Clerk</tr>
                                    <tr>Attendant</tr>
                                    <tr>Attendant</tr>
                                     </td>
                                     <td className="apply">  
                                    <tr>9023850798</tr>
                                    <tr>9779946937</tr>
                                    <tr>8968550509</tr>
                                     </td>
                                     <td className="apply">
                                     hwb1@nitj.ac.in
                                     </td>
                                   
                                </tr>
                                <tr>
                                    <td className="apply">  
                                    Boys Hostel - 01  </td>
                                    <td className="apply">  
                                       <tr>Mr. Umesh Kumar</tr>
                                       <tr>Mr. Vinod Kumar</tr>
                                       <tr>Mr. Satya Dew</tr> 
                                       </td>
                                    <td className="apply">  
                                    <tr>Clerk</tr>
                                    <tr>Attendant</tr>
                                    <tr>Attendant</tr>
                                     </td>
                                     <td className="apply">  
                                    <tr>9023850798</tr>
                                    <tr>9779946937</tr>
                                    <tr>8968550509</tr>
                                     </td>
                                     <td className="apply">
                                     hwb1@nitj.ac.in
                                     </td>
                                   
                                </tr>
                                <tr>
                                    <td className="apply">  
                                    Boys Hostel - 01  </td>
                                    <td className="apply">  
                                       <tr>Mr. Umesh Kumar</tr>
                                       <tr>Mr. Vinod Kumar</tr>
                                       <tr>Mr. Satya Dew</tr> 
                                       </td>
                                    <td className="apply">  
                                    <tr>Clerk</tr>
                                    <tr>Attendant</tr>
                                    <tr>Attendant</tr>
                                     </td>
                                     <td className="apply">  
                                    <tr>9023850798</tr>
                                    <tr>9779946937</tr>
                                    <tr>8968550509</tr>
                                     </td>
                                     <td className="apply">
                                     hwb1@nitj.ac.in
                                     </td>
                                   
                                </tr>
                                
                              
                            </tbody>

                        </table>
                    </div>
                    </div>
                    </div>
                    </div>
        <div className="emergency">
            <h1>Dispensary Contact Details</h1>
            <div className="upper-part">
                <div className="table-contents">
                   
                    <div className="table-block">
                        <table >

                            <thead className="table-head">
                                <tr>
                                    <th>Name</th>
                                    <th>Designation</th>
                                    <th>Email</th>
                                    

                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td className="apply">  
                                        Dr Tarun Sehgal  </td>
                                    <td className="apply">  
                                        Medical officer  </td>
                                    <td className="apply">  
                                    sehgalt@nitj.ac.in  </td>
                                   



                                </tr>
                                <tr>
                                    <td className="apply">  
                                    Dr Sitakshi Bhatia  </td>
                                    <td className="apply">  
                                    Medical Officer  </td>
                                    <td className="apply"> 
                                    bhatias@nitj.ac.in
                                    </td>
                                   
                                </tr>
                             
                              
                                <tr>
                                    <td className="apply">  
                                    Dr Gurnam Singh  </td>
                                    <td className="apply">  
                                    Technical Assistant  </td>
                                    <td className="apply">  
                                    gurnams@nitj.ac.in  </td>
                                   
                                </tr>
                                <tr>
                                    <td className="apply">  
                                    Ms Sarita  </td>
                                    <td className="apply">  
                                    Senior Superintendent  </td>
                                    <td className="apply">  
                                    sarita@nitj.ac.in  </td>
                                   
                                </tr>
                                <tr>
                                    <td className="apply">  
                                    Ms Baljeet Kaur  </td>
                                    <td className="apply">  
                                    Dresser  </td>
                                    <td className="apply">  
                                    baljeetk@nitj.ac.in  </td>
                                   
                                </tr>
                                <tr>
                                    <td className="apply">  
                                    Ms Sukhjit Kaur  </td>
                                    <td className="apply">  
                                    Nurse  </td>
                                    <td className="apply">  
                                    sukhjitk@nitj.ac.in  </td>
                                   
                                </tr>
                             
                              
                            </tbody>

                        </table>
                    </div>
                    
                 

                </div>
            </div>
            </div>
            <div className="emergency">
            <h1>Bank contact details</h1>
            <p>The institute has two banks situated in the campus, State Bank of Patiala and Canara Bank.</p>
            <h2>State Bank of Patiala</h2>
            <p> <span>Phone :</span> +91 (181) 269 0695 (Office)</p>
            <h2>Canara Bank</h2>
            <p> <span>Phone :</span> +91 (181) 269 0233 (Office)</p>

            </div>
            <div className="emergency">
            <h1>Post Office</h1>
            <p>The campus has a Post Office. The NITJ campus comes under a separate postal zone and it is a postal delivery office. The post office is located in the dispensary building and works on all weekdays from 9.00 A.M. to 5.00 P.M. and from 9.00 A.M. to 2.00 P.M. on Saturdays.</p>
            <br/>
            <p><span>Phone :</span>+91 (181) 269 0325 (Office)</p>
           
            </div>
        </>
    )
}

export default Contacts
