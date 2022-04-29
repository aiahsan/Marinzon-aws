import { IBooking, ICategory, IItem, ILogin, IService } from '../../../interfaces/data/objects'
import {types} from '../../actionTypes'
export const setCurrentBookingAM=(payload:IBooking)=>{
         return {type:types.Add_CurrentBooking,payload:payload}
}

export const deleteCurrentBookingAM=()=>{
      return {type:types.Delete_CurrentBooking}
}

 