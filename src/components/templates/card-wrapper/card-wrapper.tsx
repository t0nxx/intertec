import React from "react";
import { useTranslation } from "react-i18next";
import { Image, Button, Card, Accordion, Row } from "react-bootstrap";
import "./card-wrapper.scss";

// Import images
import { ActionTypes, StateSelectorInterface } from "../../../redux/reducers/helper";
import { useDispatch, useSelector } from "react-redux";
import checked from "../../../assets/checked.svg";

export default function CardWrapper(props: {
  title: string;
  start: boolean;
  icon: string;
  doneIcon: string;
  isDone: any;
  eventKey: string;
  children: any;
}) {
  const { t } = useTranslation();
  const state = useSelector((s: StateSelectorInterface) => s.pharmaceuticalEstablishment);
  const dispatch = useDispatch();
  const setCurrentStep = (step: string) => {
    console.log("test");
    // set current step in global state
    dispatch({
      type: ActionTypes.PharmaceuticalEstablishmentActionTypes.SET_STEP_NUMBER,
      payload: step,
    });
  };
  return (
    <Card className="headCard">
      <Accordion.Toggle
        as={Card.Header}
        className={props.isDone ? "done" : ""}
        eventKey={props.eventKey}
        onClick={() => setCurrentStep(props.eventKey)}
      >
        <Row>
          <Image src={props.icon} className="ml-3 mr-4 greenIc" />
          <Image src={props.doneIcon} className="ml-3 mr-4 whiteIc" />
          <h3 className="text-success"> {t(`Titles.${props.title}`)} </h3>
          <Image src={checked} className="checked" />
          <Button className="start" hidden={!props.start || state.stepNumberReducer > 0}>
            {t("Buttons.Start")}
          </Button>
        </Row>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={props.eventKey}>{props.children}</Accordion.Collapse>
    </Card>
  );
}
