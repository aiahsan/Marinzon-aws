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
  const [activeState, setactiveState] = React.useState(1);
  const PostData = async (values: ILogin) => {
    //@ts-ignore

    disptach(LoginUser(values, history));
  };

  return (
    <div className="login-box-p nksds-wedn">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mvw-100">
          <div className="lgn-p">
            <div className="">
              <div className="sandkas-nrker jsa-sffwr  flex-column">
                <img src="/Marinzon Final logo-01.png" className="logo m-0" />
              </div>
              <h5 className="text-center ksjadlas34">Craete a Store</h5>
            </div>
            <div className="stepper-cst">
              <div
                className={`knsdao3e-km3e ${
                  activeState >= 1&&activeState <6 ? "knsdao3e-km3e-a " : "mdkse-aemnw "
                }
                ${activeState>1?"kjnaskd-awn3edw":""}
                `
              
              }
              >
                <div className="d-fxwewe">
                  <img src="https://login.noon.partners/static/images/partners/login1.svg" />
                </div>
                <h5>Login</h5>
              </div>
              <div
                className={`knsdao3e-km3e ${
                  activeState >= 2&&activeState <6  ? "knsdao3e-km3e-a bjasnkc0-wejw" : ""
                }
                ${activeState>2?"kjnaskd-awn3edw":""}
                `}
              >
                {" "}
                <div className="d-fxwewe">
                  <img src="https://login.noon.partners/static/images/partners/store1.svg" />
                </div>
                <h5>Store</h5>
              </div>
              <div
                className={`knsdao3e-km3e ${
                  activeState >= 3&&activeState <6  ? "knsdao3e-km3e-a bjasnkc0-wejw" : ""
                }
                ${activeState>3?"kjnaskd-awn3edw":""}
                `}
              >
                {" "}
                <div className="d-fxwewe">
                  <img src="https://login.noon.partners/static/images/partners/doc1.svg" />
                </div>
                <h5>Document</h5>
              </div>
              <div
                className={`knsdao3e-km3e ${
                  activeState >= 4&&activeState <6? "knsdao3e-km3e-a bjasnkc0-wejw" : ""
                }
                ${activeState>4?"kjnaskd-awn3edw":""}
                `}
              >
                {" "}
                <div className="d-fxwewe">
                  <img src="https://login.noon.partners/static/images/partners/bank1.svg" />
                </div>
                <h5>Bank</h5>
              </div>
              <div
                className={`knsdao3e-km3e ${
                  activeState == 5 ? "knsdao3e-km3e-a bjasnkc0-wejw m-0" : ""
                }
               
                `}
              >
                {" "}
                <div className="d-fxwewe">
                  <img src="https://login.noon.partners/static/images/partners/vat1.svg" />
                </div>
                <h5>Vat</h5>
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
                  const getPageData = (st: Number) => {
                    switch (st) {
                      case 1: {
                        return (
                          <div className="">
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
                          </div>
                        );
                        break;
                      }
                      case 2: {
                        return (
                          <div className="p-an">
                            <h5 className="jnskdf-san4rke">Seller Details</h5>
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
                                label=""
                                getFieldProps={getFieldProps}
                                feildName="password"
                                touched={touched.password}
                                error={errors.password}
                                placeholder="Whats your store name"
                                type="input"
                              />
                            </div>
                            <div className="d-flex flex-column pb-3">
                              <Textbox
                                label=""
                                getFieldProps={getFieldProps}
                                feildName="password"
                                touched={touched.password}
                                error={errors.password}
                                placeholder="Company Legal Name"
                                type="input"
                              />
                            </div>
                            <div className="d-flex flex-column pb-3">
                              <Textbox
                                label=""
                                getFieldProps={getFieldProps}
                                feildName="password"
                                touched={touched.password}
                                error={errors.password}
                                placeholder="Company Phone Number"
                                type="input"
                              />
                            </div>
                            <div className="d-flex flex-column pb-3">
                              <Textbox
                                label=""
                                getFieldProps={getFieldProps}
                                feildName="password"
                                touched={touched.password}
                                error={errors.password}
                                placeholder="Company Phone Number"
                                type="textarea"
                              />
                            </div>
                          </div>
                        );
                        break;
                      }
                      case 3: {
                        return (
                          <div className="p-an">
                            <h5 className="jnskdf-san4rke">
                              Document Verification
                            </h5>
                            <div className=" pb-3 w-100">
                              <h2 className="knsadfkcdsk-mere">Upload Trade Liceense</h2>
                              <div className="upload-btn-wrapper">
                                <button className="btn-brd1 m-0">
                                  Browse Files
                                </button>
                                <input
                                  className="file"
                                  type="file"
                                  name="myfile"
                                />
                              </div>
                            </div>
                           
                            
                       
                            <div className=" pb-3 w-100">
                              <h2 className="knsadfkcdsk-mere">Upload Trade Liceense  {`(Emirates ID, Saudi Iqama or Passport Copy with VISA)`}</h2>
                              <div className="upload-btn-wrapper">
                                <button className="btn-brd1 m-0">
                                Browse Files
                                </button>
                                <input
                                  className="file"
                                  type="file"
                                  name="myfile"
                                />
                              </div>
                            </div>
                          </div>
                        );
                        break;
                      }
                      case 4: {
                        return (
                          <div className="p-an">
                            <h5 className="jnskdf-san4rke">Bank Details</h5>
                            <div className="d-flex flex-column pb-3 w-100">
                              <Textbox
                                label=" "
                                getFieldProps={getFieldProps}
                                feildName="userName"
                                touched={touched.userName}
                                error={errors.userName}
                                placeholder="Beneficiary Name"
                                type="input"
                              />
                            </div>
                            <div className="d-flex flex-column pb-3">
                              <Textbox
                                label=""
                                getFieldProps={getFieldProps}
                                feildName="password"
                                touched={touched.password}
                                error={errors.password}
                                placeholder="Payoneer Email"
                                type="input"
                              />
                            </div>
                            <div className="d-flex flex-column pb-3">
                              <Textbox
                                label=""
                                getFieldProps={getFieldProps}
                                feildName="password"
                                touched={touched.password}
                                error={errors.password}
                                placeholder="Bank Name"
                                type="input"
                              />
                            </div>
                            <div className="d-flex flex-column pb-3">
                              <Textbox
                                label=""
                                getFieldProps={getFieldProps}
                                feildName="password"
                                touched={touched.password}
                                error={errors.password}
                                placeholder="Branch Name"
                                type="input"
                              />
                            </div>
                            <div className="d-flex flex-column pb-3">
                              <Textbox
                                label=""
                                getFieldProps={getFieldProps}
                                feildName="password"
                                touched={touched.password}
                                error={errors.password}
                                placeholder="Account Number"
                                type="input"
                              />
                            </div>
                            <div className="d-flex flex-column pb-3">
                              <Textbox
                                label=""
                                getFieldProps={getFieldProps}
                                feildName="password"
                                touched={touched.password}
                                error={errors.password}
                                placeholder="IBAN Number"
                                type="input"
                              />
                            </div>
                            <div className="d-flex flex-column pb-3">
                              <Textbox
                                label=""
                                getFieldProps={getFieldProps}
                                feildName="password"
                                touched={touched.password}
                                error={errors.password}
                                placeholder="Swift Code"
                                type="input"
                              />
                            </div>
                            <div className="d-flex flex-column pb-3">
                              <Textbox
                                label=""
                                getFieldProps={getFieldProps}
                                feildName="password"
                                touched={touched.password}
                                error={errors.password}
                                placeholder="Currency"
                                type="input"
                              />
                            </div>
                            <div className=" pb-3 w-100">
                              <h2 className="knsadfkcdsk-mere">Upload either certificate and stamped document by the bank with having the information mentioned above or Cancelled Cheque</h2>
                              <div className="upload-btn-wrapper">
                                <button className="btn-brd1 m-0">
                                  Browse Files
                                </button>
                                <input
                                  className="file"
                                  type="file"
                                  name="myfile"
                                />
                              </div>
                            </div>
                          </div>
                        );
                        break;
                      }
                      case 5: {
                        return (
                          <div className="p-an">
                            <h5 className="jnskdf-san4rke">Bank Details</h5>
                            <div className="d-flex flex-column pb-3 w-100">
                              <Textbox
                                label=" "
                                getFieldProps={getFieldProps}
                                feildName="userName"
                                touched={touched.userName}
                                error={errors.userName}
                                placeholder="Tax Registration Number"
                                type="input"
                              />
                            </div>
                          
                          
                            <div className=" pb-3 w-100">
                              <h2 className="knsadfkcdsk-mere">Upload Tax Registration Certificate</h2>
                              <div className="upload-btn-wrapper">
                                <button className="btn-brd1 m-0">
                                  Browse Files
                                </button>
                                <input
                                  className="file"
                                  type="file"
                                  name="myfile"
                                />
                              </div>
                            </div>
                            <div className=" ">
                              <p className="kjsca-em2e mb-2">I acknowledge and agree that marinzon will be raising and facilitating VAT invoice and credit notes on behalf of my compay in relation to consumer transaction on the marinzon</p>
                            </div>
                          </div>
                        );
                        break;
                      }
                    }
                  };
                  return (
                    <div className="login-form p-an">
                      <Form className="">
                        {getPageData(activeState)}
                        <div className="mncsp-ejnadwe">
                          {activeState != 1 ? (
                            <div className="nsaodw-wdem">
                              <button
                                type="button"
                                onClick={() => {
                                  if (activeState > 1) {
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
                              type="button"
                              onClick={() => {
                                if (activeState < 5) {
                                  setactiveState(activeState + 1);
                                }
                              }}
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
