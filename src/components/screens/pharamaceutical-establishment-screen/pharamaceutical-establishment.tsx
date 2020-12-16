import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { StateSelectorInterface } from "../../../redux/reducers/helper";
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

import ContactInformationComponent from "./contact-inforamtion/contact-information";
import EstablishmentInformationComponent from "./etablishment-inforamtion/establishment-information";
import OwnerDetailComponent from "./owner-detail/owner-detail";
import LocationInformationComponent from "./location-inforamtion/location-information";
import SelfEvaluationComponent from "./self-evaluation/self-evaluation";
import PartnerDetailsComponent from "./partner-details/partner-details";
import RequestInformation from "../../request-information/request-information";
import CardWrapper from "../../templates/card-wrapper/card-wrapper";

const PharamaceuticalEstablishmentScreen = () => {
  const state = useSelector((s: StateSelectorInterface) => s.pharmaceuticalEstablishment);
  return (
    <div>
      <RequestInformation />

      <Container fluid>
        <Accordion activeKey={state.stepNumberReducer.toString()}>
          <span className="column"> </span>

          <CardWrapper
            title="Establishment Information"
            start={true}
            icon={penImage}
            doneIcon={penImageWhite}
            isDone={state.establishmentInformationsReducer.isComplete}
            eventKey="0"
          >
            <EstablishmentInformationComponent isForReviewPage={false} />
          </CardWrapper>

          <div className="divider" />

          <CardWrapper
            title="Contact Information"
            start={false}
            icon={contactImage}
            doneIcon={contactImageWhite}
            isDone={state.contactInformationsReducer.isComplete}
            eventKey="1"
          >
            <ContactInformationComponent isForReviewPage={false} />
          </CardWrapper>

          <div className="divider" />

          <CardWrapper
            title="Location Information"
            start={false}
            icon={locationImage}
            doneIcon={locationImageWhite}
            isDone={state.locationInformationsReducer.isComplete}
            eventKey="2"
          >
            <LocationInformationComponent isForReviewPage={false} />
          </CardWrapper>

          <div className="divider" />

          <CardWrapper
            title="Owner Details"
            start={false}
            icon={ownerImage}
            doneIcon={ownerImageWhite}
            isDone={state.ownerDetailsReducer.isComplete}
            eventKey="3"
          >
            <OwnerDetailComponent isForReviewPage={false} />
          </CardWrapper>

          <div className="divider" />

          <CardWrapper
            title="Partner Details"
            start={false}
            icon={ownerImage}
            doneIcon={ownerImageWhite}
            isDone={state.partnerDetailsReducer.isComplete}
            eventKey="4"
          >
            <PartnerDetailsComponent isForReviewPage={false} />
          </CardWrapper>

          <div className="divider" />

          <CardWrapper
            title="Self Evaluation"
            start={false}
            icon={checkImage}
            doneIcon={checkImageWhite}
            isDone={state.selfEvaluationsReducer.isComplete}
            eventKey="5"
          >
            <SelfEvaluationComponent />
          </CardWrapper>
        </Accordion>
      </Container>
    </div>
  );
};

export default PharamaceuticalEstablishmentScreen;
