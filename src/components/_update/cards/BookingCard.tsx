import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import { UpdateBookingStatus } from '../../../functions/Booking';
import { IBooking } from '../../../interfaces/data/objects';
import { ImageUrl } from '../../../utiles/baseUrl';
import { bookingStatus } from '../../../utiles/constants';
export default ({booking}:{booking:IBooking})=>{
  const dispatch=useDispatch();
    return <div className="accoms-1">
    <div className="medal-bar-1">
      <img src={ImageUrl+booking.serviceItem?.image} alt="" />
      <div className="adobe-bar">
        <h3>{booking.serviceItem?.title}</h3>
        <p>Booking By :<strong>{booking?.user?.fullName}</strong></p>
        <div className="accoms-ch">
          <p>Booking Date: <strong>{moment(booking?.bookingDateTime).format("yyyy-MM-DD  hh:mm:ss")}</strong> </p>
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
        </div>
      </div>
    </div>
  </div>
  
}