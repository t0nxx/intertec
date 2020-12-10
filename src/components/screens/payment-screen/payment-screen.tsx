import React from "react";
import { Container, Form, Image, Row, Col, Button } from "react-bootstrap";
import "./payment-screen.scss";

// Import images
import eD from "../../../assets/eD.svg";
import visaAndMaster from "../../../assets/visaAndMaster.svg";
import RequestInformation from "../../request-information/request-information";

export default function PaymentScreenComponent() {
  return (
    <Container fluid className="topScreen">
      <Row>
        <Col>
          <RequestInformation />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="paymentScreenContent">
            <div className="paymentComponent">
              <Row>
                <Col>
                  <Col>
                    <Row className="head">
                      <Col className="left-align">Fees Details</Col>
                      <Col className="right-align">Amount</Col>
                    </Row>
                    <Row className="child">
                      <Col className="left-align">application Fees</Col>
                      <Col className="right-align">500 AED</Col>
                    </Row>
                    <Row className="child">
                      <Col className="left-align">Tax 3%</Col>
                      <Col className="right-align">10 AED </Col>
                    </Row>
                    <Row className="head">
                      <Col className="left-align"> </Col>
                      <Col className="right-align">Total : 510 AED</Col>
                    </Row>
                  </Col>
                </Col>
              </Row>

              <Row className="accept">
                <Col>
                  <Form.Check
                    type="checkbox"
                    name="hi"
                    id="test"
                    label="Accept terms and condition "
                    custom
                  />
                </Col>
              </Row>

              <Row className="selectPayment">
                <Row>
                  <Col>
                    <p>Select payment method</p>
                  </Col>
                </Row>

                <Row className="methods">
                  <Col className="visa">
                    <Image src={visaAndMaster} />
                  </Col>
                  <Col className="ed">
                    <Image src={eD} className="selected" />
                  </Col>
                </Row>

                <Row className="proceed">
                  <Col>
                    <Button variant="success">Process For Payment</Button>
                  </Col>
                </Row>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
