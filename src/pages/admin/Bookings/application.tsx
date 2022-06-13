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
import { useLocation } from "react-router-dom";
import DocumentForm from "../../../components/_update/forms/vendor/documentForm";
import BankForm from "../../../components/_update/forms/vendor/bankForm";
import { UpdateVendorBank } from "../../../functions/Vendor";
import { mainUrl } from "../../../utiles/baseUrl";
import { loadingAction } from "../../../redux/actionMethodes/loader";
import { repository } from "../../../utiles/repository";
import { messageAction } from "../../../redux/actionMethodes/message";

const GetDataTypes = (type: number, data: any) => {
  switch (type) {
    case 1 || "1": {
      return (
        <div>
          <h5 className="mx-2 my-2">Store Details</h5>
          <div className="d-flex flex-wrap">
            <div className="mx-2 my-2">
              <h6>
                <strong>Email:</strong>
                {data?.email}
              </h6>
            </div>
            <div className="mx-2 my-2">
              <h6>
                <strong>Full Name:</strong>
                {data?.name}
              </h6>
            </div>
            <div className="mx-2 my-2">
              <h6>
                <strong>Store Name:</strong>
                {data?.storeName}
              </h6>
            </div>
            <div className="mx-2 my-2">
              <h6>
                <strong>Legal Company Name:</strong>
                {data?.legalName}
              </h6>
            </div>
            <div className="mx-2 my-2">
              <h6>
                <strong>Company Number:</strong>
                {data?.companyPhoneNumber}
              </h6>
            </div>
            <div className="mx-2 my-2">
              <h6>
                <strong>Company Full Address:</strong>
                {data?.fullAddress}
              </h6>
            </div>
            <div className="mx-2 my-2">
              <h6>
                <strong>Service Offerd:</strong>
                {data?.service?.title}
              </h6>
            </div>
          </div>
        </div>
      );
    }
    case 2 || "2": {
      return (
        <div>
          <h5 className="mx-2 my-2">Documents Details</h5>
          <div className="d-flex flex-wrap">
            <div className="mx-2 my-2">
              <h6>
                <strong>National Identity:</strong>
                {
                  <a
                    href={
                      mainUrl + "wwwroot/Uploads/" + data?.nationCard?.image
                    }
                    target="#"
                  >
                    {data?.nationCard?.image}
                  </a>
                }
              </h6>
            </div>
            <div className="mx-2 my-2">
              <h6>
                <strong>Trade Liceense:</strong>
                {
                  <a
                    href={
                      mainUrl + "wwwroot/Uploads/" + data?.tradeLicense?.image
                    }
                    target="#"
                  >
                    {data?.tradeLicense?.image}
                  </a>
                }
              </h6>
            </div>
          </div>
        </div>
      );
    }
    case 3 || "3": {
      return (
        <div>
          <h5 className="mx-2 my-2">Bank Details</h5>
          <div className="d-flex flex-wrap">
            <div className="mx-2 my-2">
              <h6>
                <strong>Beneficiary Name:</strong>
                {data?.beneficiaryName}
              </h6>
            </div>
            <div className="mx-2 my-2">
              <h6>
                <strong>Payoneer Email:</strong>
                {data?.payoneerEmail}
              </h6>
            </div>
            <div className="mx-2 my-2">
              <h6>
                <strong>Bank Name:</strong>
                {data?.bankName}
              </h6>
            </div>
            <div className="mx-2 my-2">
              <h6>
                <strong>Branch Name:</strong>
                {data?.branchName}
              </h6>
            </div>

            <div className="mx-2 my-2">
              <h6>
                <strong>Account Number:</strong>
                {data?.accountNumber}
              </h6>
            </div>
            <div className="mx-2 my-2">
              <h6>
                <strong>IBAN Number:</strong>
                {data?.ibanNumber}
              </h6>
            </div>
            <div className="mx-2 my-2">
              <h6>
                <strong>Swift Code:</strong>
                {data?.swiftCode}
              </h6>
            </div>
            <div className="mx-2 my-2">
              <h6>
                <strong>Currency:</strong>
                {data?.currency}
              </h6>
            </div>
            <div className="mx-2 my-2">
              <h6>
                <strong>
                  Either certificate and stamped document by the bank with
                  having the information mentioned above or Cancelled Cheque:
                </strong>
                {
                  <a
                    href={mainUrl + "wwwroot/Uploads/" + data?.document?.image}
                    target="#"
                  >
                    {data?.document?.image}
                  </a>
                }
              </h6>
            </div>
          </div>
        </div>
      );
    }
    case 4 || "4": {
      return (
        <div>
          <h5 className="mx-2 my-2">VAT Details</h5>
          <div className="d-flex flex-wrap">
            <div className="mx-2 my-2">
              <h6>
                <strong>Tax Registration Number:</strong>
                {data?.taxRegistrationNumber}
              </h6>
            </div>
            <div className="mx-2 my-2">
              <h6>
                <strong>Tax Registration Certificate:</strong>
                {
                  <a
                    href={
                      mainUrl + "wwwroot/Uploads/" + data?.vatDocument?.image
                    }
                    target="#"
                  >
                    {data?.vatDocument?.image}
                  </a>
                }
              </h6>
            </div>
          </div>
        </div>
      );
    }
    default: {
      return <></>;
    }
  }
};
function App() {
  const dispatch = useDispatch();
  const [_show, _setshow] = React.useState(false);
  const User = useSelector((x: IReduxStore) => x.User);
  const [_currentDoc, _setcurrentDoc] = React.useState();
   const params = useLocation();
//@ts-ignore
const [_remarks, _setRemarks] = React.useState(params?.state?.data?.remarks || "");
 
  React.useEffect(() => {
    //@ts-ignore
    if (params?.state?.data) {
      //@ts-ignore
      _setcurrentDoc(params?.state?.data);
    }
  }, [params]);

 

  const UpdateReject = (type: number) => {
    const dataToSend = {
      //@ts-ignore
      ftype: _currentDoc?.type,
      bType: type,
      remarks: _remarks,
      recordUserId: User?.id,
      //@ts-ignore
      id: _currentDoc?.id,
            //@ts-ignore

      formUserId:_currentDoc?.user?.id
    };

    (async () => {
      try {
        dispatch(loadingAction(true));
        const { status, data }: any = await repository
          .UpdateApproveReject(User?.token || "", {
            ...dataToSend,
          })
          .then((x) => x);
        console.log(status, data);
        if (status == 200 && data?.success == true) {
          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 1,
              message: data?.message,
            })
          );
          // dispatch(deleteBookingAM(data?.data));
        } else {
          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 3,
              message: data?.message || "Something wen't wrong contact support",
            })
          );
        }
      } catch (e) {
        dispatch(loadingAction(false));
        dispatch(
          messageAction({
            type: 3,
            message: e as string,
          })
        );
      }
    })();
  };
  return (
    <Layout title=" ">
      <div className="main-div">
        <div className="hdsf0s-sadmsa mt-3 p-an ml-0 w-100">
          <h5 className="cst-mx-0 ">Submitted Application</h5>
        </div>
      </div>

      <div className="d-flex justify-content-between  w-100">
        <div className="box-shadow mt-3 p-3 w-100 ">
          <div className="mt-4">
            {
              //@ts-ignore
              _currentDoc != undefined ? (
                //@ts-ignore
                GetDataTypes(_currentDoc?.type, _currentDoc)
              ) : (
                <></>
              )
            }
            <div className="d-flex flex-column w-100">
              <div className="cst-textbox kjfads-fasenr brd-none d-flex flex-column label-bar-1 ">
                <p> Remarks</p>
                <input
                  placeholder="Type here"
                  type="text"
                  value={_remarks}
                  onChange={(e)=>{
                    _setRemarks(e.target.value);
                  }}
                  className="cst-textbox-input w-100 mt-2"
                />
              </div>
            </div>
            <div className="d-flex  justify-content-end ">
              <button
                className="btn btn-danger mx-2"
                onClick={() => {
                  UpdateReject(2);
                }}
              >
                Reject
              </button>

              <button
                className="btn btn-info mx-2"
                onClick={() => {
                  UpdateReject(1);
                }}
              >
                Approved
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
