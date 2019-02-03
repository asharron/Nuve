import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import createSagaMiddleware from "redux-saga";
import Sagas from "../sagas";
import { Reducers } from "../reducers";
// initialize the redux state
export const initialState = {
  library: {
    selected: "movies",
    showSeason: 1,
    flipSeasons: false,
    shelves: {
      movies: {},
      series: {}
    },
    preview: false,
    showSearchbar: false
  }
};

// helper function for updating the Redux store
export function updateStore(state, update) {
  return Object.assign({}, state, update);
}

const sagaMiddleware = createSagaMiddleware();
const middleware = promise();

let allMiddlewares = applyMiddleware(sagaMiddleware);

if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  allMiddlewares = composeEnhancer(allMiddlewares);
}

// create the store
export const store = createStore(Reducers, initialState, allMiddlewares);

sagaMiddleware.run(Sagas);
