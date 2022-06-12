import { ICategory, ILogin, IService } from "../../../interfaces/data/objects";
import { types } from "../../actionTypes";
//@ts-ignore
import update from "react-addons-update";

export const DocumentReducer = (
  state: any[] = [],
  action: {
    payload: null |any;
    type: string;
  }
) => {
 
  if (action.type === types.SET_Documents) {
      return [action.payload];
  }  

  return state;
};
