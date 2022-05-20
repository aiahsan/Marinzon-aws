import { Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddServices, UpdateServices } from "../../../functions/Services";
import { IService } from "../../../interfaces/data/objects";
import { IReduxStore } from "../../../interfaces/data/reduxStore";
import { DisplayingErrorMessagesServiceSchema } from "../../../utiles/ErrorSchema";
import Textbox from "../inputs/textbox";
import ImageUpload from "./imageUpload";
export default ({
  PostData,
  data,
}: {
  PostData: (values: IService) => void;
  data?: IService;
}) => {
  const [_Image, _setImage] = React.useState<any>();
  const dispatch = useDispatch();
  const user = useSelector((x: IReduxStore) => x.User);

  return (
    <Formik
    initialValues={{
      id: data?.id || undefined,
      title: data?.title || "",
      description: data?.description ||"",
      image:data?.image || "",
    }}
    enableReinitialize={true}
    validationSchema={DisplayingErrorMessagesServiceSchema}
    onSubmit={async (values, { setSubmitting }) => {
      console.log(values)
      let formData = new FormData();
      formData.append("Title", values.title);
      formData.append("description", values.description);
       formData.append("uploadImage", _Image?.file || values.image);
       console.log(user,"ssssss")
      //@ts-ignore
      formData.append("recordUserId", user.id);
      if(data)
      {
          //@ts-ignore
          formData.append("Id", values.id);
    
       //@ts-ignore
      dispatch(UpdateServices(formData));
      }
      else
      {
           //@ts-ignore
      dispatch(AddServices(formData));
      }
    }}
    >
    {({
      errors,
      touched,
      getFieldProps,
      handleSubmit,
      setFieldValue,
      setTouched,
      values
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
      <div className="login-form p-an">
        
        <Form className="pt-4">
          <div className="d-flex flex-column pb-3 w-100">
          <Textbox
          label="Title"
          getFieldProps={getFieldProps}
          feildName="title"
          touched={touched.title}
          
          error={errors.title}
          placeholder="Input Title"
          type="input"
        />
        
          </div>
          <div className="d-flex flex-column pb-3">
          <Textbox
          label="Description"
          getFieldProps={getFieldProps}
          feildName="description"
          touched={touched.description}
          error={errors.description}
          placeholder="Input Description"
          type="textarea"
        />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            
            <div className="d-flex flex-column">
            <ImageUpload
                 getImageFileObject={getImageFileObject}
                 runAfterImageDelete={runAfterImageDelete}
                 image={data?.image}
                 _Image={_Image}
               />
               {  errors.image && <p style={{color:'red'}}>{errors.image}</p>}
                 
            </div>
              
             </div>
          <button type="submit" defaultValue="Add New Service" className="btn-brd">
          
            <span>    {data?"Update Service":"Add New Service"}</span>
          </button>
        </Form>
      </div>
    );
  }}
  </Formik>
  );
};
