import React from "react";
import { Itexbox } from "../../../interfaces/fields/Itextbox";
export default function App({
  getFieldProps,
  touched,
  error,
  feildName,
  placeholder,
  type,
  label,
  checked
}: Itexbox) {
  return (
    <div className="float-input ">
      <div className="floating">
        {type !== "textarea" ? (
          <input
            checked={checked}
            className="floating__input"
            {...getFieldProps(feildName)}
            type={type}
            placeholder={placeholder}
          />
        ) : (
          <textarea
            rows={8}
            {...getFieldProps(feildName)}
           
            placeholder={placeholder}
            className="form-control jkjdsaikfer"
          ></textarea>
        )}
        {type !== "textarea" ? (
          <label className="floating__label" data-content={placeholder}>
            <span className="hidden--visually">{label}</span>
          </label>
        ) : (
          <></>
        )}
      </div>
      {touched && error && <p>{error}</p>}
    </div>
  );
}
