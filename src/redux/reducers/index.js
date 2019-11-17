import { combineReducers } from "redux";

import ticketsReducer from "./ticketsReducer";
import filterReducer from "./filterReducer";

export default combineReducers({ ticketsReducer, filterReducer });
