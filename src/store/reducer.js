const initialState = {
  tickets: [],
  selectedFilters: [],
  isLoading: true,
  isError: false
};

const tickets = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TICKETS_REQUEST":
      return [
        ...state,
        {
          isLoading: true,
          isError: false
        }
      ];
    case "FETCH_TICKETS_SUCCESS":
      return [
        ...state,
        {
          tickets: action.tickets,
          isLoading: false
        }
      ];
    case "FETCH_TICKETS_ERROR":
      return [
        ...state,
        {
          isError: true,
          isLoading: false
        }
      ];
    default:
      return state;
  }
};

export default tickets;
