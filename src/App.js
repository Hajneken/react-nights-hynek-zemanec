import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';

import { ProductList } from './pages/ProductList';
// import { ProductDetail } from './pages/ProductDetail'

class App extends Component {
  render() {
    return (
      <Switch >
        <Route path="/" exact component={ProductList} />
        {/* <Route path="/:productId" component="{ProductDetail}" /> */}
        {/* <Route path="/homepage" component={Homepage}></Route> */}
        <Route path="/about" render={()=> {
          return(
            <h1>Testing about page</h1>
          )
        }}></Route>
      </Switch>
    );
  }
}

export default App;

