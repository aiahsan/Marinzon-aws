import React, { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { ThemeContext } from "../App";
import { ILogin } from "../interfaces/data/objects";
import { loadingAction } from "../redux/actionMethodes/loader";
import { messageAction } from "../redux/actionMethodes/message";
import { repository } from "../utiles/repository";
import jwt_decode from "jwt-decode";
import { LoginAction } from "../redux/actionMethodes/user";
import { Form, Formik } from "formik";
import { DisplayingErrorMessagesLoginSchema } from "../utiles/ErrorSchema";
import Textbox from "../components/_update/inputs/textbox";
import { UserRoles } from "../utiles/constants";
import { LoginUser, UpdateUser } from "../functions/User";

export default () => {
  const history = useHistory();
  const disptach = useDispatch();

  const PostData = async (values: ILogin) => {
    //@ts-ignore

    disptach(LoginUser(values, history));
  };
  return (
    <div className="login-box-p">
      <div className="container">
      <div className="d-flex justify-content-between align-items-center mvw-100">
        <div className="p-an">
          <h5>Selling with marinzon is now really easy!</h5>
          <h6>List your products and start your business with marinzon</h6>
          <p>
            Start selling absolutely free. All you need is to register, list
            your catalogue and start selling your products.
          </p>
          <a className="btn-brd" href="/#/register" style={{textDecoration:'none'}}>
            <span>Start Selling</span>
          </a>
        </div>
        <div className="lgn-p">
          <div className="">
            <div className="sandkas-nrker jsa-sffwr mb-3">
              <img src="/Marinzon Final logo-01.png" className="logo" />
            </div>
          </div>
          <div className="lgn-box">
            <Formik
              initialValues={{
                userName: "",
                password: "",
              }}
              validationSchema={DisplayingErrorMessagesLoginSchema}
              onSubmit={async (values, { setSubmitting }) => {
                await PostData(values);
              }}
            >
              {({ errors, touched, getFieldProps, handleSubmit }) => {
                return (
                  <div className="login-form p-an">
                    <h5 className="text-center">Welcome Back</h5>
                    <h6 className="text-center mb-3">
                      Sign in to your account
                    </h6>
                    <Form className="pt-4">
                      <div className="d-flex flex-column pb-3 w-100">
                        <Textbox
                          label="Email / Phone Number"
                          getFieldProps={getFieldProps}
                          feildName="userName"
                          touched={touched.userName}
                          error={errors.userName}
                          placeholder="Input Email / Phone Number"
                          type="input"
                        />
                      </div>
                      <div className="d-flex flex-column pb-3">
                        <Textbox
                          label="Password"
                          getFieldProps={getFieldProps}
                          feildName="password"
                          touched={touched.password}
                          error={errors.password}
                          placeholder="Input Password"
                          type="password"
                        />
                      </div>

                      <button
                        type="submit"
                        defaultValue="Log in"
                        className="btn-brd"
                      >
                        <span> Sign In</span>
                      </button>
                    </Form>
                  </div>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
