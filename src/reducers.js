import { combineReducers } from "redux";
import todoListsReducer from "./reducers/todoLists";

const rootReducer = combineReducers({
  todoLists: todoListsReducer,
});

export default rootReducer;
