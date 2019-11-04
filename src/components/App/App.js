import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Content from "../Content";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";

import Store from "../../redux/store";
import * as ActionTypes from "../../redux/actions";

import "./styles.scss";

function App() {
  const url = "https://front-test.beta.aviasales.ru";
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const store = Store();

  useEffect(() => {
    const getTickets = async () => {
      setIsError(false);
      setIsLoading(true);
      store.dispatch(ActionTypes.getTickets.request());

      try {
        const {
          data: { searchId }
        } = await axios(`${url}/search`);

        const {
          data: { stop, tickets }
        } = await axios(`${url}/tickets?searchId=${searchId}`);

        if (!stop) {
          setTickets(tickets);
          store.dispatch(ActionTypes.getTickets.success(tickets));
        }

        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        store.dispatch(ActionTypes.getTickets.failure(error));
      }
    };
    getTickets();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
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
      )}
    </div>
  );
}

export default App;
