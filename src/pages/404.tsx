import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';

const PageNotFound = () => {
    let history = useHistory();
    const checkLogin = true;
    const returnHome = () => {
        if (checkLogin == true) {
            history.push('/');
        } else {
            history.push('/login');
        }
    }


    return (
        <div className="container">
            <div className="login-box  pro-sidebar-header">
                <img src="/Marinzon Final logo-01.png" />

                <div className="login-box-inner">
                    <div>
                        <label className="lbl-error">
                            <a>404 PAGE NOT FOUND.</a>
                        </label>
                        <div>
                            <a onClick={() => { returnHome() }} className="btn btn-login mt-3">GO HOME</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;
