import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';

axios.defaults.baseURL = 'https://majemu-cooperative.herokuapp.com/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  request => {
    request.headers.Authorization = localStorage.getItem('token');
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
