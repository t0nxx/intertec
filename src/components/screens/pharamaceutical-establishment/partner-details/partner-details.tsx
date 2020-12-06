import React from "react";
import { Image, Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import "./partner-details.scss";
import "../shared/shared.scss";

// Import images
import userPhoto from "../../../../assets/userPhoto.png";
import upload from "../../../../assets/upload.png";
import email from "../../../../assets/mail.png";
import phone from "../../../../assets/phone.png";
import arrow from "../../../../assets/arrow-white.png";

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
