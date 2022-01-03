import { combineReducers } from "redux";
import AmountReducer from "./AmountReducer";

const Reducer = combineReducers({
  amount: AmountReducer,
});
export default Reducer;
