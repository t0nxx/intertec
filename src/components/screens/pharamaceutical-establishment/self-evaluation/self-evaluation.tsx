import React from "react";
import { Image, Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import "./self-evaluation.scss";
import "../shared/shared.scss";

// Import images
import userPhoto from "../../../../assets/userPhoto.svg";
import upload from "../../../../assets/upload.svg";
import email from "../../../../assets/mail.svg";
import phone from "../../../../assets/phone.svg";
import arrow from "../../../../assets/arrow-white.svg";

const SelfEvaluationComponent = () => {
  return (
    /**
     * this should be abstacted  . later i will bake a style for card only usin styled component
     */
    <Container fluid>
      {/* <Card>
        <Card.Body>
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
                        value="yes"
                        ref={register}
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
                        value="no"
                        ref={register}
                        checked
                      />
                      No
                      <i className="checkMark"> </i>
                    </label>
                  </div>
                </div>
              </Form.Group>
            </Form.Row>
          </Form>
        </Card.Body>
      </Card> */}
    </Container>
  );
};

export default SelfEvaluationComponent;
