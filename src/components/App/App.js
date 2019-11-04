import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header'
import Sidebar from '../Sidebar'
import Content from '../Content'
import './styles.scss'

function App() {
  const url = 'https://front-test.beta.aviasales.ru';
  const [searchId, setSearchId] = useState('')
  const [tickets, setTickets] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getSearchId = async () => {
      const result = await axios(`${url}/search`);
      setSearchId(result.data.searchId);
    };
    getSearchId();
  }, []);



  useEffect(() => {
    const getTickets = async () => {
      setIsLoading(true);
      const result = await axios(
        `${url}/tickets?searchId=${searchId}`,
      );
      setTickets(result.data.tickets);
      setIsLoading(false);
    };
    getTickets();
  }, [searchId]);

  return (
    <div className="App">
        {isLoading ? 'Loading...' : (
          <>
            <Header />
            <Sidebar />
            <Content />
          </>
        )}
    </div>
  );
}

export default App;
