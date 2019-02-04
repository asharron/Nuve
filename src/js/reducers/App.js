import { updateStore, initialState } from "../store";

export function AppReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return updateStore(state, {
        sidebarOpen: !state.sidebarOpen
      });
      break;
    default:
      return { ...state };
  }
}
