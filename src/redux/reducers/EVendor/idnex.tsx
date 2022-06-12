import { ICategory, ILogin, IService } from "../../../interfaces/data/objects";
import { types } from "../../actionTypes";
//@ts-ignore
import update from "react-addons-update";

export const EVendorReducer = (
  state: any[] = [],
  action: {
    payload: null | any | any[];
    type: string;
  }
) => {
  let payLoad = action?.payload as any;
  let index = state.findIndex((x: any) => x?.id == payLoad?.id);

  if (action.type === types.SET_EVendors) {
      return Array.isArray(action.payload) ? [...action.payload] : [];
  } else if (action.type === types.Add_EVendor) {
    let oldData = [...state];
    return [action.payload, ...oldData];
  } else if (action.type === types.SET_EVendor) {
    if (index >= 0) {
      state[index] = payLoad;
      return [...state];
    }
  } else if (action.type === types.Delete_EVendor) {
       //@ts-ignore
    return [...state.filter((x) => x.id != action.payload.id)];
  }

  return state;
};
