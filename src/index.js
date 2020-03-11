import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contratante from './containers/Contratante/contratante';
import Sobre from './containers/Sobre/Sobre';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/lista" component={App} />
            <Route path="/clientes" component={Contratante} />
            <Route path="/sobre" component={Sobre} />
            {/* <Route component={NotFound} /> */} */}
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
