import React from "react";
import Layout from "../../components/layout";

import BookingCard from "../../components/_update/cards/BookingCard";
import { RiLayoutGridFill, RiListCheck2 } from "react-icons/ri";
import { Table } from "react-bootstrap";
import Searchbar from "../../components/_update/inputs/searchbar";
import { IBooking } from "../../interfaces/data/objects";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBookings, GetBookings, UpdateAssignBooking } from "../../functions/Booking";
import { IReduxStore } from "../../interfaces/data/reduxStore";
import { bookingStatus, ItemStatus } from "../../utiles/constants";
import moment from "moment";
import Modal from "../../components/_update/modal";
import { GetUsers } from "../../functions/User";

function App() {
  const [view, setView] = React.useState(0);
  const dispatch = useDispatch();
  const bookings = useSelector((x: IReduxStore) => x.Bookings);
  const [_Bookings, _setBookings] = React.useState<IBooking[]>();
  const [_currentStatus, _setcurrentStatus] = React.useState("");
  const [_currentAssign, _setcurrentAssign] = React.useState();
  const [_show, _setshow] = React.useState(false);
  const [_show1, _setshow1] = React.useState(false);
  const Users = useSelector((x: IReduxStore) => x.Users);
  const user=useSelector((x:IReduxStore)=>x.User);

  const [_currentService, _setcurrentService] = React.useState<
    IBooking | undefined
  >();
  React.useEffect(() => {
   if(bookings.length<=0)
   {
      //@ts-ignore
    dispatch(GetBookings());
   }
   
  }, []);
  const Delete = (Id: number | undefined) => {
    let obj = bookings.find((x) => x.id == Id);
    //@ts-ignore
    if (obj != undefined) {
      _setcurrentService(obj);
      _setshow(true);
    }
  };
  const getItems = () => {
    switch (_currentStatus) {
      case bookingStatus.completed: {
        return bookings.filter(
          (x) => x.bookingStatus == bookingStatus.completed
        );
      }
      case bookingStatus.pending: {
        return bookings.filter((x) => x.bookingStatus == bookingStatus.pending);
      }
      case bookingStatus.rejected: {
        return bookings.filter(
          (x) => x.bookingStatus == bookingStatus.rejected
        );
      }
      default: {
        return bookings;
      }
    }
  };

  return (
    <Layout title="">
     
      <div className="hdsf0s-sadmsa mt-3 p-an ml-0">
          <h5 className="cst-mx-0 ">Bookings</h5>
        </div>

      <div className="umpire-1-cst d-flex align-items-center justify-content-between">
        <div className="maxima">
          <button
            className="upload-1 sdisad-dsdactive"
            onClick={() => {
              _setcurrentStatus("");
            }}
          >
            All
          </button>
          <button
            className="upload-1"
            onClick={() => {
              _setcurrentStatus(bookingStatus.completed);
            }}
          >
            Completed
          </button>
          <button
            className="upload-1"
            onClick={() => {
              _setcurrentStatus(bookingStatus.pending);
            }}
          >
            Pending
          </button>
          <button
            className="upload-1"
            onClick={() => {
              _setcurrentStatus(bookingStatus.rejected);
            }}
          >
            Rejected
          </button>
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
              <h5 className="hd-5">Booking List</h5>
              <Searchbar isBorder={true} />
            </div>

            <Table responsive borderless className="table-custom">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Booking By</th>
                  <th>Booking Date</th>
                  <th>Booking Status</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {getItems().map((x, i) => (
                  <tr key={i}>
                    <td>{x.serviceItem?.title}</td>
                    <td>{x.user?.fullName}</td>
                    <td>
                      {moment(x?.bookingDateTime).format(
                        "yyyy-MM-DD  hh:mm:ss"
                      )}
                    </td>
                    <td>{x.bookingStatus}</td>

                    <td>
                      {/* <button className="btn btn-info">Edit</button> */}
                      <button className="btn btn-warning" onClick={()=>Delete(x.id)}>Delete</button>
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
      ) : (
        <div className="complete-web-1">
          {getItems().map((x) => (
            <BookingCard onClick={()=>{
              if(x)
              {
                console.log(x);
                _setcurrentService(x)
                _setshow1(true)
              }
    
            }}  booking={x} />
          ))}
        </div>
      )}

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
                  dispatch(DeleteBookings(_currentService));
                }
              }}
              className="btn btn-danger mx-2"
            >
              Confirm
            </button>
          </div>
        </>
      </Modal>

      {  <Modal title="Booking Details"   size="lg"   show={_show1} setShow={_setshow1}>
      <>
        
        <div className="modal-cst-text">
        <h5><span>Service: </span> {_currentService?.serviceItem?.service?.title }</h5>
        <h5><span>Category: </span> {_currentService?.serviceItem?.category?.title }</h5>
        <h5><span>Title: </span> {_currentService?.serviceItem?.title }</h5>
        <h5><span>Description: </span> {_currentService?.serviceItem?.description }</h5>
        <h5><span>Status: </span> {_currentService?.serviceItem?.serviceStatus }</h5>
        <h5><span>Created By : </span> {_currentService?.serviceItem?.user?.fullName }</h5>
         
         <h3>Booking Details</h3>
         <p>Booking Date: <strong>{_currentService?.bookingDateTime}</strong> </p>
          <p>Booking Time: <strong>{_currentService?.bookingTime}</strong> </p>
          <p>Booking Address: <strong>{_currentService?.bookingAddress}</strong> </p>
          <p>Booking Instructions: <strong>{_currentService?.bookingInstructions}</strong> </p>
          <p>Booking Status: <strong>{_currentService?.bookingStatus}</strong> </p>
          <p>Booking Assign To: <strong>{_currentService?.assignBooking?.fullName}</strong> </p>
          
          <h3>Booking Items</h3>
              {
                _currentService?.bookingItems?.map((x:any)=> <p>{x?.serviceItemService?.serviceItemServiceTitle}: <strong>{x?.serviceItemServicePrice?.serviceItemServiceTitle} At {x?.price} AED</strong> </p>)
              }
                      <h3>Total Price</h3>
{
  _currentService?.bookingItems?.map((x:any)=>x.price).reduce(function(a:number, b:number) { return a + b; }, 0) +" AED"
}
          {
          
         user?.isAdmin&&user.isAdmin==true?<div className="w-50">
                   <h3>Assign Booking To Vendor</h3>

         <select onChange={(e)=>{
           if(e.target.value!="")
           {
              console.log(Users);
             //@ts-ignore
             _setcurrentAssign(e.target.value)
           }
           else
           {
             _setcurrentAssign(undefined);

           }
         }} className="form-control">
        <option value="">Select Vendor</option>
        {
          //@ts-ignore
          Users.filter(x=>x?.roles?.map(t=>t.roleId).includes(4)).map(x=><option value={x?.id}>{x.fullName}</option>)
          
        }
      </select>
      <button className="btn btn-success mt-3" onClick={()=>{
        (async()=>{
            //@ts-ignore
      const dataG=await dispatch(UpdateAssignBooking(_currentService?.id,_currentAssign))
      console.log(dataG);
       //@ts-ignore
      _setcurrentService(dataG);
        })()
      }}>
        Assign Booking To Vendor
      </button>
         </div>:<></>
       }
              
        </div>
        <div className="d-flex flex-row justify-content-end">
                
          <button onClick={() => _setshow1(false)} className="btn btn-info">
            Cancel
          </button>
          
        </div>
      </>
    </Modal>  }
    </Layout>
  );
}

export default App;
