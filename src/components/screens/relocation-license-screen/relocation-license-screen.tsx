import React from "react";
import { Accordion, Card, Container, Row, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ActionTypes, StateSelectorInterface } from "../../../redux/reducers/helper";
import "./relocation-license-screen.scss";
import "../pharamaceutical-establishment-screen/shared/shared.scss";

// Import images
import locationImage from "../../../assets/location.svg";
import locationImageWhite from "../../../assets/location-white.svg";

import contactImage from "../../../assets/contact.svg";
import contactImageWhite from "../../../assets/contact-white.svg";
import checked from "../../../assets/checked.svg";
import checkImage from "../../../assets/check.svg";
import checkImageWhite from "../../../assets/check-white.svg";

import LocationInformationComponent from "./location-inforamtion/location-information";
import SelfEvaluationComponent from "../pharamaceutical-establishment-screen/self-evaluation/self-evaluation";
import RequestInformation from "../../request-information/request-information";

const RelocationLicenseScreen = () => {
  const { t } = useTranslation();
  const state = useSelector((s: StateSelectorInterface) => s.pharmaceuticalEstablishment);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch();
  const setCurrentStep = (step: string) => {
    // set current step in global state
    dispatch({
      type: ActionTypes.PharmaceuticalEstablishmentActionTypes.SET_STEP_NUMBER,
      payload: step,
    });
  };
  return (
    <div>
      <RequestInformation />

      <Container fluid>
        <Accordion activeKey={state.stepNumberReducer.toString()}>
          {/* <Accordion> */}
          <span className="column"> </span>
          <Card className="headCard">
            <Accordion.Toggle
              as={Card.Header}
              className={state.establishmentInformationsReducer.isComplete ? "done" : ""}
              eventKey="0"
              onClick={() => setCurrentStep("0")}
            >
              <Row>
                <Image src={locationImage} className="ml-3 mr-4 greenIc" />
                <Image src={locationImageWhite} className="ml-3 mr-4 whiteIc" />
                <h3 className="text-success">{t("Titles.New Location Information")}</h3>
                <Image src={checked} className="checked" />
                <Button className="start" hidden={state.stepNumberReducer > 0}>
                  {t("Buttons.Start")}
                </Button>
              </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <LocationInformationComponent isForReviewPage={false} />
            </Accordion.Collapse>
          </Card>
          <div className="divider" />
          <Card className="headCard">
            <Accordion.Toggle
              as={Card.Header}
              className={state.contactInformationsReducer.isComplete ? "done" : ""}
              eventKey="1"
              onClick={() => setCurrentStep("1")}
            >
              <Row>
                <Image src={checkImage} className="ml-3 mr-4 greenIc" />
                <Image src={checkImageWhite} className="ml-3 mr-4 whiteIc" />
                <h3 className="text-success">{t("Titles.Self Evaluation")} </h3>
                <Image src={checked} className="checked" />
              </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <SelfEvaluationComponent />
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </div>
  );
};

export default RelocationLicenseScreen;
