import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducerAddBooks from "./reducers/reducerAddBooks";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  library: reducerAddBooks,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
