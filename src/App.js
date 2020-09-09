import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import PancakeBuild from "./components/PancakeBuild/PancakeBuild";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <PancakeBuild />
        </Layout>
      </div>
    );
  }
}
export default App;
