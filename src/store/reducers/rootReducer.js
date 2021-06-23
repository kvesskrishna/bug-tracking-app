import { combineReducers } from "redux";
import bugsReducer from "./bugsReducer";
const rootReducer = combineReducers({
  bugsReducer,
});
export default rootReducer;
