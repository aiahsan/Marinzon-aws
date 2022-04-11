import React from 'react';
const Comp = ({ label }: { label: string }) => {
  return <div className="cst-textbox kjfads-fasenr brd-none d-flex flex-column label-bar-1 ">
    <p>                   {label}
    </p>
    <input placeholder="Type here" type="text" className="cst-textbox-input w-100 mt-2" />

  </div>
}

export default Comp;