import { ICategory, IItem, ILogin, IService } from "../../../interfaces/data/objects";
import { types } from "../../actionTypes";
//@ts-ignore
import update from "react-addons-update";

export const ItemReducer = (
  state: IItem[] = [],
  action: {
    payload: null | IItem | IItem[];
    type: string;
  }
) => {
  let payLoad = action?.payload as IItem;
  let index = state.findIndex((x: IItem) => x?.id == payLoad?.id);

  if (action.type === types.SET_ServicesItem) {
      return Array.isArray(action.payload) ? [...action.payload] : [];
  } else if (action.type === types.Add_ServicesItem) {
    let oldData = [...state];
    return [action.payload, ...oldData];
  } else if (action.type === types.SET_ServiceItem) {
    if (index >= 0) {
      state[index] = payLoad;
      return [...state];
    }
  } else if (action.type === types.Delete_ServiceItem) {
       //@ts-ignore
    return [...state.filter((x) => x.id != action.payload.id)];
  }

  return state;
};
