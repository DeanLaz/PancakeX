import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PancakeBuild from "./components/PancakeBuild/PancakeBuild";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Route path="/" exact component={PancakeBuild} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
