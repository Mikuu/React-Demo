import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducer.js';

const initValues = {
    searchCount: 1,
    searchName: 'react',
    pageBookSize: 10,
    pageBookBegin: 0,
    pageBookEnd: 10,
    books: [],
    book: null,
    shoppingCart: {
        totalCount:0,
        totalPrice:0,
        modal: false,
        books: []
    }
};

const store = createStore(reducer, initValues, applyMiddleware(thunk));

export default store;