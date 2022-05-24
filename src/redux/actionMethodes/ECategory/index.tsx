import { ICategory, IECategory, ILogin, IService } from '../../../interfaces/data/objects'
import {types} from '../../actionTypes'
export const setECategoryAM=(payload:IECategory[])=>{
      return {type:types.SET_ECategories,payload:payload}
}
export const addECategoryAM=(payload:IECategory)=>{
     return {type:types.Add_ECategory,payload:payload}
}
export const updateECategoryAM=(payload:IECategory)=>{
    return {type:types.SET_ECategory,payload:payload}
}
export const deleteECategoryAM=(payload:IECategory)=>{
    return {type:types.Delete_ECategory,payload:payload}
}

 