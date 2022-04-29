import { IBooking, ICategory, ILogin, IService } from "../../../interfaces/data/objects";
import { types } from "../../actionTypes";
//@ts-ignore
import update from "react-addons-update";

export const CurrentBookingReducer = (
  state: IBooking | null = null, 
  action: {
    payload: null | IBooking 
    type: string;
  }
) => {
   if (action.type === types.Add_CurrentBooking) {
          return {...action.payload}
  } 
  else if (action.type === types.Delete_CurrentBooking) {
     //@ts-ignore
    return null;
  }

  return state;
};
