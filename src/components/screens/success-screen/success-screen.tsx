import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import "./success-screen.scss";

// Import images
import stepChecked from "../../../assets/stepChecked.svg";

const SuccessScreenComponent = (props: { textVariable: string; applicationNumber: string }) => {
  return (
    <Container className="contentContainer" fluid>
      <Image src={stepChecked} />
      <p>{props?.textVariable} Successfully</p>
      <p>
        Application Number : <span>{props?.applicationNumber}</span>
      </p>
    </Container>
  );
};

export default SuccessScreenComponent;
