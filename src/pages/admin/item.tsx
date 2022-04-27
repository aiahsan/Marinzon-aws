import DashboardCard from "../../components/dashboard/dashboardCard";
import Layout from "../../components/layout";
import { AiFillFolderOpen, AiFillCar } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
 import Searchbar from "../../components/_update/inputs/searchbar";
import { Placeholder, Table } from "react-bootstrap";
import RightIcons from "../../components/rightIcons";
import Dropdown from "../../components/dropdown";
import Textarea from "../../components/textarea";
import Textbox from "../../components/_update/inputs/textbox";

import TagInput from "../../components/_update/inputs/taginput";
import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
//@ts-ignore
import Stepper from "react-stepper-horizontal";
import { Form, Formik } from "formik";
import {
  DisplayingErrorMessagesItemSchema,
  DisplayingErrorMessagesServiceSchema,
} from "../../utiles/ErrorSchema";
import { useDispatch, useSelector } from "react-redux";
import { IReduxStore } from "../../interfaces/data/reduxStore";
import ImageUpload from "../../components/_update/forms/imageUpload";
import {
  ICategory,
  IFAQQuestion,
  IFAQService,
  IItem,
  IService,
  IServiceItemService,
} from "../../interfaces/data/objects";
import PricesItems from "../../components/_update/ItemsComponents/PricesItems";
import DetailsBox from "../../components/_update/ItemsComponents/DetailsBox";
import ServiceIncludes from "../../components/_update/inputs/serviceIncludes";
import {
  changeKeysToUpper,
  _cstFaqQuestion,
  _cstServicesInclude,
  _csttags,
} from "../../utiles/constants";
import { AddItem } from "../../functions/Items";
import { useLocation, useParams } from "react-router-dom";
import { GetServices } from "../../functions/Services";
import { GetCategory } from "../../functions/Categories";

function App() {
  const [tags, settags] = React.useState([0]);
  const [_active, _setactive] = React.useState(0);
  const [_Image, _setImage] = React.useState<any>();
  const dispatch = useDispatch();
  const user = useSelector((x: IReduxStore) => x.User);
  const services = useSelector((x: IReduxStore) => x.Services);
  const categories = useSelector((x: IReduxStore) => x.Categories);
  const [_submitFinish, _setsubmitFinish] = React.useState(false);
  const itemsRef = React.useRef([]);
  const [_updateState, _setUpdateState] = React.useState<IItem>();
  const [buttonName,setbuttonName]=React.useState("Next");
  const parms = useLocation();
  React.useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, _cstFaqQuestion.length);
  }, []);
  React.useEffect(() => {
    
  }, [_active]);
  React.useEffect(() => {
    //@ts-ignore
    if (parms?.state?.data) {
      //@ts-ignore
      _setUpdateState(parms?.state?.data);
    }
  }, [parms]);

  React.useEffect(()=>{
    _setactive(0)
  },[])
  React.useEffect(() => {
        //@ts-ignore

    dispatch(GetServices());
            //@ts-ignore

     dispatch(GetCategory());
  }, []);

  return (
    <Layout title="">
      <div className="main-div">
        <div className="hdsf0s-sadmsa mt-3">
          <h3>Add New Service Item</h3>
        </div>
      </div>
      <div className="d-flex flex-row mt-4">
        <div className="right-card px-4">
          <div className="box-shadow p-4">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="hd-5">Services</h5>
            </div>
            <div className="dsf-asdnasd">
              <Stepper
                activeColor="#111826"
                completeColor="#149dc7"
                defaultBarColor="#FFFFFF"
                completeBarColor="#a1a7bd"
                defaultTitleColor="#d6d6d6"
                activeBarColor="white"
                barStyle="solid"
                circleFontSize={16}
                steps={[
                  { title: "Service Information" },
                  { title: "Price" },
                  { title: "FAQ" },
                ]}
                activeStep={_active}
                className="sdsdsds"
              />
            </div>
            <Formik
              initialValues={{
                id: _updateState?.id || undefined,
                serviceId:_updateState?.serviceId || undefined,
                categoryId:_updateState?.categoryId ||  undefined,
                title: _updateState?.title || "",
                image: _updateState?.image || "",
                description:  _updateState?.description || "",
                serviceItemServices:_updateState?.serviceItemServices || _csttags,
                fAQServices:_updateState?.fAQServices || _cstServicesInclude,
                fAQQuestions:_updateState?.fAQQuestions || _cstFaqQuestion,
              }}
              enableReinitialize={true}
              validationSchema={DisplayingErrorMessagesItemSchema}
              onSubmit={async (values, { setSubmitting }) => {
                let formData = new FormData();
                formData.append("title", values.title);
                formData.append("description", values.description);
                formData.append("uploadImage", _Image?.file || values.image);
                //@ts-ignore
                formData.append("recordUserId", user.id);
                //@ts-ignore

                formData.append("serviceId", values.serviceId);
                //@ts-ignore

                formData.append("categoryId", values.categoryId);
                formData.append(
                  "fAQServices",
                  JSON.stringify(changeKeysToUpper(values.fAQServices))
                );

                formData.append(
                  "fAQQuestions",
                  JSON.stringify(changeKeysToUpper(values.fAQQuestions))
                );

                formData.append(
                  "serviceItemServices",
                  JSON.stringify(changeKeysToUpper(values.serviceItemServices))
                );
                console.log(values);
                //@ts-ignore
                dispatch(AddItem(formData));
              }}
            >
              {({
                errors,
                touched,
                getFieldProps,
                handleSubmit,
                setFieldValue,
                setTouched,
                values,
              }) => {
                const getImageFileObject = (Image: any) => {
                  _setImage(Image);
                  setFieldValue("image", Image?.file?.name);
                };
                const runAfterImageDelete = (Image: any) => {
                  _setImage(undefined);
                  setFieldValue("image", undefined);
                };
                const handleAdditionFaqServiceInclude = (
                  tagFaqs: IFAQService
                ) => {
                  setFieldValue("fAQServices", [
                    ...values.fAQServices,
                    {
                      id: Date.now(),
                      serviceTitle: tagFaqs.serviceTitle,
                    },
                  ]);
                };
                const handleDeleteFaqService = (i: number) => {
                  setFieldValue(
                    "fAQServices",
                    values.fAQServices.filter((tag, index) => index !== i)
                  );
                };
                const GetForm = (form: any) => {
                  switch (form) {
                    case 0: {
                      return (
                        <DetailsBox
                          services={services}
                          values={values}
                          setFieldValue={setFieldValue}
                          categories={categories}
                          getFieldProps={getFieldProps}
                          _Image={_Image}
                          touched={touched}
                          errors={errors}
                          getImageFileObject={getImageFileObject}
                          runAfterImageDelete={runAfterImageDelete}
                        />
                      );
                    }
                    case 1: {
                      return (
                        <PricesItems
                          tags={values.serviceItemServices}
                          setTags={(valuesD: IServiceItemService[]) => {
                            setFieldValue("serviceItemServices", valuesD);
                          }}
                        />
                      );
                    }
                    case 2: {
                      return (
                        <>
                          <div className="my-2 jasf-sadwqe">
                            <p>What's included with this service?</p>
                            <div className={`t-parent`}>
                              <p>Service included</p>
                              <div className="d-flex flex-wrap">
                                {values.fAQServices.map((x, i) => (
                                  <div className="ReactTags__selected">
                                    <span
                                      className="tag-wrapper ReactTags__tag"
                                      style={{ opacity: 1, cursor: "move" }}
                                      draggable="true"
                                    >
                                      {x.serviceTitle}
                                      <button
                                        className="ReactTags__remove"
                                        type="button"
                                        aria-label="Tag at index 0 with value ads focussed. Press backspace to remove"
                                        onClick={() =>
                                          handleDeleteFaqService(i)
                                        }
                                      >
                                        ×
                                      </button>
                                    </span>
                                    <div className="ReactTags__tagInput"></div>
                                  </div>
                                ))}
                              </div>
                              <ServiceIncludes
                                handleAddition={handleAdditionFaqServiceInclude}
                              />
                            </div>
                          </div>
                          <div className="my-2 jasf-sadwqe">
                            {values.fAQQuestions.map((x, i) => (
                              <div className="field-box label-bar-1  w-100 ">
                                <div>
                                  <h6>{x.serviceFAQQuestion}</h6>
                                  <textarea
                                    rows={8}
                                    //@ts-ignore
                                    ref={(el) => (itemsRef.current[i] = el)}
                                    placeholder="Type Here"
                                    onChange={(e) => {
                                      let index = values.fAQQuestions.findIndex(
                                        (x: IFAQQuestion) =>
                                          x?.id == values.fAQQuestions[i].id
                                      );
                                      if (index > 0) {
                                        let oldValues = [
                                          ...values.fAQQuestions,
                                        ];
                                        oldValues[index] = {
                                          ...x,
                                          serviceFAQAnswer: e.target.value,
                                        };
                                        setFieldValue("fAQQuestions", [
                                          ...oldValues,
                                        ]);
                                      }
                                    }}
                                  ></textarea>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      );
                    }
                    default: {
                      return <></>;
                    }
                  }
                };
                return (
                  <Form className="">
                    <>
                      {GetForm(_active)}
                      <div className="d-flex justify-content-end">
                        {_active > 0 ? (
                          <button
                            className="btn sakdhsad-dsad mx-3"
                            type="button"
                            onClick={() => {
                              _setactive(_active - 1);
                            }}
                          >
                            Previous
                          </button>
                        ) : (
                          <></>
                        )}
                        {
                          /*
                          _active == 2 ? (
                          <button
                            className="btn sakdhsad-dsad mx-3"
                            type="button"
                            onClick={() => {
                              if (_active < 2) {
                                _setactive(_active + 1);
                              }
                            }}
                          >
                            {_active < 2 ? "" : "Preivew Before Upload"}
                          </button>
                        ) : (
                          <></>
                        
                        )
                          */
                        }
                        <button
                          className="btn sakdhsad-dsad"
                          type={_active>=2  ? "submit" : "button"}
                          onClick={(e) => {
                            if (_active < 2) {
                              e.preventDefault();

                              _setactive(_active + 1);
                              setTimeout(() => {
                               }, 1500);
                            }
                          }}
                        >
                          {_active < 2 ? "Next" : "Finish and Upload"}
                        </button>
                      </div>
                    </>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
