import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { VLoginUser } from "../../../../functions/User";
import { DisplayingErrorMessagesLoginSchema } from "../../../../utiles/ErrorSchema";
import Textbox from "../../inputs/textbox";
import PagButton from "./pagButton";
export default ({ PostData,docvalues ,activeState,setactiveState}: { PostData: any,docvalues:any,activeState:number,setactiveState:any }) => {
 const dispatch=useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          userName: docvalues.userName?docvalues.userName:"" ,
          password: docvalues.password?docvalues.password:"",
        }}
        enableReinitialize={true}
        validationSchema={DisplayingErrorMessagesLoginSchema}
        onSubmit={async (values, { setSubmitting }) => {
           if (activeState < 5) {
              (async ()=>{
                //@ts-ignore
               const dataGet= await dispatch(VLoginUser(values))
                 //@ts-ignore
                if(dataGet==1)
                {
                  setactiveState(activeState + 1);
                  await PostData(values);
                }
              })()
          
          }
         }}
      >
        {({ errors, touched, getFieldProps, handleSubmit }) => {
          return (
            <>
              <Form>
              <div className="">
                <div className="d-flex flex-column pb-3 w-100">
                  <Textbox
                    label="Email / Phone Number"
                    getFieldProps={getFieldProps}
                    feildName="userName"
                    //@ts-ignore
                    touched={touched.userName}
                    //@ts-ignore
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
                    //@ts-ignore
                    touched={touched.password}
                    //@ts-ignore
                    error={errors.password}
                    placeholder="Input Password"
                    type="password"
                  />
                </div>
                <PagButton activeState={activeState} setactiveState={setactiveState} />
              </div>
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};
