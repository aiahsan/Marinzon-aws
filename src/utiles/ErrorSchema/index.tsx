import * as Yup from "yup";
export const DisplayingErrorMessagesLoginSchema = Yup.object().shape({
  userName: Yup.string().required("Required").email() || Yup.string().required("Required") ,
  password: Yup.string()
    .required("Required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});
export const DisplayingErrorMessagesStoreSchema = Yup.object().shape({
  email: Yup.string().required("Required").email(),
  name: Yup.string().required("Required") ,
  storeName: Yup.string().required("Required") ,
  legalName: Yup.string().required("Required") ,
  companyPhoneNumber: Yup.string().required("Required") ,
  fullAddress: Yup.string().required("Required") ,
  serviceOfferId: Yup.string().required("Required") ,

});
export const  DisplayingErrorMessagesServiceSchema  = Yup.object().shape({
  title: Yup.string().required("Required") ,
  image: Yup.string().required("Required") ,
  description: Yup.string().required("Required") 
});

export const  DisplayingErrorMessagesVatSchema  = Yup.object().shape({
  taxRegistrationNumber: Yup.string().required("Required") ,
  documentVatId: Yup.string().required("Required") ,
 });


export const DisplayingErrorMessagesBankSchema= Yup.object().shape({
  beneficiaryName: Yup.string().required("Required") ,
  payoneerEmail: Yup.string().required("Required").email() ,
  bankName: Yup.string().required("Required") ,
  branchName: Yup.string().required("Required"), 
  accountNumber: Yup.string().required("Required"), 
  iBANNumber: Yup.string().required("Required"), 
  swiftCode: Yup.string().required("Required"), 
  currency: Yup.string().required("Required"), 
  documentId: Yup.string().required("Required"), 
});

export const DisplayingErrorMessagesDocumentsSchema = Yup.object().shape({
  tradeLicenseId: Yup.string().required("Required") ,
  nationCardId: Yup.string().required("Required") ,
   
});

export const DisplayingErrorMessagesCouponSchema = Yup.object().shape({
  couponCode: Yup.string().required("Required") ,
  totalCouponsLeft: Yup.string().required("Required") ,
  expiryDate: Yup.string().required("Required"), 
  totalDiscount: Yup.string().required("Required"), 
});
export const DisplayingErrorMessagesCategorySchema = Yup.object().shape({
  title: Yup.string().required("Required") ,
   description: Yup.string().required("Required"),
   serviceId: Yup.string().required("Required"),
   
});
export const DisplayingErrorMessagesECategorySchema = Yup.object().shape({
  title: Yup.string().required("Required") ,
   description: Yup.string().required("Required"),
    
});

export const DisplayingErrorMessagesProductSchema = Yup.object().shape({
  title: Yup.string().required("Required") ,
  image: Yup.string().required("Required") ,
  description: Yup.string().required("Required") ,
  rDescription: Yup.string().required("Required") ,
  eCategoryId: Yup.string().required("Required") ,
  price: Yup.string().required("Required") ,
  discountPer: Yup.string().required("Required") ,
});
export const DisplayingErrorMessagesItemSchema = Yup.object().shape({
  title: Yup.string().required("Required") ,
  image: Yup.string().required("Required") ,
  description: Yup.string().required("Required") ,
  serviceId: Yup.string().required("Required"),
  categoryId: Yup.string().required("Required"),

});

export const DisplayingErrorMessageTagSchema = Yup.object().shape({
  serviceItemServiceTitle: Yup.string().required("Required") ,
  serviceItemServicePrices: Yup.array().min(1,"field must have at least 1 items"),

});
export const DisplayingErrorMessagePriceSchema = Yup.object().shape({
  serviceItemServiceTitle: Yup.string().required("Required") ,
  serviceItemServiceValue: Yup.string().required("Required"),

});
export const DisplayingErrorMessagesRegisterSchema = Yup.object().shape({
  email: Yup.string().required("Required").email(),
  name: Yup.string().required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  password_confirmation: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
export const DisplayingErrorMessagesUserUpdateSchema = Yup.object().shape({
  fullName: Yup.string().required("Required") ,
  image: Yup.string().required("Required") ,
 });