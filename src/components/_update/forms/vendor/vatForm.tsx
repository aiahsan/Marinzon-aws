import { Form, Formik } from "formik";
import React from "react";
import { mainUrl } from "../../../../utiles/baseUrl";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { DisplayingErrorMessagesLoginSchema, DisplayingErrorMessagesVatSchema } from "../../../../utiles/ErrorSchema";
import Textbox from "../../inputs/textbox";
import PagButton from "./pagButton";
import { useLocation } from "react-router-dom";
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
  isFromUpdate?:boolean;
}) => {

  const hst=useLocation();
  console.log(hst)
  //@ts-ignore
  const [_files,_setfiles]=React.useState([hst.state?.data?.vatDocument?.image || "",""])

  return (
    <>
      <Formik
        initialValues={{
          taxRegistrationNumber: docvalues.taxRegistrationNumber?docvalues.taxRegistrationNumber:"",
          documentVatId: docvalues.documentVatId?docvalues.documentVatId:"",
        }}
        validationSchema={DisplayingErrorMessagesVatSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await PostData(values);
        }}
      >
        {({ errors, touched, getFieldProps, handleSubmit ,setFieldValue}) => {
          return (
            <>
             <Form className="kjndcs-n4r">

             <div className="p-an">
            <h5 className="jnskdf-san4rke">VAT Details</h5>
            <div className="d-flex flex-column pb-3 w-100">
              <Textbox
                label=" "
                getFieldProps={getFieldProps}
                feildName="taxRegistrationNumber"
                //@ts-ignore
                touched={touched.taxRegistrationNumber}
                //@ts-ignore
                error={errors.taxRegistrationNumber}
                placeholder="Tax Registration Number"
                type="input"
              />
            </div>
          
          
            <div className=" pb-3 w-100">
              <h2 className="knsadfkcdsk-mere">Upload Tax Registration Certificate</h2>
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
                         setFieldValue("documentVatId", parseData?.Id);
                       }
                    }
                  }}
                />
                <h5><a href={mainUrl+"wwwroot/Uploads/"+_files[0]} target="#">{_files[0]}</a></h5>
                      {errors.documentVatId&& <p>{errors.documentVatId}</p>}

            </div>
            <div className=" ">
              <p className="kjsca-em2e mb-2">I acknowledge and agree that marinzon will be raising and facilitating VAT invoice and credit notes on behalf of my compay in relation to consumer transaction on the marinzon</p>
            </div>
          </div>
          <PagButton
          isFromUpdate={isFromUpdate}
                  activeState={activeState}
                  setactiveState={setactiveState}
                />
             </Form>
              
            </>
          );
        }}
      </Formik> 
    </>
  );
};
