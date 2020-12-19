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
import { fetchLookUpsActionRequest } from "../../../redux/actions/lookupsActions";
import { StateSelectorInterface } from "../../../redux/reducers/helper";

export default function HomeScreenComponent() {
  const history = useHistory();
  const dispatch = useDispatch();

  const state = useSelector((s: StateSelectorInterface) => s.lookupsReducer);
  console.log(state);

  /// going to routes
  const GoToNewLicensePharmaceuticalEstablishment = () => {
    history.push("/new-license-pharmaceutical-establishment");
  };
  useEffect(() => {
    // hide footer from this page
    dispatch(fetchLookUpsActionRequest());
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
