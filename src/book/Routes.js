import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import BookList from './list/index.js';
import BookDetailComponent from './detail/index.js';

const Routes = () => (
  <Router>
      <div>
          <Route exact path="/" component={BookList}/>
          <Route path="/list" component={BookList} />
          <Route path="/detail/:bookId" component={BookDetailComponent} />
      </div>
  </Router>
);

export default Routes;
