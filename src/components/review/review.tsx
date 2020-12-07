import React from "react";
import "./review.scss";
import { Navbar, Image, ProgressBar, Row, Button } from "react-bootstrap";

// Import images
import applicationIc from "../../assets/applicationIc.svg";
import attachmentIc from "../../assets/attachmentIc.svg";
import previewIc from "../../assets/previewIc.svg";
import info from "../../assets/info.svg";
import flag from "../../assets/flag.svg";

export default function ReviewComponent() {
  return (
    <Navbar expand="lg" fixed="bottom" className="footer">
      <div className="stickyIcons">
        <Image src={info} className="infoIc" />
        <Image src={flag} className="flagIc" />
      </div>
      <ProgressBar variant="success" now={20} className="progress" />
      <Row className="statistics-container">
        <div>
          <Image src={applicationIc} />
          <span className="active">Application form</span>
        </div>
        <div>
          <Image src={attachmentIc} />
          <span>Attachement</span>
        </div>
        <div>
          <Image src={previewIc} />
          <span>Preview </span>
        </div>
        <div className="complete">
          <span>Complete progress</span>
          <strong>8 %</strong>
        </div>
      </Row>
    </Navbar>
  );
}
