import { ICategory, IECoupons, ILogin, IService } from "../../../interfaces/data/objects";
import { types } from "../../actionTypes";
//@ts-ignore
import update from "react-addons-update";

export const ECouponsReducer = (
  state: IECoupons[] = [],
  action: {
    payload: null | IECoupons | IECoupons[];
    type: string;
  }
) => {
  let payLoad = action?.payload as IECoupons;
  let index = state.findIndex((x: IECoupons) => x?.id == payLoad?.id);

  if (action.type === types.SET_ECouponss) {
      return Array.isArray(action.payload) ? [...action.payload] : [];
  } else if (action.type === types.Add_ECoupons) {
    let oldData = [...state];
    return [action.payload, ...oldData];
  } else if (action.type === types.SET_ECoupons) {
    if (index >= 0) {
      state[index] = payLoad;
      return [...state];
    }
  } else if (action.type === types.Delete_ECoupons) {
       //@ts-ignore
    return [...state.filter((x) => x.id != action.payload.id)];
  }

  return state;
};
