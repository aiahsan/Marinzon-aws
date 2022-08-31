import React from 'react';
import Icon from '../../../svgIcons/svgIcons'
const Comp = ({ isBorder ,setsearch}:{isBorder?:Boolean,setsearch?:any}) => {
    return <div className={`searchbar-head ${isBorder ? "brd" : ""}`}>

        <input onChange={(e)=>{
            if(setsearch)
            setsearch(e.target.value)
        }} type="text" placeholder="Search" />
        <Icon name="search"  />
    </div>
}
export default Comp;