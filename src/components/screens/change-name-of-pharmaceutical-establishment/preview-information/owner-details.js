import React, { Component, Fragment } from "react";
import { withTranslation } from "react-i18next";
import { Accordion, Card, Col, Form, Image, Row } from "react-bootstrap";
import ownerImage from "../../../../assets/owner.svg";
import userPhoto from "../../../../assets/userPhoto.svg";
import upArrow from "../../../../assets/upArrow4Collaps.svg";

class OwnerDetails extends Component {
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
                <Image src={ownerImage} className="ml-3 mr-4 greenIc" />
                <h3 className="text-success">{t("Titles.Owner Details")}</h3>
                <Image
                  src={upArrow}
                  className={
                    isOpen ? "arrow rotate ml-auto mr-3" : "arrow ml-auto mr-3"
                  }
                />
              </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Row gutter={[16, 16]} align="middle">
                  <Col xl={4} lg={"4"} sm={"4"}>
                    <Card className="img-card">
                      <Form.Group className="uploadPhoto">
                        <Image src={userPhoto} />
                      </Form.Group>
                    </Card>
                  </Col>
                  <Col xl={4} lg={"4"} sm={"4"}>
                    <div style={{ marginTop: 30 }}>
                      <h1>
                        <b>{t("Forms.Gender")}</b>
                      </h1>
                      <p className={"label-light"}>{t("gender")}</p>
                    </div>
                  </Col>
                  <Col xl={4} lg={"4"} sm={"4"}>
                    <div style={{ marginTop: 30 }}>
                      <h1>
                        <b>{t("Forms.UAE Citzen")}</b>
                      </h1>
                      <p className={"label-light"}>
                        {t("tr_uae_citizen_value")}
                      </p>
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col xl={"4"} lg={"4"} sm={"4"}>
                    <Form.Label className={"label-preview-large"}>
                      {t("Forms.First name")}
                    </Form.Label>
                    <p className={"label-light"}>{t("tr_first_name_ar")}</p>
                  </Col>
                  <Col xl={"4"} lg={"4"} sm={"4"}>
                    <Form.Label className={"label-preview-large"}>
                      {t("Forms.Middle name")}
                    </Form.Label>
                    <p className={"label-light"}>{t("tr_middle_name_ar")}</p>
                  </Col>
                  <Col xl={"4"} lg={"4"} sm={"4"}>
                    <Form.Label className={"label-preview-large"}>
                      {t("Forms.Last name")}
                    </Form.Label>
                    <p className={"label-light"}>{t("tr_family_name_ar")}</p>
                  </Col>
                </Row>
                <Row>
                  <Col xl={"4"} lg={"4"} sm={"4"}>
                    <Form.Label className={"label-preview-large"}>
                      {t("Forms.Nationality")}
                    </Form.Label>
                    <p className={"label-light"}>{t("tr_nationality_value")}</p>
                  </Col>
                  <Col xl={"4"} lg={"4"} sm={"4"}>
                    <Form.Label className={"label-preview-large"}>
                      {t("Forms.Passport No")}
                    </Form.Label>
                    <p className={"label-light"}>{t("tr_passport_no_value")}</p>
                  </Col>
                  <Col xl={"4"} lg={"4"} sm={"4"}>
                    <Form.Label className={"label-preview-large"}>
                      {t("Forms.Emirates ID")}
                    </Form.Label>
                    <p className={"label-light"}>{t("tr_emirate_id_value")}</p>
                  </Col>
                </Row>
                <Row>
                  <Col xl={"4"} lg={"4"} sm={"4"}>
                    <Form.Label className={"label-preview-large"}>
                      {t("Forms.Family Book No")}
                    </Form.Label>
                    <p className={"label-light"}>
                      {t("tr_family_book_no_value")}
                    </p>
                  </Col>
                  <Col xl={"4"} lg={"4"} sm={"4"}>
                    <Form.Label className={"label-preview-large"}>
                      {t("Forms.Share Percentage")}
                    </Form.Label>
                    <p className={"label-light"}>
                      {t("tr_share_percentage_value")}
                    </p>
                  </Col>
                </Row>
                <Row className={"ownerDetail"}>
                  <Col xl={"6"} lg={"6"} sm={"6"}>
                    <Form.Label className={"label-preview-large"}>
                      {t("Forms.Contact Number")}
                    </Form.Label>
                    <p className={"label-light"}>{t("tr_contact_no_value")}</p>
                  </Col>
                  <Col xl={"6"} lg={"6"} sm={"6"}>
                    <Form.Label className={"label-preview-large"}>
                      {t("Forms.Primary Email")}
                    </Form.Label>
                    <p className={"label-light"}>
                      {t("tr_primary_email_value")}
                    </p>
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

export default withTranslation()(OwnerDetails);
