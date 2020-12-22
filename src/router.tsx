import React from "react";
import { Route, Switch } from "react-router-dom";
import ReviewScreenComponent from "./components/screens/review-screen/review-screen";
import AttachmentScreenComponent from "./components/screens/attachment-screen/attachment-screen";
import PharamaceuticalEstablishmentScreen from "./components/screens/pharamaceutical-establishment-screen/pharamaceutical-establishment";
import SuccessScreenComponent from "./components/screens/success-screen/success-screen";
import PaymentScreenComponent from "./components/screens/payment-screen/payment-screen";
import AddPartnerComponent from "./components/screens/pharamaceutical-establishment-screen/partner-details/add-partner/add-partner";
import RelocationLicenseScreen from "./components/screens/relocation-license-screen/relocation-license-screen";
import AddAreaExtention from "./components/screens/add-area-extention/add-area-extention";
import Speciality from "./components/screens/speciality/speciality";
import { changeNameOfPharmaceuticalEstablishmentRoutes } from "./components/screens/change-name-of-pharmaceutical-establishment";
import NewLicensePharmaceuticalEstablishmentRoutes from "./components/screens/routes";
import HomeScreenComponent from "./components/screens/Home/home-screen";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreenComponent} />
      <Route path="/attachment" component={AttachmentScreenComponent} />
      <Route path="/review" component={ReviewScreenComponent} />
      <Route path="/success" component={SuccessScreenComponent} />
      <Route path="/payment" component={PaymentScreenComponent} />
      <Route path="/add-partner" component={AddPartnerComponent} />
      <Route path="/sr3/home" component={RelocationLicenseScreen} />
      <Route path="/sr4/home" component={AddAreaExtention} />
      <Route path="/sr5/home" component={Speciality} />
      {[
        ...changeNameOfPharmaceuticalEstablishmentRoutes,
        ...NewLicensePharmaceuticalEstablishmentRoutes,
      ].map((routeDetails, index) => {
        // console.log("routeDetails >>", routeDetails);
        const { path, exact, Component } = routeDetails;
        return (
          <Route path={path} key={index} exact={exact} component={Component} />
        );
      })}
    </Switch>
  );
}

export default Routes;
