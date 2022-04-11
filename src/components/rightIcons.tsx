import React from 'react';
import { AiFillFile } from 'react-icons/ai'
import { BiUnlink } from 'react-icons/bi'
import { ImFloppyDisk } from 'react-icons/im'
export default () => {
    return <div className="d-flex btn-box">
        <div className="mx-1">
            <button className="btn"><AiFillFile color="#4a4a4a" fontSize={18} /></button>
        </div>
        <div className="mx-1">
        <button className="btn">    <BiUnlink fontSize={20} color="#4a4a4a" />
        </button>
        </div>
        <div className="mx-1">
        <button className="btn">    <ImFloppyDisk fontSize={16} color="#4a4a4a" /></button>
        </div>
    </div>
}