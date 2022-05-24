import { ICategory, IEProduct, ILogin, IService } from '../../../interfaces/data/objects'
import {types} from '../../actionTypes'
export const setEProductAM=(payload:IEProduct[])=>{
       return {type:types.SET_EProducts,payload:payload}
}
export const addEProductAM=(payload:IEProduct)=>{
     return {type:types.Add_EProduct,payload:payload}
}
export const updateEProductAM=(payload:IEProduct)=>{
    return {type:types.SET_EProduct,payload:payload}
}
export const deleteEProductAM=(payload:IEProduct)=>{
     return {type:types.Delete_EProduct,payload:payload}
}

 