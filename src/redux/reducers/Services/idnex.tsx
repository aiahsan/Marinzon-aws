import { ILogin, IService } from "../../../interfaces/data/objects";
import { types } from "../../actionTypes";
//@ts-ignore
import update from "react-addons-update";

export const ServicesReducer = (
  state: IService[] = [],
  action: {
    payload: null | IService | IService[];
    type: string;
  }
) => {
  let payLoad = action?.payload as IService;
  let index = state.findIndex((x: IService) => x?.id == payLoad?.id);

  if (action.type === types.SET_Services) {
    return Array.isArray(action.payload) ? [...action.payload] : [];

  } 
  else if (action.type === types.Add_Services) {
    
     let oldData=[...state];
    return [action.payload,...oldData]
   }
   else if (action.type === types.SET_Service) {
    if (index >= 0) {
      state[index] = payLoad;
      return [...state];
    }
  }
  else if (action.type === types.Delete_Service) {
      
    //@ts-ignore
      return [...state.filter(x=>x.id!=action.payload.id)];
    }
   
   
  return state;
};
