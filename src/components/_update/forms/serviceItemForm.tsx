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
export default ({ PostData ,data}: { PostData: (values: ICategory) => void,data?:ICategory }) => {
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
      onSubmit={async (values, { setSubmitting }) => {
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
        dispatch(UpdateCategory(formData));
        }
        else
        {
             //@ts-ignore
        dispatch(AddCategory(formData));
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
          <Form className="">
             <div className="mb-0 cst-textbox kjfads-fasenr brd-none d-flex flex-column label-bar-1 w-100">
             <div className="">
              <Dropdown
                label="Select Service"
                items={services.map((x:IService)=>{
                  return {
                    title:x.title,
                     onClick: () => setFieldValue("serviceId",x?.id)
                    }
                })}
                title={values.serviceId?services.find(y=>y.id==values.serviceId)?.title || "Select Service":"Select Service"}
              />
            </div>
            
            </div>
            
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
              <button className="btn sakdhsad-dsad" type="submit">
                Add New Service
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
 
