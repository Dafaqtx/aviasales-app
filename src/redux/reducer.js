import { REQUEST, FAILURE, SUCCESS } from "./reduxHelpers";
import * as ActionTypes from "./actions";

export const initialState = {
  tickets: [],
  ticketsAreLoaded: false,
  searchId: "",
  searchIdIsLoaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TICKETS[REQUEST]:
      return { ...state, ticketsAreLoaded: false };
    case ActionTypes.GET_TICKETS[SUCCESS]:
      return {
        ...state,
        searchId: action.data,
        ticketsAreLoaded: true
      };
    case ActionTypes.GET_TICKETS[FAILURE]:
      return { ...state, error: action.error, ticketsAreLoaded: false };

    case ActionTypes.GET_SEARCH_ID[REQUEST]:
      return { ...state, searchIdIsLoaded: false };
    case ActionTypes.GET_SEARCH_ID[SUCCESS]:
      return {
        ...state,
        searchId: action.data,
        searchIdIsLoaded: true
      };
    case ActionTypes.GET_SEARCH_ID[FAILURE]:
      return { ...state, error: action.error, searchIdIsLoaded: false };

    default:
      return state;
  }
};

export default reducer;
