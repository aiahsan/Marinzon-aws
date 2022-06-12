import React from "react";
import ServiceCard from "../../../components/_update/cards/ServiceCard";
import Layout from "../../../components/layout";
import ProductCard from "../../../components/_update/cards/ProductCard";
import TagInput from "../../../components/_update/inputs/taginput";
import Dropdown from "../../../components/dropdown";
import Textbox from "../../../components/textbox";
import Textarea from "../../../components/textarea";
import Searchbar from "../../../components/_update/inputs/searchbar";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux";
import { IReduxStore } from "../../../interfaces/data/reduxStore";
import { ICategory, IService } from "../../../interfaces/data/objects";
import { DeleteServices, GetServices } from "../../../functions/Services";
import {
  DeleteCategory,
  GetCategory,
  UpdateCategory,
} from "../../../functions/Categories";
import Modal from "../../../components/_update/modal";
import CategoryForm from "../../../components/_update/forms/categoryForm";
import StoreForm from "../../../components/_update/forms/vendor/storeForm";
import { Formik } from "formik";
import {useLocation} from 'react-router-dom'
import { UpdateVendorStore } from "../../../functions/Vendor";
function App() {
  const dispatch = useDispatch();
  const categoreis = useSelector((x: IReduxStore) => x.Categories);
  const services = useSelector((x: IReduxStore) => x.Services);
  const user = useSelector((x: IReduxStore) => x.User);
  const [activeState, setactiveState] = React.useState(1);
  const parms=useLocation();
  const [_show, _setshow] = React.useState(false);
  const [_currentService, _setcurrentService] = React.useState<
    ICategory | undefined
  >();
    return (
    <Layout title=" ">
      <div className="main-div">
        <div className="hdsf0s-sadmsa mt-3 p-an ml-0">
          <h5 className="cst-mx-0 ">Store Details</h5>
        </div>
      </div>

      <div className="d-flex justify-content-between kmsadockse-erl">
        <div className="box-shadow mt-3 p-3 w-100 nmkacjsf-asndfe">
 
          <div className="mt-4">
            <Formik
              initialValues={{
                //@ts-ignore
                id: parms?.state?.data?.id ||"",
                //@ts-ignore
                email: parms?.state?.data?.email ||"",
                //@ts-ignore
                name:  parms?.state?.data?.name ||"",
                //@ts-ignore

                storeName: parms?.state?.data?.storeName ||"",
                 //@ts-ignore

                companyPhoneNumber:parms?.state?.data?.companyPhoneNumber ||"",
                 //@ts-ignore

                legalName: parms?.state?.data?.legalName ||"",
                 //@ts-ignore
                fullAddress:  parms?.state?.data?.fullAddress ||"",
                 //@ts-ignore
                serviceOfferId:  parms?.state?.data?.serviceOfferId ||"",
                 //@ts-ignore
                storeId: parms?.state?.data?.storeId ||"",
              }}
               onSubmit={async (values, { setSubmitting }) => {
              
              }}
            >
              {({
                errors,
                touched,
                getFieldProps,
                handleSubmit,
                initialValues,
                setFieldValue,
                values,
                resetForm,
              }) => {
                return (
                  <>
                    <StoreForm
                      activeState={activeState}
                      setactiveState={setactiveState}
                      isFromUpdate={true}
                      docvalues={{
                       email:values.email,
                       name:values.name,
                       storeName:values.storeName,
                       legalName:values.legalName,
                       companyPhoneNumber:values.companyPhoneNumber,
                       fullAddress:values.fullAddress,
                       serviceOfferId:values.serviceOfferId,
                       }} PostData={(values1:any)=>{
                         setFieldValue("email",values1.email);
                        setFieldValue("name",values1.name);
                        setFieldValue("storeName",values1.storeName);
                        setFieldValue("legalName",values1.legalName);
                        setFieldValue("companyPhoneNumber",values1.companyPhoneNumber);
                        setFieldValue("fullAddress",values1.fullAddress);
                        setFieldValue("serviceOfferId",values1.serviceOfferId);
                       (async ()=>{
                        //@ts-ignore
                      let value=await  dispatch(UpdateVendorStore({...values}));
                      //@ts-ignore
                       if(value && value==1)
                       {
                         // setData(undefined)
                       }
                      })();

                      
                      }}
                    />
                  </>
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
