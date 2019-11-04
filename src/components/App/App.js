import React from 'react';
import Header from '../Header'
import Sidebar from '../Sidebar'
import Content from '../Content'
import './styles.scss'

function App() {
  return (
    <div className="App">
        <Header />
        <Sidebar />
        <Content />
    </div>
  );
}

export default App;
