import { combineReducers } from "redux";
import { LibraryReducer } from "./Library";
import { AppReducer } from "./App"
// combine all our reducers
export const Reducers = combineReducers({
  library: LibraryReducer,
  app: AppReducer,
});
