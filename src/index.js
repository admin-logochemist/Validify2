import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThirdwebWeb3Provider} from "@3rdweb/hooks"
import {BrowserRouter, HashRouter} from 'react-router-dom';
import CryptoContext from "./CryptoContext";
const supportedChainIds=[4]
const connectors={
  injected:{},
}
ReactDOM.render(
  <ThirdwebWeb3Provider
  supportedChainIds={supportedChainIds}
  connectors={connectors}
  >
  <HashRouter>
<CryptoContext>
      <App />
    </CryptoContext>
  </HashRouter>
  </ThirdwebWeb3Provider>,
  document.getElementById('root')
);