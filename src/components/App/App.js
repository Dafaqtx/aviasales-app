import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Content from "../Content";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { fetchTickets } from "../../redux/actions/ticketsActions";

import "./styles.scss";

const App = ({
  ticketsAreLoaded,
  ticketsError,
  sortedTicketByPrice,
  sortedTicketsByFast,

  dispatch
}) => {
  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  const [activeFilter, setActiveFilter] = useState("price");

  const handleFilterChange = filterName => setActiveFilter(filterName);

  return (
    <div className="App">
      {ticketsAreLoaded ? (
        <div className="container">
          <Header />
          {!ticketsError ? (
            <div className="App__wrapper">
              <Sidebar />
              <Content
                onChangeFilter={handleFilterChange}
                tickets={
                  activeFilter === "price"
                    ? sortedTicketByPrice
                    : sortedTicketsByFast
                }
                filter={activeFilter}
              />
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

export default connect(state => {
  const tickets = state.ticketsReducer.tickets;
  const sortedTicketByPrice = [
    ...tickets.sort((a, b) => (a.price > b.price ? 1 : -1))
  ];
  const sortedTicketsByFast = [
    ...tickets.sort((a, b) => {
      const durationA = a.segments
        .map(s => s.duration)
        .reduce((a, b) => a + b, 0);
      const durationB = b.segments
        .map(s => s.duration)
        .reduce((a, b) => a + b, 0);

      return durationA > durationB ? 1 : -1;
    })
  ];

  return {
    tickets,
    ticketsAreLoaded: state.ticketsReducer.ticketsAreLoaded,
    ticketsError: state.ticketsReducer.ticketsError,
    sortedTicketByPrice,
    sortedTicketsByFast,
    activeFilter: state.filterReducer.filter
  };
}, null)(App);
