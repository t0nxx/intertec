import React from "react";
import { Button, Image, Row } from "react-bootstrap";
import arrowWhite from "../../assets/arrow-white.svg";

const SubmissionButton = () => {
  return (
    <Row className="justify-content-center">
      <Button variant="success" size="lg" className="submittion-btn" type="submit">
        Next
        <Image src={arrowWhite} className="submittion-btn__img" />
      </Button>
    </Row>
  );
};

export default SubmissionButton;
