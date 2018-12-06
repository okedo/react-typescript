import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { pageReducer } from "./../reducers/base-page.reducer";

const rootReducer = combineReducers({
  pageReducer
});

export const store = createStore(rootReducer, applyMiddleware(logger));
