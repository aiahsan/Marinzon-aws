import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetServices } from "../../../../functions/Services";
import { IService } from "../../../../interfaces/data/objects";
import { IReduxStore } from "../../../../interfaces/data/reduxStore";
import { setServicesAM } from "../../../../redux/actionMethodes/Services";
import {
  DisplayingErrorMessagesLoginSchema,
  DisplayingErrorMessagesStoreSchema,
} from "../../../../utiles/ErrorSchema";
import Dropdown from "../../../dropdown";
import Textbox from "../../inputs/textbox";
import PagButton from "./pagButton";
export default ({
  PostData,
  docvalues,
  activeState,
  setactiveState,
  isFromUpdate
}: {
  PostData: any;
  docvalues?: any;
  activeState: number;
  setactiveState: any;
  isFromUpdate?:boolean
}) => {
  const services = useSelector((x: IReduxStore) => x.Services);
  const dispatch=useDispatch()
  useEffect(()=>{
    //@ts-ignore
    dispatch(GetServices())
  },[])
  return (
    <>
      <Formik
        initialValues={{
          id: docvalues.storeId ? docvalues.storeId : "",
          email: docvalues.email ? docvalues.email : "",
          name: docvalues.name ? docvalues.name : "",
          storeName: docvalues.storeName ? docvalues.storeName : "",
          legalName: docvalues.legalName ? docvalues.legalName : "",
          companyPhoneNumber: docvalues.companyPhoneNumber
            ? docvalues.companyPhoneNumber
            : "",
          fullAddress: docvalues.fullAddress ? docvalues.fullAddress : "",
          serviceOfferId: docvalues.serviceOfferId
            ? docvalues.serviceOfferId
            : "",
        }}
        validationSchema={DisplayingErrorMessagesStoreSchema}
        onSubmit={async (values, { setSubmitting }) => {
           setactiveState(activeState + 1);
          await PostData(values);
        }}
      >
        {({
          errors,
          touched,
          getFieldProps,
          handleSubmit,
          values,
          setFieldValue,
        }) => {
          return (
            <>
              <Form>
                <div className="p-an">
                   <div className="d-flex flex-column pb-3 w-100">
                    <Textbox
                      label="Email / Phone Number"
                      getFieldProps={getFieldProps}
                      feildName="email"
                      //@ts-ignore
                      touched={touched.email}
                      //@ts-ignore
                      error={errors.email}
                      placeholder="Input Email / Phone Number"
                      type="input"
                    />
                  </div>
                  <div className="d-flex flex-column pb-3 w-100">
                    <Textbox
                      label="Full Name"
                      getFieldProps={getFieldProps}
                      feildName="name"
                      //@ts-ignore
                      touched={touched.name}
                      //@ts-ignore
                      error={errors.name}
                      placeholder="Input your full name"
                      type="input"
                    />
                  </div>
                  <div className="d-flex flex-column pb-3 w-100">
                    <Textbox
                      label="Full Name"
                      getFieldProps={getFieldProps}
                      feildName="storeName"
                      //@ts-ignore
                      touched={touched.storeName}
                      //@ts-ignore
                      error={errors.storeName}
                      placeholder="Input your Store Name"
                      type="input"
                    />
                  </div>
                  <div className="d-flex flex-column pb-3">
                    <Textbox
                      label="Legal Company Name"
                      getFieldProps={getFieldProps}
                      feildName="legalName"
                      //@ts-ignore
                      touched={touched.legalName}
                      //@ts-ignore
                      error={errors.legalName}
                      placeholder="Whats your legal Company name"
                      type="input"
                    />
                  </div>
                  <div className="d-flex flex-column pb-3">
                    <Textbox
                      label=""
                      getFieldProps={getFieldProps}
                      feildName="companyPhoneNumber"
                      //@ts-ignore
                      touched={touched.companyPhoneNumber}
                      //@ts-ignore
                      error={errors.companyPhoneNumber}
                      placeholder="Company Phone Number"
                      type="input"
                    />
                  </div>

                  <div className="d-flex flex-column pb-3">
                    <Textbox
                      label=""
                      getFieldProps={getFieldProps}
                      feildName="fullAddress"
                      //@ts-ignore
                      touched={touched.fullAddress}
                      //@ts-ignore
                      error={errors.fullAddress}
                      placeholder="Company Address"
                      type="textarea"
                    />
                  </div>
                  <div className="">
                    <Dropdown
                      label="Select Service"
                      items={services.map((x: IService) => {
                        return {
                          title: x.title,
                          onClick: () => {
                            setFieldValue("serviceOfferId", x?.id);
                          },
                        };
                      })}
                      title={
                        values.serviceOfferId
                          ? services.find((y) => y.id == values.serviceOfferId)
                              ?.title || "Select Service"
                          : "Select Service"
                      }
                    />
                    {touched.serviceOfferId && errors.serviceOfferId && (
                      <p style={{ color: "red" }}>{errors.serviceOfferId}</p>
                    )}
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
