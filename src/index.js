import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import EditorPanel from "./practice/EditorPanel";

ReactDOM.render(
    <EditorPanel/>,
    document.getElementById('root')
);

registerServiceWorker();
