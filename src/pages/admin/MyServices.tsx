import React from "react";
import Layout from "../../components/layout";
import ProductCard from "../../components/_update/cards/ProductCard";
import { RiLayoutGridFill, RiListCheck2 } from "react-icons/ri";
 import Searchbar from "../../components/_update/inputs/searchbar";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IReduxStore } from "../../interfaces/data/reduxStore";
import { DeleteItem, GetItems, UpdateItemStatus } from "../../functions/Items";
import { IItem, IServiceItemService } from "../../interfaces/data/objects";
import { ItemStatus } from "../../utiles/constants";
 import {useHistory} from 'react-router-dom'
import Modal from "../../components/_update/modal";

function App() {
  const [view, setView] = React.useState(0);
  const Items=useSelector((x:IReduxStore)=>x.ServiceItem);
  const [_currentItems,_setcurrentItems]=React.useState<IItem[]>([]);
  const [_show, _setshow] = React.useState(false);
  const [_show1, _setshow1] = React.useState(false);
  const user = useSelector((x: IReduxStore) => x.User);


  const [_currentService, _setcurrentService] = React.useState<
  IItem | undefined
>();
  const [_currentStatus,_setcurrentStatus]=React.useState('');
  const history=useHistory();
  const dispatch=useDispatch();
  React.useEffect(()=>{
    //@ts-ignore
    dispatch(GetItems());
  },[])

  React.useEffect(()=>{
    if(Items.length>0)
    {
      _setcurrentItems(Items);
     }
  },[Items])

  const getItems=()=>{
    switch(_currentStatus)
    {
      case ItemStatus.approved:{
        return _currentItems.filter(x=>x.serviceStatus==ItemStatus.approved)
        
      }
      case ItemStatus.pending:{
        return _currentItems.filter(x=>x.serviceStatus==ItemStatus.pending)
      }
      case ItemStatus.rejected:{
        return _currentItems.filter(x=>x.serviceStatus==ItemStatus.rejected)
      }
      default :{
        return  _currentItems
      }

    }
  }
  const Delete = (Id: number | undefined) => {
    let obj = Items.find((x) => x.id == Id);
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
          <h5 className="cst-mx-0 ">All Services Items</h5>
        </div>
      </div>
      <div className="umpire-1-cst d-flex align-items-center justify-content-between">
        <div className="maxima">
          <button className="upload-1 sdisad-dsdactive" onClick={()=>{
            _setcurrentStatus('');
          }}>All</button>
          <button className="upload-1" onClick={()=>{
            _setcurrentStatus(ItemStatus.approved);
          }}>Approved</button>
          <button className="upload-1" onClick={()=>{
            _setcurrentStatus(ItemStatus.pending);
          }}>Pending</button>
          <button className="upload-1" onClick={()=>{
            _setcurrentStatus(ItemStatus.rejected);
          }}>Rejected</button>
        </div>
        <div>
          <button
            className="btn"
            onClick={() => {
              setView(0);
            }}
          >
            <RiLayoutGridFill size={25} />
          </button>
          <button
            className="btn"
            onClick={() => {
              setView(1);
            }}
          >
            <RiListCheck2 size={25} />
          </button>
        </div>
      </div>

      {view == 1 ? (
        <div className="box-shadow p-4 mt-4 jhfadjsf-andsd w-100 justify-content-between d-flex flex-column">
          <div>
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="hd-5">All Services List</h5>
              <Searchbar isBorder={true} />
            </div>
            <Table responsive borderless className="table-custom">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Category</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Total Services</th>
                  <th>Total Services Included</th>
                  <th>Starting Price</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  getItems().map((x:IItem,i)=><tr key={i}>
                  <td>{x.service?.title}</td>
                  <td>{x.category?.title}</td>
                  <td className="mncais-ads">{x.title}</td>
                  <td className="mncais-ads">{x.description}</td>
                  <td className="mncais-ads">
                    { 
                 //@ts-ignore
                 x.serviceItemServices?.length
                 }
                  </td>
                  <td className="mncais-ads">
                   { 
                   //@ts-ignore
                   x.faqServices?.length
                   }
                  </td>
                  <td className="mncais-ads">
                  {
                           //@ts-ignore
                    Math.min.apply(Math, x.serviceItemServices?.map(y=>y.serviceItemServicePrices?.map(c=>c.serviceItemServiceValue)).flatMap((j)=>[...j]))
                      }
                  </td>
                  <th className="d-flex   manasjd-ajwe">
                  {
                      user?.isAdmin&&user.isAdmin==true?    <button
                      className={`btn ${
                        x?.isApproved==true ? "btn-danger" : "btn-success"
                      } mx-2`}
                      onClick={() => {
                        (async ()=>{
                          
                          //@ts-ignore
                          let value=await  dispatch(UpdateItemStatus(x?.id));

                        })()
                      }}
                    >
                      {x?.isApproved ? "Reject" : "Approved"}
                    </button>:<></>
                    }

                    <button className="btn btn-info" onClick={()=>  history.push({
           pathname: '/item',
            state: { data: x }
       })}>Edit</button>
<button
                        className="btn btn-warning"
                        onClick={() => Delete(x?.id)}
                      >
                        Delete
                      </button>                  </th>
                </tr>)
                }
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
      ) : (
        <ProductCard onClick={(item:any)=>{
          if(item)
          {
            console.log(item);
            _setcurrentService(item)
            _setshow1(true)
          }

        }}  items={getItems}/>
      )}
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
                  ///@ts-ignore
                   dispatch(DeleteItem(_currentService))
                }
              }}
              className="btn btn-danger mx-2"
            >
              Confirm
            </button>
          </div>
        </>
      </Modal>
              {
                //@ts-ignore
      <Modal title="Service Details"   size="lg"   show={_show1} setShow={_setshow1}>
      <>
        
        <div className="modal-cst-text">
        <h5><span>Service: </span> {_currentService?.service?.title }</h5>
        <h5><span>Category: </span> {_currentService?.category?.title }</h5>
          <h5><span>Title: </span> {_currentService?.title }</h5>
          <h5><span>Description: </span> {_currentService?.description }</h5>
          <h5><span>Status: </span> {_currentService?.serviceStatus }</h5>
          <h5><span>Created By : </span> {_currentService?.user?.fullName }</h5>
          <h5><span>Faq Questions:</span> </h5>
          {
            //@ts-ignore
           _currentService?.faqQuestions?.map(x=><>
           <h6>{x?.serviceFAQQuestion}</h6>
           <p>{x?.serviceFAQAnswer}</p>
           </>)
          }
          <h5><span>Services Items:</span> </h5>
          {
            //@ts-ignore
           _currentService?.serviceItemServices?.map(x=><>
           <h6>Title {
             x?.serviceItemServiceTitle
             }</h6>
           <div className="d-flex flex-wrap">
             {
               //@ts-ignore
               x?.serviceItemServicePrices.map(y=>{
                 //@ts-ignore
                 return <p>{y?.serviceItemServiceTitle} at {y?.serviceItemServiceValue} AED ,</p>
               })
             }
           </div>
           </>)
          }
          <h5><span>Faq Services Included:</span> </h5>
          {
            <ul>

              {
                //@ts-ignore
                 _currentService?.faqServices?.map(x=><>
                  <li>{x?.serviceTitle}</li>
                 
                  </>)
              }
            </ul>
            //@ts-ignore
          
          }
        </div>
        <div className="d-flex flex-row justify-content-end">
                
          <button onClick={() => _setshow1(false)} className="btn btn-info">
            Cancel
          </button>
          
        </div>
      </>
    </Modal>
              }
      

    </Layout>
  );
}

export default App;
