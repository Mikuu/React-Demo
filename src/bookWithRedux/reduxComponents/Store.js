import {createStore} from 'redux';
import reducer from './Reducer.js';

const initValues = {
    'searchCount': 1,
    'searchName': 'react',
    'books': []
};

const store = createStore(reducer, initValues);

export default store;