import { Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCategory, UpdateCategory } from "../../../functions/Categories";
import { AddServices, UpdateServices } from "../../../functions/Services";
import { ICategory, IService } from "../../../interfaces/data/objects";
import { IReduxStore } from "../../../interfaces/data/reduxStore";
import { DisplayingErrorMessagesCategorySchema, DisplayingErrorMessagesServiceSchema } from "../../../utiles/ErrorSchema";
import Dropdown from "../../dropdown";
import Textbox from "../inputs/textbox";
import ImageUpload from "./imageUpload";
export default ({ PostData ,data,setData}: { PostData: (values: ICategory) => void,data?:ICategory,setData:any }) => {
  const [_Image, _setImage] = React.useState<any>();
  const dispatch = useDispatch();
  const user = useSelector((x: IReduxStore) => x.User);
  const services = useSelector((x: IReduxStore) => x.Services);
   
 
  return (
    <Formik
      initialValues={{
        id: data?.id || undefined,
        title: data?.title || "",
        description: data?.description ||"",
        serviceId: data?.serviceId ||"",
       }}
      enableReinitialize={true}
      validationSchema={DisplayingErrorMessagesCategorySchema}
      onSubmit={async (values, { setSubmitting,resetForm }) => {
        console.log(values)
        let formData = new FormData();
        formData.append("Title", values.title);
        formData.append("description", values.description);
        formData.append("serviceId", values.serviceId.toString());
         //@ts-ignore
        formData.append("recordUserId", user.id);
        if(data)
        {
            //@ts-ignore
            formData.append("Id", values.id);

         //@ts-ignore
         let value=await  dispatch(UpdateCategory(formData));
         //@ts-ignore
          if(value && value==1)
          {
             setData(undefined)
          }
        }
        else
        {
             //@ts-ignore
             let value=await dispatch(AddCategory(formData));
             //@ts-ignore
             if(value && value==1)
             {
                 resetForm();
             }
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
        setFieldTouched,
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
        
          <Form className="">
                       
                      <div className="cst-textbox kjfads-fasenr brd-none d-flex flex-column label-bar-1 w-100">
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
                      <div className="cst-textbox kjfads-fasenr brd-none d-flex flex-column label-bar-1 w-100">
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
          
                      <div className="d-flex justify-content-end my-4">
                        

                        <button type="submit" defaultValue="Add New Service" className="btn-brd">
                        {data?"Update Category":"Add New Category"}
          </button>
                      </div>
                    </Form>
                </div>
        );
      }}
    </Formik>
  );
};
 
