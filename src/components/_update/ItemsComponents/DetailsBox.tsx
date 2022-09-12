import React from 'react';
import { useSelector } from 'react-redux';
import { ICategory, IService } from '../../../interfaces/data/objects';
import { IReduxStore } from '../../../interfaces/data/reduxStore';
import Dropdown from '../../dropdown';
import ImageUpload from '../forms/imageUpload';
import Textbox from '../inputs/textbox';

export default ({services,values,setFieldValue,categories,getFieldProps,setFieldTouched,_Image,touched,errors,getImageFileObject,runAfterImageDelete}:{services:IService[],categories:ICategory[],values:any,setFieldValue:any,getFieldProps:any,_Image:any,touched:any,errors:any,getImageFileObject:any,runAfterImageDelete:any,setFieldTouched:any})=>{
  
  
  const user = useSelector((x: IReduxStore) => x.User);
  const [isRental,setisRental]=React.useState(false);
     React.useEffect(()=>{
    if(values&&values.categoryId==0)
    {
      
      setisRental(true)
    }
    else
    {
      setisRental(false)
    }
  },[values])
 return <div>
    {
      values && values?.id?<></>:<>
      <div className="mt-4 kjfas-ijdsare">
      <Dropdown
        label={isRental==true?"Rental":"Service"}
        items={[1,2].map((x: number) => {
          return {
            title: x==1?"Service":"Rental",
            onClick: () =>
          {
            if(x==2)
            {
              setisRental(true)
            }
            else
            {
              setisRental(false)
            }
          }

          };
        })}
        title={isRental==true?"Rental":"Service"}
      />
 
    </div>
      </>
    }
  <div className="d-flex flex-wrap align-items-center">
        {
          isRental==false?<>
       
    <div className="kjfas-ijdsare">
      <Dropdown
        label="Select Category"
        items={categories.filter(x=>x.isApproved==true&&x.isActive==true).map((x: ICategory) => {
          return {
            title: x.title,
            onClick: () =>
              {
                 setFieldValue("categoryId", x?.id)
              },
          };
        })}
        title={
          categories.find(
            (y) => y.id == values.categoryId
          )?.title || "Select Category"
        }
      />
          {touched.categoryId && errors.categoryId && <p style={{color:'red'}}>{errors.categoryId}</p>}


    </div>
          </>:<></>
        }

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
    <div className='d-flex w-100 '>
    <div className="d-flex flex-column-reverse w-100">
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
    <div className="cst-textbox kjfads-fasenr brd-none d-flex flex-column label-bar-1 w-100">
      <div className="mt-1 kjfas-ijdsare">
      {
        user?.isAdmin&&user.isAdmin==true? <Textbox
        label="SVG Icon"
        getFieldProps={getFieldProps}
        feildName="displayIcon"
        touched={touched.displayIcon}
        error={errors.displayIcon}
        placeholder="Input SVG String"
        type="textarea"
      />:<></>
      }
      </div>
    </div>
    <div className="cst-textbox kjfads-fasenr brd-none d-flex flex-column label-bar-1 w-100">
      {
         user?.isAdmin&&user.isAdmin==true ?<div className="mt-1 kjfas-ijdsare hjasdasew-sad">
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
      </div>:<></>
      }
    </div>
  </div>
</div>
}