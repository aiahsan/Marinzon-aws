import { ICategory, ILogin, IService } from '../../../interfaces/data/objects'
import {types} from '../../actionTypes'
export const setDocumentAM=(payload:any)=>{
    return {type:types.SET_Documents,payload:payload}
}
