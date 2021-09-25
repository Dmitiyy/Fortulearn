import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./sagas";
import { userReducer } from "./reducers/user";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(userReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;