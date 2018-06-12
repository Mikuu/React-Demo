import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import EditorPanel from "./practice/EditorPanel";
import BookList from './book/list/index.js';

ReactDOM.render(
    <BookList/>,
    document.getElementById('root')
);

registerServiceWorker();
