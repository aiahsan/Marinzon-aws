import { Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddServices, UpdateServices } from "../../../functions/Services";
import { UpdateUser } from "../../../functions/User";
import { ILogin, IService } from "../../../interfaces/data/objects";
import { IReduxStore } from "../../../interfaces/data/reduxStore";
import {
  DisplayingErrorMessagesServiceSchema,
  DisplayingErrorMessagesUserUpdateSchema,
} from "../../../utiles/ErrorSchema";
import Textbox from "../inputs/textbox";
import ImageUpload from "./imageUpload";
export default ({
  PostData,
  data,
}: {
  PostData: (values: IService) => void;
  data?: ILogin;
}) => {
  const [_Image, _setImage] = React.useState<any>();
  const dispatch = useDispatch();
  const user = useSelector((x: IReduxStore) => x.User);
  console.log(user,"uuu")
  return (
    <Formik
      initialValues={{
        id: user?.id || undefined,
        fullName: user?.fullName || "",
        image: user?.image ||  "",
      }}
      enableReinitialize={true}
      validationSchema={DisplayingErrorMessagesUserUpdateSchema}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values);
        let formData = new FormData();
        formData.append("fullName", values.fullName);
        formData.append("uploadImage", _Image?.file || data?.image);
        //@ts-ignore
        formData.append("recordUserId", user.id);
        //@ts-ignore

        formData.append("Id", user.id);
         //@ts-ignore

        dispatch(UpdateUser(formData));
      }}
    >
      {({
        errors,
        touched,
        getFieldProps,
        handleSubmit,
        setFieldValue,
        setTouched,
        values,
      }) => {
        const getImageFileObject = (Image: any) => {
          _setImage(Image);
          setFieldValue("image", Image?.file?.name);
        };
        const runAfterImageDelete = (Image: any) => {
          _setImage(undefined);
          setFieldValue("image", undefined);
        };
        return (
          <Form className="">
            <div className="cst-textbox kjfads-fasenr brd-none d-flex flex-column label-bar-1 w-100">
              <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column">
                  <ImageUpload
                    getImageFileObject={getImageFileObject}
                    runAfterImageDelete={runAfterImageDelete}
                    image={user?.image}
                    _Image={_Image}
                  />
                  {values.image && errors.image && (
                    <p style={{ color: "red" }}>{errors.image}</p>
                  )}
                  <div className="maxima">
                    <p>Maximum size of 1MB. JPG, GIF, or PNG.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cst-textbox kjfads-fasenr brd-none d-flex flex-column label-bar-1 w-100">
              <Textbox
                label="Full Name"
                getFieldProps={getFieldProps}
                feildName="fullName"
                touched={touched.fullName}
                error={errors.fullName}
                placeholder="Input Full Name"
                type="input"
              />
            </div>

            <div className="d-flex justify-content-end my-4">
              <button className="btn sakdhsad-dsad" type="submit">
                Update Profile
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
