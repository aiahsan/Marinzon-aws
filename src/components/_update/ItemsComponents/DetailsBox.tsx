import React from 'react';
import { ICategory, IService } from '../../../interfaces/data/objects';
import Dropdown from '../../dropdown';
import ImageUpload from '../forms/imageUpload';
import Textbox from '../inputs/textbox';
export default ({services,values,setFieldValue,categories,getFieldProps,_Image,touched,errors,getImageFileObject,runAfterImageDelete}:{services:IService[],categories:ICategory[],values:any,setFieldValue:any,getFieldProps:any,_Image:any,touched:any,errors:any,getImageFileObject:any,runAfterImageDelete:any})=>{
    return <div className="d-flex flex-wrap align-items-center">
    <div className="mt-4 kjfas-ijdsare">
      <Dropdown
        label="Select Service"
        items={services.map((x: IService) => {
          return {
            title: x.title,
            onClick: () =>
              setFieldValue("serviceId", x?.id),
          };
        })}
        title={
          values.serviceId
            ? services.find(
                (y) => y.id == values.serviceId
              )?.title || "Select Service"
            : "Select Service"
        }
      />
    </div>
    <div className="mt-4 kjfas-ijdsare">
      <Dropdown
        label="Select Category"
        items={categories.map((x: ICategory) => {
          return {
            title: x.title,
            onClick: () =>
              setFieldValue("categoryId", x?.id),
          };
        })}
        title={
          values.serviceId
            ? categories.find(
                (y) => y.id == values.categoryId
              )?.title || "Select Category"
            : "Select Category"
        }
      />
    </div>

    <div className="cst-textbox kjfads-fasenr brd-none d-flex flex-column label-bar-1 w-100">
      <div className="mt-1 kjfas-ijdsare">
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
    </div>
    <div className="d-flex flex-column">
      <ImageUpload
        getImageFileObject={getImageFileObject}
        runAfterImageDelete={runAfterImageDelete}
        image={values?.image}
        _Image={_Image}
      />
      {touched.image && errors.image && (
        <p style={{ color: "red" }}>{errors.image}</p>
      )}
    </div>
    <div className="cst-textbox kjfads-fasenr brd-none d-flex flex-column label-bar-1 w-100">
      <div className="mt-1 kjfas-ijdsare">
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
    </div>
  </div>
}