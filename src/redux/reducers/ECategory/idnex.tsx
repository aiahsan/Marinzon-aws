import { IECategory, ILogin, IService } from "../../../interfaces/data/objects";
import { types } from "../../actionTypes";
//@ts-ignore
import update from "react-addons-update";

export const ECategoryReducer = (
  state: IECategory[] = [],
  action: {
    payload: null | IECategory | IECategory[];
    type: string;
  }
) => {
  let payLoad = action?.payload as IECategory;
  let index = state.findIndex((x: IECategory) => x?.id == payLoad?.id);

  if (action.type === types.SET_ECategories) {
      return Array.isArray(action.payload) ? [...action.payload] : [];
  } else if (action.type === types.Add_ECategory) {
    let oldData = [...state];
    return [action.payload, ...oldData];
  } else if (action.type === types.SET_ECategory) {
    if (index >= 0) {
      state[index] = payLoad;
      return [...state];
    }
  } else if (action.type === types.Delete_ECategory) {
    //@ts-ignore
    return [...state.filter((x) => x.id != action.payload.id)];
  }

  return state;
};
