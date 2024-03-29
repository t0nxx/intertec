import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next/";
import { Link, useHistory, useLocation } from "react-router-dom";
import AttachmentComponent from "../../templates/attachment/attachment";
import NextButton from "../../atoms/buttons/next-button/next-button";
import "./attachment-screen.scss";

// Import images

const AttachmentScreenComponent = ({ whereToGo }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const location: any = useLocation();

  const [nextButtonText, setNextButtonText] = useState("Go To Preview");
  const [nextButtonToGoRoute, setNextButtonToGoRoute] = useState("/review");
  const openWithSliderCarosel = location.state?.withslidercarosel || false;

  const decidedToGoHandler = () => {
    history.push(nextButtonToGoRoute);
  };

  useEffect(() => {
    /// to handel multiple carosels or not it the attachement component
    if (location.state?.wherToGo === "/payment") {
      setNextButtonText("Go To Payment");
      setNextButtonToGoRoute(location.state.wherToGo);
    }
  }, [location.state?.wherToGo, location.state?.withslidercarosel]);

  return (
    <Container fluid>
      <Row>
        <div className="contentContainer">
          <AttachmentComponent withslidercarosel={openWithSliderCarosel} />
          <Row className="justify-content-center" onClick={decidedToGoHandler}>
            <NextButton customText={t(`Buttons.${nextButtonText}`)} />
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default AttachmentScreenComponent;
