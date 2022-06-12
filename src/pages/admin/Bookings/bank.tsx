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
import DocumentForm from "../../../components/_update/forms/vendor/documentForm";
import BankForm from "../../../components/_update/forms/vendor/bankForm";
import { UpdateVendorBank } from "../../../functions/Vendor";
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
          <h5 className="cst-mx-0 ">Bank Details</h5>
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

                beneficiaryName: parms?.state?.data?.beneficiaryName ||"",
                                //@ts-ignore

                payoneerEmail: parms?.state?.data?.payoneerEmail ||"",
                                //@ts-ignore

                bankName: parms?.state?.data?.bankName ||"",
                                //@ts-ignore

                branchName: parms?.state?.data?.branchName ||"",
                                //@ts-ignore

                accountNumber: parms?.state?.data?.accountNumber ||"",
                                //@ts-ignore

                iBANNumber: parms?.state?.data?.ibanNumber ||"",
                                //@ts-ignore

                swiftCode: parms?.state?.data?.swiftCode ||"",
                                //@ts-ignore

                currency: parms?.state?.data?.currency ||"",
                                //@ts-ignore

                documentId: parms?.state?.data?.documentId ||"",
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
                    <BankForm
                      activeState={activeState}
                      setactiveState={setactiveState}
                      isFromUpdate={true}
                      docvalues={{
                        beneficiaryName:values.beneficiaryName,
                          payoneerEmail:values.payoneerEmail,
                          bankName:values.bankName,
                          branchName:values.branchName,
                          accountNumber:values.accountNumber,
                          iBANNumber:values.iBANNumber,
                          swiftCode:values.swiftCode,
                          currency:values.currency,
                          documentId:values.documentId,
                        
                       }} PostData={(values1:any)=>{
                        setFieldValue("beneficiaryName",values1.beneficiaryName);
                        setFieldValue("payoneerEmail",values1.payoneerEmail);
                        setFieldValue("bankName",values1.bankName);
                        setFieldValue("branchName",values1.branchName);
                        setFieldValue("accountNumber",values1.accountNumber);
                        setFieldValue("iBANNumber",values1.iBANNumber);
                        setFieldValue("swiftCode",values1.swiftCode);
                        setFieldValue("currency",values1.currency);
                        setFieldValue("documentId",values1.documentId);

                        (async ()=>{
                          //@ts-ignore
                        let value=await  dispatch(UpdateVendorBank({...values}));
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

      <Modal title="Confirm" show={_show} setShow={_setshow}>
        <>
          <p>
            Are You sure you wan't to delete this service !note this action will
            not be revoked
          </p>
          <div className="d-flex flex-row justify-content-end">
            <button onClick={() => _setshow(false)} className="btn btn-info">
              Cancel
            </button>
            <button
              onClick={() => {
                if (_currentService) {
                  _setshow(false);
                  //@ts-ignore
                  dispatch(DeleteCategory(_currentService));
                }
              }}
              className="btn btn-danger mx-2"
            >
              Confirm
            </button>
          </div>
        </>
      </Modal>
    </Layout>
  );
}

export default App;
