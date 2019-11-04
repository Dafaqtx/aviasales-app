import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Content from "../Content";
import Spinner from "../Spinner";

import "./styles.scss";

function App() {
  const url = "https://front-test.beta.aviasales.ru";
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getTickets = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const searchIdResult = await axios(`${url}/search`);
        const searchId = searchIdResult.data.searchId;
        const result = await axios(`${url}/tickets?searchId=${searchId}`);
        if (!result.data.stop) {
          setTickets(result.data.tickets);
        }
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
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
            <div>Something went wrong ...</div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
