import React from "react";
import "./request-information.scss";
import { Container, Accordion, Button, Row, Col, Card, Image } from "react-bootstrap";

// Import images
import circleArrow from "../../assets/circleArrow.svg";
import user from "../../assets/user.svg";

export default function RequestInformation() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="requestInformationContent">
            <span className="column">
              <Image src={circleArrow} />
            </span>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    {/* <Image src={circleArrow} /> */}
                    <div>
                      <h1>Request information</h1>
                      <span>request No : 003.600.1</span>
                    </div>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <Row>
                      <Col>
                        <p>Request Date</p>
                        <span>DD,mm,yy</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6" sm="6" xs="12">
                        <p>Service no </p>
                        <span>Srv-001.01.001</span>
                      </Col>
                      <Col md="6" sm="6" xs="12">
                        <p>PMO no </p>
                        <span>01.001</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6" sm="6" xs="12">
                        <p>Application no</p>
                        <span>01.001</span>
                      </Col>
                      <Col md="6" sm="6" xs="12">
                        <p>Application Date</p>
                        <span>DD,mm,yy</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6" sm="6" xs="12">
                        <p>Application name</p>
                        <span>Initial approval</span>
                      </Col>

                      <Col md="6" sm="6" xs="12">
                        <p>Application status</p>
                        <span>Request initiated </span>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Col className="appC">
                          <Row>
                            <Col className="leftAppC" md="7" sm="7" xs="12">
                              <Image src={user} />
                              <div className="applicant">
                                <h1>Applicant name</h1>
                                <span>Samantha</span>
                              </div>
                            </Col>
                            <Col className="rightAppC" md="5" sm="5" xs="12">
                              <Button>Contact info</Button>
                            </Col>
                          </Row>
                        </Col>
                      </Col>
                    </Row>
                    {/* div. */}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
