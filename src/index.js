import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
// import Routes from './book/Routes.js';
// import Routes from './bookWithRedux/Routes.js';
import App from './bookWithBootstrap/App';
import {Provider} from 'react-redux';
import store from './bookWithBootstrap/reduxComponents/Store';
import {BrowserRouter} from 'react-router-dom';
import CrumbRoute from './bookWithBootstrap/breadcrumbs/crumb-route';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <CrumbRoute title="Home" path="/" component={App}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();