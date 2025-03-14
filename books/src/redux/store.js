import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import reducerAddBooks from "./reducers/reducerAddBooks";
import { thunk } from "redux-thunk";
import reducerFetchedBooks from "./reducers/reducerFecthBooks";

const rootReducer = combineReducers({
  library: reducerAddBooks,
  search: reducerFetchedBooks,
});

// applyMiddleware(thunk);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
