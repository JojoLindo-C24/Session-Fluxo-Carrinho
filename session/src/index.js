import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './infoC/home'

import './index.css'

// import DetalheProduto from '../src/infoC/detalheProduto'
// import Carrinho from '../src/infoC/carrinho'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact={true} component={Home} />
        {/* <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} /> */}
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);