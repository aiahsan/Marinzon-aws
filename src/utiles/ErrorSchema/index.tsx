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
export const DisplayingErrorMessagesServiceSchema = Yup.object().shape({
  title: Yup.string().required("Required") ,
  image: Yup.string().required("Required") ,
  description: Yup.string().required("Required") 
});
export const DisplayingErrorMessagesCategorySchema = Yup.object().shape({
  title: Yup.string().required("Required") ,
   description: Yup.string().required("Required"),
   serviceId: Yup.string().required("Required"),
   
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