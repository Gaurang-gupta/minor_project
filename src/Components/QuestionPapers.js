import React from 'react'
import Topcase from './Topcase'
import "./QuestionPapers.css"
import Card from '../QuestionPaperComponents/Card'
function QuestionPapers() {
    const CSE = ["CSPC-201", "CSPC-203", "CSPC-205", "CSPC-207", "CSPC-209", "MACI-203", "CSPC-221", "CSPC-223", "CSPC-225", "CSPC-227", "CSPC-202", "CSPC-204", "CSPC-206", "CSPC-208", "ECPC-252", "HMCI-201", "CSPC-222", "CSPC-224", "CSPC-226", "ECPC-272", "CSPC-301", "CSPC-303", "CSPC-305", "CSPC-307", "CSPC-309", "CSPC-323", "CSPC-325", "CSPC-327", "CSCI-301", "CSPC-302", "CSPC-304", "CSPC-306", "CSPC-308", "CSPC-322", "CSPC-328", "CSPC-326", "CSCI-301", "CSPC-401", "CSPC-403", "CSPC-405", "CSCI-300", "CSCI-400", "CSPC-402", "CSPC-422", "CSCI-400", "CSCI-424"];
    const IT = ["ITPC-201", "ITPC-203", "ITPC-205", "ITPC-207", "ITPC-209", "MACI-203", "ITPC-221", "ITPC-223", "ITPC-225", "ITPC-227", "ITPC-202", "ITPC-204", "ITPC-206", "ITPC-208", "ITPC-210", "HMCI-201", "ITPC-222", "ITPC-224", "ITPC-226", "ITPC-228", "ITPC-301", "ITPC-303", "ITPC-305", "ITPC-307", "ITPC-309", "ITPC-321", "ITPC-323", "ITPC-325", "ITPC-327", "ITCI-300", "ITPC-302", "ITPC-304", "ITPC-306", "ITPC-308", "ITPC-322", "ITPC-324", "ITPC-326", "ITCI-301", "ITPC-401", "ITPC-403", "ITPC-421", "ITPC-423", "ITCI-401", "ITCI-400", "ITPC-402", "ITPC-404", "ITPC-406", "ITPC-422", "ITCI-402", "ITCI-400"];
    const ECE = ["ECPE-401", "ECPC-403", "ECPC-301", "ECPC-303", "ECPC-305", "ECPC-307", "HMCI-201", "ICPC-351", "ECPC-201", "ECPC-203", "ECPC-205", "ECPC-207", "MACI-203", "ECPC-223", "ECPC-225", "ECPC-209", "ECPC-202", "ECPC-204", "ECPC-206", "ECPC-208", "CSPC-212", "CSPC-214", "ECPC-222", "ECPC-224", "CSPC-232", "ECPC-302", "ECPC-304", "ECPC-306", "ECPC-308", "ECPC-322", "ECPC-324", "ECPC-326", "ECPC-328", "ECCI-300", "ECPC-402", "ECPC-404", "ECCI-400(Project)", "ECCI-420", "ECPC-301", "ECPC-303", "ECPC-305", "ICPC-351", "HMCI-201", "ECPC-307", "ECPC-321", "ECPC-351", "ECCI-300", "ECPC-401", "ECPC-403", "ECPC-411", "ECPC-413", "ECCI-425", "ECCI-400"];
    const ICE = ["ICPC-201", "ICPC-203", "ECPC-251", "ICPC-205", "MACI-206", "ICPC-221", "ICPC-223", "ICPC-202", "ICPC-204", "ICPC-206", "ECPC-252", "HMCI-201", "CSPC-213", "ICPC-222", "ICPC-224", "ECPC-272", "ICPC-301", "ICPC-303", "ICPC-305", "ICPC-307", "ICPC-309", "ICPC-325", "ICPC-321", "ICPC-323", "ICCI-300", "ICPC-302", "ICPC-304", "ICPC-306", "ICPC-322", "ICPC-324", "ICCI-300", "ICPC-401", "ICPC-403", "ICPC-423", "ICPC-421", "ICCI-400", "ICPC-350", "ICPC-402", "ICPC-404", "ICPC-406", "ICPC-426", "ICCI-400", "ICCI-420"];
    const IPE = ["IPPC-201", "IPPC-203", "IPPC-205", "IPPC-207", "IPPC-209", "IPPC-211", "IPPC-213", "IPPC-215", "IPPC-217", "IPCI-201", "IPPC-202", "IPPC-204", "IPPC-206", "IPPC-208", "IPPC-210", "IPPC-212", "IPPC-214", "IPPC-216", "IPPC-218", "IPPC-301", "IPPC-303", "IPPC-305", "IPPC-307", "HMCI-202", "IPPC-309", "IPPC-311", "IPPC-313", "IPCI-301", "IPPC-302", "IPPC-304", "IPPC-306", "IPPC-308", "IPPC-310", "IPCI-301", "IPPC-401", "IPPC-403", "IPPC-405", "IPPC-407", "IPCI-401", "IPPC-402", "IPPC-404", "IPCI-401"];
    const ME = ["MEPC-201", "MEPC-203", "MEPC-205", "MEPC-207", "MEPC-209", "MEPC-211", "MEPC-213", "MEPC-215", "MEPC-202", "MEPC-204", "MEPC-206", "MEPC-208", "MEPC-210", "MACI-201", "MEPC-214", "MEPC-301", "MEPC-303", "MEPC-305", "MEPC-307", "MEPC-309", "HMCI-202", "MEPC-311", "MEPC-313", "MEPC-315", "MEPC-317", "MECI-300", "MEPC-302", "MEPC-304", "MEPC-306", "MEPC-308", "MEPC-310", "MEPC-312", "MEPC-314", "MECI-300", "MEPC-401", "MEPC-403", "MECI-411", "MECI-400", "MEPC-405", "MEPC-407", "MECI-413", "MEPC-402", "MECI-400", "MEPC-404"];
    const CIE = ["CEPC-201", "CEPC-203", "CEPC-205", "CEPC-207", "CEPC-209", "CEPC-211", "CEPC-221", "CEPC-223", "CEPC-225", "HMCI-204", "MACI-203", "CEPC-202", "CEPC-204", "CEPC-206", "CEPC-208", "CEPC-222", "CEPC-224", "CEPC-226", "CEPC-301", "CEPC-303", "CEPC-305", "CEPC-307", "CEPC-309", "CEPC-311", "CEPC-321", "CECI-301", "CEPC-302", "CEPC-304", "CEPC-306", "CEPC-308", "CEPC-322", "CECI-302", "CEPC-330", "CEPC-401", "CEPC-403", "CEPC-421", "CEPC-423", "CECI-300", "CECI-400", "CEPC-402", "CECI-402", "CECI-400"]; //civil (ce)
    const TE = ["TTPC-201", "TTPC-203", "TTPC-205", "TTPC-207", "TTPC-209", "MACI-201", "TTPC-211", "TTPC-213", "TTPC-215", "TTPC-202", "TTPC-204", "TTPC-206", "TTPC-208", "TTPC-210", "TTPC-212", "TTPC-214", "TTPC-216", "TTPC-218", "TTPC-301", "TTPC-303", "TTPC-305", "TTPC-307", "HMCI-204", "TTPC-309", "TTPC-311", "TTPC-313", "TTCI-300", "TTPC-302", "TTPC-304", "TTPC-306", "TTPC-308", "TTPC-310", "TTPC-312", "TTCI-300", "TTPC-401", "TTPC-403", "TTPC-405", "TTPC-407", "TTCI-401", "TTCI-400", "TTPC-402", "TTPC-404", "TTCI-402", "TTCI-400"];
    const CE = ["CHPC-201", "CHPC-203", "CHPC-205", "CHPC-207", "CHPC-209", "CHPC-221", "CHPC-223", "CHPC-202", "CHPC-204", "CHPC-206", "CHPC-208", "CHPC-210", "CHPC-222", "CHPC-224", "CHPC-301", "CHPC-303", "CHPC-305", "CHPC-307", "CHPC-321", "CHPC-323", "CHCI-300", "HMCI-202", "CHPC-302", "CHPC-304", "CHPC-306", "CHPC-322", "CHPC-324", "CHCI-300", "CHPC-401", "CHPC-403", "CHPC-405", "CHPC-421", "CHPC-423", "CHCI-425", "CHCI-400", "CHPC-402", "CHPC-422", "CHCI-424", "CHCI-400"]; // chemical (ch)
    const EE = ["EEPC-201", "ICPC-251", "ECPC-251", "EEPC-203", "ECPC-254", "ICPC-271", "EEPC-225", "EEPC-202", "EEPC-204", "EEPC-206", "EEPC-222", "EEPC-224", "MACI-206", "HMCI-201", "EEPC-301", "EEPC-303", "EEPC-305", "EEPC-307", "EEPC-309", "EEPC-323", "EEPC-325", "EECI-300", "EEPC-321", "EEPC-302", "EEPC-304", "ICPC-352", "CSPC-213", "EEPC-322", "EEPC-324", "EECI-300", "EEPC-401", "EEPC-403", "EEPC-421", "EECI-400", "EECI-350", "EEPC-402", "EEPC-404", "EEPC-406", "EEPC-426", "EECI-400", "EECI-420"];
    const BT = ["BTPC-201", "BTPC-203", "BTPC-205", "BTPC-207", "BTPC-209", "BTPC-211", "MACI-204", "CHPC-281", "BTPC-202", "BTPC-204", "BTPC-206", "BTPC-210", "BTPC-212", "CSPC-203", "CSPC-223", "HMCI-202", "BTPC-301", "BTPC-303", "BTPC-305", "BTPC-307", "BTPC-309", "BTPC-311", "BTPC-313", "BTPC-315", "BTPC-317", "BTCI-301", "BTPC-302", "BTPC-304", "BTPC-306", "BTPC-308", "BTPC-310", "BTCI-302", "BTPC-401", "BTPC-403", "BTCI-300", "BTCI-400", "CHPC-481", "BTPC-402", "BTCI-402", "BTCI-400"];
    const firstAndSecond = ["PHCI-101", "CSCI-101", "MACI-101", "HMCI-101", "MECI-102", "PHCI-102", "CSCI-102", "CYCI-102", "MACI-101", "HMCI-102", "IPCI-101", "IPCI-102", "HMCI-103", "CYCI-103", "CYCI-104", "CYCI-101", "MACI-102", "HMCI-102", "PHCI-103", "PHCI-104", "ECCI-101", "CECI-101", "MECI-101", "CSCI-103", "ICCI-101"];
    const openElective = ["BTOE-302", "BTOE-401", "BTOE-403", "BTOE-402", "BTOE-404", "CHOE-401", "CHOE-402", "CHOE-403", "CHOE-404", "CHOE-405", "CHOE-406", "CHOE-407", "CHOE-408", "CHOE-409", "CHOE-410", "CEOE-370", "CEOE-471", "CEOE-472", "IDOE-001", "IDOE-002", "IDOE-003", "IDOE-004", "IDOE-005", "IDOE-006", "EEOE-380", "EEOE-381", "EEOE-382", "EEOE-383", "EEOE-384", "EEOE-385", "EEOE-386", "EEOE-387", "EEOE-480", "EEOE-481", "EEOE-482", "EEOE-483", "EEOE-484", "EEOE-485", "EEOE-486", "EEOE-487", "EEOE-488", "EEOE-489", "EEOE-490", "EEOE-491", "ICOE-371", "ICOE-372", "ICOE-373", "ICOE-374", "ICOE-375", "ICOE-376", "ICOE-377", "ICOE-471", "ICOE-472", "ICOE-473", "ICOE-474", "ICOE-475", "ICOE-476", "ICOE-477", "ICOE-481", "ICOE-482", "ICOE-483", "ICOE-484", "ICOE-485", "ICOE-486", "ICOE-487", "IPOE-421", "IPOE-422", "IPOE-423", "IPOE-424", "IPOE-425", "IPOE-426", "IPOE-427", "ITOE-001", "ITOE-002", "ITOE-003", "ITOE-004", "ITOE-005", "ITOE-006", "MEOE-351", "MEOE-352", "MEOE-353", "MEOE-354", "MEOE-355", "MEOE-356", "MEOE-357", "MEOE-451", "MEOE-452", "MEOE-453", "MEOE-454", "MEOE-455", "MEOE-456", "MEOE-457", "MEOE-458", "MEOE-459", "TTOE-451", "TTOE-452", "TTOE-453", "TTOE-454", "TTOE-455", "TTOE-456", "TTOE-457", "TTOE-458", "TTOE-459", "TTOE-460", "TTOE-461", "TTOE-462", "TTOE-463", "TTOE-464"];
    return (
        <>
            <Topcase heading={"Question Papers"} content={"Below you can find question papers of different subjects of respective departments"} />
            <div className="questionPapers">
                <div className="questionPapersSidebar">
                    <div className="questionPapers__link">
                        <a href="#CSE">Computer Science and Engineering (CSE)</a>
                    </div>
                    <div className="questionPapers__link">
                        <a href="#IT">Information Technology (IT)</a>
                    </div>
                    <div className="questionPapers__link">
                        <a href="#ECE">Electronics and Communication Engineering (ECE)</a>
                    </div>
                    <div className="questionPapers__link">
                        <a href="#ICE">Instrumentation and Control Engineering (ICE)</a>
                    </div>
                    <div className="questionPapers__link">
                        <a href="#IPE">Industrial and Production Engineering (IPE)</a>
                    </div>
                    <div className="questionPapers__link">
                        <a href="#ME">Mechanical Engineering (ME)</a>
                    </div>
                    <div className="questionPapers__link">
                        <a href="#CIE">Civil Engineering (CIE)</a>
                    </div>
                    <div className="questionPapers__link">
                        <a href="#TE">Textile Engineering (TE)</a>
                    </div>
                    <div className="questionPapers__link">
                        <a href="#CE">Chemical Engineering (CE)</a>
                    </div>
                    <div className="questionPapers__link">
                        <a href="#EE">Electrical Engineering (EE)</a>
                    </div>
                    <div className="questionPapers__link">
                        <a href="#BT">Biotechnology (BT)</a>
                    </div>
                    <div className="questionPapers__link">
                        <a href="#open">Open Electives</a>
                    </div>
                    <div className='questionPapers__link'>
                        <a href='#first'>First and Second Semester</a>
                    </div>
                </div>
                <div className="questionPapers__cardDisplay">
                    <div id="CSE">
                        <Card heading="CSE" subjects={CSE} isProgramElective={true} />
                    </div>
                    <div id="IT">
                        <Card heading="IT" subjects={IT} isProgramElective={true} />
                    </div>
                    <div id="ECE">
                        <Card heading="ECE" subjects={ECE} isProgramElective={true} />
                    </div>
                    <div id="ICE">
                        <Card heading="ICE" subjects={ICE} isProgramElective={true} />
                    </div>
                    <div id="IPE">
                        <Card heading="IPE" subjects={IPE} isProgramElective={true} />
                    </div>
                    <div id="ME">
                        <Card heading="ME" subjects={ME} isProgramElective={true} />
                    </div>
                    <div id="CIE">
                        <Card heading="CIE" subjects={CIE} isProgramElective={true} />
                    </div>
                    <div id="TE">
                        <Card heading="TE" subjects={TE} isProgramElective={true} />
                    </div>
                    <div id="CE">
                        <Card heading="CE" subjects={CE} isProgramElective={true} />
                    </div>
                    <div id="EE">
                        <Card heading="EE" subjects={EE} isProgramElective={true} />
                    </div>
                    <div id="BT">
                        <Card heading="BT" subjects={BT} isProgramElective={true} />
                    </div>
                    <div id="open">
                        <Card heading="Open Electives" subjects={openElective} />
                    </div>
                    <div id="first">
                        <Card heading="First and Second Semester" subjects={firstAndSecond} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default QuestionPapers
