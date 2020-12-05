import React from "react";
import { Accordion, Card, Container, Row } from "react-bootstrap";
import "./pharamaceutical-establishment.scss";
import penImage from "../../../assets/pen.png";
import contactImage from "../../../assets/contact.png";
import locationImage from "../../../assets/location.png";
import ownerImage from "../../../assets/owner.png";
import checkImage from "../../../assets/check.png";

import ContactInformationComponent from "./contact-inforamtion/contact-information";
import EstablishmentInformationComponent from "./etablishment-inforamtion/establishment-information";
import OwnerDetailComponent from "./owner-detail/owner-detail";

const PharamaceuticalEstablishmentScreen = () => {
  return (
    <Container fluid>
      <Accordion defaultActiveKey="0">
        <Card className="headCard">
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <Row>
              <img src={penImage} className="ml-3 mr-4" alt="card icon" />
              <h3 className="text-success">Establishment Information </h3>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <EstablishmentInformationComponent />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <div className="divider" />
        <Card className="headCard">
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <Row>
              <img
                src={contactImage}
                width="30"
                height="35"
                className="ml-3 mr-4"
                alt="card icon"
              />
              <h3 className="text-success">Contact Information </h3>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <ContactInformationComponent />
          </Accordion.Collapse>
        </Card>
        <div className="divider" />
        <Card className="headCard">
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <Row>
              <img
                src={locationImage}
                width="30"
                height="35"
                className="ml-3 mr-4"
                alt="card icon"
              />
              <h3 className="text-success">Location Information </h3>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <ContactInformationComponent />
          </Accordion.Collapse>
        </Card>
        <div className="divider" />
        <Card className="headCard">
          <Accordion.Toggle as={Card.Header} eventKey="3">
            <Row>
              <img src={ownerImage} width="30" height="35" className="ml-3 mr-4" alt="card icon" />
              <h3 className="text-success">Owner Details </h3>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <OwnerDetailComponent />
          </Accordion.Collapse>
        </Card>
        <div className="divider" />
        <Card className="headCard">
          <Accordion.Toggle as={Card.Header} eventKey="4">
            <Row>
              <img src={ownerImage} width="30" height="35" className="ml-3 mr-4" alt="card icon" />
              <h3 className="text-success">Partner Details </h3>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <ContactInformationComponent />
          </Accordion.Collapse>
        </Card>
        <div className="divider" />
        <Card className="headCard">
          <Accordion.Toggle as={Card.Header} eventKey="5">
            <Row>
              <img src={checkImage} width="30" height="35" className="ml-3 mr-4" alt="card icon" />
              <h3 className="text-success">Self Evaluation </h3>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <ContactInformationComponent />
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default PharamaceuticalEstablishmentScreen;
