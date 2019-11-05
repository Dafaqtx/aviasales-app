import {
  action,
  createRequestTypes,
  FAILURE,
  REQUEST,
  SUCCESS
} from "./reduxHelpers";

export const GET_SEARCH_ID = createRequestTypes("GET_SEARCH_ID");
export const getSearchId = {
  request: () => action(GET_SEARCH_ID[REQUEST]),
  success: data => action(GET_SEARCH_ID[SUCCESS], { data }),
  failure: error => action(GET_SEARCH_ID[FAILURE], { error })
};

export const GET_TICKETS = createRequestTypes("GET_TICKETS");
export const getTickets = {
  request: () => action(GET_TICKETS[REQUEST]),
  success: data => action(GET_TICKETS[SUCCESS], { data }),
  failure: error => action(GET_TICKETS[FAILURE], { error })
};
