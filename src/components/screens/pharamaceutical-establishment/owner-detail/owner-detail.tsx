import React from "react";
import { Image, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./owner-detail.scss";
import "../shared/shared.scss";

// Import images
import userPhoto from "../../../../assets/userPhoto.png";

const OwnerDetailComponent = () => {
  return (
    /**
     * this should be abstacted  . later i will bake a style for card only usin styled component
     */
    <Container fluid>
      <Card>
        {/* <Card.Header>
          <Row>
            <Image src={owner} />
            <h5 className="text-success">owner Details</h5>
          </Row>
        </Card.Header> */}

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
                <Image src={userPhoto} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  Title <span className="required">*</span>
                </Form.Label>
                <Form.Control as="select" defaultValue="Mr">
                  <option> Mr</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  Gender <span className="required">*</span>
                </Form.Label>
                <div className="radioButtons">
                  <div className="form-check">
                    <label htmlFor="gender">
                      <input name="gender" type="radio" id="gender" className="form-check-input" />
                      Male
                      <i className="checkMark"> </i>
                    </label>
                  </div>
                  <div className="form-check">
                    <label htmlFor="gender2">
                      <input name="gender" type="radio" id="gender2" className="form-check-input" />
                      Female
                      <i className="checkMark"> </i>
                    </label>
                  </div>
                </div>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  First name <span className="required">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Contact Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Middle name <span className="required">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Middle name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Last Name <span className="required">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  First name (Arabic) <span className="required">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Contact Name (Arabic)" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Middle name (Arabic) <span className="required">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Middle name (Arabic)" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Last Name (Arabic) <span className="required">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Last Name (Arabic)" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Share Percentage <span className="required">*</span>
                </Form.Label>
                <Form.Control type="number" min="1" placeholder="50%" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  UAE Citzen <span className="required">*</span>
                </Form.Label>
                <div className="radioButtons">
                  <div className="form-check">
                    <label htmlFor="UAECitzen">
                      <input
                        name="UAECitzen"
                        type="radio"
                        id="UAECitzen"
                        className="form-check-input"
                      />
                      Yes
                      <i className="checkMark"> </i>
                    </label>
                  </div>
                  <div className="form-check">
                    <label htmlFor="UAECitzen2">
                      <input
                        name="UAECitzen"
                        type="radio"
                        id="UAECitzen2"
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
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>
                  Nationality <span className="required">*</span>
                </Form.Label>
                <Form.Control as="select" defaultValue="Last Name">
                  <option> Select</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Passport No <span className="required">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="No" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Emirates ID <span className="required">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Emirates ID" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Family Book No <span className="required">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="No" />
              </Form.Group>
            </Form.Row>
            <Form.Row className="splitTitle">
              <h5>Contact information</h5>
            </Form.Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OwnerDetailComponent;
