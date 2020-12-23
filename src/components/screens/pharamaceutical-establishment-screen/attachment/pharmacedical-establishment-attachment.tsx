import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useHistory, useLocation } from "react-router-dom";
import AttachmentComponent from "../../../templates/attachment/attachment";
import NextButton from "../../../atoms/buttons/next-button/next-button";
import "./pharmacedical-establishment-attachment.scss";
import { StateSelectorInterface } from "../../../../redux/reducers/helper";
import { setFooterProgressAction } from "../../../../redux/actions/layout/layout";

// Import images

const PharmacedicalEstablishmentAttachmentComponent = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const location: any = useLocation();
  const dispatch = useDispatch();

  const requireAttachments = useSelector(
    (s: StateSelectorInterface) => s.attachmentsReducer.data.Service
  );
  const handleSubmit = (event) => {
    ///// should validate each step is done . then navigate to attachement
    event.preventDefault();
    dispatch(setFooterProgressAction(90));
    history.push("/new-license-pharmaceutical-establishment/review");
  };

  return (
    <Container fluid>
      <Form onSubmit={handleSubmit}>
        <Row>
          <div className="contentContainer">
            <AttachmentComponent requireAttachmentsArray={requireAttachments} />
            <Row className="justify-content-center">
              <NextButton customText={t(`Buttons.Go To Preview`)} />
            </Row>
          </div>
        </Row>
      </Form>
    </Container>
  );
};

export default PharmacedicalEstablishmentAttachmentComponent;
