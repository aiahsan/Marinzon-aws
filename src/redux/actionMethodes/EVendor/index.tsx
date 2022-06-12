import { ICategory, ILogin, IService } from '../../../interfaces/data/objects'
import {types} from '../../actionTypes'
export const setEVendorAM=(payload:any[])=>{
       return {type:types.SET_EVendors,payload:payload}
}
export const addEVendorAM=(payload:any)=>{
     return {type:types.Add_EVendor,payload:payload}
}
export const updateEVendorAM=(payload:any)=>{
    return {type:types.SET_EVendor,payload:payload}
}
export const deleteEVendorAM=(payload:any)=>{
     return {type:types.Delete_EVendor,payload:payload}
}

 