import { combineReducers } from "redux";
import updateNewsList from "./news-reducer";
import authReducer from "./auth-reducer";

const rootReducer = combineReducers({
  news: updateNewsList,
  auth: authReducer
});

export default rootReducer;
