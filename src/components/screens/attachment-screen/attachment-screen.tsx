import React from "react";
import { Container, Row } from "react-bootstrap";
import AttachmentComponent from "../../attachment/attachment";
import "./attachment-screen.scss";

// Import images

const AttachmentScreenComponent = () => {
  return (
    <Container fluid>
      <Row>
        <div className="contentContainer">
          <AttachmentComponent />
        </div>
      </Row>
    </Container>
  );
};

export default AttachmentScreenComponent;
