import { ICategory, ILogin, IService } from "../../../interfaces/data/objects";
import { types } from "../../actionTypes";
//@ts-ignore
import update from "react-addons-update";

export const CategoryReducer = (
  state: ICategory[] = [],
  action: {
    payload: null | ICategory | ICategory[];
    type: string;
  }
) => {
  let payLoad = action?.payload as ICategory;
  let index = state.findIndex((x: ICategory) => x?.id == payLoad?.id);

  if (action.type === types.SET_Categories) {
      return Array.isArray(action.payload) ? [...action.payload] : [];
  } else if (action.type === types.Add_Category) {
    let oldData = [...state];
    return [action.payload, ...oldData];
  } else if (action.type === types.SET_Category) {
    if (index >= 0) {
      state[index] = payLoad;
      return [...state];
    }
  } else if (action.type === types.Delete_Category) {
    //@ts-ignore
    return [...state.filter((x) => x.id != action.payload.id)];
  }

  return state;
};
