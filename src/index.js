import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ClickCounter from "./ClickCounter";

ReactDOM.render(
    <ClickCounter />,
    document.getElementById('root')
);

registerServiceWorker();
