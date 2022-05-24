import { ICategory, IEProduct, ILogin, IService } from "../../../interfaces/data/objects";
import { types } from "../../actionTypes";
//@ts-ignore
import update from "react-addons-update";

export const EProductReducer = (
  state: IEProduct[] = [],
  action: {
    payload: null | IEProduct | IEProduct[];
    type: string;
  }
) => {
  let payLoad = action?.payload as IEProduct;
  let index = state.findIndex((x: IEProduct) => x?.id == payLoad?.id);

  if (action.type === types.SET_EProducts) {
      return Array.isArray(action.payload) ? [...action.payload] : [];
  } else if (action.type === types.Add_EProduct) {
    let oldData = [...state];
    return [action.payload, ...oldData];
  } else if (action.type === types.SET_EProduct) {
    if (index >= 0) {
      state[index] = payLoad;
      return [...state];
    }
  } else if (action.type === types.Delete_EProduct) {
       //@ts-ignore
    return [...state.filter((x) => x.id != action.payload.id)];
  }

  return state;
};
