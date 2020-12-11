import React from "react";
import "./App.scss";
import { BrowserRouter, withRouter } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

import NavBarComponent from "./components/nav-bar/nav-bar";
import PageHeaderComponent from "./components/page-header/page-header";
import FooterComponent from "./components/footer/footer";
import Routes from "./router";
import { RoutesWithoutFooter } from "./ignored-from-header-footer-routes";

library.add(fab, faCheckSquare, faCoffee, faVolumeUp);

function App({ location }) {
  /// i will set a structure for router later , just put this now for continue
  return (
    <div className="App">
      <NavBarComponent />
      <PageHeaderComponent />
      {/* here to remove footer from some screens dynamically */}
      {!RoutesWithoutFooter.includes(location.pathname) && <FooterComponent />}
      <Routes />
    </div>
  );
}

export default withRouter(App);
