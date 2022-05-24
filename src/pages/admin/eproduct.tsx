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
import { IEProduct, IService } from "../../interfaces/data/objects";
import { DeleteServices, GetServices } from "../../functions/Services";
import { DeleteEProduct, GetEProduct, UpdateEProduct } from "../../functions/EProduct";
import Modal from "../../components/_update/modal";
 import EproductForm from "../../components/_update/forms/EproductForm";
import { GetECategory } from "../../functions/ECategories";
import { ImageUrl } from "../../utiles/baseUrl";

function App() {
  const dispatch = useDispatch();
  const categoreis = useSelector((x: IReduxStore) => x.ECategories);
  const products = useSelector((x: IReduxStore) => x.EProducts);
  const services = useSelector((x: IReduxStore) => x.Services);
  const user = useSelector((x: IReduxStore) => x.User);
  
  const [_show1, _setshow1] = React.useState(false);
  const [_show, _setshow] = React.useState(false);
  const [_currentService, _setcurrentService] = React.useState<
    IEProduct | undefined
  >();
  const [_IsEdit, _setIsEdit] = React.useState(false);

  React.useEffect(() => {
     
    //@ts-ignore
    dispatch(GetECategory());
    //@ts-ignore
    dispatch(GetEProduct());
  }, []);

 

  const Update = (Id: number | undefined) => {
    let obj = products.find((x) => x.id == Id);
    //@ts-ignore
    if (obj != undefined) {
      _setcurrentService(obj);
    }
  };
  const Delete = (Id: number | undefined) => {
    let obj = products.find((x) => x.id == Id);
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
          <h5 className="cst-mx-0 ">E Commerce Products</h5>
        </div>
      </div>

      <div className="d-flex justify-content-between kmsadockse-erl">
        <div className="box-shadow mt-3 p-3 w-100 nmkacjsf-asndfe">
          <h5 className="hd-5">Add New Products</h5>

          <div className="mt-4">
            <EproductForm
              PostData={() => {}}
              data={_currentService}
              setData={_setcurrentService}
            />
          </div>
        </div>
      </div>
      <div className="box-shadow p-4 mt-4 jhfadjsf-andsd w-100 justify-content-between d-flex flex-column">
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="hd-5">Products List</h5>
            <Searchbar isBorder={true} />
          </div>
          <Table responsive borderless className="table-custom">
            <thead>
              <tr>
                 <th>Image</th>
                 <th>Title</th>
                 <th>Category</th>
                <th>Description</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Product By</th>
                <th>Total Amount</th>
                <th>Approved Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              { products.map((x: IEProduct, i) => (
                <tr key={i}>
                  
                  <td>
                    <img src={ImageUrl+x.image} />
                  </td>
                  <td>{x.title}</td>
                  <td className="mncais-ads">{
                    //@ts-ignore
                    x?.eCategory?.title
                  }</td>
                  <td className="mncais-ads">{x.description}</td>
                  <td className="mncais-ads">{x.price}</td>
                  <td className="mncais-ads">{x.discountPer}%</td>
                  <td className="mncais-ads">{
                    //@ts-ignore
                    x?.productBy?.mobileNumberEmail
                  }</td>
                   <td className="mncais-ads">{
                     //@ts-ignore
                   (parseInt(x?.price)||0) *((100-(parseInt(x?.discountPer)||0))/100)
                   }</td>
                  <td className="mncais-ads">
                    {x?.isApproved == true ? "Approved" : "Pending"}
                  </td>

                  <td className="d-flex manasjd-ajwe">
                    {
                      user?.isAdmin&&user.isAdmin==true?    <button
                      className={`btn ${
                        x?.isApproved==true ? "btn-danger" : "btn-success"
                      } mx-2`}
                      onClick={() => {
                        let formData = new FormData();
                     
                        formData.append("isApproved", x.isApproved==true?"false":"true");
                        //@ts-ignore
                        formData.append("recordUserId", user.id);
                        //@ts-ignore
                        formData.append("title", x.title);
                        //@ts-ignore
                        formData.append("description", x.description);
                        //@ts-ignore
                        formData.append("eCategoryId", x.eCategoryId);
                        //@ts-ignore
                        formData.append("rDescription", x.rDescription);
                        
                        //@ts-ignore
                        formData.append("price", x.price);
                        //@ts-ignore
                        formData.append("discountPer", x.discountPer);
                        
                        //@ts-ignore
                        formData.append("Id", x.id);
                        (async ()=>{
                        //@ts-ignore

                          let value=await  dispatch(UpdateEProduct(formData));

                        })()
                      }}
                    >
                      {x?.isApproved ? "Reject" : "Approved"}
                    </button>:<></>
                    }
                  <button
                      className="btn btn-info mx-2"
                      onClick={() =>{
                        _setcurrentService(x);
                        _setshow1(true);
                      }}
                    >
                      View Rich Description
                    </button>
                    <button
                      className="btn btn-info mx-2"
                      onClick={() => Update(x?.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-warning mx-2"
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
                  dispatch(DeleteEProduct(_currentService));
                }
              }}
              className="btn btn-danger mx-2"
            >
              Confirm
            </button>
          </div>
        </>
      </Modal>
      <Modal title="Rich Description" size="xl" show={_show1} setShow={_setshow1}>
        <>
              <div 
               dangerouslySetInnerHTML={{
                //@ts-ignore 
                __html: _currentService?.rDescription}}
              />
          <div className="d-flex flex-row justify-content-end">
            <button onClick={() => _setshow1(false)} className="btn btn-info">
              Cancel
            </button>
            
          </div>
        </>
      </Modal>
    </Layout>
  );
}

export default App;
