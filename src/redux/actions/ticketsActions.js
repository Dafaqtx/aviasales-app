import { createRequestTypes } from "../reduxHelpers";

import { getTickets } from "../api";

export const fetchTickets = searchId => {
  return dispatch => {
    dispatch({ type: "GET_TICKETS_REQUEST" });
    getTickets(searchId)
      .then(res => {
        dispatch({ type: "GET_TICKETS_SUCCESS", data: searchId });
      })
      .catch(error => {
        dispatch({ type: "GET_TICKETS_FAILURE", error: error.message });
      });
  };
};

export const GET_TICKETS = createRequestTypes("GET_TICKETS");
// export const getTickets = {
//   request: () => action(GET_TICKETS[REQUEST]),
//   success: data => action(GET_TICKETS[SUCCESS], { data }),
//   failure: error => action(GET_TICKETS[FAILURE], { error })
// };
