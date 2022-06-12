import { ICategory, ILogin, IService } from '../../../interfaces/data/objects'
import {types} from '../../actionTypes'
export const setCategoryAM=(payload:any)=>{
      return {type:types.SET_Categories,payload:payload}
}
export const addCategoryAM=(payload:ICategory)=>{
     return {type:types.Add_Category,payload:payload}
}
export const updateCategoryAM=(payload:ICategory)=>{
    return {type:types.SET_Category,payload:payload}
}
export const deleteCategoryAM=(payload:ICategory)=>{
    return {type:types.Delete_Category,payload:payload}
}

 