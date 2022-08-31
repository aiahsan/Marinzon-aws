import { ICategory, ILogin, IService } from '../../../interfaces/data/objects'
import {types} from '../../actionTypes'
export const setCountAM=(payload:any)=>{
      return {type:types.set_Count,payload:payload}
}
 
 