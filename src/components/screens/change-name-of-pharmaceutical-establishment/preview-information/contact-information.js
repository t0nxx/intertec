import React, { Component, Fragment } from "react";
import { Accordion, Card, Col, Form, Image, Row } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import contactImage from "../../../../assets/contact.svg";
import upArrow from "../../../../assets/upArrow4Collaps.svg";

class ContactInformation extends Component {
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
                <Image src={contactImage} className="ml-3 mr-4 greenIc" />
                <h3 className="text-success">
                  {t("Titles.Contact Information")}
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
                    <Form.Label className={"label-preview-large"}>
                      <strong>{t("tr_contact_name")}</strong>
                    </Form.Label>
                    <p className={"label-light"}>
                      {t("tr_contact_name_value")}
                    </p>
                  </Col>
                  <Col xl={"6"} lg={"6"} sm={"6"}>
                    <Form.Label className={"label-preview-large"}>
                      <strong>{t("tr_designation")}</strong>
                    </Form.Label>
                    <p className={"label-light"}>{t("tr_designation_value")}</p>
                  </Col>
                </Row>
                <Row>
                  <Col xl={"6"} lg={"6"} sm={"6"}>
                    <Form.Label className={"label-preview-large"}>
                      <strong>{t("tr_primary_email")}</strong>
                    </Form.Label>
                    <p className={"label-light"}>
                      {t("tr_primary_email_value")}
                    </p>
                  </Col>
                  <Col xl={"6"} lg={"6"} sm={"6"}>
                    <Form.Label className={"label-preview-large"}>
                      <strong>{t("tr_alternative_email")}</strong>
                    </Form.Label>
                    <p className={"label-light"}>
                      {t("tr_alternative_email_value")}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xl={"6"} lg={"6"} sm={"6"}>
                    <Form.Label className={"label-preview-large"}>
                      <strong>{t("tr_contact_no")}</strong>
                    </Form.Label>
                    <p className={"label-light"}>{t("tr_contact_no_value")}</p>
                  </Col>
                  <Col xl={"6"} lg={"6"} sm={"6"}>
                    <Form.Label className={"label-preview-large"}>
                      <strong>{t("tr_alternate_contact_no")}</strong>
                    </Form.Label>
                    <p className={"label-light"}>
                      {t("tr_alternate_contact_no_value")}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xl={"6"} lg={"6"} sm={"6"}>
                    <Form.Label className={"label-preview-large"}>
                      <strong>{t("tr_fax")}</strong>
                    </Form.Label>
                    <p className={"label-light"}>{t("tr_fax_value")}</p>
                  </Col>
                  <Col xl={"6"} lg={"6"} sm={"6"} />
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Fragment>
    );
  }
}
export default withTranslation()(ContactInformation);
