import { IBooking, IBookingReview, ICategory, ILogin, IService } from "../../../interfaces/data/objects";
import { types } from "../../actionTypes";
//@ts-ignore
import update from "react-addons-update";

export const BookingReviewReducer = (
  state: IBookingReview[] = [],
  action: {
    payload: null | IBookingReview | IBookingReview[];
    type: string;
  }
) => {
  let payLoad = action?.payload as IBookingReview;
  let index = state.findIndex((x: IBookingReview) => x?.id == payLoad?.id);

  if (action.type === types.SET_BookingReviews) {
      return Array.isArray(action.payload) ? [...action.payload] : [];
  } else if (action.type === types.Add_BookingReview) {
    let oldData = [...state];
    return [action.payload, ...oldData];
  } else if (action.type === types.SET_BookingReview) {
    if (index >= 0) {
      state[index] = payLoad;
      return [...state];
    }
  } else if (action.type === types.Delete_BookingReview) {
    //@ts-ignore
     return [...state.filter((x) => x.id != action.payload.id)];
  }

  return state;
};
