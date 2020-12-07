import React from "react";
import { Route, Switch } from "react-router-dom";
import AttachmentComponent from "./components/attachment/attachment";
import ReviewComponent from "./components/review/review";
import PharamaceuticalEstablishmentScreen from "./components/screens/pharamaceutical-establishment/pharamaceutical-establishment";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={PharamaceuticalEstablishmentScreen} />
      <Route path="/attachment" component={AttachmentComponent} />
      <Route path="/review" component={ReviewComponent} />
    </Switch>
  );
}

export default Routes;
