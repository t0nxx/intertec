import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./page-header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Image, Breadcrumb, Col, Container, Row, Button, Modal, Navbar } from "react-bootstrap";

// Import images
import close from "../../assets/close.svg";

export default function PageHeaderComponent() {
  const { t } = useTranslation();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      bg="light"
      sticky="top"
      className="pageHeader"
    >
      <div className="saveOrCancel">
        <Image src={close} onClick={handleShow} />
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="exitSubmitionModal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

      <Container fluid>
        <Row className="">
          <Col lg="6" md="12" sm="12" className="d-inline-block align-top">
            <h4> {t("Titles.New License Pharmaceutical Establishment")}</h4>
          </Col>
          <Col lg="6" md="12" sm="12">
            <Breadcrumb className="breadcrumb">
              <Breadcrumb.Item>
                <FontAwesomeIcon icon={faHome} size="lg" color="black" />
              </Breadcrumb.Item>

              <Breadcrumb.Item>{t("Titles.Services")}</Breadcrumb.Item>

              <Breadcrumb.Item>
                {" "}
                {t("Titles.New License Pharmaceutical Establishment")}
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
