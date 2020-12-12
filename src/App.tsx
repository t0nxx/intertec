import React from "react";
import "./App.scss";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

import NavBarComponent from "./components/organisms/nav-bar/nav-bar";
import PageHeaderComponent from "./components/organisms/page-header/page-header";
import FooterComponent from "./components/organisms/footer/footer";
import Routes from "./router";
import { RoutesWithoutFooter } from "./ignored-from-header-footer-routes";

library.add(fab, faCheckSquare, faCoffee, faVolumeUp);

function App({ location }) {
  // change site direcation automatically based on lang
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();
  document.documentElement.lang = i18n.language;
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
