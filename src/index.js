import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import EditorPanel from "./practice/EditorPanel";
// import BookList from './book/list/index.js';
import Routes from './book/Routes.js';

ReactDOM.render(
    <Routes/>,
    document.getElementById('root')
);

registerServiceWorker();
