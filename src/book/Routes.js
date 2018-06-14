import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import BookList from './list/index.js';
import BookDetail from './detail/index.js';

const Routes = () => (
  <Router>
      <div>
          <Route exact path="/" component={BookList}/>
          <Route path="/list" component={BookList} />
          <Route path="/detail/:bookId" component={BookDetail} />
      </div>
  </Router>
);

export default Routes;
