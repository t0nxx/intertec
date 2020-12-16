import React, { Component } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import RequestInformation from "../../request-information/request-information";
import { withTranslation } from "react-i18next";

import penImage from "../../../assets/pen.svg";

class NameChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      establishmentNameEn: "",
      establishmentNameAr: "",
      reasonOfNameChange: "",
      establishmentNameEnDisableFlag: false,
      establishmentNameArDisableFlag: false,
      reasonOfNameChangeDisableFlag: false,
      invalidArabicName: false,
    };
  }

  componentDidMount() {
    const { nameChangeFormData = {} } = this.props;
    const {
      establishmentNameEn = "",
      establishmentNameAr = "",
      reasonOfNameChange = "",
    } = nameChangeFormData;

    this.setState({
      establishmentNameEn,
      establishmentNameAr,
      reasonOfNameChange,
    });
  }

  /**
   * This will handle establishment name change
   */
  handleEstablishmentNameErChange = (e) => {
    this.setState({
      establishmentNameEn: e.target.value,
    });
  };

  handleEstablishmentNameArChange = (e) => {
    this.setState({
      establishmentNameAr: e.target.value,
    });
  };

  handleReasonOfNameChange = (e) => {
    this.setState({
      reasonOfNameChange: e.target.value,
    });
  };

  validateArabicName = (e) => {
    let arabic = /[\u0600-\u06FF]/;
    if (e && e.target.value) {
      if (arabic.test(e.target.value)) {
        this.setState({
          invalidArabicName: false,
        });
      } else {
        this.setState({
          invalidArabicName: true,
        });
      }
    }
  };

  handleSubmit = () => {
    let validEstablishmentNameEnglish = false;
    let validEstablishmentNameArabic = false;
    let validReasonForNameChange = false;
    const {
      establishmentNameEn,
      establishmentNameAr,
      reasonOfNameChange,
      invalidArabicName,
    } = this.state;
    if (
      establishmentNameEn === "" ||
      establishmentNameEn === null ||
      /branch/i.test(establishmentNameEn) ||
      (establishmentNameEn && establishmentNameEn.trim() === null)
    ) {
      this.setState({
        errorEstablishmentNameEnFlag: true,
      });
    } else {
      this.setState({
        errorEstablishmentNameEnFlag: false,
      });
      validEstablishmentNameEnglish = true;
    }
    if (
      establishmentNameAr === "" ||
      establishmentNameAr === null ||
      (establishmentNameAr && establishmentNameAr.trim() === null)
    ) {
      this.setState({
        errorEstablishmentNameArFlag: true,
      });
    } else {
      this.setState({
        errorEstablishmentNameArFlag: false,
      });
      validEstablishmentNameArabic = true;
    }
    if (
      reasonOfNameChange === "" ||
      reasonOfNameChange === null ||
      (reasonOfNameChange && reasonOfNameChange.trim() === null)
    ) {
      this.setState({
        reasonOfNameChangeFlag: true,
      });
    } else {
      this.setState({
        reasonOfNameChangeFlag: false,
      });
      validReasonForNameChange = true;
    }
    if (
      validEstablishmentNameEnglish &&
      validEstablishmentNameArabic &&
      validReasonForNameChange &&
      !invalidArabicName
    ) {
      let submittedValue = {
        establishmentNameEn,
        establishmentNameAr,
        reasonOfNameChange,
      };
      this.props.handleNameChangeFormSuccess(submittedValue);
    }
  };

  render() {
    const { t } = this.props;
    const {
      establishmentNameEn = "",
      establishmentNameEnDisableFlag = false,
      errorEstablishmentNameEnFlag = false,
      establishmentNameAr = "",
      establishmentNameArDisableFlag = false,
      invalidArabicName = false,
      errorEstablishmentNameArFlag = false,
      reasonOfNameChange = "",
      reasonOfNameChangeDisableFlag = false,
      reasonOfNameChangeFlag = false,
    } = this.state;
    return (
      <React.Fragment>
        <Container fluid={true}>
          <Row>
            {/*Request Information Start*/}
            <RequestInformation />
            {/*Request Information End*/}
          </Row>
          <Row>
            <Col xl={3} />
            <Col xl={6}>
              <Card>
                <Card.Body className="mt-10">
                  <Row>
                    <Image src={penImage} className="ml-3 mr-4 greenIc" />
                    <h3 className={"text-success"}>
                      {t("Titles.Name Change Information")}
                    </h3>
                  </Row>
                  <Row style={{ paddingTop: "10px" }}>
                    {/*Establishment Name English*/}
                    <Col xl={6}>
                      <Form.Group>
                        <Form.Label>
                          {t("Forms.Establishment Name (English)")}
                        </Form.Label>
                        <Form.Control
                          placeholder={t("Forms.Establishment Name (English)")}
                          value={establishmentNameEn}
                          onChange={this.handleEstablishmentNameErChange}
                          disabled={establishmentNameEnDisableFlag}
                          type={"text"}
                        />
                        {errorEstablishmentNameEnFlag && (
                          <span className="text-danger">
                            {t("Error.MustBeValidEstablishName")}
                          </span>
                        )}
                      </Form.Group>
                    </Col>
                    {/*Establishment Name Arabic*/}
                    <Col xl={6}>
                      <Form.Group>
                        <Form.Label>
                          {t("Forms.Establishment Name (Arabic)")}
                        </Form.Label>
                        <Form.Control
                          placeholder={t("Forms.Establishment Name (Arabic)")}
                          onChange={this.handleEstablishmentNameArChange}
                          value={establishmentNameAr}
                          onBlur={this.validateArabicName}
                          disabled={establishmentNameArDisableFlag}
                          type={"text"}
                        />
                        {invalidArabicName && (
                          <span className="text-danger">
                            {t("Error.MustBeValidArabicName")}
                          </span>
                        )}
                        {errorEstablishmentNameArFlag && (
                          <span className="text-danger">
                            {t("Error.Required")}
                          </span>
                        )}
                      </Form.Group>
                    </Col>

                    {/*Reason For Name Change*/}
                    <Col xl={12}>
                      <Form.Group>
                        <Form.Label>
                          {t("Forms.The Reason of Name Change")}
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={reasonOfNameChange}
                          placeholder={t("Forms.The Reason of Name Change")}
                          disabled={reasonOfNameChangeDisableFlag}
                          onChange={this.handleReasonOfNameChange}
                        />
                        {reasonOfNameChangeFlag && (
                          <span className="text-danger">
                            {t("Error.Required")}
                          </span>
                        )}
                      </Form.Group>
                    </Col>

                    {/*Old Name Information Card*/}
                    <Col xl={12} className={"mb-4"}>
                      <h3 className={"form-row"}>
                        <b>{t("Titles.Old Name Information")}</b>
                      </h3>
                      <Card>
                        <Card.Body>
                          <Row>
                            {/* Old Name English*/}
                            <Col xl={6}>
                              <Form.Group>
                                <Form.Label>
                                  {t("Forms.Establishment Name (English)")}
                                </Form.Label>
                                <div>oldNameEnglish</div>
                              </Form.Group>
                            </Col>
                            {/* Old Name Arabic*/}
                            <Col xl={6}>
                              <Form.Group>
                                <Form.Label>
                                  {t("Forms.Establishment Name (Arabic)")}
                                </Form.Label>
                                <div>oldNameArabic</div>
                              </Form.Group>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    {/* Go To Attachment Button*/}
                    <div className="nextBtn">
                      <Button
                        variant="success"
                        type="submit"
                        onClick={this.handleSubmit}
                      >
                        {t("Buttons.Go To Attachment")}
                      </Button>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default withTranslation()(NameChangeForm);
