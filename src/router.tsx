import React from "react";
import { Route, Switch } from "react-router-dom";
import ReviewScreenComponent from "./components/screens/review-screen/review-screen";
import AttachmentScreenComponent from "./components/screens/attachment-screen/attachment-screen";
import PharamaceuticalEstablishmentScreen from "./components/screens/pharamaceutical-establishment/pharamaceutical-establishment";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={PharamaceuticalEstablishmentScreen} />
      <Route path="/attachment" component={AttachmentScreenComponent} />
      <Route path="/review" component={ReviewScreenComponent} />
    </Switch>
  );
}

export default Routes;
