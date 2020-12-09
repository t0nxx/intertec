import React from "react";
import "./page-header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";

export default function PageHeaderComponent() {
  return (
    <Container fluid>
      <Row className="mb-5 pt-3 pr-5 pl-5 bg-white ">
        <Col md="12">
          <h4> New License Pharmaceutical Establishment</h4>
        </Col>
        <Col md="12">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item>
              <FontAwesomeIcon icon={faHome} size="lg" color="black" />
            </Breadcrumb.Item>

            <Breadcrumb.Item>Services</Breadcrumb.Item>

            <Breadcrumb.Item>New License Pharmaceutical Establishment</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
}
