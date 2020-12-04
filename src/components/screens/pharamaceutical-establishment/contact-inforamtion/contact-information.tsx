import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./contact-information.scss";

const ContactInformationComponent = () => {
  return (
    /**
     * this should be abstacted  . later i will bake a style for card only usin styled component
     */
    <Card>
      <Card.Body>
        <Container>
          <Row>
            <Col>
              <h5>Retrive Information Contact From Your Profile</h5>
              <Row>
                <Button variant="outline-success" size="lg" className="btn-circle" />

                <h6>Yes</h6>

                <Button variant="outline-success" size="lg" className="btn-circle" active />

                <h6>No</h6>
              </Row>
            </Col>
          </Row>

          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  Contact Name <span className="required">*</span>{" "}
                </Form.Label>
                <Form.Control type="text" placeholder=" Contact Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Designation <span className="required">*</span>{" "}
                </Form.Label>
                <Form.Control type="text" placeholder=" Designation " />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  Primary Email <span className="required">*</span>{" "}
                </Form.Label>
                <Form.Control type="text" placeholder=" Primary Email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Alternative Email <span className="required">*</span>{" "}
                </Form.Label>
                <Form.Control type="text" placeholder="  Alternative Email " />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  Contact Number <span className="required">*</span>{" "}
                </Form.Label>
                <Form.Control type="text" placeholder=" +971 000 000 " />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Alternative Contact Number <span className="required">*</span>{" "}
                </Form.Label>
                <Form.Control type="text" placeholder=" +971 000 000  " />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} xs="6" controlId="formGridEmail">
                <Form.Label> Fax </Form.Label>
                <Form.Control type="text" placeholder="  " />
              </Form.Group>
            </Form.Row>
          </Form>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default ContactInformationComponent;
