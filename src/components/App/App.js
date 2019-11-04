import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Content from "../Content";
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
      {isError && <div>Something went wrong ...</div>}
      {isLoading && !isError ? (
        "Loading..."
      ) : (
        <div className="container">
          <Header />
          <div className="App__wrapper">
            <Sidebar />
            <Content tickets={tickets} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
