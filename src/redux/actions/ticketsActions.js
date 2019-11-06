import { createRequestTypes } from "../reduxHelpers";

import { getSearchId, getTickets } from "../api";

export const fetchTickets = () => {
  return dispatch => {
    dispatch({ type: "GET_SEARCH_ID_REQUEST" });
    getSearchId()
      .then(res => {
        const searchId = res.data.searchId;

        dispatch({ type: "GET_SEARCH_ID_SUCCESS", data: searchId });
        dispatch({ type: "GET_TICKETS_REQUEST" });
        getTickets(searchId)
          .then(respons => {
            const tickets = respons.data.tickets;

            dispatch({ type: "GET_TICKETS_SUCCESS", data: tickets });
          })
          .catch(error => {
            dispatch({ type: "GET_TICKETS_FAILURE", error: error.message });
          });
      })
      .catch(error => {
        dispatch({ type: "GET_SEARCH_ID_FAILURE", error: error.message });
      });
  };
};

export const GET_SEARCH_ID = createRequestTypes("GET_SEARCH_ID");
export const GET_TICKETS = createRequestTypes("GET_TICKETS");
