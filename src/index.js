import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ClickCounter from "./ClickCounter";
import ControlPanel from "./ControlPanel";

ReactDOM.render(
    <ControlPanel />,
    document.getElementById('root')
);

registerServiceWorker();
