import React from 'react'
import Topcase from './Topcase'
import Sidebar from '../QuestionPaperComponents/Sidebar'
import "./QuestionPapers.css"
import Card from '../QuestionPaperComponents/Card'
function QuestionPapers() {
    const CSE = ["CSPC-201", "CSPC-203", "CSPC-205", "CSPC-207", "CSPC-209", "MACI-203", "CSPC-221", "CSPC-223", "CSPC-225", "CSPC-227", "CSPC-202", "CSPC-204", "CSPC-206", "CSPC-208", "ECPC-252", "HMCI-201", "CSPC-222", "CSPC-224", "CSPC-226", "ECPC-272", "CSPC-301", "CSPC-303", "CSPC-305", "CSPC-307", "CSPC-309", "CSPC-323", "CSPC-325", "CSPC-327", "CSCI-301", "CSPC-302", "CSPC-304", "CSPC-306", "CSPC-308", "CSPC-322", "CSPC-328", "CSPC-326", "CSCI-301", "CSPC-401", "CSPC-403", "CSPC-405", "CSCI-300", "CSCI-400", "CSPC-402", "CSPC-422", "CSCI-400", "CSCI-424"];
    const IT = [];
    const ECE = ["ECPE-401", "ECPC-403", "ECPC-301", "ECPC-303", "ECPC-305", "ECPC-307", "HMCI-201", "ICPC-351", "ECPC-201", "ECPC-203", "ECPC-205", "ECPC-207", "MACI-203", "ECPC-223", "ECPC-225", "ECPC-209", "ECPC-202", "ECPC-204", "ECPC-206", "ECPC-208", "CSPC-212", "CSPC-214", "ECPC-222", "ECPC-224", "CSPC-232", "ECPC-302", "ECPC-304", "ECPC-306", "ECPC-308", "ECPC-322", "ECPC-324", "ECPC-326", "ECPC-328", "ECCI-300", "ECPC-402", "ECPC-404", "ECCI-400(Project)", "ECCI-420", "ECPC-301", "ECPC-303", "ECPC-305", "ICPC-351", "HMCI-201", "ECPC-307", "ECPC-321", "ECPC-351", "ECCI-300", "ECPC-401", "ECPC-403", "ECPC-411", "ECPC-413", "ECCI-425", "ECCI-400"];
    const ICE = [];
    const IPE = [];
    const ME = [];
    const CIE = ["CEPC-201", "CEPC-203", "CEPC-205", "CEPC-207", "CEPC-209", "CEPC-211", "CEPC-221", "CEPC-223", "CEPC-225", "HMCI-204", "MACI-203", "CEPC-202", "CEPC-204", "CEPC-206", "CEPC-208", "CEPC-222", "CEPC-224", "CEPC-226", "CEPC-301", "CEPC-303", "CEPC-305", "CEPC-307", "CEPC-309", "CEPC-311", "CEPC-321", "CECI-301", "CEPC-302", "CEPC-304", "CEPC-306", "CEPC-308", "CEPC-322", "CECI-302", "CEPC-330", "CEPC-401", "CEPC-403", "CEPC-421", "CEPC-423", "CECI-300", "CECI-400", "CEPC-402", "CECI-402", "CECI-400"]; //civil (ce)
    const TE = [];
    const CE = ["CHPC-201", "CHPC-203", "CHPC-205", "CHPC-207", "CHPC-209", "CHPC-221", "CHPC-223", "CHPC-202", "CHPC-204", "CHPC-206", "CHPC-208", "CHPC-210", "CHPC-222", "CHPC-224", "CHPC-301", "CHPC-303", "CHPC-305", "CHPC-307", "CHPC-321", "CHPC-323", "CHCI-300", "HMCI-202", "CHPC-302", "CHPC-304", "CHPC-306", "CHPC-322", "CHPC-324", "CHCI-300", "CHPC-401", "CHPC-403", "CHPC-405", "CHPC-421", "CHPC-423", "CHCI-425", "CHCI-400", "CHPC-402", "CHPC-422", "CHCI-424", "CHCI-400"]; // chemical (ch)
    const EE = ["EEPC-201", "ICPC-251", "ECPC-251", "EEPC-203", "ECPC-254", "ICPC-271", "EEPC-225", "EEPC-202", "EEPC-204", "EEPC-206", "EEPC-222", "EEPC-224", "MACI-206", "HMCI-201", "EEPC-301", "EEPC-303", "EEPC-305", "EEPC-307", "EEPC-309", "EEPC-323", "EEPC-325", "EECI-300", "EEPC-321", "EEPC-302", "EEPC-304", "ICPC-352", "CSPC-213", "EEPC-322", "EEPC-324", "EECI-300", "EEPC-401", "EEPC-403", "EEPC-421", "EECI-400", "EECI-350", "EEPC-402", "EEPC-404", "EEPC-406", "EEPC-426", "EECI-400", "EECI-420"];
    const BT = ["BTPC-201", "BTPC-203", "BTPC-205", "BTPC-207", "BTPC-209", "BTPC-211", "MACI-204", "CHPC-281", "BTPC-202", "BTPC-204", "BTPC-206", "BTPC-210", "BTPC-212", "CSPC-203", "CSPC-223", "HMCI-202", "BTPC-301", "BTPC-303", "BTPC-305", "BTPC-307", "BTPC-309", "BTPC-311", "BTPC-313", "BTPC-315", "BTPC-317", "BTCI-301", "BTPC-302", "BTPC-304", "BTPC-306", "BTPC-308", "BTPC-310", "BTCI-302", "BTPC-401", "BTPC-403", "BTCI-300", "BTCI-400", "CHPC-481", "BTPC-402", "BTCI-402", "BTCI-400"];
    const openElectiveSeven = ["BTOE-401", "CHOE-405", "CEOE-472", "CSOE-003", "ECPC/ECOE-469", "ICOE-472", "IPOE-421", "IPOE-422", "PHOE-301", "TTOE-461"];
    const firstAndSecond = ["CYCI-102", "MACI-101", "ICCI-101", "HMCI-102", "IPCI-101", "IPCI-101", "IPCI-102", "HMCI-103", "CYCI-103", "CYCI-104", "PHCI-103", "CSCI-103", "CSCI-101", "MACI-102", "HMCI-101", "MECI-102", "PHCI-104", "CSCI-102"];
    return (
        <>
            <Topcase heading={"Question Papers"} content={"Below you can find question papers of different subjects of respective departments"} />
            <div className="questionPapers">
                <Sidebar />
                <div className="questionPapers__cardDisplay">
                    <Card heading="First and Second Semester" subjects={firstAndSecond} />
                    <Card heading="CSE" subjects={CSE} isProgramElective={true} />
                    <Card heading="IT" subjects={IT} isProgramElective={true} />
                    <Card heading="ECE" subjects={ECE} isProgramElective={true} />
                    <Card heading="ICE" subjects={ICE} isProgramElective={true} />
                    <Card heading="IPE" subjects={IPE} isProgramElective={true} />
                    <Card heading="ME" subjects={ME} isProgramElective={true} />
                    <Card heading="CIE" subjects={CIE} isProgramElective={true} />
                    <Card heading="TE" subjects={TE} isProgramElective={true} />
                    <Card heading="CE" subjects={CE} isProgramElective={true} />
                    <Card heading="EE" subjects={EE} isProgramElective={true} />
                    <Card heading="BT" subjects={BT} isProgramElective={true} />
                    <Card heading="Open Elective (7th)" subjects={openElectiveSeven} isProgramElective={false} />
                </div>

            </div>
        </>
    )
}

export default QuestionPapers
