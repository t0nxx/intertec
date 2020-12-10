import React from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next/";
import { Link } from "react-router-dom";
import AttachmentComponent from "../../attachment/attachment";
import NextButton from "../../buttons/next-button/next-button";
import "./attachment-screen.scss";

// Import images

const AttachmentScreenComponent = () => {
  const { t } = useTranslation();
  return (
    <Container fluid>
      <Row>
        <div className="contentContainer">
          <AttachmentComponent />
          <Row className="justify-content-center">
            <Link to="/review">
              <NextButton customText={t("Buttons.Go To Preview")} />
            </Link>
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default AttachmentScreenComponent;
