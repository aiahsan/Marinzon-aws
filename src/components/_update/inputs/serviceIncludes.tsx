import { Form, Formik } from "formik";
import React from "react";
import { IFAQService, IServiceItemServicePrice } from "../../../interfaces/data/objects";
import {
  DisplayingErrorMessagePriceSchema,
  DisplayingErrorMessagesItemSchema,
} from "../../../utiles/ErrorSchema";
export default ({
  handleAddition,
}: {
  handleAddition: (data: IFAQService) => void;
}) => {
  return (
    <>
      <Formik
        initialValues={{
          serviceTitle: "",
         }}
        enableReinitialize={true}
        validationSchema={DisplayingErrorMessagePriceSchema}
        onSubmit={async (values, { setSubmitting }) => {}}
      >
        {({
          errors,
          touched,
          getFieldProps,
          handleSubmit,
          setFieldValue,
          setTouched,
          setFieldTouched,
          values,
        }) => {
          return (
            
            <div className="">
              <div className="d-flex align-items-center dafdsf-cdsfs flex-wrap">
                <div>
                  <div className="d-flex align-items-center">
                    <p>Value:</p>
                    <input
                      type="text"
                      className="ReactTags__tagInputField"
                      placeholder="1 Bedroom Flat"
                      {...getFieldProps("serviceTitle")}
                    />
                  </div>
                  {touched.serviceTitle &&
                  errors.serviceTitle ? (
                    <h5  >{errors.serviceTitle}</h5>
                  ) : (
                    <></>
                  )}
                </div>
              
              </div>
              <div className="">
                <button
                  className="btn sakdhsad-dsad"
                  type="button"
                  onClick={() => {
                      if(values.serviceTitle!=""  )
                      {
                         handleAddition({
                          
                          serviceTitle: values.serviceTitle,
                        });
                        setFieldValue("serviceTitle", "");
                       }
                      else
                      {
                         setFieldTouched("serviceTitle",true);
                      }
                  }}
                >
                  Add Value
                </button>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
};
