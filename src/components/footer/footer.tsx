import React from "react";
import { useSelector } from "react-redux";
import "./footer.scss";
import { Navbar, Image, ProgressBar, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

// Import images
import applicationIc from "../../assets/applicationIc.svg";
import attachmentIc from "../../assets/attachmentIc.svg";
import previewIc from "../../assets/previewIc.svg";
import info from "../../assets/info.svg";
// import flag from "../../assets/flag.svg";
import { StateSelectorInterface } from "../../redux/reducers/helper";
import InfoComponent from "../sticky-info/sticky-info";

export default function FooterComponent() {
  const { t } = useTranslation();
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
          <span className="active">{t("Titles.Application form")}</span>
        </div>
        <div>
          <Image src={attachmentIc} />
          <span> {t("Titles.Attachment")}</span>
        </div>
        <div>
          <Image src={previewIc} />
          <span>  {t("Titles.Preview")}</span>
        </div>
        <div className="complete">
          <span> {t("Titles.Complete progress")}</span>
          <strong>{progressPersentage} %</strong>
        </div>
      </Row>
    </Navbar>
  );
}
