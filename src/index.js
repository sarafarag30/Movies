import React from 'react';
import App from './components/App/App.jsx';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render
(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  ,
  document.getElementById('root')
)