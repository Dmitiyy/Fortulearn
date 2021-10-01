export type TState = {
  name: string;
};

export interface IAction {
  type: string; 
  payload: Object;
};

const initialState: TState = {
  name: 'Dmitry'
};

export const userReducer = (state = initialState, action: IAction): TState => {
  switch (action.type) {
    case 'SAY_HELLO':
      console.log('say hello reducer function here');
      return {...state, name: `Hello, ${state.name}`};
    default:
      return {...state};
  };
};