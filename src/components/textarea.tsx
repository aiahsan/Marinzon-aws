import React from 'react';
const Comp = ({ label }: { label: string }) => {
  return <div className="cst-textbox brd-none d-flex flex-column label-bar-1 ">
    <p>                   {label}
    </p>
    <textarea placeholder="Type here" className="cst-textbox-input text-area-h w-100 mt-2" rows={10}>
    </textarea>

  </div>
}

export default Comp;