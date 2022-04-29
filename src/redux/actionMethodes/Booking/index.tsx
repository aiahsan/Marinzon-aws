import { IBooking, ILogin, IService } from '../../../interfaces/data/objects'
import {types} from '../../actionTypes'
export const setBookingAM=(payload:IBooking[])=>{
      return {type:types.SET_Bookings,payload:payload}
}
export const addBookingAM=(payload:IBooking)=>{
      return {type:types.Add_Booking,payload:payload}
}
export const updateBookingAM=(payload:IBooking)=>{
    return {type:types.SET_Booking,payload:payload}
}
export const deleteBookingAM=(payload:IBooking)=>{
    return {type:types.Delete_Booking,payload:payload}
}

 