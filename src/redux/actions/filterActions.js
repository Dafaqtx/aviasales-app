import { createRequestTypes } from "../reduxHelpers";

export const filtering = filter => {
  return dispatch => {
    filter === "price"
      ? dispatch({ type: "FILTER_BY_PRICE_SUCCESS" })
      : dispatch({ type: "FILTER_BY_FAST_SUCCESS" });
  };
};

export const FILTER_BY_PRICE = createRequestTypes("FILTER_BY_PRICE");
export const FILTER_BY_FAST = createRequestTypes("FILTER_BY_FAST");
