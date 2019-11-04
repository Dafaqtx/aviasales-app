import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header'
import Sidebar from '../Sidebar'
import Content from '../Content'
import './styles.scss'

function App() {
  const searchIdUrl = 'https://front-test.beta.aviasales.ru/search';
  const [searchId, setSearchId] = useState([])

  useEffect(() => {
    const getSearchId = async () => {
      const result = await axios(searchIdUrl);
      setSearchId(result.data.searchId);
    };
    getSearchId();
  }, []);

  return (
    <div className="App">
        <Header />
        <Sidebar />
        <Content />
    </div>
  );
}

export default App;
