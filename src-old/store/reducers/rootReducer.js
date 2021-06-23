import { combineReducers } from "redux";
import { bugReducer } from "./bugReducer";

// const initialState = {
//   bugs: [],
//   currentUser: {},
// };

const rootReducer = combineReducers({
  bugReducer,
});

export default rootReducer;
