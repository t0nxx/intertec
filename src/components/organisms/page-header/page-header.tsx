import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./page-header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Image, Breadcrumb, Col, Container, Row, Button, Modal, Navbar } from "react-bootstrap";

// Import images
import close from "../../../assets/close.svg";
import smCloseButton from "../../../assets/smallCloseButton.svg";

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
        <div className="smClose">
          <Image src={smCloseButton} onClick={handleClose} />
        </div>

        <div className="modalBody">
          <Modal.Body>
            <Button variant="secondary" size="lg">
              {t("Buttons.SaveAsDraft")}
            </Button>
            <Button variant="secondary" size="lg">
              {t("Buttons.Discard")}
            </Button>
          </Modal.Body>
        </div>
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
