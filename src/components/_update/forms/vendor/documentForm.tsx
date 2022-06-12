import { Form, Formik } from "formik";
import React from "react";
import { DisplayingErrorMessagesDocumentsSchema, DisplayingErrorMessagesLoginSchema } from "../../../../utiles/ErrorSchema";
import Textbox from "../../inputs/textbox";
import PagButton from "./pagButton";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { mainUrl } from "../../../../utiles/baseUrl";
import _ from "lodash";
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
  const [_files,_setfiles]=React.useState([hst.state?.data?.tradeLicense?.image || "",hst.state?.data?.nationCard?.image || ""])
  return (
    <>
      <Formik
        initialValues={{
           tradeLicenseId: docvalues.tradeLicenseId?docvalues.tradeLicenseId:"",
          nationCardId: docvalues.nationCardId?docvalues.nationCardId:"",
         }}
       validationSchema={DisplayingErrorMessagesDocumentsSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setactiveState(activeState + 1);
          await PostData(values);
        }}
      >
        {({ errors, touched, getFieldProps, handleSubmit, setFieldValue }) => {
          return (
            <>
             <Form className="kjndcs-n4r">
             <div className="p-an">
                <h5 className="jnskdf-san4rke">Document Verification</h5>
                <div className=" pb-3 w-100">
                  <h2 className="knsadfkcdsk-mere">Upload Trade Liceense</h2>
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
                         setFieldValue("tradeLicenseId", parseData?.Id);
                       }
                    }
                  }}
                />
                <h5><a href={mainUrl+"wwwroot/Uploads/"+_files[0]} target="#">{_files[0]}</a></h5>
                      {errors.tradeLicenseId&& <p>{errors.tradeLicenseId}</p>}

                </div>

                <div className=" pb-3 w-100">
                  <h2 className="knsadfkcdsk-mere">
                    Upload National Identity{" "}
                    {`(Emirates ID, Saudi Iqama or Passport Copy with VISA)`}
                  </h2>
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
                        updataFiles[1]=parseData?.Image
                        _setfiles([...updataFiles])
                         setFieldValue("nationCardId", parseData?.Id);
                      }
                    }
                  }}
                />
                <h5><a href={mainUrl+"wwwroot/Uploads/"+_files[1]} target="#">{_files[1]}</a></h5>

                      {errors.nationCardId&& <p>{errors.nationCardId}</p>}

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
