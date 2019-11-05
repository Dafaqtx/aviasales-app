import {
  action,
  createRequestTypes,
  REQUEST,
  FAILURE,
  SUCCESS
} from "../reduxHelpers";

export const GET_SEARCH_ID = createRequestTypes("GET_SEARCH_ID");
export const getSearchId = {
  request: () => action(GET_SEARCH_ID[REQUEST]),
  success: data => action(GET_SEARCH_ID[SUCCESS], { data }),
  failure: error => action(GET_SEARCH_ID[FAILURE], { error })
};
