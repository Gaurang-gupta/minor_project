import React from 'react'
import Topcase from './Topcase'
import Sidebar from '../QuestionPaperComponents/Sidebar'
import "./QuestionPapers.css"
import Card from '../QuestionPaperComponents/Card'
function QuestionPapers() {
    const CSE = ["CSPC-401", "CSPC-403", "CSPC-405", "CSPE-431/CSPE-435", "CSPC-301", "CSPC-303", "CSPC-305", "CSPC-307", "CSPC-309", "CSPE-311/CSPE-335"];
    const IT = ["ITPC-401", "ITPC-403", "ITPE-054", "ITPE-063", "ITPC-301", "ITPC-303", "ITPC-305", "ITPC-307", "ITPC-309", "ITPE-057"];
    const ECE = ["ECPE-401", "ECPC-403", "ECPC-301", "ECPC-303", "ECPC-305", "ECPC-307", "HMCI-201", "ICPC-351", "ECPC-201", "ECPC-203", "ECPC-205", "ECPC-207", "MACI-203", "ECPC-223", "ECPC-225", "ECPC-209", "ECPC-202", "ECPC-204", "ECPC-206", "ECPC-208", "CSPC-212", "CSPC-214", "ECPC-222", "ECPC-224", "CSPC-232", "ECPC-302", "ECPC-304", "ECPC-306", "ECPC-308", "ECPC-322", "ECPC-324", "ECPC-326", "ECPC-328", "ECCI-300", "ECPC-402", "ECPC-404", "ECCI-400(Project)", "ECCI-420"];
    const ICE = ["ICPC-401", "ICPC-403", "ICPE-461", "ICPE-467", "ICPC-301", "ICPC-303", "ICPC-305", "ICPC-307", "ICPC-309", "ICPE-359"];
    const IPE = ["IPPC-401", "IPPC-403", "IPPC-405", "IPPE-461", "IPPC-301", "IPPC-303", "IPPC-305", "IPPC-307", "HMCI-202", "IPPE-432"];
    const ME = ["MEPC-401", "MEPC-403", "MEPE-410/MEPE-420", "MEPE-424/MEPE-425", "MEPC-301", "MEPC-303", "MEPC-305", "MEPC-307", "MEPC-309", "HMCI-202"];
    const CIE = ["CEPC-401", "CEPC-403", "CEPC-431", "CEPC-435", "CEPC-301", "CEPC-303", "CEPC-305", "CEPC-307", "CEPC-309", "CEPC-311"]; //civil (ce)
    const TE = ["TTPC-401", "TTPC-403", "TTPC-405", "TTPC-407", "TTPE-433", "TTPC-301", "TTPC-303", "TTPC-305", "TTPC-307", "HMCI-204", "TTPE-321/TTPE-322/TTPE-323"];
    const CE = ["CHPC-401", "CHPC-403", "CHPC-405", "CHPC-455/CHPC-466", "CHPC-301", "CHPC-303", "CHPC - 305", "CHPC-307", "HMCI-202", "CHPE-359"]; // chemical (ch)
    const EE = ["EEPC-401", "EEPC-403", "EEPE-459", "EEPE-451", "EEPC-301", "EEPC-303", "EEPC-305", "EEPC-307", "EEPC-309", "EEPE-353"];
    const BT = ["BTPC-401", "CHPC-481", "BTPE-413", "BTPE-415", "BTPC-301", "BTPC-303", "BTPC-305", "BTPC-307", "BTPC-309", "BTPC-311"];
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
