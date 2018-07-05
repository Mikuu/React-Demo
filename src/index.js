import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './book/Routes.js';
// import Routes from './bookWithRedux/Routes.js';
// import Routes from './bookWithBootstrap/Routes.js';

ReactDOM.render(
    <Routes/>,
    document.getElementById('root')
);

registerServiceWorker();