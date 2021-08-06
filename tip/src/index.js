import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BillProvider} from './App'
ReactDOM.render(
  <React.StrictMode>
    <BillProvider>
      <App />
    </BillProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
