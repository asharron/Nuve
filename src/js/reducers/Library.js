import { updateStore, initialState } from "../store";

export function LibraryReducer(state, action) {
  switch (action.type) {
    case "SWITCH_SHELF":
      return updateStore(state, {
        selected: action.payload.shelf
      });
      break;
    case "TOGGLE_SEARCH":
      return updateStore(state, {
        showSearchbar: !state.showSearchbar
      });
      break;
    case "LOAD_PREVIEW":
      return updateStore(state, {
        preview: action.payload.id
      });
      break;
    case "SELECT_SEASON":
      return updateStore(state, {
        showSeason: action.payload.season
      });
      break;
    case "FLIP_SEASONS":
      return updateStore(state, {
        flipSeasons: !state.flipSeasons
      })
      break;
    default:
      return { ...state };
  }
}
