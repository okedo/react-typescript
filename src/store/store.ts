import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { pageReducer } from "./../reducers/base-page.reducer";
import { chordListReducer } from "./../reducers/chord-list.reducer";

const rootReducer = combineReducers({
  pageReducer,
  chordListReducer
});

export const store = createStore(rootReducer, applyMiddleware(logger));
