import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./establishment-information.scss";

const EstablishmentInformationComponent = () => {
  return (
    /**
     * this should be abstacted  . later i will bake a style for card only usin styled component
     */
    <Card>
      <Card.Body>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>
                Establishment Name <span className="required">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder=" Establishment Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>
                Establishment Name (Arabic) <span className="required">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder=" Establishment Name" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>
                Establishment Type <span className="required">*</span>
              </Form.Label>
              <Form.Control as="select" defaultValue=" Establishment Type">
                <option> Establishment Type</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>
                Category <span className="required">*</span>
              </Form.Label>
              <Form.Control as="select" defaultValue="Category">
                <option>Category</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EstablishmentInformationComponent;
