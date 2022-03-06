import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import CryptoContext from "./CryptoContext";
ReactDOM.render(
  <BrowserRouter>
<CryptoContext>
      <App />
    </CryptoContext>
  </BrowserRouter>,
  document.getElementById('root')
);
