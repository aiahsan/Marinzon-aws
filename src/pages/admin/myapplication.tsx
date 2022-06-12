import React from "react";
import ServiceCard from "../../components/_update/cards/ServiceCard";
import Layout from "../../components/layout";
import ProductCard from "../../components/_update/cards/ProductCard";
import TagInput from "../../components/_update/inputs/taginput";
import Dropdown from "../../components/dropdown";
import Textbox from "../../components/textbox";
import Textarea from "../../components/textarea";
import Searchbar from "../../components/_update/inputs/searchbar";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux";
import { IReduxStore } from "../../interfaces/data/reduxStore";
import { ICategory, IService } from "../../interfaces/data/objects";
import { DeleteServices, GetServices } from "../../functions/Services";
import {
  DeleteCategory,
  GetCategory,
  UpdateCategory,
} from "../../functions/Categories";
import Modal from "../../components/_update/modal";
import CategoryForm from "../../components/_update/forms/categoryForm";
import { GetDocument } from "../../functions/Document";
import moment from "moment";
import {useHistory} from 'react-router-dom'
function App() {
  const dispatch = useDispatch();
  const history=useHistory();
  const categoreis = useSelector((x: any) => x.Document);
  const services = useSelector((x: IReduxStore) => x.Services);
  const user = useSelector((x: IReduxStore) => x.User);

  const [_show, _setshow] = React.useState(false);
  const [_currentService, _setcurrentService] = React.useState<
    ICategory | undefined
  >();
  const [_IsEdit, _setIsEdit] = React.useState(false);

  const Update = (Id: number | undefined) => {
    let obj = categoreis.find((x: any) => x.id == Id);
    //@ts-ignore
    if (obj != undefined) {
      _setcurrentService(obj);
    }
  };
  const Delete = (Id: number | undefined) => {
    let obj = categoreis.find((x: any) => x.id == Id);
    //@ts-ignore
    if (obj != undefined) {
      _setcurrentService(obj);
      _setshow(true);
    }
  };
  return (
    <Layout title=" ">
      <div className="main-div">
        <div className="hdsf0s-sadmsa mt-3 p-an ml-0">
          <h5 className="cst-mx-0 ">My Submitted Applications</h5>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="udasnfo-anweik box-shadow">
          <img
            className="box-shadow p-0 kjifads-e3j"
            src={
              categoreis[0]?.user?.isVendorActivityCompletedandVerfied ==
                true && categoreis[0]?.user?.isVerified == true
                ? "https://icons.iconarchive.com/icons/icojam/blue-bits/128/thumbs-up-icon.png"
                : "https://icons.iconarchive.com/icons/dario-arnaez/genesis-3G/128/User-Files-icon.png"
            }
          />
          <h5>
            {categoreis[0]?.user?.isVendorActivityCompletedandVerfied == true &&
            categoreis[0]?.user?.isVerified == true
              ? "Congratulations your application is approved now you can start selling to marinzon"
              : "Your Application is under review"}
          </h5>
          <div className="d-flex">
            <div className="kdnafo-wkema d-flex align-items-center flex-column">
              <p className="mt-3">Store Details </p>
              <img
                className={
                  categoreis[0]?.storeDetails?.isApproved == true
                    ? "approved-csl"
                    : ""
                }
                src="https://icons.iconarchive.com/icons/designcontest/ecommerce-business/128/store-icon.png"
              />
              <p>
                {categoreis[0]?.storeDetails?.isApproved == true
                  ? "Approved"
                  : "Pending"}
              </p>
            </div>
            <div className="kdnafo-wkema d-flex align-items-center flex-column">
              <p className="mt-3">Document Details </p>
              <img
                className={
                  categoreis[0]?.document?.isApproved == true
                    ? "approved-csl"
                    : ""
                }
                src="https://icons.iconarchive.com/icons/gakuseisean/aire/128/File-icon.png"
              />
              <p>
                {categoreis[0]?.document?.isApproved == true
                  ? "Approved"
                  : "Pending"}
              </p>
            </div>
            <div className="kdnafo-wkema d-flex align-items-center flex-column">
              <p className="mt-3">Bank Details </p>

              <img
                className={
                  categoreis[0]?.bankDetails?.isApproved == true
                    ? "approved-csl"
                    : ""
                }
                src="https://icons.iconarchive.com/icons/designcontest/ecommerce-business/128/bank-icon.png"
              />
              <p>
                {categoreis[0]?.bankDetails?.isApproved == true
                  ? "Approved"
                  : "Pending"}
              </p>
            </div>
            <div className="kdnafo-wkema d-flex align-items-center flex-column">
              <p className="mt-3">Vat Details </p>

              <img
                className={
                  categoreis[0]?.vat?.isApproved == true ? "approved-csl" : ""
                }
                src="https://icons.iconarchive.com/icons/aha-soft/large-business/128/Cash-register-icon.png"
              />
              <p>
                {categoreis[0]?.vat?.isApproved == true
                  ? "Approved"
                  : "Pending"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="box-shadow p-4 mt-4 jhfadjsf-andsd w-100 justify-content-between d-flex flex-column">
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="hd-5">My Applications List</h5>
            <Searchbar isBorder={true} />
          </div>

          <Table responsive borderless className="table-custom">
            <thead>
              <tr>
                <th className="text-center">Application Type</th>
                <th className="text-center">Application Status</th>
                <th className="text-center">Remarks</th>
                <th className="text-center">Submitted Date</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {categoreis[0]?.storeDetails ? (
                <tr>
                  <td>Store Details</td>
                  <td>
                    {categoreis[0]?.storeDetails?.isApproved == true
                      ? "Approved"
                      : "Pending"}
                  </td>
                  <td>
                    {categoreis[0]?.storeDetails?.remarks ||
                      "Your Application is under review"}
                  </td>
                  <td>
                     
{moment(categoreis[0]?.storeDetails?.createAt).format("DD-MM-yyyy") ||
                      ""}
                  </td>
                  {categoreis[0]?.storeDetails?.isApproved == true ? (
                    <td></td>
                  ) : (
                    <td>
                      <button className="btn btn-info mx-2" onClick={() => {
 history.push({
  pathname: '/edit/storedetails',
   state: {  data:{...categoreis[0]?.storeDetails} }
})
 
                      }}>
                        Edit
                      </button>
                    </td>
                  )}
                </tr>
              ) : (
                <td></td>
              )}
              {categoreis[0]?.document ? (
                <tr>
                  <td>Document Details</td>
                  <td>
                    {categoreis[0]?.document?.isApproved == true
                      ? "Approved"
                      : "Pending"}
                  </td>
                 
                  <td>
                    {categoreis[0]?.document?.remarks ||
                      "Your Application is under review"}
                  </td>
                  <td>
                    {moment(categoreis[0]?.document?.createAt).format("DD-MM-yyyy") ||
                      ""}
                  </td>
                  {categoreis[0]?.document?.isApproved == true ? (
                    <td></td>
                  ) : (
                    <td>
                      <button className="btn btn-info mx-2" onClick={() => {

history.push({
  pathname: '/edit/documents',
   state: {  data:{...categoreis[0]?.document} }
})
 
                      }}>
                        Edit
                      </button>
                    </td>
                  )}
                </tr>
              ) : (
                <td></td>
              )}
              {categoreis[0]?.bankDetails ? (
                <tr>
                  <td>Bank Details</td>
                  <td>
                    {categoreis[0]?.bankDetails?.isApproved == true
                      ? "Approved"
                      : "Pending"}
                  </td>
          
                  <td>
                    {categoreis[0]?.bankDetails?.remarks ||
                      "Your Application is under review"}
                  </td>
                  <td>
                  {moment(categoreis[0]?.bankDetails?.createAt).format("DD-MM-yyyy") ||
                      ""}
                  </td>
                  {categoreis[0]?.bankDetails?.isApproved == true ? (
                    <td></td>
                  ) : (
                    <td>
                      <button className="btn btn-info mx-2" onClick={() => {
                        history.push({
                          pathname: '/edit/bank',
                           state: {  data:{...categoreis[0]?.bankDetails} }
                        })
                      }}>
                        Edit
                      </button>
                    </td>
                  )}
                </tr>
              ) : (
                <td></td>
              )}

              {categoreis[0]?.vat ? (
                <tr>
                  <td>Vat Details</td>
                  <td>
                    {categoreis[0]?.vat?.isApproved == true
                      ? "Approved"
                      : "Pending"}
                  </td>
                 
                  <td>
                    {categoreis[0]?.vat?.remarks ||
                      "Your Application is under review"}
                  </td>
                  <td>
                  {moment(categoreis[0]?.vat?.createAt).format("DD-MM-yyyy") ||
                      ""}
                  </td>
                  <td>
                    {categoreis[0]?.vat?.isApproved == true ? (
                      <td></td>
                    ) : (
                      <td>
                        <button
                          className="btn btn-info mx-2"
                          onClick={() => {

                            history.push({
                              pathname: '/edit/vat',
                               state: {  data:{...categoreis[0]?.vat} }
                            })
                          }}
                        >
                          Edit
                        </button>
                      </td>
                    )}
                  </td>
                </tr>
              ) : (
                <td></td>
              )}
            </tbody>
          </Table>
        </div>
        <div className="d-flex justify-content-end pagination-container">
          <button className="btn cst-none">Previous</button>
          <div className="d-flex pagination-number-container">
            <button className="btn">1</button>
            <button className="btn active">2</button>
            <button className="btn">3</button>
            <button className="btn">4</button>
            <button className="btn mag-18">5</button>
          </div>
          <button className="btn cst-none">Next</button>
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
