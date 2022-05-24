import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateOrderStatus } from '../../../functions/EOrder';
import { IBooking, IEOrder } from '../../../interfaces/data/objects';
import { IReduxStore } from '../../../interfaces/data/reduxStore';
import { ImageUrl } from '../../../utiles/baseUrl';
import { bookingStatus } from '../../../utiles/constants';
export default ({booking,onClick}:{booking:IEOrder,onClick:any})=>{
  const user=useSelector((x:IReduxStore)=>x.User);

  const dispatch=useDispatch();
    return <div className="accoms-1">
    <div className="medal-bar-1">
      {/* <img src={ImageUrl+booking.serviceItem?.image} alt="" /> */}
      <div className="adobe-bar">
         <p>Order By :<strong>{booking?.user?.fullName}</strong></p>
        <div className="accoms-ch">
        <p>Order Date: <strong>{moment(booking?.createAt).format('yyyy-MMM-DD')}</strong> </p>
        <p>Order Items: <strong>{booking?.ordersItems?.length}</strong> </p>
        <p>Order Discount %: <strong>{booking?.discountPer}%</strong> </p>
        <p>Order Payable Price: <strong>{booking?.purchasePrice}-AED</strong> </p>
        
          {/*
          */}
           <p>Order Status: <strong>{booking.bookingStatus}</strong> </p>

          <div className='d-flex justify-content-between mt-2' >
            <button className='btn btn-danger kjdsfad-aweinmsa' onClick={()=>{
              //@ts-ignore
              dispatch(UpdateOrderStatus({...booking,bookingStatus:bookingStatus.rejected}))
            }}>
            Cancel Booking
            </button>
            <button className='btn btn-warning kjdsfad-aweinmsa' onClick={()=>{
                          //@ts-ignore

            dispatch(UpdateOrderStatus({...booking,bookingStatus:bookingStatus.pending}))
            }}>
            Mark Pending
            </button>
            <button className='btn btn-info kjdsfad-aweinmsa' onClick={()=>{
              //@ts-ignore
              dispatch(UpdateOrderStatus ({...booking,bookingStatus:bookingStatus.completed}))
            }}>
            Mark Complete
            </button>
          
          </div>
            <div>
            <button className='btn btn-success w-100 kjdsfad-aweinmsa mt-2' onClick={()=>{
                  onClick();
                  }}>
                    {user?.isAdmin&&user.isAdmin==true? "" : ""}
                View Order Items
            </button>
             
            </div>
        </div>
      </div>
    </div>
  </div>
  
}