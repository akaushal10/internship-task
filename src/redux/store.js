import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'
import rootSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))
const unsubscribe  = store.subscribe(()=>console.log("Updated State : ",store.getState()))
sagaMiddleware.run(rootSaga);
export default store;