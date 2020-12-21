import React from "react";
import "./request-information.scss";
import { Container, Accordion, Button, Row, Col, Card, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";


// Import images
import circleArrow from "../../assets/circleArrow.svg";
import user from "../../assets/user.svg";

export default function RequestInformation() {
  const { t } = useTranslation();

  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="requestInformationContent">
            <span className="column">
              <Image src={circleArrow} />
            </span>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    {/* <Image src={circleArrow} /> */}
                    <div>
                      <h1> {t("Titles.Request information")}</h1>
                      <span> 003.600.1 {t("Titles.request No")}</span>
                    </div>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <Row>
                      <Col>
                        <p> {t("Titles.Request Date")}</p>
                        <span> {t("Titles.DDmmyy")}</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6" sm="6" xs="12">
                        <p> {t("Titles.Serviceno")}</p>
                        <span>Srv-001.01.001</span>
                      </Col>
                      <Col md="6" sm="6" xs="12">
                        <p> {t("Titles.PMOno")}</p>
                        <span>01.001</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6" sm="6" xs="12">
                        <p> {t("Titles.Application no")}</p>
                        <span>01.001</span>
                      </Col>
                      <Col md="6" sm="6" xs="12">
                        <p> {t("Titles.Application Date")}</p>
                        <span>{t("Titles.DDmmyy")}</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6" sm="6" xs="12">
                        <p> {t("Titles.Application name")}</p>
                        <span> {t("Titles.Initial approval")}</span>
                      </Col>

                      <Col md="6" sm="6" xs="12">
                        <p> {t("Titles.Application status")}</p>
                        <span>  {t("Titles.Request initiated")}</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Col className="appC">
                          <Row>
                            <Col className="leftAppC" md="7" sm="7" xs="12">
                              <Image src={user} />
                              <div className="applicant">
                                <h1>{t("Titles.Applicant Name")}</h1>
                                <span>Samantha </span>
                              </div>
                            </Col>
                            <Col className="rightAppC" md="5" sm="5" xs="12">
                              <Button> {t("Buttons.Contact info")}</Button>
                            </Col>
                          </Row>
                        </Col>
                      </Col>
                    </Row>
                    {/* div. */}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
