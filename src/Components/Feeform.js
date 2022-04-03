import React from 'react'
import Topcase from './Topcase'
import "./Feeform.css"
function Feeform() {
    return (
        <>
        <Topcase heading={"Forms and Links"} content={" You can find links for fee payment and important form links."}/>
        <div className="feeform">
            <h1>Fee Links</h1>
            <ul className="feelist">
                <li>
                    <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/213">
                    Fee Refund Rules of the Institute
                    </a>
                </li>
                <li>
                    <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/687">
                    Regarding Semester Registration and Fee payment for M.Tech (Artificial Intelligence) Batch-2021 
                    </a>
                </li>
                <li>

                    <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/492">
                    Online Fee Payment for Minor Degree (Session January-June, 2022) 
                    </a>
                </li>
               
                
                <li>
                    <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/675">
                    Link for Online Fee Payment and Semester Registration (Session January-June, 2022) 
                    </a>
                </li>
                <li>
                    <a href="https://www.nitj.ac.in/nitj_files/student_corner/Fee_structure_of_UG,PG,Ph_21121719226.pdf">
                    Fee Structure of UG/PG & PhD for the Academic Year 2021-22 (Even Semester)
                    </a>
                </li>
                
                <li>
                    <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/533">
                    
                    Notice regarding Payment of Mess Advance for the Even Semester of Academic Year 2021-22
                    </a>
                </li>
                
               
              
            </ul>

        </div>
         <div className="feeform">
         <h1>Important Forms</h1>
         <ul className="feelist">
                <li>
                    <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/522">
                    Exam Result (Session December 2021) - B.Tech (Batch-2020), M.Tech, M.Sc., MBA (Batch-2021) 
                    </a>
                </li>
                <li>
                    <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/522">
                    Exam Result (Session December 2021) - B.Tech (Batch-2018 and 2019), M.Tech, M.Sc., MBA (Batch-2020) 
                    </a>
                </li>
                <li>
                    <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/43">
                    Online Student Feedback Form for Subjects/Faculty (Session July-December 2021)
                    </a>
                </li>
                <li>
                    <a href="https://www.nitj.ac.in/nitj_files/links/Notice_for_B_6512.pdf">
                    Notice regarding Online Classes for B.Tech (Final year), M.Sc. and MBA Students
                    </a>
                </li>
                <li>
                    <a href="https://www.nitj.ac.in/nitj_files/links/Notice_for_M_29133.pdf">
                    Notice regarding Online Classes for M.Tech and PhD Students
                    </a>
                </li>
           
             <li>
                 <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/pages/587">
                 IMPORTANT: COVID Vaccination Status Form
                 </a>
             </li>
            
             <li>
                 <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/index/41">
                 Online Application Form for Transcripts and Other Certificates 
                 </a>
             </li>
             <li>
                 <a href="https://www.nitj.ac.in/index.php/nitj_cinfo/index/42">
                 Online Application Form for Verification of Degree/Certificates 
                 </a>
             </li>
         </ul>
     </div>
     </>
    )
}

export default Feeform
