import { createStore, combineReducers } from "redux";
import phoneReducer from "./phone/reducerPhone";
import tvReducer from "./tv/reducerTv";
import { commentsReducer } from "./comments/reducerComments";

const rootReducer = combineReducers({
  phone: phoneReducer,
  television: tvReducer,
  comments: commentsReducer,
});

const store = createStore(rootReducer);

export default store;
