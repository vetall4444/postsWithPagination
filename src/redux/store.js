import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
import ThunkMiddleware from "redux-thunk";

const store = createStore(reducer, applyMiddleware(ThunkMiddleware));
export default store;
