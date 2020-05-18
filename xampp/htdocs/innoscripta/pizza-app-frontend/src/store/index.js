import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
import rootReducers from "./reducers";

const configureStore = (initialStore = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [logger, sagaMiddleware];
  const store = createStore(
    rootReducers,
    initialStore,
    applyMiddleware(...middlewares)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export {
    configureStore
};