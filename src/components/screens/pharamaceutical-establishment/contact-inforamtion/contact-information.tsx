import React from "react";
import { Button, Card, Col, Container, Form, Row, Image } from "react-bootstrap";
import "./contact-information.scss";
import "../shared/shared.scss";

import email from "../../../../assets/mail.png";
import phone from "../../../../assets/phone.png";

const ContactInformationComponent = () => {
  return (
    /**
     * this should be abstacted  . later i will bake a style for card only usin styled component
     */
    <Card>
      <Card.Body>
        <Container>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Retrieve information contact from your profile</Form.Label>
                <div className="radioButtons">
                  <div className="form-check">
                    <label htmlFor="getContactData">
                      <input
                        name="getContactData"
                        type="radio"
                        id="getContactData"
                        className="form-check-input"
                      />
                      Yes
                      <i className="checkMark"> </i>
                    </label>
                  </div>
                  <div className="form-check">
                    <label htmlFor="getContactData2">
                      <input
                        name="getContactData"
                        type="radio"
                        id="getContactData2"
                        className="form-check-input"
                      />
                      No
                      <i className="checkMark"> </i>
                    </label>
                  </div>
                </div>
              </Form.Group>
            </Form.Row>
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
                <div className="inputWithIcon">
                  <Form.Control type="text" placeholder="Primary Email" />
                  <Image src={email} />
                </div>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Alternative Email <span className="required">*</span>{" "}
                </Form.Label>
                <div className="inputWithIcon">
                  <Form.Control type="text" placeholder="  Alternative Email " />
                  <Image src={email} />
                </div>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  Contact Number <span className="required">*</span>{" "}
                </Form.Label>
                <div className="inputWithIcon">
                  <Form.Control type="text" placeholder=" +971 000 000 " />
                  <Image src={phone} />
                </div>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Alternative Contact Number <span className="required">*</span>{" "}
                </Form.Label>
                <div className="inputWithIcon">
                  <Form.Control type="text" placeholder=" +971 000 000  " />
                  <Image src={phone} />
                </div>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} xs="6" controlId="formGridEmail">
                <Form.Label> Fax </Form.Label>
                <Form.Control type="text" placeholder="Fax" />
              </Form.Group>
            </Form.Row>
          </Form>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default ContactInformationComponent;
