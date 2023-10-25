import { combineReducers } from "redux";
import { myReducer } from "./reducer";
import { myNewReducer } from "./newReducer";

export const rootReducer = combineReducers({
  reducer2: myNewReducer,
  reducer1: myReducer,
});
