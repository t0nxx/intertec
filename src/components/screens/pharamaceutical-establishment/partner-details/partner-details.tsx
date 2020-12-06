import React from "react";
import { Image, Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import "./partner-details.scss";
import "../shared/shared.scss";

// Import images
import userPhoto from "../../../../assets/userPhoto.svg";
import upload from "../../../../assets/upload.svg";
import email from "../../../../assets/mail.svg";
import phone from "../../../../assets/phone.svg";
import arrow from "../../../../assets/arrow-white.svg";

const partnerDetailsComponent = () => {
  return (
    /**
     * this should be abstacted  . later i will bake a style for card only usin styled component
     */
    <Container fluid>
      <Card>
        <Card.Body>
          <Form></Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default partnerDetailsComponent;
