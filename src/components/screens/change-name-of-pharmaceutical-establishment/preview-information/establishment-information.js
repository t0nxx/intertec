import React, { Component, Fragment } from "react";
import { Accordion, Card, Col, Form, Image, Row } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import penImage from "../../../../assets/pen.svg";
import upArrow from "../../../../assets/upArrow4Collaps.svg";

class EstablishmentInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  toggleArrow = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };

  render() {
    const { t } = this.props;
    const { isOpen = false } = this.state;
    return (
      <Fragment>
        <Accordion className={"mt-3"}>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              onClick={() => this.toggleArrow()}
            >
              <Row className={"header-info"}>
                <Image src={penImage} className="ml-3 mr-4 greenIc" />
                <h3 className="text-success">
                  {t("Titles.Establishment Information")}
                </h3>
                <Image
                  src={upArrow}
                  className={
                    isOpen ? "arrow rotate ml-3 mr-3" : "arrow ml-3 mr-3"
                  }
                />
              </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Row>
                  <Col xl={"6"} lg={"6"} sm={"6"}>
                    <Form.Group>
                      <Form.Label className={"label-preview-large"}>
                        <strong>
                          {t("Forms.Establishment Name (English)")}
                        </strong>
                      </Form.Label>
                      <p className={"label-light"}>
                        {t("Forms.Establishment Name (English)")}
                      </p>
                    </Form.Group>
                  </Col>
                  <Col xl={"6"} lg={"6"} sm={"6"}>
                    <Form.Group>
                      <Form.Label className={"label-preview-large"}>
                        <strong>
                          {t("Forms.Establishment Name (Arabic)")}
                        </strong>
                      </Form.Label>
                      <p className={"label-light"}>
                        {t("Forms.Establishment Name (Arabic)")}
                      </p>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xl={"6"} lg={"6"} sm={"6"}>
                    <Form.Group>
                      <Form.Label className={"label-preview-large"}>
                        <strong>{t("Forms.Establishment Type")}</strong>
                      </Form.Label>
                      <p className={"label-light"}>
                        {t("Forms.Establishment Type")}
                      </p>
                    </Form.Group>
                  </Col>
                  <Col xl={"6"} lg={"6"} sm={"6"}>
                    <Form.Group>
                      <Form.Label className={"label-preview-large"}>
                        <strong>{t("Forms.Classification")}</strong>
                      </Form.Label>
                      <p className={"label-light"}>
                        {t("Forms.Classification")}
                      </p>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xl={"6"} lg={"6"} sm={"6"}>
                    <Form.Group>
                      <Form.Label className={"label-preview-large"}>
                        <strong>{t("Titles.License Information")}</strong>
                      </Form.Label>
                      <br />
                      <Form.Label className={"label-preview-large"}>
                        <strong>{t("Forms.Certificates")}</strong>
                      </Form.Label>
                      <p className={"label-light"}>
                        <a style={{ textDecoration: "none" }}>
                          {t("Forms.Certificates")}
                        </a>
                      </p>
                    </Form.Group>
                  </Col>
                  <Col xl={"6"} lg={"6"} sm={"6"}>
                    <Form.Label className={"label-preview-large"}>
                      <strong>{t("Forms.Category")}</strong>
                    </Form.Label>
                    <p className={"label-light"}>{t("Forms.Category")}</p>
                  </Col>
                </Row>
                <Row className={"licence-info-box"}>
                  <Col
                    xl={"6"}
                    lg={"6"}
                    sm={"6"}
                    style={{ paddingRight: "0px" }}
                  >
                    <div className={"text-center licence-info-box-element"}>
                      <Form.Label className={"label-preview-large"}>
                        {t("Forms.License Status")}
                      </Form.Label>
                      <p className={"label-light"}>
                        {t("Forms.License Status")}
                      </p>
                    </div>
                  </Col>
                  <Col
                    xl={"6"}
                    lg={"6"}
                    sm={"6"}
                    style={{ paddingLeft: "0px" }}
                  >
                    <div className={"text-center licence-info-box-element"}>
                      <Form.Label className={"label-preview-large"}>
                        {t("Forms.License No")}
                      </Form.Label>
                      <br />
                      <p className={"label-light"}>{t("Forms.License No")}</p>
                    </div>
                  </Col>
                  <Col
                    xl={"6"}
                    lg={"6"}
                    sm={"6"}
                    style={{ paddingRight: "0px" }}
                  >
                    <div className={"text-center licence-info-box-element"}>
                      <Form.Label className={"label-preview-large"}>
                        {t("Forms.Issue Date")}
                      </Form.Label>
                      <br />
                      <p className={"label-light"}>{t("Forms.Issue Date")}</p>
                    </div>
                  </Col>
                  <Col
                    xl={"6"}
                    lg={"6"}
                    sm={"6"}
                    style={{ paddingLeft: "0px" }}
                  >
                    <div className={"text-center licence-info-box-element"}>
                      <Form.Label className={"label-preview-large"}>
                        {t("Texts.Expiry Date")}
                      </Form.Label>
                      <br />
                      <p className={"label-light"}> {t("Texts.Expiry Date")}</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Fragment>
    );
  }
}

export default withTranslation()(EstablishmentInformation);
