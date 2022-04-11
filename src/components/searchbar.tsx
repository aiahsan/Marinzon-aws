import React from 'react';
import Icon from '../svgIcons/svgIcons'
const Comp = ({ isBorder }:{isBorder?:Boolean}) => {
    return <div className={`searchbar-head ${isBorder ? "brd" : ""}`}>

        <input type="text" placeholder="Search" />
        <Icon name="search" />
    </div>
}
export default Comp;