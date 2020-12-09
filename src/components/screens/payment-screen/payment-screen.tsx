import React from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import "./payment-screen.scss";

// Import images
import success from "../../../assets/success.svg";

export default function PaymentScreenComponent() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Image src={success} />
          test
        </Col>
      </Row>
    </Container>
  );
}
