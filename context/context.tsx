import { createContext, Dispatch, useContext, useReducer } from 'react';
import { reducer } from './reducer';
import { defaultState } from './state';
import { TSharedState } from './types';

export interface TAction {
  type: string
  payload: any
}

let sharedState = {...defaultState};
const AppContext = createContext<{
  state: TSharedState, 
  dispatch: Dispatch<TAction>
}>({
  state: sharedState, 
  dispatch: () => null
});

export function AppWrapper({children}: any) {
  const [state, dispatch] = useReducer(reducer, sharedState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {return useContext(AppContext)}