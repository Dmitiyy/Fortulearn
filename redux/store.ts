import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from '@reduxjs/toolkit'
import { rootSaga } from "./sagas";
import userReducer from "./reducers/user";
import { useSelector, TypedUseSelectorHook } from "react-redux";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {user: userReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  devTools: true
})

sagaMiddleware.run(rootSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;