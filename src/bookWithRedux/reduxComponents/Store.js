import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducer.js';

const initValues = {
    'searchCount': 1,
    'searchName': 'react',
    'books': [],
    'book': null
};

const store = createStore(reducer, initValues, applyMiddleware(thunk));

export default store;