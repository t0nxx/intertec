import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Container, Image, Row, Col, Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./success-screen.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import images

import { faHome } from "@fortawesome/free-solid-svg-icons";
import success from "../../../assets/success.svg";
import happyRate from "../../../assets/happyRate.svg";
import flag from "../../../assets/flag.svg";
import smCloseButton from "../../../assets/smallCloseButton.svg";
import bigHappyRate from "../../../assets/bigHappyRate.svg";

export default function SuccessScreenComponent() {
  const [show, setShow] = useState(true);
  const { t } = useTranslation();
  const history = useHistory();
  const location: any = useLocation();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [successText, setSuccessText] = useState(
    "Your application has been submitted successfully"
  );

  useEffect(() => {
    if (location.state?.successVariable === "payment") {
      setSuccessText("Payment successfully");
    }
  }, [location.state?.successVariable]);

  const goToWorkSapce = () => {
    history.push("/");
  };
  return (
    <Container fluid>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="true"
        keyboard={false}
        className="happyRate"
      >
        {/* <div className="smClose">
          <Image src={smCloseButton} onClick={handleClose} />
        </div> */}

        <div className="modalBody">
          <Modal.Body>
            <Image src={bigHappyRate} />
          </Modal.Body>
        </div>
      </Modal>

      <Row>
        <Col className="succScreenContent">
          <Image src={success} />
          <p className="successMsg">{t(`Titles.${successText}`)}</p>
          <p className="appNum">
            {t("Titles.Application number")} : <span>#number</span>
          </p>
          <Button onClick={goToWorkSapce}>{t("Buttons.Go to workspace")}</Button>
        </Col>
      </Row>
      <Container className="successScreenFooter">
        <Row>
          <span className="line"> </span>
          <Col className="leftContent" md="6" sm="12">
            <Row>
              <Col>
                <Image src={flag} />
                {t("Titles.File a complaint")}
              </Col>
            </Row>
            <Row>
              <Col>
                <p>{t("Texts.if you still have any inquiries")}</p>
              </Col>
            </Row>
          </Col>
          <Col className="rightContent" md="6" sm="12">
            <Image src={happyRate} onClick={handleShow} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
