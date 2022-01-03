import { applyMiddleware, createStore } from "redux";
import Reducer from "../Reducers/Index";
// we use thunk in asyn
import thunk from "redux-thunk";

const Store = createStore(Reducer, {}, applyMiddleware(thunk));

export default Store