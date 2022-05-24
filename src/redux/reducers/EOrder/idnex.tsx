import { ICategory, IEOrder, ILogin, IService } from "../../../interfaces/data/objects";
import { types } from "../../actionTypes";
//@ts-ignore
import update from "react-addons-update";

export const EOrderReducer = (
  state: IEOrder[] = [],
  action: {
    payload: null | IEOrder | IEOrder[];
    type: string;
  }
) => {
  let payLoad = action?.payload as IEOrder;
  let index = state.findIndex((x: IEOrder) => x?.id == payLoad?.id);

  if (action.type === types.SET_EOrders) {
      return Array.isArray(action.payload) ? [...action.payload] : [];
  } else if (action.type === types.Add_EOrder) {
    let oldData = [...state];
    return [action.payload, ...oldData];
  } else if (action.type === types.SET_EOrder) {
    if (index >= 0) {
      state[index] = payLoad;
      return [...state];
    }
  } else if (action.type === types.Delete_EOrder) {
       //@ts-ignore
    return [...state.filter((x) => x.id != action.payload.id)];
  }

  return state;
};
