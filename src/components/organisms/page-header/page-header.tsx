import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./page-header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  Image,
  Breadcrumb,
  Col,
  Container,
  Row,
  Button,
  Modal,
  Navbar,
} from "react-bootstrap";

// Import images
import close from "../../../assets/close.svg";
import smCloseButton from "../../../assets/smallCloseButton.svg";
import { Link, withRouter } from "react-router-dom";

function PageHeaderComponent(props) {
  console.log("from heaaaaaaaaader");
  console.log(props);

  const {
    history,
    location: { pathname },
  } = props;
  const pathnames = pathname.split("/").filter((x) => x);
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
              {pathnames.length > 0 ? (
                /// first icon ... home page
                <Breadcrumb.Item onClick={() => history.push("/")}>
                  <FontAwesomeIcon icon={faHome} size="lg" color="black" />
                </Breadcrumb.Item>
              ) : (
                /// if we already are in home
                <FontAwesomeIcon icon={faHome} size="lg" color="black" />
              )}
              {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                return isLast ? (
                  // will not going to any route since its last
                  <Breadcrumb.Item>{name}</Breadcrumb.Item>
                ) : (
                  <Breadcrumb.Item onClick={() => history.push(routeTo)}>
                    {name}
                  </Breadcrumb.Item>
                );
              })}
              {/* <Breadcrumb.Item>
                <FontAwesomeIcon icon={faHome} size="lg" color="black" />
              </Breadcrumb.Item>

              <Breadcrumb.Item>{t("Titles.Services")}</Breadcrumb.Item>

              <Breadcrumb.Item>
                {" "}
                {t("Titles.New License Pharmaceutical Establishment")}
              </Breadcrumb.Item> */}
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
export default withRouter(PageHeaderComponent);
