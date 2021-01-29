import { combineReducers } from "redux";
import { membersReducer as MR } from "./membersReducer";
import { titleReducer as TR } from "./titleReducer";

export default combineReducers({
  MR,
  TR,
});
