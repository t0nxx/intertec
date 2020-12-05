import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faPhoneAlt,
  faQuestionCircle,
  faSearch,
  faSitemap,
  faVolumeUp,
  faLowVision,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Dropdown, Nav, Navbar, Image, ProgressBar, Row } from "react-bootstrap";

// Import images
import applicationIc from "../../assets/applicationIc.png";
import attachmentIc from "../../assets/attachmentIc.png";
import previewIc from "../../assets/previewIc.png";

export default function FooterComponent() {
  return (
    <Navbar expand="lg" fixed="bottom" className="footer">
      <ProgressBar variant="success" now={70} className="progress" />
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
