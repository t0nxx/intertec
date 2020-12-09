import React from "react";
import { useSelector } from "react-redux";
import "./footer.scss";
import { Navbar, Image, ProgressBar, Row } from "react-bootstrap";

// Import images
import applicationIc from "../../assets/applicationIc.svg";
import attachmentIc from "../../assets/attachmentIc.svg";
import previewIc from "../../assets/previewIc.svg";
import info from "../../assets/info.svg";
// import flag from "../../assets/flag.svg";
import { StateSelectorInterface } from "../../redux/reducers/helper";
import InfoComponent from "../sticky-info/sticky-info";

export default function FooterComponent() {
  // progress bar state
  const progressPersentage = useSelector(
    (s: StateSelectorInterface) => s.pharmaceuticalEstablishment.progressBarPersentageReducer
  );
  return (
    <Navbar expand="lg" fixed="bottom" className="footer">
      <div className="flagIc"> </div>
      <InfoComponent />
      <ProgressBar variant="success" now={progressPersentage} className="progress" />
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
          <strong>{progressPersentage} %</strong>
        </div>
      </Row>
    </Navbar>
  );
}
