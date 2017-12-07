import { combineReducers } from "redux";
import authenticate from "./loginReducers";

const rootReducer = combineReducers({
  authenticate
});

export default rootReducer;
