import React from "react";
import { useSelector } from "react-redux";
import "./footer.scss";
import { Navbar, Image, ProgressBar, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { StateSelectorInterface } from "../../redux/reducers/helper";
import InfoComponent from "../sticky-info/sticky-info";

// Import images
import applicationIc from "../../assets/applicationIc.svg";
import attachmentIc from "../../assets/attachmentIc.svg";
import previewIc from "../../assets/previewIc.svg";
import back from "../../assets/back.svg";

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
      <div className="stickyBack">
        <Image src={back} />
      </div>
      <ProgressBar variant="success" now={progressPersentage} className="progress" />
      <Row className="statistics-container">
        {/* <div>
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
        </div> */}
        <Col xs={3} className="hideOnTaplet">
          <Row xs={12} sm={12}>
            <Col className="image1 prog">
              <p>Complete progress</p>
              <span>95 %</span>
            </Col>
          </Row>
        </Col>

        <Col xs={3}>
          <Row xs={12} sm={4}>
            <Col className="image1">
              <Image src={applicationIc} />
            </Col>
            <Col xs={12} sm={8}>
              <span className="active">{t("Titles.Application form")}</span>
            </Col>
          </Row>
        </Col>

        <Col xs={3}>
          <Row>
            <Col xs={12} sm={4}>
              <Image src={attachmentIc} />
            </Col>
            <Col xs={12} sm={8}>
              <span> {t("Titles.Attachment")}</span>
            </Col>
          </Row>
        </Col>
        <Col xs={3}>
          <Row>
            <Col xs={12} sm={4}>
              <Image src={previewIc} />
            </Col>
            <Col xs={12} sm={8}>
              <span> {t("Titles.Preview")}</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Navbar>
  );
}
