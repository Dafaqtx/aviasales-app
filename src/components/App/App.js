import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Content from "../Content";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { fetchSearchId } from "../../redux/actions/searchIdActions";
import { fetchTickets } from "../../redux/actions/ticketsActions";

import "./styles.scss";

const App = ({ searchId, dispatch }) => {
  // const url = "https://front-test.beta.aviasales.ru";
  // const [tickets, setTickets] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   const getTickets = async () => {
  //     setIsError(false);
  //     setIsLoading(true);

  //     try {
  //       const {
  //         data: { searchId }
  //       } = await axios(`${url}/search`);

  //       const {
  //         data: { stop, tickets }
  //       } = await axios(`${url}/tickets?searchId=${searchId}`);

  //       if (!stop) {
  //         setTickets(tickets);
  //       }

  //       setIsLoading(false);
  //     } catch (error) {
  //       setIsError(true);
  //       setIsLoading(false);
  //     }
  //   };
  //   getTickets();
  // }, []);
  useEffect(() => {
    dispatch(fetchSearchId());
    dispatch(fetchTickets(searchId));
  }, []);

  useEffect(() => {
    dispatch(fetchTickets(searchId));
  }, []);

  return (
    <div className="App">
      {/* {isLoading ? (
        <Spinner />
      ) : (
        <div className="container">
          <Header />
          {!isError ? (
            <div className="App__wrapper">
              <Sidebar />
              <Content tickets={tickets} />
            </div>
          ) : (
            <ErrorMessage />
          )}
        </div>
      )} */}
    </div>
  );
};

export default connect(
  state => ({
    searchId: state.searchIdReducer.searchId,
    searchIdIsLoaded: state.searchIdIsLoaded,
    tickets: state.tickets,
    ticketsAreLoaded: state.ticketsAreLoaded
  }),
  null
)(App);
