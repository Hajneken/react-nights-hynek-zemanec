import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles'
import { Provider } from 'react-redux';

import { ProductList } from './pages/ProductList';
import ProductDetail from "./pages/ProductDetail";
import {Cart} from "./components/cart";
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <GlobalStyles />
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/:productId" component={ProductDetail} />
            <Route path='/cart' component={Cart}></Route>
          </Switch>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;

