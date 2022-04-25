import { Form, Formik } from "formik";
import React from "react";
import { IServiceItemServicePrice } from "../../../interfaces/data/objects";
import {
  DisplayingErrorMessagePriceSchema,
  DisplayingErrorMessagesItemSchema,
} from "../../../utiles/ErrorSchema";
export default ({
  handleAddition,
}: {
  handleAddition: (data: IServiceItemServicePrice) => void;
}) => {
  return (
    <>
      <Formik
        initialValues={{
          serviceItemServiceValue: "",
          serviceItemServiceTitle: "",
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
                      {...getFieldProps("serviceItemServiceTitle")}
                    />
                  </div>
                  {touched.serviceItemServiceTitle &&
                  errors.serviceItemServiceTitle ? (
                    <h5  >{errors.serviceItemServiceTitle}</h5>
                  ) : (
                    <></>
                  )}
                </div>
                <div>
                  <div className="d-flex align-items-center">
                    <p> Price: </p>

                    <input
                      type="number"
                      className="ReactTags__tagInputField"
                      placeholder="25 AED"
                      {...getFieldProps("serviceItemServiceValue")}
                    />
                    
                  </div>
                  {touched.serviceItemServiceValue &&
                  errors.serviceItemServiceValue ? (
                    <h5 >{errors.serviceItemServiceValue}</h5>
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
                      if(values.serviceItemServiceTitle!=""  && values.serviceItemServiceValue!="" )
                      {
                         handleAddition({
                          ServiceItemServiceValue: parseInt(
                            values.serviceItemServiceValue
                          ),
                          ServiceItemServiceTitle: values.serviceItemServiceTitle,
                        });
                        setFieldValue("serviceItemServiceValue", "");
                        setFieldValue("serviceItemServiceTitle", "");
                      }
                      else
                      {
                        setFieldTouched("serviceItemServiceValue",true);
                        setFieldTouched("serviceItemServiceTitle",true);
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
