import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PancakeBuild from "./components/PancakeBuild/PancakeBuild";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import orderReducer from "./store/reducers/order";
import pancakeBuildReducer from "./store/reducers/pancakeBuild.js";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  pancakeBuild: pancakeBuildReducer,
  order: orderReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Route path="/" exact component={PancakeBuild} />
            <Route path="/orders" component={Orders} />
            <Route path="/checkout" component={Checkout} />
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
