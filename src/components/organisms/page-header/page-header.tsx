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
import headerarrow from "../../../assets/headerarrow.svg";
import headerbredcru from "../../../assets/headerbredcru.svg";
import smCloseButton from "../../../assets/smallCloseButton.svg";
import { Link, withRouter } from "react-router-dom";
import { StateSelectorInterface } from "../../../redux/reducers/helper";
import { useSelector } from "react-redux";

function PageHeaderComponent(props) {
  const { title } = useSelector(
    (s: StateSelectorInterface) => s.breadCrumbReducer
  );
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
            <h4> {t(`Titles.${title}`)}</h4>
          </Col>
          <Col lg="6" md="12" sm="12">
            <Breadcrumb className="breadcrumb">
              {pathnames.length > 0 ? (
                /// first icon ... home page
                <Breadcrumb.Item onClick={() => history.push("/")}>
                  <Image src={headerbredcru} />
                </Breadcrumb.Item>
              ) : (
                /// if we already are in home
                <Image src={headerbredcru} />
              )}
              {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                /// here to remove - and make string to uppercase
                const formatedName = name.replace(/-/g, " ");
                return isLast ? (
                  // will not going to any route since its last
                  <Breadcrumb.Item className="arrow">{formatedName}</Breadcrumb.Item>
                ) : (
                  <Breadcrumb.Item onClick={() => history.push(routeTo)}>
                    {formatedName}
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
