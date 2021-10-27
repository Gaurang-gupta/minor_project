import React from 'react'
import branches from '../branches'
import CIE from '../softwares/CIE';
import ECE from '../softwares/ECE';
import EE from '../softwares/EE';
import IPE from '../softwares/IPE';
import ME from '../softwares/ME';
import ICE from '../softwares/ICE';
import TE from '../softwares/TE';
import CE from '../softwares/CE';
import CSE from '../softwares/CSE';
import IT from '../softwares/IT';
import BT from '../softwares/BT';
function SoftwaresOfBranches({ branch }) {
    const br = branch.substring(11, branch.length);
    if (br === 'ECE') {
        return (
            <ECE branch={branches[br]} />
        )
    }
    else if (br === 'EE') {
        return (
            <EE branch={branches[br]} />
        )
    }
    else if (br === "ME") {
        return (
            <ME branch={branches[br]} />
        )
    }
    else if (br === "CIE") {
        return (
            <CIE branch={branches[br]} />
        )
    }
    else if (br === "IPE") {
        return (
            <IPE branch={branches[br]} />
        )
    }
    else if (br === "ICE") {
        return (
            <ICE branch={branches[br]} />
        )
    }
    else if (br === "TE") {
        return (
            <TE branch={branches[br]} />
        )
    }
    else if (br === "CE") {
        return (
            <CE branch={branches[br]} />
        )
    }
    else if (br === "CSE") {
        return (
            <CSE branch={branches[br]} />
        )
    }
    else if (br === "IT") {
        return (
            <IT branch={branches[br]} />
        )
    }
    else {
        return (
            <BT branch={branches[br]} />
        )
    }
}

export default SoftwaresOfBranches
