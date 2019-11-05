import { combineReducers } from "redux";

import searchIdReducer from "./searchIdReducer";
import ticketsReducer from "./ticketsReducer";

export default combineReducers({ searchIdReducer, ticketsReducer });
