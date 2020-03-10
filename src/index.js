import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sobre from './Sobre';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/lista" component={App} />
            <Route path="/sobre" component={Sobre} />
            {/* <Route path="/sobre" component={Autores} />
            <Route component={NotFound} /> */}
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
