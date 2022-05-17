import { combineReducers } from "redux";
import { setProductReducers } from "./productReducers";
const reducers = combineReducers({
  allReducers: setProductReducers,
});

export default reducers;
