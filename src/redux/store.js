import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createEpicMiddleware } from "redux-observable";

// root reducer
import rootReducer from "./reducers";

// root epic
import rootEpic from "./epics";

const epicMiddleware = createEpicMiddleware();

const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;
