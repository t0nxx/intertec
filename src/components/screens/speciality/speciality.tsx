import React from "react";
import { Accordion, Card, Container, Row, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ActionTypes, StateSelectorInterface } from "../../../redux/reducers/helper";
import "./speciality.scss";
import "../pharamaceutical-establishment-screen/shared/shared.scss";

// Import images
import expand from "../../../assets/expand-arrows-alt-solid.svg";
// import locationImageWhite from "../../../assets/location-white.svg";

import checked from "../../../assets/checked.svg";
import checkImage from "../../../assets/check.svg";
import checkImageWhite from "../../../assets/check-white.svg";
import ownerImage from "../../../assets/owner.svg";
import ownerImageWhite from "../../../assets/owner-white.svg";

import RemoveSpeciality from "./remove-speciality/remove-speciality";
import SelfEvaluationComponent from "../pharamaceutical-establishment-screen/self-evaluation/self-evaluation";
import RequestInformation from "../../request-information/request-information";

const Speciality = () => {
  const { t }: { t: any } = useTranslation();
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
                <Image src={ownerImage} className="ml-3 mr-4 greenIc" />
                <Image src={ownerImageWhite} className="ml-3 mr-4 whiteIc" />
                <h3 className="text-success">  {t("Titles.Remove Specialty")}</h3>
                <Image src={checked} className="checked" />
                <Button className="start" hidden={state.stepNumberReducer > 0}>
                  {t("Buttons.Start")}
                </Button>
              </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <RemoveSpeciality isForReviewPage={false} />
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </div>
  );
};

export default Speciality;
