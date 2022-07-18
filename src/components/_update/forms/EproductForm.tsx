import { Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCategory, UpdateCategory } from "../../../functions/Categories";
import { AddServices, UpdateServices } from "../../../functions/Services";
import { ICategory, IECategory, IEProduct, IService } from "../../../interfaces/data/objects";
import { IReduxStore } from "../../../interfaces/data/reduxStore";
import { DisplayingErrorMessagesCategorySchema, DisplayingErrorMessagesProductSchema, DisplayingErrorMessagesServiceSchema } from "../../../utiles/ErrorSchema";
import Dropdown from "../../dropdown";
import Textbox from "../inputs/textbox";
import ImageUpload from "./imageUpload";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
 
//@ts-ignore
import { Editor } from "react-draft-wysiwyg";
//@ts-ignore
import { EditorState, convertToRaw,convertFromHTML,ContentState } from "draft-js";
//@ts-ignore
import draftToHtml from "draftjs-to-html";
import { AddEProduct, UpdateEProduct } from "../../../functions/EProduct";

export default ({ PostData ,data,setData}: { PostData: (values: IEProduct) => void,data?:IEProduct,setData:any }) => {
  const [_Image, _setImage] = React.useState<any>();
  const dispatch = useDispatch();
  const user = useSelector((x: IReduxStore) => x.User);
  const services = useSelector((x: IReduxStore) => x.ECategories);
   
  const [editorState, seteditorstate] = React.useState(
    EditorState.createEmpty()
  );
  React.useEffect(()=>{
   
    if (data?.rDescription) {
      const blocksFromHTML = convertFromHTML(data?.rDescription);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );

      seteditorstate(EditorState.createWithContent(state))
 }
  },[data])
  return (
    <Formik
      initialValues={{
        id: data?.id || undefined,
        title: data?.title || "",
        description: data?.description ||"",
        rDescription: data?.rDescription ||"",
        eCategoryId: data?.eCategoryId ||"",
        price: data?.price ||1,
        discountPer: data?.discountPer ||0,
        availableStock: data?.availableStock ||1,
        image:data?.image || "",
        isFeatured:data?.isFeatured || false,
        displayIcon:data?.displayIcon || "",

       }}
      enableReinitialize={true}
      validationSchema={DisplayingErrorMessagesProductSchema}
      onSubmit={async (values, { setSubmitting,resetForm }) => {
        console.log(values,"vvvvvvvveeeeeeeeee")
        let formData = new FormData();
        formData.append("title", values.title);
        formData.append("description", values.description);
        formData.append("eCategoryId", values.eCategoryId.toString());
        formData.append("rDescription", values.rDescription);
        formData.append("price", values.price.toString());
        formData.append("isFeatured", values.isFeatured.toString());
        formData.append("displayIcon", values.displayIcon.toString());

        formData.append("availableStock", values.availableStock.toString());
        formData.append("discountPer", values.discountPer.toString());
         //@ts-ignore
        formData.append("recordUserId", user.id);

        formData.append("uploadImage", _Image?.file || values.image);

        if(data)
        {
            //@ts-ignore
            formData.append("Id", values.id);

         
        //@ts-ignore
         let value=await  dispatch(UpdateEProduct(formData));
         //@ts-ignore
          if(value && value==1)
          {
             setData(undefined)
          }
        }
        else
        {
                         //@ts-ignore
             let value=await dispatch(AddEProduct(formData));
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
          <div className="mb-0 cst-textbox kjfads-fasenr brd-none d-flex flex-column label-bar-1 w-100">
                       <div className="">
                        <Dropdown
          
                          label="Select Category"
                          items={services.map((x:IECategory)=>{
                            return {
                              title:x.title,
                               onClick: () => {
                                setFieldValue("eCategoryId",x?.id)
                                }
                              }
                          })}
                          title={values.eCategoryId?services.find(y=>y.id==values.eCategoryId)?.title || "Select Category":"Select Category"}
                        />
                                            {touched.eCategoryId && errors.eCategoryId && <p style={{color:'red'}}>{errors.eCategoryId}</p>}
          
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
                      <div className="cst-textbox kjfads-fasenr brd-none d-flex flex-column label-bar-1 w-100">
                      <Editor
                    editorState={editorState}
                    placeholder="Rich Description"
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={(editorStateget:any) => {
                      seteditorstate(editorStateget);
                      setFieldValue(
                        "rDescription",
                        draftToHtml(
                          convertToRaw(editorStateget.getCurrentContent())
                        )
                      );
                    }}
                  />
                  { 
               errors.rDescription && <p style={{color:'red'}}>{errors.rDescription}</p>
                }
                      </div>
                      <div className="cst-textbox kjfads-fasenr brd-none d-flex flex-column label-bar-1 w-100">
                         <Textbox
                          label="Price"
                          getFieldProps={getFieldProps}
                          feildName="price"
                          touched={touched.price}
                          
                          error={errors.price}
                          placeholder="Input Price"
                          type="number"
                        />
          
                      </div>
                      <div className="cst-textbox kjfads-fasenr brd-none d-flex flex-column label-bar-1 w-100">
                         <Textbox
                          label="Available Stock"
                          getFieldProps={getFieldProps}
                          feildName="availableStock"
                          touched={touched.availableStock}
                          
                          error={errors.availableStock}
                          placeholder="Input Available Stock"
                          type="number"
                        />
          
                      </div>
                      <div className="cst-textbox kjfads-fasenr brd-none d-flex flex-column label-bar-1 w-100">
                         <Textbox
                          label="Discount Per"
                          getFieldProps={getFieldProps}
                          feildName="discountPer"
                          touched={touched.discountPer}
                          
                          error={errors.discountPer}
                          placeholder="Input Discount in % ex:10"
                          type="number"
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
               { 
               errors.image && <p style={{color:'red'}}>{errors.image}</p>
                }
                 
            </div>
           
             </div>

             <div className="cst-textbox kjfads-fasenr brd-none d-flex flex-column label-bar-1 w-100">
      <div className="mt-1 kjfas-ijdsare">
        <Textbox
          label="SVG Icon"
          getFieldProps={getFieldProps}
          feildName="displayIcon"
          touched={touched.displayIcon}
          error={errors.displayIcon}
          placeholder="Input SVG String"
          type="textarea"
        />
      </div>
    </div>
    <div className="cst-textbox kjfads-fasenr brd-none d-flex flex-column label-bar-1 w-100">
      <div className="mt-1 kjfas-ijdsare hjasdasew-sad">
        <Textbox
          label="SVG Icon"
          getFieldProps={getFieldProps}
          feildName="isFeatured"
          touched={touched.isFeatured}
          error={errors.isFeatured}
          placeholder="Make Featured"
          type="checkbox"
          
          checked={values?.isFeatured||false}
        />
      </div>
    </div>
                      <div className="d-flex justify-content-end my-4">
                        

                        <button type="submit" defaultValue="Add New Product" className="btn-brd">
                        {data?"Update Product":"Add New Product"}
          </button>
                      </div>
                    </Form>
                </div>
        );
      }}
    </Formik>
  );
};
 
