import React from 'react';
import { Route, Link } from "react-router-dom";

import { TopBar, Books } from './listing/index.js';
import BookDetailComponent from './detail/index.js';

const App = () => (
    <div>
        <TopBar/>
        <Route path="/books" component={Books} />
        <Route path="/detail/:bookId" component={BookDetailComponent} />
    </div>
);

export default App;