import { ICategory, IECoupons, IItem, ILogin, IService } from '../../../interfaces/data/objects'
import {types} from '../../actionTypes'
export const setECouponsAM=(payload:IECoupons[])=>{
      return {type:types.SET_ECouponss,payload:payload}
}
export const addECouponsAM=(payload:IECoupons)=>{
     return {type:types.Add_ECoupons,payload:payload}
}
export const updateECouponsAM=(payload:IECoupons)=>{
    return {type:types.SET_ECoupons,payload:payload}
}
export const deleteECouponsAM=(payload:IECoupons)=>{
     return {type:types.Delete_ECoupons,payload:payload}
}

 