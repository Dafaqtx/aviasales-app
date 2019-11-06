import { REQUEST, FAILURE, SUCCESS } from "../reduxHelpers";
import * as ActionTypes from "../actions/ticketsActions";

export const initialState = {
  searchId: "",
  searchIdIsLoaded: false,
  errorSearchId: false,

  tickets: [],
  ticketsAreLoaded: false,
  ticketsError: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_SEARCH_ID[REQUEST]:
      return { ...state, searchIdIsLoaded: false, errorSearchId: false };
    case ActionTypes.GET_SEARCH_ID[SUCCESS]:
      return {
        ...state,
        errorSearchId: false,
        searchId: action.data,
        searchIdIsLoaded: true
      };
    case ActionTypes.GET_SEARCH_ID[FAILURE]:
      return {
        ...state,
        error: action.error,
        searchIdIsLoaded: false,
        errorSearchId: true
      };

    case ActionTypes.GET_TICKETS[REQUEST]:
      return { ...state, ticketsAreLoaded: false, ticketsError: false };
    case ActionTypes.GET_TICKETS[SUCCESS]:
      return {
        ...state,
        tickets: action.data,
        ticketsAreLoaded: true,
        ticketsError: false
      };
    case ActionTypes.GET_TICKETS[FAILURE]:
      return {
        ...state,
        error: action.error,
        ticketsAreLoaded: false,
        ticketsError: true
      };

    default:
      return state;
  }
};

export default reducer;
