import React from 'react'
import branches from '../branches'
import CIE from '../softwares/CIE';
import ECE from '../softwares/ECE';
import EE from '../softwares/EE';
import IPE from '../softwares/IPE';
import ME from '../softwares/ME';
import ICE from '../softwares/ICE';
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
}

export default SoftwaresOfBranches
