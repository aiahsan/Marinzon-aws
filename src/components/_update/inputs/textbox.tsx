import React from "react";
import { Itexbox } from "../../../interfaces/fields/Itextbox";
export default function App ({
  getFieldProps,
  touched,
  error,
  feildName,
  placeholder,
  type,
  label
}: Itexbox) {
  return (
    <div className="field-box w-100 ">
      <h6>{label}</h6>
      {
        type!=="textarea"?<input
        {...getFieldProps(feildName)}
        className="form-control mt-2"
        type={type}
        placeholder={placeholder}
      />:<textarea rows={8} {...getFieldProps(feildName)}
       placeholder={placeholder}></textarea>
      }
      
      {touched && error && <p>{error}</p>}
    </div>
  );
};
