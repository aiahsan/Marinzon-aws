import { Formik } from "formik";
import React from "react";
import { BsFillPlusCircleFill, BsFillFileMinusFill } from "react-icons/bs";
//@ts-ignore
import { WithContext as ReactTags } from "react-tag-input";
import {
  IServiceItemService,
  IServiceItemServicePrice,
} from "../../../interfaces/data/objects";
import { DisplayingErrorMessageTagSchema } from "../../../utiles/ErrorSchema";
import PricesItems from "../ItemsComponents/PricesItems";
import PriceFields from "./priceFields";

const KeyCodes = {
  comma: 188,
  enter: [10, 13],
};

const delimiters = [...KeyCodes.enter, KeyCodes.comma];

interface tagInterface {
  id: string;
  text: string;
}
export default ({
  title,
  isEditable,
  removeTag,
  saveItem,
  tag,
  cstclass,
}: {
  title: string;
  tag: IServiceItemService;
  isEditable?: Boolean;
  cstclass?: string;
  removeTag?: (id: number | string) => void;
  saveItem?: (item: IServiceItemService) => void;
}) => {
  const [tags, settags] = React.useState<IServiceItemServicePrice[]>([]);

  
  return (
    <Formik
      initialValues={{
        serviceItemServiceTitle: "",
        serviceItemServicePrices: tags,
      }}
      enableReinitialize={true}
      validationSchema={DisplayingErrorMessageTagSchema}
      onSubmit={async (values, { setSubmitting }) => {}}
    >
      {({
        errors,
        touched,
        getFieldProps,
        handleSubmit,
        setFieldValue,
        setTouched,
        setFieldTouched,
        values,
      }) => {
        const handleDelete = (i: number) => {
          setFieldValue("serviceItemServicePrices",values.serviceItemServicePrices.filter((tag, index) => index !== i));
        };
      
        const handleAddition = (tag: IServiceItemServicePrice) => {
          //@ts-ignore
          setFieldValue("serviceItemServicePrices",[tag, ...values.serviceItemServicePrices]);
        };
      
        return (
          <div className={`mfkase0fsre3 t-parent ${cstclass ? cstclass : ""}`}>
            {tag.isCompleted != undefined && tag.isCompleted == false ? (
              <>
                <p className="dskfhods-asdsad">
                  Service Item Name <span>ex: What size is your Yacht?</span>
                </p>

                <input
                  type="text"
                  className="ReactTags__tagInputField"
                  placeholder="What size is your Yacht?"
                  {...getFieldProps("serviceItemServiceTitle")}
                />
                {touched.serviceItemServiceTitle &&
                errors.serviceItemServiceTitle ? (
                  <h5 className="lao3r0-dkasnd">
                    {errors.serviceItemServiceTitle}
                  </h5>
                ) : (
                  <></>
                )}
                <p className="dskfhods-asdsad">Service Item Value and Price</p>
                <div className="d-flex flex-wrap">
                  {
                     values.serviceItemServicePrices.map(((x, i) =><div className="ReactTags__selected">
                     <span
                       className="tag-wrapper ReactTags__tag"
                       style={{ opacity: 1, cursor: "move" }}
                       draggable="true"
                     >
                       {x.ServiceItemServiceTitle} at{" "}
                       {x.ServiceItemServiceValue} AED
                       <button
                         className="ReactTags__remove"
                         type="button"
                         aria-label="Tag at index 0 with value ads focussed. Press backspace to remove"
                         onClick={() => handleDelete(i)}
                       >
                         ×
                       </button>
                     </span>
                     <div className="ReactTags__tagInput"></div>
                   </div> ))
                 }
                </div>
                {touched.serviceItemServicePrices &&
                errors.serviceItemServicePrices ? (
                  <h5 className="lao3r0-dkasnd">
                    {errors.serviceItemServicePrices}
                  </h5>
                ) : (
                  <></>
                )}
                <PriceFields handleAddition={handleAddition} />

                <div className="d-flex justify-content-end">
                  <button
                    className="btn sakdhsad-dsad"
                    type="button"
                    onClick={() => {
                      if (
                        values.serviceItemServicePrices.length > 0 &&
                        values.serviceItemServiceTitle != ""
                      ) {
                        if (saveItem) {
                          saveItem({
                            id: tag?.id,
                            serviceItemServiceTitle: values.serviceItemServiceTitle,
                            serviceItemServicePrices:values.serviceItemServicePrices
                          });
                        }
                      } else {
                        setFieldTouched("serviceItemServicePrices", true);
                        setFieldTouched("serviceItemServiceTitle", true);
                      }
                    }}
                  >
                    Add Item Price
                  </button>
                </div>
                <div className="kjadsfsr">
                  <button
                    className="btn sakdhsad-dsad"
                    type="button"
                    onClick={() => {
                      if (removeTag && tag && tag.id) {
                        removeTag(tag.id);
                      }
                    }}
                  >
                    <BsFillFileMinusFill />
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="dskfhods-asdsad">
                  Service Item Name <span>{tag?.serviceItemServiceTitle}</span>
                </p>
                <p className="dskfhods-asdsad">
                  Service Item Prices { tag.serviceItemServicePrices?.map(x=><span>
                    {`${
                      x.ServiceItemServiceTitle
                     } at ${
                       x.ServiceItemServiceValue
                     } AED
                    `}
                    </span>)}
                </p>
                <div className="kjadsfsr">
                  <button
                  type="button"
                    className="btn sakdhsad-dsad"
                    onClick={() => {
                      if (removeTag && tag && tag.id) {
                        removeTag(tag.id);
                      }
                    }}
                  >
                    <BsFillFileMinusFill />
                  </button>
                </div>
              </>
            )}
          </div>
        );
      }}
    </Formik>
  );
};
