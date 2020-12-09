import React, { useState } from "react";
import { Accordion, Card, Container, Row, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes, StateSelectorInterface } from "../../../redux/reducers/helper";
import "./pharamaceutical-establishment.scss";
import penImage from "../../../assets/pen.svg";
import penImageWhite from "../../../assets/pen-white.svg";
import contactImage from "../../../assets/contact.svg";
import contactImageWhite from "../../../assets/contact-white.svg";
import locationImage from "../../../assets/location.svg";
import locationImageWhite from "../../../assets/location-white.svg";
import ownerImage from "../../../assets/owner.svg";
import ownerImageWhite from "../../../assets/owner-white.svg";
import checkImage from "../../../assets/check.svg";
import checkImageWhite from "../../../assets/check-white.svg";
import checked from "../../../assets/checked.svg";

import ContactInformationComponent from "./contact-inforamtion/contact-information";
import EstablishmentInformationComponent from "./etablishment-inforamtion/establishment-information";
import OwnerDetailComponent from "./owner-detail/owner-detail";
import LocationInformationComponent from "./location-inforamtion/location-information";
import SelfEvaluationComponent from "./self-evaluation/self-evaluation";
import PartnerDetailsComponent from "./partner-details/partner-details";
import RequestInformation from "../../request-information/request-information";

const PharamaceuticalEstablishmentScreen = () => {
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
                <Image src={penImage} className="ml-3 mr-4 greenIc" />
                <Image src={penImageWhite} className="ml-3 mr-4 whiteIc" />
                <h3 className="text-success">Establishment Information </h3>
                <Image src={checked} className="checked" />
                <Button className="start">Start</Button>
              </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <EstablishmentInformationComponent isForReviewPage={false} />
                {/* <span className="ta7nika"> </span> */}
              </Card.Body>
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
                <Image src={contactImage} className="ml-3 mr-4 greenIc" />
                <Image src={contactImageWhite} className="ml-3 mr-4 whiteIc" />
                <h3 className="text-success">Contact Information </h3>
                <Image src={checked} className="checked" />
              </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <ContactInformationComponent isForReviewPage={false} />
            </Accordion.Collapse>
          </Card>
          <div className="divider" />
          <Card className="headCard">
            <Accordion.Toggle
              as={Card.Header}
              className={state.locationInformationsReducer.isComplete ? "done" : ""}
              eventKey="2"
              onClick={() => setCurrentStep("2")}
            >
              <Row>
                <Image src={locationImage} className="ml-3 mr-4 greenIc" />
                <Image src={locationImageWhite} className="ml-3 mr-4 whiteIc" />
                <h3 className="text-success">Location Information </h3>
                <Image src={checked} className="checked" />
              </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <LocationInformationComponent isForReviewPage={false} />
            </Accordion.Collapse>
          </Card>
          <div className="divider" />
          <Card className="headCard">
            <Accordion.Toggle
              as={Card.Header}
              className={state.ownerDetailsReducer.isComplete ? "done" : ""}
              eventKey="3"
              onClick={() => setCurrentStep("3")}
            >
              <Row>
                <Image src={ownerImage} className="ml-3 mr-4 greenIc" />
                <Image src={ownerImageWhite} className="ml-3 mr-4 whiteIc" />
                <h3 className="text-success">Owner Details </h3>
                <Image src={checked} className="checked" />
              </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <OwnerDetailComponent isForReviewPage={false} />
            </Accordion.Collapse>
          </Card>
          <div className="divider" />
          <Card className="headCard">
            <Accordion.Toggle
              as={Card.Header}
              className={state.partnerDetailsReducer.isComplete ? "done" : ""}
              eventKey="4"
              onClick={() => setCurrentStep("4")}
            >
              <Row>
                <Image src={ownerImage} className="ml-3 mr-4 greenIc" />
                <Image src={ownerImageWhite} className="ml-3 mr-4 whiteIc" />
                <h3 className="text-success">Partner Details </h3>
                <Image src={checked} className="checked" />
              </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <PartnerDetailsComponent isForReviewPage={false} />
            </Accordion.Collapse>
          </Card>
          <div className="divider" />
          <Card className="headCard">
            <Accordion.Toggle
              as={Card.Header}
              className={state.selfEvaluationsReducer.isComplete ? "done" : ""}
              eventKey="5"
              onClick={() => setCurrentStep("5")}
            >
              <Row>
                <Image src={checkImage} className="ml-3 mr-4 greenIc" />
                <Image src={checkImageWhite} className="ml-3 mr-4 whiteIc" />
                <h3 className="text-success">Self Evaluation </h3>
                <Image src={checked} className="checked" />
              </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <SelfEvaluationComponent />
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </div>
  );
};

export default PharamaceuticalEstablishmentScreen;
