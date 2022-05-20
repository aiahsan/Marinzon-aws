import React from "react";
import Layout from "../../components/layout";

import BookingCard from "../../components/_update/cards/BookingCard";
import { RiLayoutGridFill, RiListCheck2 } from "react-icons/ri";
import { Table } from "react-bootstrap";
import Searchbar from "../../components/_update/inputs/searchbar";
import { IBooking, IBookingReview } from "../../interfaces/data/objects";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBookings, GetBookings } from "../../functions/Booking";
import { IReduxStore } from "../../interfaces/data/reduxStore";
import { bookingStatus, ItemStatus } from "../../utiles/constants";
import moment from "moment";
import Modal from "../../components/_update/modal";
import ReviewCard from "../../components/_update/cards/reviewCard";
import { FaStar } from "react-icons/fa";
import { DeleteBookingReviews, GetBookingReviews } from "../../functions/BookingReview";

function App() {
  const [view, setView] = React.useState(0);
  const dispatch = useDispatch();
  const bookings = useSelector((x: IReduxStore) => x.BookingReviews);
  const [_Bookings, _setBookings] = React.useState<IBookingReview[]>();
  const [_currentStatus, _setcurrentStatus] = React.useState<undefined | boolean>(undefined);
  const [_show, _setshow] = React.useState(false);

  const [_currentService, _setcurrentService] = React.useState<
    IBookingReview | undefined
  >();
  React.useEffect(() => {
    //@ts-ignore
    dispatch(GetBookingReviews());
    
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
      case true: {
        return bookings.filter(
          (x) => x.isVerifed == true
        );
      }
      case false: {
        return bookings.filter((x) => x.isVerifed == false);
      }
     
      default: {
        return bookings;
      }
    }
  };

  return (
    <Layout title="">
      
      <div className="hdsf0s-sadmsa mt-3 p-an ml-0">
          <h5 className="cst-mx-0 ">All Reviews List</h5>
        </div>
      <div className="umpire-1-cst d-flex align-items-center justify-content-between">
        <div className="maxima">
          <button
            className="upload-1 sdisad-dsdactive"
            onClick={() => {
              _setcurrentStatus(undefined);
            }}
          >
            All
          </button>
          <button
            className="upload-1"
            onClick={() => {
              _setcurrentStatus(true);
            }}
          >
            Approved
          </button>
          <button
            className="upload-1"
            onClick={() => {
              _setcurrentStatus(false);
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
                  <th>Review By</th>
                  <th>Review Date</th>
                  <th>Review</th>
                  <th>Ratting / 5</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {getItems().map((x, i) => (
                  <tr key={i}>
                    <td>{x.user?.fullName}</td>
                    <td>{moment(x?.createAt).format("DD MMM yyyy")}</td>
                    <td>
                    {x?.reviews}
                    </td>
                    <td>{x?.rattings}</td>

                    <td>
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
        <div className="umpire w-100">
          <div className="umpire-1 umpire-1-cst">
            <div className="ratio-bar">
              <h3>{
                //@ts-ignore
                ((getItems().map(x=>x.rattings).reduce((a:number, b:number) => a + b, 0)/getItems().length) || 0).toFixed(1)
                }
                
                </h3>
              <p>out of</p>
              <h3 className="ml-9">5</h3>
              <div className="lasjdsad-sdjsa ksjadas">
                <FaStar color="#FF981E" />
                <FaStar color="#FF981E" />
                <FaStar color="#FF981E" />
                <FaStar color="#FF981E" />
                <FaStar color="#FF981E" />
              </div>
              <h6>{//@ts-ignore
                ((getItems().map(x=>x.rattings).reduce((a:number, b:number) => a + b, 0)/getItems().length) || 0).toFixed(1)
                }({
                  getItems().length
                })</h6>
            </div>
          </div>
        </div>
        <div className="hjsaisa-sdnjassd jsdif-dsndawje">
        {getItems().map((x,i) =><ReviewCard key={i} data={x}/>)}
          
          
        </div>
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
                  dispatch(DeleteBookingReviews(_currentService));
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
