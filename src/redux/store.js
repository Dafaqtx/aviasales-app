import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import { getSearchId, getTickets } from "./api";
import reducer from "./reducer";

export default function() {
  const middlewares = [thunk];

  let composeEnhancers = compose;

  // connect browser DevTools and Logger on dev mode
  if (process.env.NODE_ENV === "development") {
    const logger = createLogger({
      collapsed: true,
      duration: true
    });
    middlewares.push(logger);

    const composeWithDevToolsExtension =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // eslint-disable-line
    if (typeof composeWithDevToolsExtension === "function") {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }

  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  store.dispatch(dispatch => {
    dispatch({ type: "GET_SEARCH_ID_REQUEST" });
    getSearchId()
      .then(res => {
        const searchId = res.data.searchId;
        dispatch({ type: "GET_SEARCH_ID_SUCCESS", data: searchId });
        getTickets(searchId)
          .then(res => {
            dispatch({ type: "GET_TICKETS_SUCCESS", data: res.data.tickets });
          })
          .catch(error => {
            dispatch({ type: "GET_TICKETS__FAILURE", error: error.message });
          });
      })
      .catch(error => {
        dispatch({ type: "GET_SEARCH_ID_FAILURE", error: error.message });
      });
  });

  return store;
}
