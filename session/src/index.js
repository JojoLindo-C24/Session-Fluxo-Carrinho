import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import './index.css'

import App from '../src/infoC/home'
// import DetalheProduto from '../src/infoC/detalheProduto'
// import Carrinho from '../src/infoC/carrinho'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        {/* <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} /> */}
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);