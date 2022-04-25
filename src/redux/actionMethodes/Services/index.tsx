import { ILogin, IService } from '../../../interfaces/data/objects'
import {types} from '../../actionTypes'
export const setServicesAM=(payload:IService[])=>{
     return {type:types.SET_Services,payload:payload}
}
export const addServicesAM=(payload:IService)=>{
     return {type:types.Add_Services,payload:payload}
}
export const updateServiceAM=(payload:IService)=>{
    return {type:types.SET_Service,payload:payload}
}
export const deleteServiceAM=(payload:IService)=>{
    return {type:types.Delete_Service,payload:payload}
}

 