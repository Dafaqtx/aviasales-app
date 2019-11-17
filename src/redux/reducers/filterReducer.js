import { REQUEST, FAILURE, SUCCESS } from "../reduxHelpers";
import * as ActionTypes from "../actions/filterActions";

export const initialState = {
  filter: "price",
  filterIsLoaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FILTER_BY_PRICE[REQUEST]:
      return { ...state, filterIsLoaded: false };
    case ActionTypes.FILTER_BY_PRICE[SUCCESS]:
      return {
        ...state,
        filter: "price",
        filterIsLoaded: true
      };
    case ActionTypes.FILTER_BY_PRICE[FAILURE]:
      return {
        ...state,
        filterIsLoaded: false
      };

    case ActionTypes.FILTER_BY_FAST[REQUEST]:
      return { ...state, filterIsLoaded: false };
    case ActionTypes.FILTER_BY_FAST[SUCCESS]:
      return {
        ...state,
        filter: "fast",
        filterIsLoaded: true
      };
    case ActionTypes.FILTER_BY_FAST[FAILURE]:
      return {
        ...state,
        filterIsLoaded: false
      };

    default:
      return state;
  }
};

export default reducer;
