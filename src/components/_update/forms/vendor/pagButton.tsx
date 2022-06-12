import React from 'react';
import {useSelector} from 'react-redux'
export default ({activeState,setactiveState,isFromUpdate}:{activeState:number,setactiveState:any,  isFromUpdate?:boolean
})=>{
  //@ts-ignore
  const vUser=useSelector(x=>x.VUser)
  
  return isFromUpdate?<>
   <button
        type="submit"
        
        defaultValue="Log in"
        className="btn-brd"
      >
        <span> Save</span>
      </button>
  </>:<>
  <div className="mncsp-ejnadwe">
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
        Dont't have a marinzon acount?{" "}
        <a href="https://marinzon.com/en-AE/signup" target="#">Sign Up now!</a>
      </h2>
    ) : (
      <></>
    )}
    </div>
  </>
}