import { Form, Formik } from "formik";
import React from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { DisplayingErrorMessagesBankSchema, DisplayingErrorMessagesLoginSchema } from "../../../../utiles/ErrorSchema";
import Textbox from "../../inputs/textbox";
import { mainUrl } from "../../../../utiles/baseUrl";
import PagButton from "./pagButton";
import {useLocation} from 'react-router-dom'

export default ({
  PostData,
  docvalues,
  activeState,
  setactiveState,
  isFromUpdate

}: {
  PostData: any;
  docvalues: any;
  activeState: number;
  setactiveState: any;
  isFromUpdate?:boolean

}) => {
  const hst=useLocation();

  //@ts-ignore
  const [_files,_setfiles]=React.useState([hst.state?.data?.document?.image || "",""])
  console.log(hst,"vvvvvv")
  return (
    <>
      <Formik
        initialValues={{
          beneficiaryName:docvalues.beneficiaryName?docvalues.beneficiaryName:"",
          payoneerEmail:docvalues.payoneerEmail?docvalues.payoneerEmail:"",
          bankName:docvalues.bankName?docvalues.bankName:"",
          branchName:docvalues.branchName?docvalues.branchName:"",
          accountNumber:docvalues.accountNumber?docvalues.accountNumber:"",
          iBANNumber:docvalues.iBANNumber?docvalues.iBANNumber:"",
          swiftCode:docvalues.swiftCode?docvalues.swiftCode:"",
          currency:docvalues.currency?docvalues.currency:"",
          documentId:docvalues.documentId?docvalues.documentId:"",
        }}
        validationSchema={DisplayingErrorMessagesBankSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setactiveState(activeState + 1);

          await PostData(values);
        }}
      >
        {({ errors, touched, getFieldProps, handleSubmit,setFieldValue }) => {
          return (
            <>
                <Form className="kjndcs-n4r">
                <div className="p-an">
            <h5 className="jnskdf-san4rke">Bank Details</h5>
            <div className="d-flex flex-column pb-3 w-100">
              <Textbox
                label=" "
                getFieldProps={getFieldProps}
                feildName="beneficiaryName"
                //@ts-ignore
                touched={touched.beneficiaryName}
                //@ts-ignore
                error={errors.beneficiaryName}
                placeholder="Beneficiary Name"
                type="input"
              />
            </div>
            <div className="d-flex flex-column pb-3">
              <Textbox
                label=""
                getFieldProps={getFieldProps}
                feildName="payoneerEmail"
                //@ts-ignore
                touched={touched.payoneerEmail}
                //@ts-ignore
                error={errors.payoneerEmail}
                placeholder="Payoneer Email"
                type="input"
              />
            </div>
            <div className="d-flex flex-column pb-3">
              <Textbox
                label=""
                getFieldProps={getFieldProps}
                feildName="bankName"
                //@ts-ignore
                touched={touched.bankName}
                //@ts-ignore
                error={errors.bankName}
                placeholder="Bank Name"
                type="input"
              />
            </div>
            <div className="d-flex flex-column pb-3">
              <Textbox
                label=""
                getFieldProps={getFieldProps}
                feildName="branchName"
                //@ts-ignore
                touched={touched.branchName}
                //@ts-ignore
                error={errors.branchName}
                placeholder="Branch Name"
                type="input"
              />
            </div>
            <div className="d-flex flex-column pb-3">
              <Textbox
                label=""
                getFieldProps={getFieldProps}
                feildName="accountNumber"
                //@ts-ignore
                touched={touched.accountNumber}
                //@ts-ignore
                error={errors.accountNumber}
                placeholder="Account Number"
                type="input"
              />
            </div>
            <div className="d-flex flex-column pb-3">
              <Textbox
                label=""
                getFieldProps={getFieldProps}
                feildName="iBANNumber"
                //@ts-ignore
                touched={touched.iBANNumber}
                //@ts-ignore
                error={errors.iBANNumber}
                placeholder="IBAN Number"
                type="input"
              />
            </div>
            <div className="d-flex flex-column pb-3">
              <Textbox
                label=""
                getFieldProps={getFieldProps}
                feildName="swiftCode"
                //@ts-ignore
                touched={touched.swiftCode}
                //@ts-ignore
                error={errors.swiftCode}
                placeholder="Swift Code"
                type="input"
              />
            </div>
            <div className="d-flex flex-column pb-3">
              <Textbox
                label=""
                getFieldProps={getFieldProps}
                feildName="currency"
                //@ts-ignore
                touched={touched.currency}
                //@ts-ignore
                error={errors.currency}
                placeholder="Currency"
                type="input"
              />
            </div>
            <div className=" pb-3 w-100">
              <h2 className="knsadfkcdsk-mere">Upload either certificate and stamped document by the bank with having the information mentioned above or Cancelled Cheque</h2>
              <Dropzone
                  getUploadParams={({ file, meta }) => {
                    const body = new FormData();
                    body.append("files", file);
                    return { url: mainUrl + "api/EVendor", body };
                  }}
                  maxFiles={1}
                  onChangeStatus={({ remove, meta, xhr }: any, status) => {
                    if (status === "headers_received") remove();
                    if (status === "done") {
                      if (xhr.response.trim() != "") {
                        const parseData=JSON.parse(xhr.response);
                        var updataFiles=[..._files];
                        updataFiles[0]=parseData?.Image
                        _setfiles([...updataFiles])
                         setFieldValue("documentId", parseData?.Id);
                       }
                    }
                  }}
                />
                <h5><a href={mainUrl+"wwwroot/Uploads/"+_files[0]} target="#">{_files[0]}</a></h5>
                      {errors.documentId&& <p>{errors.documentId}</p>}

            </div>
            <PagButton
                                              isFromUpdate={isFromUpdate}

                  activeState={activeState}
                  setactiveState={setactiveState}
                />
          </div>
                </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};
