import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { Breadcrumbs } from 'react-breadcrumbs';
import BooksPagination from './pagination/pagination';
import { TopBar, Books } from './listing/index.js';
import BookDetailComponent from './detail/index.js';
import CrumbRoute from './breadcrumbs/crumb-route';

const App = () => (
    <div>
        <TopBar/>
        <Breadcrumbs className="demo__crumbs" />
        <Switch>
            <CrumbRoute title="books" path="/books" component={Books}/>
            <CrumbRoute title="detail" path="/detail/:bookId" component={BookDetailComponent} />
        </Switch>
        <BooksPagination/>
    </div>
);

export default App;