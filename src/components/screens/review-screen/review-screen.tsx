import React from "react";
import "./review-screen.scss";
import { Container, Accordion, Card, Image, Row, Col } from "react-bootstrap";

// Import images
import upArrow4Collaps from "../../../assets/upArrow4Collaps.svg";
import editPen from "../../../assets/editPen.svg";
import locationWhite from "../../../assets/location-white.svg";

export default function ReviewScreenComponent() {
  return (
    <Container fluid>
      <div className="screenContent">
        <Row>
          {/* Start Establishment Information */}
          <div className="block">
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <h1>Establishment Information</h1>
                  <Image src={upArrow4Collaps} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Image src={editPen} className="edit" />
                    <Row>
                      <Col>
                        <p>Establishment Name (English)</p>
                        <span>Establishment Name (English)</span>
                      </Col>
                      <Col>
                        <p>Establishment Name (Arabic)</p>
                        <span>Establishment Name (Arabic)</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>Establishment Type</p>
                        <span>Establishment Type</span>
                      </Col>
                      <Col>
                        <p>Category</p>
                        <span>Category</span>
                      </Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          {/* End Establishment Information */}

          {/* Start Contact information */}
          <div className="block">
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <h1>Contact information</h1>
                  <Image src={upArrow4Collaps} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Image src={editPen} className="edit" />
                    <Row>
                      <Col>
                        <p>Contact Name</p>
                        <span>Contact Name</span>
                      </Col>
                      <Col>
                        <p>Designation</p>
                        <span>Designation</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>Primary Email</p>
                        <span>A@a.com</span>
                      </Col>
                      <Col>
                        <p>Alternative email</p>
                        <span>A@a.com</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>Contact Number</p>
                        <span>+971 000 000</span>
                      </Col>
                      <Col>
                        <p>Alternate Contact No</p>
                        <span>+971 000 000</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>Fax</p>
                        <span>Fax</span>
                      </Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          {/* End Contact information */}

          {/* Start Location information */}
          <div className="block">
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <h1>Location information</h1>
                  <Image src={upArrow4Collaps} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Image src={editPen} className="edit" />
                    <Row>
                      <Col>
                        <p>Emirate</p>
                        <span>Emirate</span>
                      </Col>
                      <Col>
                        <p>Area</p>
                        <span>Area</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>Street</p>
                        <span>Street</span>
                      </Col>
                      <Col>
                        <p>Building Name</p>
                        <span>PO Box</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>PO Box</p>
                        <span>PO Box</span>
                      </Col>
                      <Col>
                        <p>Building NO</p>
                        <span>Building NO</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>Google Map URL</p>
                        <a href="">
                          <span className="mapBtn">
                            <Image src={locationWhite} />
                            Google Map URL
                          </span>
                        </a>
                      </Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          {/* End Location information */}
        </Row>
      </div>
    </Container>
  );
}
