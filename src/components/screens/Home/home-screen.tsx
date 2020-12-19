import React, { useEffect } from "react";
import { Container, Form, Image, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./home-screen.scss";

import {
  hideBackButtonAction,
  hideFooterAction,
  hideInfoAction,
  setBreadCrumbTitleAction,
  showBackButtonAction,
} from "../../../redux/actionTypes/layout/layout";

export default function HomeScreenComponent() {
  const history = useHistory();
  const dispatch = useDispatch();

  /// going to routes
  const GoToNewLicensePharmaceuticalEstablishment = () => {
    history.push("/new-license-pharmaceutical-establishment");
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
    </Container>
  );
}
