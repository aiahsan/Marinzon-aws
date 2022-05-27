import { Form, Formik } from "formik";
import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddECoupons, UpdateECoupons } from "../../../functions/ECoupons";
import { AddServices, UpdateServices } from "../../../functions/Services";
import { IECoupons, IService } from "../../../interfaces/data/objects";
import { IReduxStore } from "../../../interfaces/data/reduxStore";
import { DisplayingErrorMessagesCouponSchema, DisplayingErrorMessagesServiceSchema } from "../../../utiles/ErrorSchema";
import Textbox from "../inputs/textbox";
import ImageUpload from "./imageUpload";
export default ({
  PostData,
  data,
}: {
  PostData: (values: IECoupons) => void;
  data?: IECoupons;
}) => {
  const [_Image, _setImage] = React.useState<any>();
  const dispatch = useDispatch();
  const user = useSelector((x: IReduxStore) => x.User);

  return (
    <Formik
    initialValues={{
      id: data?.id || undefined,
      couponCode: data?.couponCode || "",
      totalCouponsLeft: data?.totalCouponsLeft  ||"",
      totalDiscount: data?.totalDiscount  ||"",
      expiryDate:moment(data?.expiryDate).format("yyyy-MM-DD") || "",
    }}
    enableReinitialize={true}
    validationSchema={DisplayingErrorMessagesCouponSchema}
    onSubmit={async (values, { setSubmitting,resetForm }) => {
      console.log(values)
      let formData = new FormData();
      formData.append("couponCode", values.couponCode.toString());
      formData.append("totalCouponsLeft", values.totalCouponsLeft.toString());
       formData.append("expiryDate",values.expiryDate);
       formData.append("totalDiscount",values.totalDiscount.toString());
     
      //@ts-ignore
      formData.append("recordUserId", user.id);
      if(data)
      {
          //@ts-ignore
          formData.append("Id", values.id);
    
                 //@ts-ignore

      dispatch(UpdateECoupons(formData));
      }
      else
      {
                   
        
         //@ts-ignore
         let value=await  dispatch(AddECoupons(formData));
         //@ts-ignore
          if(value && value==1)
          {
            resetForm()
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
          label="Coupon Code"
          getFieldProps={getFieldProps}
          feildName="couponCode"
          touched={touched.couponCode}
          
          error={errors.couponCode}
          placeholder="Input Coupon Code"
          type="input"
        />
        
          </div>
          <div className="d-flex flex-column pb-3 w-100">
          <Textbox
          label="Total Coupons Left"
          getFieldProps={getFieldProps}
          feildName="totalCouponsLeft"
          touched={touched.totalCouponsLeft}
          
          error={errors.totalCouponsLeft}
          placeholder="Input Coupons Quantity"
          type="number"
        />
        </div>
        <div className="d-flex flex-column pb-3 w-100">
          <Textbox
          label="Total Discount"
          getFieldProps={getFieldProps}
          feildName="totalDiscount"
          touched={touched.totalDiscount}
          
          error={errors.totalDiscount}
          placeholder="Input Discount"
          type="number"
        />
        </div>
          <div className="d-flex flex-column pb-3 w-100">
          <Textbox
          label="Expiry Date"
          getFieldProps={getFieldProps}
          feildName="expiryDate"
          touched={touched.expiryDate}
          
          error={errors.expiryDate}
          placeholder="Input Expiry Date"
          type="date"
        />
          </div>
          <button type="submit" defaultValue="Add New Coupon" className="btn-brd">
          
            <span>    {data?"Update Coupon":"Add New Coupon"}</span>
          </button>
        </Form>
      </div>
    );
  }}
  </Formik>
  );
};
