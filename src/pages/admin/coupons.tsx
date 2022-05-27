import ServiceCard from "../../components/_update/cards/ServiceCard";
import React from "react";
import Layout from "../../components/layout";
import ProductCard from "../../components/_update/cards/ProductCard";
import TagInput from "../../components/_update/inputs/taginput";
import Dropdown from "../../components/dropdown";
import Textbox from "../../components/textbox";
import Textarea from "../../components/textarea";
import Searchbar from "../../components/_update/inputs/searchbar";
import { Table } from "react-bootstrap";
import { DeleteServices, GetServices } from "../../functions/Services";
import { useDispatch, useSelector } from "react-redux";
import { IReduxStore } from "../../interfaces/data/reduxStore";
import { IECoupons, IService } from "../../interfaces/data/objects";
import { ImageUrl } from "../../utiles/baseUrl";
import ServiceForm from "../../components/_update/forms/serviceForm";
import Modal from "../../components/_update/modal";
import { DeleteECoupons, GetECoupons } from "../../functions/ECoupons";
import moment from "moment";
import ECouponForm from "../../components/_update/forms/eCouponForm";

function App() {
  const dispatch = useDispatch();
  const services = useSelector((x: IReduxStore) => x.ECoupons);
  const [_show, _setshow] = React.useState(false);
  const [_currentService, _setcurrentService] = React.useState<
    IECoupons | undefined
  >();
  const [_IsEdit, _setIsEdit] = React.useState(false);

  React.useEffect(() => {
        //@ts-ignore

    dispatch(GetECoupons());

    
  }, []);

  const Update = (Id: number | undefined) => {
    let obj = services.find((x) => x.id == Id);
    //@ts-ignore
    if (obj != undefined) {
      _setcurrentService(obj);
    }
  };
  const Delete = (Id: number | undefined) => {
    let obj = services.find((x) => x.id == Id);
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
          <h5 className="cst-mx-0 ">Coupons</h5>
        </div>
      </div>
    
      <div className="d-flex justify-content-between kmsadockse-erl">
        <div className="box-shadow mt-3 p-3 w-100 nmkacjsf-asndfe p-an">
          <h6 className="hd-5 text-left ml-0 cst-mx-0 m-0">Add New Coupon</h6>

          {   <ECouponForm PostData={() => {}} data={_currentService} />  }
        </div>
        <div className="box-shadow p-4 mt-4 jhfadjsf-andsd w-100 justify-content-between d-flex flex-column">
          <div>
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="hd-5">Coupons List</h5>
              <Searchbar isBorder={true} />
            </div>
            <Table responsive borderless className="table-custom">
              <thead>
                <tr>
                  <th>Coupon Code</th>
                  <th>Coupons Left</th>
                  <th>Expiry Date</th>
                  <th>Total Discount %</th>
                  <th  >Action</th>
                </tr>
              </thead>
              <tbody>
                {services.map((x: IECoupons, i) => (
                  <tr key={i}>
                    <td>
                      {x.couponCode}
                    </td>
                    <td>{x.totalCouponsLeft}</td>
                    <td>{moment(x.expiryDate).format("DD-MMM-yyyy")}</td>
                    <td>{x.totalDiscount} %</td> 
                     <td className="d-flex   manasjd-ajwe">
                      <button
                        className="btn btn-info"
                        onClick={() => Update(x?.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => Delete(x?.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
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
      </div>

      <Modal title="Confirm" show={_show} setShow={_setshow}>
        <>
          <p>Are You sure you wan't to delete this service !note this action will not be revoked</p>
          <div className="d-flex flex-row justify-content-end">
            <button onClick={() => _setshow(false)} className="btn btn-info">
              Cancel
            </button>
            <button
              onClick={() => {
                if (_currentService) {
                  
                  _setshow(false);
                  //@ts-ignore
                   dispatch(DeleteECoupons(_currentService))
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
