import { Actions } from "../actions/tActions";

export type TState = {
  signupError: Boolean;
  signupLoading: Boolean;
  token: string;
  user: {
    accomplishments?: Array<any>
    conferences?: number
    email?: string
    gifts?: Array<any>
    name?: string
    password?: string
    photo?: string
    selectedCourses?: Array<any>
    type?: string
    _id?: string
  }
};

export interface IAction {
  type: string; 
  payload: any;
};

const initialState: TState = {
  signupError: false,
  signupLoading: false,
  token: '',
  user: {}
};

export const userReducer = (state = initialState, action: IAction): TState => {
  switch (action.type) {
    case Actions.DefAction:
      return {...state, [action.payload.ini]: action.payload.data};
    default:
      return {...state};
  };
};