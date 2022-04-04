import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render (
  <React.StrictMode>
    <h1>Employee list</h1>
  </React.StrictMode>,
  document.getElementById('root_header')
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
