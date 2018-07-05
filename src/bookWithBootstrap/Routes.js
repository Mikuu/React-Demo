import React from 'react';
import {Provider} from 'react-redux';
import store from './reduxComponents/Store';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { TopBar, Books } from './listing/index.js';
import BookDetailComponent from './detail/index.js';

const _Routes = () => (
  <Router>
      <div>
          <Route path="/" component={TopBar}/>
          <Route path="/books" component={Books} />
          <Route path="/detail/:bookId" component={BookDetailComponent} />
      </div>
  </Router>
);

const Routes = () => (
    <Provider store={store}>
        <_Routes/>
    </Provider>
);

export default Routes;