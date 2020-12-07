import React from "react";
import { Route, Switch } from "react-router-dom";
import AttachmentComponent from "./components/attachment/attachment";
import PharamaceuticalEstablishmentScreen from "./components/screens/pharamaceutical-establishment/pharamaceutical-establishment";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={PharamaceuticalEstablishmentScreen} />
      <Route exact path="/attachment" component={AttachmentComponent} />
      {/* <Route exact path="/home" component={Homepage} /> */}
    </Switch>
  );
}

export default Routes;
