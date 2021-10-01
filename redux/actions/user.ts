import { ISendData } from "../../pages/signup";
import { Actions } from "./tActions";

export const signUpAction = (data: ISendData) => {
  return {
    type: Actions.SignUp,
    payload: data
  }
}