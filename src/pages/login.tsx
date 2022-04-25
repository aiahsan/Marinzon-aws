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

    disptach(LoginUser(values,history))
  };
  return (
    <div className="login-box d-flex justify-content-center w-100 mb-5 mt5p">
      <div className="box-shadow p-4 container bg-white pb-5  ">
        <div className="row d-flex justify-content-start align-items-center mt-sm-5">
          <div className="col-lg-5 col-10">
            <div className="pb-5 kjafs-airdm9asi3mem">
              {" "}
              <img
                className="kdjfa-wajem2-23"
                src="https://i.imgur.com/uNGdWHi.png"
                alt=""
              />{" "}
            </div>
          </div>
          <div className="col-lg-4 offset-lg-2 col-md-6 offset-md-3">
            <div className="pt-4 ">
              <h6>
                <span className="fa fa-superpowers text-primary px-md-2" />
                <img src="/Marinzon Final logo-01.png" className="logo" />
              </h6>
            </div>
            <div className="mt-3 mt-md-5">
              <h5 className="text-center mb-2">Log in to your account</h5>
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
                    <div className="login-form">
                      <h3 className="text-center mb-2">Welcome Back</h3>
                      <h5 className="text-center mb-4">
                        Enter Your Email and Password
                      </h5>
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
                        <div className="d-flex jusity-content-end pb-4">
                          <div className="ml-auto">
                            {" "}
                            <a
                              href="#"
                              className="text-danger text-decoration-none"
                            >
                              Forgot password?
                            </a>{" "}
                          </div>
                        </div>{" "}
                        <input
                          type="submit"
                          defaultValue="Log in"
                          
                          className="btn btn-primary btn-block mb-3"
                        />
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
