import React from "react";
import { Route, Switch, useLocation, BrowserRouter as Router } from "react-router-dom";
import ReviewScreenComponent from "./components/screens/review-screen/review-screen";
import AttachmentScreenComponent from "./components/screens/attachment-screen/attachment-screen";
import PharamaceuticalEstablishmentScreen from "./components/screens/pharamaceutical-establishment/pharamaceutical-establishment";
import SuccessScreenComponent from "./components/screens/success-screen/success-screen";
import PaymentScreenComponent from "./components/screens/payment-screen/payment-screen";
import AddPartnerComponent from "./components/screens/pharamaceutical-establishment/partner-details/add-partner/add-partner";
import RelocationLicenseScreen from "./components/screens/relocation-license-screen/relocation-license-screen";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={PharamaceuticalEstablishmentScreen} />
      <Route path="/attachment" component={AttachmentScreenComponent} />
      <Route path="/review" component={ReviewScreenComponent} />
      <Route path="/success" component={SuccessScreenComponent} />
      <Route path="/payment" component={PaymentScreenComponent} />
      <Route path="/add-partner" component={AddPartnerComponent} />
      <Route path="/sr2/home" component={RelocationLicenseScreen} />
    </Switch>
  );
}

export default Routes;
