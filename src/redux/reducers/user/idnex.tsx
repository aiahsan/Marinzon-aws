import { ILogin } from "../../../interfaces/data/objects";
import { types } from "../../actionTypes";
export const userReducer=(
  state=null,
  action:any
)=>{
  if (action.type === types.login) {
    return action.payload;
  } else if (action.type === types.logOut) {
    return null;
  }
  return state;
}


export const UsersReducer = (
  state: ILogin[] = [],
  action: {
    payload: null | ILogin | ILogin[];
    type: string;
  }
) => {
  let payLoad = action?.payload as ILogin;
  let index = state.findIndex((x: ILogin) => x?.id == payLoad?.id);

  if (action.type === types.SET_Users) {
      return Array.isArray(action.payload) ? [...action.payload] : [];
  } else if (action.type === types.Add_User) {
    let oldData = [...state];
    return [action.payload, ...oldData];
  } else if (action.type === types.SET_User) {
    if (index >= 0) {
      state[index] = payLoad;
      return [...state];
    }
  } else if (action.type === types.Delete_User) {
    //@ts-ignore
     return [...state.filter((x) => x.id != action.payload.id)];
  }

  return state;
};
