import React, { useEffect, useState } from "react";
import { Accordion, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

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
import {
  setBreadCrumbTitleAction,
  setFooterProgressAction,
  setInfoDescriptionAction,
  setInfoFeesAction,
  showFooterAction,
  showInfoAction,
} from "../../../redux/actions/layout/layout";
import { GetInfoOfCurrentService } from "../../helpers/getInfoOfService";
import { ServicesCode } from "../../constants/services-code";
import { setServiceCodeAction } from "../../../redux/actions/configActions";
import { fetchLookUpsActionRequest } from "../../../redux/actions/lookupsActions";
import { fetchAttachmentsActionRequest } from "../../../redux/actions/attachmentsActions";
import NextButton from "../../atoms/buttons/next-button/next-button";

const PharamaceuticalEstablishmentScreen = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();

  const state = useSelector(
    (s: StateSelectorInterface) => s.pharmaceuticalEstablishment
  );
  GetInfoOfCurrentService(
    ServicesCode.NewLicensePharmaceuticalEstablishment
  ).then((data) => {
    dispatch(setInfoDescriptionAction(data.description));
    dispatch(setInfoFeesAction(data.fees));
  });

  const handleSubmit = (event) => {
    ///// should validate each step is done . then navigate to attachement
    event.preventDefault();
    dispatch(setFooterProgressAction(50));
    history.push("/new-license-pharmaceutical-establishment/attachment");
  };

  useEffect(() => {
    /// set current service in global state to get
    dispatch(
      setServiceCodeAction(ServicesCode.NewLicensePharmaceuticalEstablishment)
    );
    dispatch(fetchLookUpsActionRequest());
    dispatch(fetchAttachmentsActionRequest());

    dispatch(
      setBreadCrumbTitleAction("New License Pharmaceutical Establishment")
    );
    dispatch(showFooterAction());
    dispatch(showInfoAction());
  }, []);
  return (
    <div>
      <RequestInformation />

      <Container fluid>
        <Form onSubmit={handleSubmit}>
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
              <>
                <SelfEvaluationComponent pathToGo="/new-license-pharmaceutical-establishment/attachment" />
                <NextButton customText={t("Buttons.Go To Attachment")} />
              </>
            </CardWrapper>
          </Accordion>
        </Form>
      </Container>
    </div>
  );
};

export default PharamaceuticalEstablishmentScreen;
