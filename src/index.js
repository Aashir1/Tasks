import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Greeting from './App';
import registerServiceWorker from './registerServiceWorker';
import SignUp from './signUp';
import Routes from './Router';



ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
