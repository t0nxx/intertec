import React, { Component } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Stepper from "react-stepper-horizontal";
import { withTranslation } from "react-i18next";

import EstablishmentPlanUpload from "./establishment-plan-upload";
import EstablishmentPlanUploadName from "./establishment-plan-upload-name";
import EstablishmentPlanUploadDepartment from "./establishment-plan-upload-department";
import RequestInformation from "../../../request-information/request-information";
import Activetick from "../../../../assets/active_tick.svg";
import Disabletick from "../../../../assets/stepCheck.svg";
import Successtick from "../../../../assets/stepChecked.svg";
import rightArrow from "../../../../assets/rightArrowBtn.svg";
import leftArrow from "../../../../assets/leftArrowBtn.svg";

class AttachmentFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      currentTab: 1,
      isOpen: false,
      isDisabled: true,
      step1: [],
      step2: [],
      step3: [],
      isSubmitClicked: false,
    };
  }
  componentDidMount() {
    this.updateStepUsingProps();
  }

  componentWillUnmount() {
    const {
      step1 = [],
      step2 = [],
      step3 = [],
      currentTab,
      isSubmitClicked,
    } = this.state;
    if (
      isSubmitClicked === false &&
      (step1.length > 0 || step2.length > 0 || step3.length > 0)
    ) {
      this.props.handleOnlyAttachments({
        step1,
        step2,
        step3,
      });
    }
  }

  onChange = (current) => {
    this.setState({ current });
  };

  prev = () => {
    const current = this.state.current - 1;
    const currentTab = this.state.currentTab - 1;
    this.setState({ current });
    if (currentTab === 1) {
      this.setState({ currentTab: 1 });
    } else if (currentTab === 2) {
      this.setState({ currentTab: 2 });
    }
  };

  next() {
    const {
      step1 = [],
      step2 = [],
      step3 = [],
      currentTab = 0,
      current: stateCurrent,
    } = this.state;
    if (step1.length > 0 && currentTab === 1) {
      const current = stateCurrent + 1;
      this.setState({ current: current, currentTab: 2 });
    } else if (step2.length > 0 && currentTab === 2) {
      const current = stateCurrent + 1;
      this.setState({ current: current, currentTab: 3, isDisabled: false });
    } else if (step3.length > 0 && currentTab === 3) {
      const current = stateCurrent + 1;
      this.setState({ current: current, currentTab: 3 });
    }
  }
  handleEstablishmentRequest = (array) => {
    this.setState({
      step2: array,
    });
  };

  handleLocation = (array) => {
    this.setState({
      step3: array,
    });
  };

  handleEstablishmentPlan = (array) => {
    this.setState({
      step1: array,
    });
  };
  // This is GoToPreview Step
  manupulateAttachmentData = () => {
    const { step1 = [], step2 = [], step3 = [], currentTab } = this.state;
    if (
      currentTab === 3 &&
      step1.length > 0 &&
      step2.length > 0 &&
      step3.length > 0
    ) {
      this.setState({ isSubmitClicked: true }, () => {
        this.props.handleAttachmentSuccess({
          step1,
          step2,
          step3,
        });
      });
    }
    //return this.props.attachmentData(data)
  };
  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };
  updateStepUsingProps = () => {
    const { attachmentFormData = {} } = this.props;
    if (attachmentFormData) {
      const { step1 = [], step2 = [], step3 = [] } = attachmentFormData;
      this.setState({
        step1: step1,
        step2: step2,
        step3: step3,
      });
    }
  };
  render() {
    let icon1 = "";
    let icon2 = "";
    let icon3 = "";
    const { current } = this.state;
    if (current === 0) {
      icon1 = Activetick;
      icon2 = Disabletick;
      icon3 = Disabletick;
    } else if (current === 1) {
      icon1 = Successtick;
      icon2 = Activetick;
      icon3 = Disabletick;
    } else if (current === 2) {
      icon1 = Successtick;
      icon2 = Successtick;
      icon3 = Activetick;
    }

    const { t } = this.props;
    const tr_attachment_file = t("Titles.attachment_file");
    const tr_establishment_plan = t("Titles.establishment_plan");
    const tr_establishment_request_letter = t(
      "Titles.establishment_request_letter"
    );
    const tr_location_photos = t("Titles.location_photos");
    const tr_facility_license_issued_by = t(
      "Titles.facility_license_issued_by_mohap"
    );
    const tr_letter_from_the_owner_requesting = t(
      "Titles.letter_from_the_owner_requesting"
    );
    const tr_trade_license_issued_by_the_department = t(
      "Titles.trade_license_issued_by_the_department"
    );

    const steps = [
      {
        title: tr_facility_license_issued_by,
        content: <EstablishmentPlanUpload />,
        icon: icon1,
      },
      {
        title: tr_letter_from_the_owner_requesting,
        content: <EstablishmentPlanUploadName />,
        icon: icon2,
      },
      {
        title: tr_trade_license_issued_by_the_department,
        content: <EstablishmentPlanUploadDepartment />,
        icon: icon3,
      },
    ];

    const comp = steps[current].content;
    const tr_1of4 = t("Titles." + (current + 1) + "of4");
    const tr_completed = t("Titles.completed");

    return (
      <>
        <React.Fragment>
          <Row>
            <Col xl={2} />
            <Col xl={8}>
              <RequestInformation />
            </Col>
            <Col xl={2} />
          </Row>
          <Row>
            <Col xl={2} />
            <Col
              xl={8}
              style={{
                marginBottom: "100px",
              }}
            >
              <div className="mt-1" style={{ marginTop: "10px" }}>
                <Row className="attach-stepper ">
                  <Col xl={12}>
                    <Card.Body
                      style={{ backgroundColor: "white", margin: "-20px" }}
                    >
                      <div className="upload_content">
                        <div className="stepper-title">
                          <h1 style={{ textAlign: "start" }}>
                            {tr_attachment_file}
                          </h1>
                          <div
                            className="steps-num"
                            style={{ textAlign: "end", marginTop: "-40px" }}
                          >
                            <span>
                              {tr_completed} <strong>{tr_1of4}</strong>
                            </span>
                          </div>
                        </div>
                        <div
                          className="stepper      mb-5"
                          style={{ display: "flex" }}
                        >
                          <Col xl={1}>
                            {current > 0 && (
                              <div
                                className="prev-btn prev_custom_btn"
                                onClick={() => this.prev()}
                              >
                                <img
                                  className="leftArrow"
                                  src={leftArrow}
                                  alt="prev"
                                />
                              </div>
                            )}
                          </Col>
                          <Col xl={10}>
                            <Stepper steps={steps} activeStep={current} />
                          </Col>
                          <Col xl={1}>
                            {current < steps.length - 1 && (
                              <div
                                className="next-btn next_custom_btn"
                                onClick={() => this.next()}
                              >
                                {/* <RightOutlined /> */}
                                <img
                                  className="rightArrow"
                                  src={rightArrow}
                                  alt="next"
                                />
                              </div>
                            )}
                          </Col>
                        </div>
                        <div className="steps-content">
                          {current === 0 ? (
                            <EstablishmentPlanUpload
                              //uploadedData={this.state.establishmentPlanData}
                              uploadArrayOfObject={this.state.step1}
                              submit={this.handleEstablishmentPlan}
                            />
                          ) : current === 1 ? (
                            <EstablishmentPlanUploadName
                              // uploadedData={this.state.establishmentRequestData}
                              uploadArrayOfObject={this.state.step2}
                              submit={this.handleEstablishmentRequest}
                            />
                          ) : current === 2 ? (
                            <EstablishmentPlanUploadDepartment
                              // uploadedData={this.state.locationData}
                              uploadArrayOfObject={this.state.step3}
                              submit={this.handleLocation}
                            />
                          ) : null}
                          {/* <comp /> */}
                        </div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
                {/* <Link to="#"> */}
                <div className="steps-action" style={{ textAlign: "center" }}>
                  <div className="step-btn">
                    <Button
                      className="go_to_preview"
                      onClick={this.manupulateAttachmentData}
                      disabled={this.state.isDisabled}
                      style={{ width: "200px", height: "50px" }}
                    >
                      {t("Buttons.Go To Preview")}
                      {/* <FormattedMessage id="App.go_to_preview" /> */}
                    </Button>
                  </div>
                </div>
                {/* </Link> */}
              </div>
            </Col>
            <Col xl={2} />
          </Row>
        </React.Fragment>
      </>
    );
  }
}

AttachmentFile.defaultProps = {
  handleOnlyAttachments: () => {},
  handleAttachmentSuccess: () => {},
};

export default withTranslation()(AttachmentFile);
