import { combineReducers } from "redux";
import { LibraryReducer } from "./Library";

// combine all our reducers
export const Reducers = combineReducers({
  library: LibraryReducer
});
