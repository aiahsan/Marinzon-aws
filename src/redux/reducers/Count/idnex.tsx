import { IMessage } from "../../../interfaces/data/reduxStore";
import { types } from "../../actionTypes";

export const countReducer = (
  state = 0,
  action: {
    payload: number;
    type: string;
  }
) => {
  if (action.type === types.set_Count) {

     return action.payload;
  } 
   
  return state;
};
