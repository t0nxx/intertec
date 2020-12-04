import React from "react";
import { Accordion, Card, Container, Row } from "react-bootstrap";
import "./pharamaceutical-establishment.scss";
import penImage from "../../../assets/pen.png";
import contactmage from "../../../assets/contact.png";
import ContactInformationComponent from "./contact-inforamtion/contact-information";
import EstablishmentInformationComponent from "./etablishment-inforamtion/establishment-information";

const PharamaceuticalEstablishmentScreen = () => {
  return (
    <Container className="wrapper">
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <Row>
              <img src={penImage} width="30" height="35" className="ml-3 mr-4" alt="card icon" />
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
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <Row>
              <img src={contactmage} width="30" height="35" className="ml-3 mr-4" alt="card icon" />
              <h3 className="text-success">Contact Information </h3>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <ContactInformationComponent />
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default PharamaceuticalEstablishmentScreen;
