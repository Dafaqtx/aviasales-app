import { createRequestTypes } from "../reduxHelpers";

import { getSearchId } from "../api";

export const fetchSearchId = () => {
  return dispatch => {
    dispatch({ type: "GET_SEARCH_ID_REQUEST" });
    getSearchId()
      .then(res => {
        const searchId = res.data.searchId;
        dispatch({ type: "GET_SEARCH_ID_SUCCESS", data: searchId });
      })
      .catch(error => {
        dispatch({ type: "GET_SEARCH_ID_FAILURE", error: error.message });
      });
  };
};

export const GET_SEARCH_ID = createRequestTypes("GET_SEARCH_ID");
// export const getSearchId = {
//   request: () => action(GET_SEARCH_ID[REQUEST]),
//   success: data => action(GET_SEARCH_ID[SUCCESS], { data }),
//   failure: error => action(GET_SEARCH_ID[FAILURE], { error })
// };
