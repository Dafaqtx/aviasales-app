import { REQUEST, FAILURE, SUCCESS } from "../reduxHelpers";
import * as ActionTypes from "../actions/searchIdActions";

export const initialState = {
  searchId: "",
  searchIdIsLoaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
