import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './book/Routes.js';

ReactDOM.render(
    <Routes/>,
    document.getElementById('root')
);

registerServiceWorker();