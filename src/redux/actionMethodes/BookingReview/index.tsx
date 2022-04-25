import { IBookingReview, ICategory, ILogin, IService } from '../../../interfaces/data/objects'
import {types} from '../../actionTypes'
export const setBookingReviewAM=(payload:IBookingReview[])=>{
      return {type:types.SET_BookingReviews,payload:payload}
}
export const addBookingReviewAM=(payload:IBookingReview)=>{
     return {type:types.Add_BookingReview,payload:payload}
}
export const updateBookingReviewAM=(payload:IBookingReview)=>{
    return {type:types.SET_BookingReview,payload:payload}
}
export const deleteBookingReviewAM=(payload:IBookingReview)=>{
     return {type:types.Delete_BookingReview,payload:payload}
}

 