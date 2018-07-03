import {createStore} from 'redux';
import reducer from './Reducer.js';

const initValues = {
    'searchCount': 1,
    'searchName': 'react',
    'books': [],
    'book': null
};

const store = createStore(reducer, initValues);

export default store;