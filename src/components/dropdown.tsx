import React from 'react';
import { Dropdown } from 'react-bootstrap'
import Icon from '../svgIcons/svgIcons'
interface DropdownProps {
    title: string,
    items?: ItemProp[],
    style?: object,
    label?:string
}
interface ItemProp {
    title: string,
    onClick: () => void;
}
const Comp = (props: DropdownProps) => {
    const { title, items, style ,label } = props;
    return <div className="cst-dropdown label-bar-1">
        {/* {
            label?<p className='mb-2 cst-mx-0'>                   {label}
            </p>:<></>
        } */}
        <Dropdown>
            <Dropdown.Toggle style={style ? { ...style } : {}}>
                <div className="d-flex w-100 justify-content-between d-flex">
                    <div>
                        {title}
                    </div>
                    <div className="ml-12p">
                        <Icon name={`${style ? "chevbtmwht" : "chevbtm"}`} />
                    </div>
                </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {items?.map((x, i) => <Dropdown.Item key={i} >
                    <div onClick={x.onClick}>{x.title}</div>
                </Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    </div>
}
export default Comp;