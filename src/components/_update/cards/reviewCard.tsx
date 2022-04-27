import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateBookingReviewsStatus } from '../../../functions/BookingReview';
import { IBookingReview } from '../../../interfaces/data/objects';
import { IReduxStore } from '../../../interfaces/data/reduxStore';
import { ImageUrl } from '../../../utiles/baseUrl';
export default ({data}:{data:IBookingReview})=>{
  const user=useSelector((x:IReduxStore)=>x.User)
  const dispatch=useDispatch();
    return <> <div className="reviews-section">
    <div className="first-rev-sec">
      <div className="rev-img pb-41">
        <img
          src={ImageUrl+data?.bookings?.serviceItem?.image}
          alt=""
        />
        <div className="you-rev">
          <h3>{data.user?.fullName}</h3>
          <p>{moment(data?.createAt).format("DD MMM yyyy")}</p>
        </div>
        
      </div>
      <div className="cm-webs-12">
        <p>
         
         <span>{data?.reviews}</span>
        </p>
         
        <h6>{
          data?.bookings?.serviceItem?.title
          }</h6>
           <h6>Review Status {
          data?.isVerifed===true?"Approved":"Rejected" 
          }</h6>
            {
              user?.isAdmin&&user.isAdmin==true?<div className='d-flex justify-content-between mt-2' >
              <button className='btn btn-danger kjdsfad-aweinmsa' onClick={()=>{
                //@ts-ignore
                dispatch(UpdateBookingReviewsStatus({...data,isVerifed:false}))
              }}>
              Reject
              </button>
               
              <button className='btn btn-info kjdsfad-aweinmsa' onClick={()=>{
                              //@ts-ignore
  
                 dispatch(UpdateBookingReviewsStatus({...data,isVerifed:true}))
              }}>
              Approve
              </button>
            
        </div>:<></>
            }
      </div>
      
    </div>
  </div></>
}