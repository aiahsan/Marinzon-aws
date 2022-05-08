import { IBooking, ICategory, ILogin, IService } from "../../../interfaces/data/objects";
import { types } from "../../actionTypes";
//@ts-ignore
import update from "react-addons-update";

export const BookingReducer = (
  state: IBooking[] = [],
  action: {
    payload: null | IBooking | IBooking[];
    type: string;
  }
) => {
  let payLoad = action?.payload as IBooking;
  let index = state.findIndex((x: IBooking) => x?.id == payLoad?.id);

  if (action.type === types.SET_Bookings) {
      return Array.isArray(action.payload) ? [...action.payload] : [];
  } else if (action.type === types.Add_Booking) {
    let oldData = [...state];
    return [action.payload, ...oldData];
  } else if (action.type === types.SET_Booking) {
    if (index >= 0) {
      state[index] = payLoad;
      return [...state];
    }
  } else if (action.type === types.Delete_Booking) {
    //@ts-ignore
    return [...state.filter((x) => x.id != action.payload.id)];
  }
  else if (action.type === types.logOut) {
    return [];
  }

  return state;
};
