import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { ThemeContext } from "../App";
import { ILogin } from "../interfaces/data/objects";
import { loadingAction } from "../redux/actionMethodes/loader";
import { messageAction } from "../redux/actionMethodes/message";
import { repository } from "../utiles/repository";
import jwt_decode from "jwt-decode";
import { deleteVUserAM, LoginAction } from "../redux/actionMethodes/user";
import { Form, Formik } from "formik";
import { DisplayingErrorMessagesLoginSchema } from "../utiles/ErrorSchema";
import Textbox from "../components/_update/inputs/textbox";
import { UserRoles } from "../utiles/constants";
import { LoginUser, UpdateUser, VLoginUser } from "../functions/User";
import LoginForm from "../components/_update/forms/vendor/loginForm";
import StoreForm from "../components/_update/forms/vendor/storeForm";
import DocumentForm from "../components/_update/forms/vendor/documentForm";
import BankForm from "../components/_update/forms/vendor/bankForm";
import VatForm from "../components/_update/forms/vendor/vatForm";
import { values } from "lodash";

export default () => {
  const history = useHistory();
  const disptach = useDispatch();
  //@ts-ignore
  const vUser=useSelector(x=>x.VUser)
  const [activeState, setactiveState] = React.useState(vUser!=null?2:1);
  const PostData = async (values: ILogin) => {
    
    //@ts-ignore
    disptach(VLoginUser(values, history));
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

                  email:"",
                  name:"",
                  storeName:"",
                  companyPhoneNumber:"",
                  legalName:"",
                  fullAddress:"",
                  serviceOfferId:"",
                  storeId:"",


                  tradeLicenseId:"",
                  nationCardId:"",


                  
                  beneficiaryName:"",
                  payoneerEmail:"",
                  bankName:"",
                  branchName:"",
                  accountNumber:"",
                  iBANNumber:"",
                  swiftCode:"",
                  currency:"",
                  documentId:"",
                 
                  taxRegistrationNumber:"",
                  documentVatId:"",


                }}
                validationSchema={DisplayingErrorMessagesLoginSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  await PostData(values);
                }}
              >
                {({ errors, touched, getFieldProps, handleSubmit,initialValues ,setFieldValue,values,resetForm}) => {
                  const getPageData = (st: Number) => {
                    switch (st) {
                      case 1: {
                        return (
                          <LoginForm
                          
                          activeState={activeState}
                          setactiveState={setactiveState}
                          docvalues={{
                            userName:values.userName,
                            password:values.password,
                          }} PostData={(values1:any)=>{
                            setFieldValue("userName",values1.userName);
                            setFieldValue("password",values1.password);
                          }}/>
                        );
                        break;
                      }
                      case 2: {
                        return (
                         <StoreForm   activeState={activeState}
                         setactiveState={setactiveState}
                         docvalues={{
                          email:values.email,
                          name:values.name,
                          storeName:values.storeName,
                          legalName:values.legalName,
                          companyPhoneNumber:values.companyPhoneNumber,
                          fullAddress:values.fullAddress,
                          serviceOfferId:values.serviceOfferId,
                          }} PostData={(values1:any)=>{
                           setFieldValue("email",values1.email);
                           setFieldValue("name",values1.name);
                           setFieldValue("storeName",values1.storeName);
                           setFieldValue("legalName",values1.legalName);
                           setFieldValue("companyPhoneNumber",values1.companyPhoneNumber);
                           setFieldValue("fullAddress",values1.fullAddress);
                           setFieldValue("serviceOfferId",values1.serviceOfferId);
                           }}/>
                        );
                        break;
                      }
                      case 3: {
                        return (
                         <DocumentForm   activeState={activeState}
                         setactiveState={setactiveState}   docvalues={{
                          tradeLicenseId:values.tradeLicenseId,
                          nationCardId:values.nationCardId,
                      
                          }} PostData={(values1:any)=>{

                            
                           setFieldValue("tradeLicenseId",values1.tradeLicenseId);
                           setFieldValue("nationCardId",values1.nationCardId);
                           
                           }}/>
                        );
                        break;
                      }
                      case 4: {
                        return (
                        <BankForm  activeState={activeState}
                        setactiveState={setactiveState}   docvalues={{
                          beneficiaryName:values.beneficiaryName,
                          payoneerEmail:values.payoneerEmail,
                          bankName:values.bankName,
                          branchName:values.branchName,
                          accountNumber:values.accountNumber,
                          iBANNumber:values.iBANNumber,
                          swiftCode:values.swiftCode,
                          currency:values.currency,
                          documentId:values.documentId,
                       
                     
                         }} PostData={(values1:any)=>{
                          setFieldValue("beneficiaryName",values1.beneficiaryName);
                          setFieldValue("payoneerEmail",values1.payoneerEmail);
                          setFieldValue("bankName",values1.bankName);
                          setFieldValue("branchName",values1.branchName);
                          setFieldValue("accountNumber",values1.accountNumber);
                          setFieldValue("iBANNumber",values1.iBANNumber);
                          setFieldValue("swiftCode",values1.swiftCode);
                          setFieldValue("currency",values1.currency);
                          setFieldValue("documentId",values1.documentId);
                          
                          }}/>
                        );
                        break;
                      }
                      case 5: {
                        return (
                        <VatForm  activeState={activeState}
                        setactiveState={setactiveState}   docvalues={{
                          taxRegistrationNumber:values.taxRegistrationNumber,
                          documentVatId:values.documentVatId,
                     
                         }} PostData={(values1:any)=>{
                           setFieldValue("taxRegistrationNumber",values1.taxRegistrationNumber);
                          setFieldValue("documentVatId",values1.documentVatId);
                              var objToSend={
                              userId:vUser?.id,
                              email:values.email,
                              name :values.name,
                              storeName  :values.storeName,
                              legalName  :values.legalName,
                              companyPhoneNumber  :values.companyPhoneNumber ,
                              fullAddress  :values.fullAddress ,
                              serviceOfferId   :values.serviceOfferId ,
                              tradeLicenseId   :values.tradeLicenseId ,
                              nationCardId:values.nationCardId ,
                              beneficiaryName:values.beneficiaryName ,
                              payoneerEmail:values.payoneerEmail ,
                              bankName:values.bankName ,
                              branchName:values.branchName ,
                              accountNumber:values.accountNumber ,
                              iBANNumber :values.iBANNumber ,
                              swiftCode :values.swiftCode,
                              currency :values.currency,
                              documentId :values.documentId,
                              taxRegistrationNumber  :values1.taxRegistrationNumber,
                              documentVatId  :values1.documentVatId,

                             };
                             (async ()=>{
                              try{
                                disptach(loadingAction(true));
                                const { status, data }: any = await repository
                                .PostVendorRegi( "",{
                                  ...objToSend,
                                  recordUserId:vUser?.id
                                })
                                .then((x) => x);

                                if (status == 200 && data?.success == true){
                                  resetForm();
                                  //@ts-ignore
                                  disptach(deleteVUserAM())
                                  setactiveState(1);
                                  disptach(loadingAction(false));

                                  disptach(
                                    messageAction({
                                      type: 1,
                                      message: data?.message,
                                    })
                                  );
                                }
                                else
                                {
                                  disptach(loadingAction(false));
                                  disptach(
                                    messageAction({
                                      type: 3,
                                      message:
                                        data?.message || "Something wen't wrong contact support",
                                    })
                                  );
                                }

                               }
                               catch(e)
                               {
                                disptach(loadingAction(false));
                                disptach(
                                  messageAction({
                                    type: 3,
                                    message: e as string,
                                  })
                                );
                               }
                             })()
                             

                          }}/>
                        );
                        break;
                      }
                    }
                  };
                  return (
                    <div className="login-form p-an">
                      <div className="">
                        {getPageData(activeState)}

                      </div>
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
