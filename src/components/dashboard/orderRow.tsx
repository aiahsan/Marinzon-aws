import React from 'react';
import {FaFilePdf} from 'react-icons/fa'
export default ({date,invoiceNumber,price}:{date:string,invoiceNumber:string,price:number})=>{
    return <div className='kdsafjkds-ae3rinr'>
        <div className='' >
            <h4>{date}</h4>
            <p>#{invoiceNumber}</p>
        </div>
        <div className='d-flex align-items-center'>
            <p>AED {price}</p>
            <FaFilePdf />
        </div>
    </div>
}