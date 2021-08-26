import { Actions } from "./actions";
import { TAction } from "./context";
import { defaultState } from "./state";

export const reducer = (state = defaultState, action: TAction) => {
  switch (action.type) {
    case Actions.Click:
      return {...state, active: !state.active} 
    default:
      return state;
  }
};