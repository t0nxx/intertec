import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

import NavBarComponent from "./components/nav-bar/nav-bar";
import PageHeaderComponent from "./components/page-header/page-header";
import FooterComponent from "./components/footer/footer";
import Routes from "./router";

library.add(fab, faCheckSquare, faCoffee, faVolumeUp);

function App() {
  /// i will set a structure for router later , just put this now for continue
  return (
    <BrowserRouter>
      <div className="App">
        <NavBarComponent />
        <PageHeaderComponent />
        <Routes />

        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
