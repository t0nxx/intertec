import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useHistory, useLocation } from "react-router-dom";
import AttachmentComponent from "../../../templates/attachment/attachment";
import NextButton from "../../../atoms/buttons/next-button/next-button";
import "./pharmacedical-establishment-attachment.scss";
import { StateSelectorInterface } from "../../../../redux/reducers/helper";

// Import images

const PharmacedicalEstablishmentAttachmentComponent = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const location: any = useLocation();

  const requireAttachments = useSelector(
    (s: StateSelectorInterface) => s.attachmentsReducer.data.Service
  );

  return (
    <Container fluid>
      <Row>
        <div className="contentContainer">
          <AttachmentComponent requireAttachmentsArray={requireAttachments} />
          <Row className="justify-content-center">
            <NextButton customText={t(`Buttons.Go To Preview`)} />
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default PharmacedicalEstablishmentAttachmentComponent;
