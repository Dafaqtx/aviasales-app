import { REQUEST, FAILURE, SUCCESS } from "../reduxHelpers";
import * as ActionTypes from "../actions/ticketsActions";

export const initialState = {
  tickets: [],
  ticketsAreLoaded: false
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

    default:
      return state;
  }
};

export default reducer;
