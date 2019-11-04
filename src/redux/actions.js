import {
  action,
  createRequestTypes,
  FAILURE,
  REQUEST,
  SUCCESS
} from "./reduxHelpers";

export const GET_TICKETS = createRequestTypes("GET_TICKETS");
export const getTickets = {
  request: () => action(GET_TICKETS[REQUEST]),
  success: data => action(GET_TICKETS[SUCCESS], { data }),
  failure: error => action(GET_TICKETS[FAILURE], { error })
};
