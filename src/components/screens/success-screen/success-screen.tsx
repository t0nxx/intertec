import React from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import "./success-screen.scss";

// Import images
import success from "../../../assets/success.svg";
import happyRate from "../../../assets/happyRate.svg";
import flag from "../../../assets/flag.svg";

export default function SuccessScreenComponent() {
  return (
    <Container fluid>
      <Row>
        <Col className="succScreenContent">
          <Image src={success} />
          <p className="successMsg">Your application has been submitted successfully</p>
          <p className="appNum">
            Application number : <span>#number</span>
          </p>
          <Button>Go to workspace</Button>
        </Col>
      </Row>
      <Container className="successScreenFooter">
        <Row>
          <span className="line"> </span>
          <Col className="leftContent" md="6" sm="12">
            <Row>
              <Col>
                <Image src={flag} />
                File a complaint
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  if you still have any inquiries, you can call us on Hotline XXXX or using
                  suggestion and improvement center
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="rightContent" md="6" sm="12">
            <Image src={happyRate} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
