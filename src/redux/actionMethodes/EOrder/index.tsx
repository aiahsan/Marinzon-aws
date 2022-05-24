import { ICategory, IEOrder, ILogin, IService } from '../../../interfaces/data/objects'
import {types} from '../../actionTypes'
export const setEOrderAM=(payload:IEOrder[])=>{
       return {type:types.SET_EOrders,payload:payload}
}
export const addEOrderAM=(payload:IEOrder)=>{
     return {type:types.Add_EOrder,payload:payload}
}
export const updateEOrderAM=(payload:IEOrder)=>{
    return {type:types.SET_EOrder,payload:payload}
}
export const deleteEOrderAM=(payload:IEOrder)=>{
     return {type:types.Delete_EOrder,payload:payload}
}

 