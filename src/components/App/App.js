import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header'
import Sidebar from '../Sidebar'
import Content from '../Content'
import './styles.scss'

function App() {
  const url = 'https://front-test.beta.aviasales.ru';
  const [searchId, setSearchId] = useState([])
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    const getSearchId = async () => {
      const result = await axios(`${url}/search`);
      setSearchId(result.data.searchId);
    };
    getSearchId();
  }, []);


  useEffect(() => {
    const getTickets = async () => {
      const result = await axios(
        `${url}/tickets?searchId=${searchId}`,
      );
      setTickets(result.data.tickets);
    };
    getTickets();
  }, [searchId]);

  return (
    <div className="App">
        <Header />
        <Sidebar />
        <Content />
    </div>
  );
}

export default App;
