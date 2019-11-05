import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

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

  return store;
}
