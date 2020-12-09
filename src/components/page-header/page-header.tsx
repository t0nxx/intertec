import React from "react";
import "./page-header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb, Navbar, Col, Container, Row } from "react-bootstrap";

export default function PageHeaderComponent() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      bg="light"
      sticky="top"
      className="pageHeader"
    >
      <Container fluid>
        <Row className="">
          <Col lg="6" md="12" sm="12" className="d-inline-block align-top">
            <h4> New License Pharmaceutical Establishment</h4>
          </Col>
          <Col lg="6" md="12" sm="12">
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
    </Navbar>
  );
}
