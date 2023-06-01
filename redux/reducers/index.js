import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  // Add more reducers if needed
});

export default rootReducer;
