import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './Navbar';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
  document.getElementById('navbar')
);