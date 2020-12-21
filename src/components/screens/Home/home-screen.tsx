import React, { useEffect } from "react";
import { Container, Form, Image, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./home-screen.scss";

import {
  hideBackButtonAction,
  hideFooterAction,
  hideInfoAction,
  setBreadCrumbTitleAction,
  showBackButtonAction,
} from "../../../redux/actions/layout/layout";

export default function HomeScreenComponent() {
  const history = useHistory();
  const dispatch = useDispatch();

  /// going to routes
  const GoToNewLicensePharmaceuticalEstablishment = () => {
    history.push("/new-license-pharmaceutical-establishment");
  };
  const GoToNewLicensePharmaceuticalEstablishmentPayment = () => {
    history.push("/new-license-pharmaceutical-establishment/payment");
  };
  const GoToNewRelocationsePharmaceutical = () => {
    history.push("/relocation-license-pharmaceutical");
  };
  useEffect(() => {
    // hide footer from this page
    dispatch(setBreadCrumbTitleAction("Home"));
    dispatch(hideFooterAction());
  }, []);
  return (
    <Container fluid>
      <Row className="justify-content-center mt-5">
        <Button
          variant="success"
          onClick={GoToNewLicensePharmaceuticalEstablishment}
        >
          NewLicensePharmaceuticalEstablishment
        </Button>
      </Row>
      <Row className="justify-content-center mt-5">
        <Button
          variant="success"
          onClick={GoToNewLicensePharmaceuticalEstablishmentPayment}
        >
          NewLicensePharmaceuticalEstablishment Payment
        </Button>
      </Row>
      <Row className="justify-content-center mt-5">
        <Button variant="success" onClick={GoToNewRelocationsePharmaceutical}>
          relocation license-pharmaceutical
        </Button>
      </Row>
    </Container>
  );
}
