import React ,{useState} from "react";
import { useTranslation } from "react-i18next";
import { Image, Card, Accordion } from "react-bootstrap";
import "./review-card-head.scss";

import upArrow4Collaps from "../../../assets/upArrow4Collaps.svg";

export default function ReviewCardHead(props: { title: string; eventKey: string }) {
  const { t } = useTranslation();
  const [state, setState] = useState(props.eventKey);
  const toggleCollapse = (id) => {
    setState(state !== id ? id : "");
  };

  return (
    <Accordion.Toggle as={Card.Header} eventKey={props.eventKey} onClick={() => toggleCollapse(props.eventKey)}>
      <h1>{t(`${props.title}`)}</h1>
      <Image src={upArrow4Collaps}  className={state === props.eventKey ? "arrow rotate" : "arrow"} />
    </Accordion.Toggle>
  );
}
