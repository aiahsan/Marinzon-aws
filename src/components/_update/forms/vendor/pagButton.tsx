import React from 'react';
import {useSelector} from 'react-redux'
export default ({activeState,setactiveState}:{activeState:number,setactiveState:any})=>{
  //@ts-ignore
  const vUser=useSelector(x=>x.VUser)
  
  return <div className="mncsp-ejnadwe">
    {activeState != (vUser!=null?2:1) ? (
      <div className="nsaodw-wdem">
        <button
          type="button"
          onClick={() => {
            if (activeState >vUser!=null? 2:1) {
              setactiveState(activeState - 1);
            }
          }}
          defaultValue="Log in"
          className="btn-brd"
        >
          <span> Go Back</span>
        </button>
      </div>
    ) : (
      <></>
    )}
    <div className="nsaodw-wdem">
      <button
        type="submit"
        
        defaultValue="Log in"
        className="btn-brd"
      >
        <span> Next</span>
      </button>
    </div>
    {activeState == 1 ? (
      <h2>
        Dont't have a noon acount?{" "}
        <a href="">Sign Up now!</a>
      </h2>
    ) : (
      <></>
    )}
    </div>
}