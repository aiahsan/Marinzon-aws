import { ICategory, IItem, ILogin, IService } from '../../../interfaces/data/objects'
import {types} from '../../actionTypes'
export const setItemAM=(payload:IItem[])=>{
      return {type:types.SET_ServicesItem,payload:payload}
}
export const addItemAM=(payload:IItem)=>{
     return {type:types.Add_ServicesItem,payload:payload}
}
export const updateItemAM=(payload:IItem)=>{
    return {type:types.SET_ServiceItem,payload:payload}
}
export const deleteItemAM=(payload:IItem)=>{
     return {type:types.Delete_ServiceItem,payload:payload}
}

 