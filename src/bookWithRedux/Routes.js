import React from 'react';
import {Provider} from 'react-redux';
import store from './reduxComponents/Store';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import BookList from './list/index.js';
import BookDetailComponent from './detail/index.js';

const _Routes = () => (
  <Router>
      <div>
          <Route exact path="/" component={BookList}/>
          <Route path="/list" component={BookList} />
          <Route path="/detail/:bookId" component={BookDetailComponent} />
      </div>
  </Router>
);

const Routes = () => (
    <Provider store={store}>
        <_Routes/>
    </Provider>
)

export default Routes;