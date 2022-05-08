import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateBookingStatus,UpdateAssignBooking } from '../../../functions/Booking';
import { IBooking } from '../../../interfaces/data/objects';
import { IReduxStore } from '../../../interfaces/data/reduxStore';
import { ImageUrl } from '../../../utiles/baseUrl';
import { bookingStatus } from '../../../utiles/constants';
export default ({booking,onClick}:{booking:IBooking,onClick:any})=>{
  const user=useSelector((x:IReduxStore)=>x.User);

  const dispatch=useDispatch();
    return <div className="accoms-1">
    <div className="medal-bar-1">
      {/* <img src={ImageUrl+booking.serviceItem?.image} alt="" /> */}
      <div className="adobe-bar">
        <h3>{booking.serviceItem?.title}</h3>
        <p>Booking By :<strong>{booking?.user?.fullName}</strong></p>
        <div className="accoms-ch">
          <p>Booking Date: <strong>{booking?.bookingDateTime}</strong> </p>
          <p>Booking Time: <strong>{booking?.bookingTime}</strong> </p>
           <p>Booking Status: <strong>{booking.bookingStatus}</strong> </p>

          <div className='d-flex justify-content-between mt-2' >
            <button className='btn btn-danger kjdsfad-aweinmsa' onClick={()=>{
              //@ts-ignore
              dispatch(UpdateBookingStatus({...booking,bookingStatus:bookingStatus.rejected}))
            }}>
            Cancel Booking
            </button>
            <button className='btn btn-warning kjdsfad-aweinmsa' onClick={()=>{
              //@ts-ignore
              dispatch(UpdateBookingStatus({...booking,bookingStatus:bookingStatus.pending}))
            }}>
            Mark Pending
            </button>
            <button className='btn btn-info kjdsfad-aweinmsa' onClick={()=>{
              //@ts-ignore
              dispatch(UpdateBookingStatus({...booking,bookingStatus:bookingStatus.completed}))
            }}>
            Mark Complete
            </button>
          
          </div>
            <div>
            <button className='btn btn-success w-100 kjdsfad-aweinmsa mt-2' onClick={()=>{
                  onClick();
                  }}>
                    {user?.isAdmin&&user.isAdmin==true? "Assign /" : ""}
                View Booking
               </button>
             
            </div>
        </div>
      </div>
    </div>
  </div>
  
}