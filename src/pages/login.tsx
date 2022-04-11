import React, { useState, useEffect, useContext } from 'react';
import {useLocation,useHistory} from 'react-router-dom'
import {ThemeContext} from '../App';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history=useHistory();

    return  <div className='login-box d-flex justify-content-center w-100 mb-5 mt5p'>
        <div className="box-shadow p-4 container bg-white pb-5  ">
    <div className="row d-flex justify-content-start align-items-center mt-sm-5">
      <div className="col-lg-5 col-10">
         <div className="pb-5 kjafs-airdm9asi3mem"> <img className='kdjfa-wajem2-23' src="https://i.imgur.com/uNGdWHi.png" alt="" /> </div>
      </div>
      <div className="col-lg-4 offset-lg-2 col-md-6 offset-md-3">
        <div className="pt-4 ">
          <h6><span className="fa fa-superpowers text-primary px-md-2" />
          <img src="/Marinzon Final logo-01.png" className='logo' />
          </h6>
        </div>
        <div className="mt-3 mt-md-5">
          <h5>Log in to your account</h5>
          <form className="pt-4">
            <div className="d-flex flex-column pb-3"> <label htmlFor="email">Email Address</label> <input type="email" name="email" id="emailId" className="border-bottom border-primary form-control" /> </div>
            <div className="d-flex flex-column pb-3"> <label htmlFor="password">Password</label> <input type="password" name="passwrd" id="pwd" className="border-bottom border-primary form-control" /> </div>
            <div className="d-flex jusity-content-end pb-4">
              <div className="ml-auto"> <a href="#" className="text-danger text-decoration-none">Forgot password?</a> </div>
            </div> <input type="button" defaultValue="Log in" onClick={()=>{
                history.push('/home')
            }} className="btn btn-primary btn-block mb-3" />  
             
          </form>
        </div>
      </div>
    </div>
  </div>
    </div>
  



}