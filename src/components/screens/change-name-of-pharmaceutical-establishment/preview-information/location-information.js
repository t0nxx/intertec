import React, { Component, Fragment } from "react";
import { withTranslation } from "react-i18next";
import {
  Accordion,
  Button,
  Card,
  Col,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import locationImage from "../../../../assets/location.svg";
import upArrow from "../../../../assets/upArrow4Collaps.svg";
import map from "../../../../assets/map.svg";

class LocationInformation extends Component {
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
                <Image src={locationImage} className="ml-3 mr-4 greenIc" />
                <h3 className="text-success">
                  {t("Titles.Location Information")}
                </h3>
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
                <Row>
                  <Col xl={"6"} lg={"6"} sm={"6"}>
                    <Form.Label className={"label-preview-large"}>
                      <strong>{t("Forms.Emirate")}</strong>
                    </Form.Label>
                    <p className={"label-light"}>{t("tr_emirate_value")}</p>
                  </Col>
                  <Col xl={"6"} lg={"6"} sm={"6"}>
                    <Form.Label className={"label-preview-large"}>
                      <strong>{t("Forms.Area")}</strong>
                    </Form.Label>
                    <p className={"label-light"}>{t("tr_area_value")}</p>
                  </Col>
                </Row>
                <Row>
                  <Col xl={"6"} lg={"6"} sm={"6"}>
                    <Form.Label className={"label-preview-large"}>
                      <strong>{t("Forms.Street")}</strong>
                    </Form.Label>
                    <p className={"label-light"}>{t("tr_street_value")}</p>
                  </Col>
                  <Col xl={"6"} lg={"6"} sm={"6"}>
                    <Form.Label className={"label-preview-large"}>
                      <strong>{t("Forms.Building Name")}</strong>
                    </Form.Label>
                    <p className={"label-light"}>
                      {t("tr_building_name_value")}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xl={"6"} lg={"6"} sm={"6"}>
                    <Form.Label className={"label-preview-large"}>
                      <strong>{t("Forms.Po Box")}</strong>
                    </Form.Label>
                    <p className={"label-light"}>{t("tr_po_box_value")}</p>
                  </Col>
                  <Col xl={"6"} lg={"6"} sm={"6"}>
                    <Form.Label className={"label-preview-large"}>
                      <strong>{t("Forms.Google Map Url")}</strong>
                    </Form.Label>
                    <br />
                    <a href={"#"} target="blank">
                      <Button className="btn-red">
                        <Image src={map} />
                        {t("tr_google_map_url_value")}
                      </Button>
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col xl={"6"} lg={"6"} sm={"6"}>
                    <Form.Label className={"label-preview-large"}>
                      <strong>{t("Forms.Fax")}</strong>
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

export default withTranslation()(LocationInformation);
