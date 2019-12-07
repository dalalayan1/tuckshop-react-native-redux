import { createStore, applyMiddleware, compose } from "redux";
import appReducer from "../reducers";

// const finalCreateStore = compose(
//   applyMiddleware(thunk,createLogger)
// )(createStore);
export default function configureStore(initialState = {}) {
  const store = createStore(appReducer, initialState);

  if (module.hot) {
    module.hot.accept("../reducers", () =>
      store.replaceReducer(require("../reducers"))
    );
  }

  return store;
}
