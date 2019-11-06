import React, { useEffect } from "react";
import { connect } from "react-redux";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Content from "../Content";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { fetchTickets } from "../../redux/actions/ticketsActions";

import "./styles.scss";

const App = ({
  tickets,
  ticketsAreLoaded,
  ticketsError,
  sortedTicketByPrice,
  dispatch
}) => {
  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  return (
    <div className="App">
      {ticketsAreLoaded ? (
        <div className="container">
          <Header />
          {!ticketsError ? (
            <div className="App__wrapper">
              <Sidebar />
              <Content tickets={sortedTicketByPrice} />
            </div>
          ) : (
            <ErrorMessage />
          )}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default connect(
  state => ({
    tickets: state.ticketsReducer.tickets,
    ticketsAreLoaded: state.ticketsReducer.ticketsAreLoaded,
    ticketsError: state.ticketsReducer.ticketsError,
    sortedTicketByPrice: state.ticketsReducer.tickets.sort((a, b) =>
      a.price > b.price ? 1 : -1
    )
  }),
  null
)(App);
