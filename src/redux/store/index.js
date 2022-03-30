import { createStore, applyMiddleware, combineReducers } from "redux";
import { storeReducer } from "redux/reducers/storeReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  storeReducer: storeReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
