// import React, { Component } from "react";
// import { connect } from "react-redux";
// import Aux from "../../hoc/Aux";
// import classes from "./Layout.module.css";
// import Toolbar from "../Navigation/Toolbar/Toolbar";
// import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
// const Layout = props => {
//   state = {
//     showSideDrawer: false,
//   };

//   sideDrawerClosedHandler = () => {
//     this.setState({ showSideDrawer: false });
//   };

//   sideDrawerToggleHandler = () => {
//     this.setState((prevState) => {
//       return { showSideDrawer: !prevState.showSideDrawer };
//     });
//   };

//   render() {
//     return (
//       <Aux>
//         <Toolbar
//           isAuth={this.props.isAuthenticated}
//           drawerToggleClicked={this.sideDrawerToggleHandler}
//         />
//         <SideDrawer
//           isAuth={this.props.isAuthenticated}
//           open={this.state.showSideDrawer}
//           closed={this.sideDrawerClosedHandler}
//         />
//         <main className={classes.Content}>{this.props.children}</main>
//       </Aux>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     isAuthenticated: state.auth.token !== null,
//   };
// };

// export default connect(mapStateToProps)(Layout);
import React, { useState } from "react";
import { connect } from "react-redux";

import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  return (
    <Aux>
      <Toolbar
        isAuth={props.isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler}
      />
      <SideDrawer
        isAuth={props.isAuthenticated}
        open={sideDrawerIsVisible}
        closed={sideDrawerClosedHandler}
      />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
