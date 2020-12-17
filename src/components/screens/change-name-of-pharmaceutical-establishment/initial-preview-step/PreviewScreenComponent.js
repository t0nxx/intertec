import React, { Fragment } from "react";
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
import "./preview-screen.scss";
import editPen from "../../../../assets/editPen.svg";

import documentClose from "../../../../assets/document-close.svg";
import File from "../../../../assets/icon-document.svg";
import collaps from "../../../../assets/collaps.svg";
import expand from "../../../../assets/expand.svg";
import upArrow4Collaps from "../../../../assets/upArrow4Collaps.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { successToast } from "../../../../utils";

class PreviewScreenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: "0",
      isAttachmentsOpen: "0",
      invalidArabicName: false,
      colorId: "collapse",
      initialArrow: false,
      experienceArrow: false,
      showConfirmPopup: false,
      confirmPopupClose: false,
      editFields: false,
      establishmentNameEn: "",
      establishmentNameAr: "",
      reasonOfNameChange: "",
      step1Files: [],
      step2Files: [],
      step3Files: [],
    };
  }

  componentDidMount() {
    let submittedValues = this.props.nameChangeFormData;
    let submittedFiles = this.props.attachmentFormData;
    let establishmentNameEn = "";
    let establishmentNameAr = "";
    let reasonOfNameChange = "";
    let step1Files = [];
    let step2Files = [];
    let step3Files = [];
    if (submittedValues && submittedValues.establishmentNameEn !== null) {
      establishmentNameEn = submittedValues.establishmentNameEn;
    }
    if (submittedValues && submittedValues.establishmentNameAr !== null) {
      establishmentNameAr = submittedValues.establishmentNameAr;
    }
    if (submittedValues && submittedValues.reasonOfNameChange !== null) {
      reasonOfNameChange = submittedValues.reasonOfNameChange;
    }
    if (submittedFiles && submittedFiles.step1 !== null) {
      step1Files = submittedFiles.step1;
    }
    if (submittedFiles && submittedFiles.step2 !== null) {
      step2Files = submittedFiles.step2;
    }
    if (submittedFiles && submittedFiles.step3 !== null) {
      step3Files = submittedFiles.step3;
    }
    this.setState({
      establishmentNameEn: establishmentNameEn,
      establishmentNameAr: establishmentNameAr,
      reasonOfNameChange: reasonOfNameChange,
      step1Files: step1Files,
      step2Files: step2Files,
      step3Files: step3Files,
    });
  }

  handleCollapse = () => {
    this.setState({
      initialArrow: false,
      experienceArrow: false,
      colorId: "collapse",
      isOpen: "0",
      isAttachmentsOpen: "0",
    });
  };

  handleExpand = () => {
    this.setState({
      initialArrow: true,
      experienceArrow: true,
      colorId: "expand",
      isOpen: "1",
      isAttachmentsOpen: "1",
    });
  };

  handleInitialArrow = () => {
    this.setState({ initialArrow: !this.state.initialArrow });
  };

  handleExperienceArrow = () => {
    this.setState({ experienceArrow: !this.state.experienceArrow });
  };

  removeDocument = (fileType, fileId) => {
    let docDetails = [];
    let fileState;
    let selectedDocIndex;
    if (fileType === "step1Files") {
      docDetails = [...this.state.step1Files];
      fileState = "step1Files";
    } else if (fileType === "step2Files") {
      docDetails = [...this.state.step2Files];
      fileState = "step2Files";
    } else if (fileType === "step3Files") {
      docDetails = [...this.state.step3Files];
      fileState = "step3Files";
    } else {
      docDetails = [];
      fileState = "dummy";
    }

    docDetails = docDetails.filter((file) => file.fileId !== fileId);
    this.setState({ [fileState]: docDetails }, () => {
      const { step1Files = [], step2Files = [], step3Files = [] } = this.state;
      this.props.handleOnlyAttachments({
        step1: step1Files,
        step2: step2Files,
        step3: step3Files,
      });
    });
  };

  handleEstablishmentName = (e) => {
    this.setState({
      establishmentNameEn: e.target.value,
    });
  };

  handleEstablishmentNameAr = (e) => {
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
      } else if (e.target.value.includes("فرع")) {
        this.setState({
          invalidArabicName: true,
        });
      } else {
        this.setState({
          invalidArabicName: true,
        });
      }
    }
  };

  handleFormSubmit = () => {
    const { t } = this.props;
    let validEstablishmentNameEnglish = false;
    let validEstablishmentNameArabic = false;
    let validReasonForNameChange = false;
    let {
      establishmentNameEn,
      establishmentNameAr,
      reasonOfNameChange,
      invalidArabicName,
      step1Files,
      step2Files,
      step3Files,
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
      step1Files.length >= 1 &&
      step2Files.length >= 1 &&
      step3Files.length >= 1 &&
      !invalidArabicName
    ) {
      // Valid Data
      // this.props.handlePreviewSuccess();

      this.setState({ showConfirmPopup: true });
    } else {
      // Invalid Data
      //   this.setState({ showConfirmPopup: true });
    }
  };

  handleToggleAttachment = () => {
    this.setState((preState, prevProps) => {
      return {
        isAttachmentsOpen: preState.isAttachmentsOpen === "1" ? "0" : "1",
      };
    });
  };

  handleToggleOpen = () => {
    this.setState((preState, prevProps) => {
      return { isOpen: preState.isOpen === "1" ? "0" : "1" };
    });
  };

  render() {
    const { t } = this.props;
    const {
      establishmentNameEn,
      establishmentNameAr,
      reasonOfNameChange,
      step1Files,
      step2Files,
      step3Files,
      editFields,
      isOpen,
      isAttachmentsOpen,
    } = this.state;
    const close = t("Buttons.Close");
    return (
      <>
        <Fragment>
          <Row className="mt-3">
            <Col xl={3}></Col>
            <Col xl={6}>
              <Row>
                <Col xl={12}>
                  <div className="cntrl-btn-div">
                    <Button
                      color="secondary"
                      name="collapse"
                      onClick={this.handleCollapse}
                      className={
                        this.state.colorId == "collapse"
                          ? "dark-btn-color"
                          : "no-color"
                      }
                    >
                      <Image src={collaps} />
                      {t("Titles.Collapse All")}
                    </Button>
                    <Button
                      name="expand"
                      color="secondary"
                      onClick={this.handleExpand}
                      className={
                        this.state.colorId == "expand"
                          ? "dark-btn-color"
                          : "no-color"
                      }
                    >
                      <Image src={expand} />
                      {t("Titles.Expand All")}
                    </Button>
                  </div>
                  <div className="float-right">
                    <Button
                      className="frm-sub-btn"
                      onClick={() => this.handleFormSubmit()}
                    >
                      {t("Buttons.Submit")}
                    </Button>
                  </div>
                </Col>
              </Row>

              <div className="block-card">
                <Accordion activeKey={isOpen}>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey={"1"}
                      onClick={() => this.handleToggleOpen()}
                    >
                      <Row className="header-info">
                        <Col md="11" xs="11">
                          <span className="label-preview-info-title">
                            {t("Titles.Establishment Information")}
                          </span>
                        </Col>
                        <Col md="1" xs="1">
                          <Image
                            src={upArrow4Collaps}
                            className={
                              isOpen === "0" ? "arrow rotate " : "arrow"
                            }
                          />
                        </Col>
                      </Row>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={"1"}>
                      <Card.Body>
                        <Row>
                          <Col xl={5} className="pr-0">
                            <Form.Group>
                              <Form.Label
                                className={
                                  !editFields
                                    ? "mb-0 label-preview-large"
                                    : "label-preview-large"
                                }
                              >
                                {t("Titles.Establishment Name (English)")}
                              </Form.Label>
                              <br />
                              {!editFields ? (
                                <span className="label-our-light">
                                  {establishmentNameEn}
                                </span>
                              ) : (
                                <>
                                  <Form.Control
                                    placeholder={t(
                                      "Titles.Establishment Name (English)"
                                    )}
                                    name="establishmentNameEn"
                                    onChange={this.handleEstablishmentName}
                                    value={establishmentNameEn}
                                  />

                                  {this.state.errorEstablishmentNameEnFlag && (
                                    <label className={"redColor"}>
                                      {t("Error.MustBeValidEstablishName")}
                                    </label>
                                  )}
                                </>
                              )}
                            </Form.Group>
                          </Col>
                          <Col xl={5} className="pr-0">
                            <Form.Group>
                              <Form.Label
                                className={
                                  !editFields
                                    ? "mb-0 label-preview-large"
                                    : "label-preview-large"
                                }
                              >
                                {t("Forms.Establishment Name (Arabic)")}
                              </Form.Label>
                              <br />
                              {!editFields ? (
                                <span className="label-our-light">
                                  {establishmentNameAr}
                                </span>
                              ) : (
                                <>
                                  <Form.Control
                                    placeholder={t(
                                      "Forms.Establishment Name (Arabic)"
                                    )}
                                    name="establishmentNameAr"
                                    value={establishmentNameAr}
                                    onChange={this.handleEstablishmentNameAr}
                                    onBlur={this.validateArabicName}
                                  />

                                  {this.state.invalidArabicName && (
                                    <label className={"redColor"}>
                                      {t("Error.MustBeValidArabicName")}
                                    </label>
                                  )}
                                  {this.state.errorEstablishmentNameArFlag && (
                                    <label className={"redColor"}>
                                      {t("Error.Required")}
                                    </label>
                                  )}
                                </>
                              )}
                            </Form.Group>
                          </Col>
                          <Col xl={2} style={{ textAlign: "right" }}>
                            <Image
                              src={editPen}
                              className="edit"
                              onClick={() =>
                                this.setState({ editFields: true })
                              }
                            />
                          </Col>

                          <Col xl={12}>
                            <Form.Group>
                              <Form.Label
                                className={
                                  !editFields
                                    ? "mb-0 label-preview-large"
                                    : "label-preview-large"
                                }
                              >
                                {t("Forms.The Reason of Name Change")}
                              </Form.Label>

                              <br />
                              {!editFields ? (
                                <span className="label-our-light">
                                  {reasonOfNameChange}
                                </span>
                              ) : (
                                <>
                                  <Form.Control
                                    as="textarea"
                                    name="reasonOfNameChange"
                                    onChange={this.handleReasonOfNameChange}
                                    placeholder={t(
                                      "Forms.The Reason Of Name Change"
                                    )}
                                    value={reasonOfNameChange}
                                  />

                                  {this.state.reasonOfNameChangeFlag && (
                                    <label className={"redColor"}>
                                      {t("Error.Required")}
                                    </label>
                                  )}
                                </>
                              )}
                            </Form.Group>
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={12} className={"mb-4"}>
                            <label className="label-preview-info-title remove-weight">
                              {t("Titles.Old Name Information")}
                            </label>
                            <Card className="border-card">
                              <Card.Body>
                                <Row>
                                  <Col xl={6}>
                                    <label className="label-preview-large mb-0">
                                      {t("Titles.Establishment Name (English)")}
                                    </label>
                                    <div className="label-our-light">
                                      oldNameEnglish
                                    </div>
                                  </Col>
                                  <Col xl={6}>
                                    <label className="label-preview-large mb-0">
                                      {t("Forms.Establishment Name (Arabic)")}
                                    </label>
                                    <div className="label-our-light">
                                      oldNameArabic
                                    </div>
                                  </Col>
                                </Row>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>

              <div className="block-card">
                <Accordion activeKey={isAttachmentsOpen}>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey={"1"}
                      onClick={() => this.handleToggleAttachment()}
                    >
                      <Row className="header-info">
                        <Col md="11" xs="11">
                          <span className="label-preview-info-title">
                            {t("Titles.Attachments")}
                          </span>
                        </Col>
                        <Col md="1" xs="1">
                          <Image
                            src={upArrow4Collaps}
                            className={
                              isAttachmentsOpen === "0"
                                ? "arrow rotate "
                                : "arrow"
                            }
                          />
                        </Col>
                      </Row>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={"1"}>
                      <Card.Body>
                        {step1Files &&
                          step1Files.map((file, index) => (
                            <Row
                              key={file.fileId}
                              style={{ marginTop: "1rem" }}
                            >
                              <Col xl={12}>
                                <Card className="border-card" style={{}}>
                                  <Card.Body>
                                    <Row>
                                      <Col xl={2}>
                                        <img
                                          className="process-img remove-width-class"
                                          src={File}
                                        />
                                      </Col>
                                      <Col xl={9} className="pl-0">
                                        <div className="text-wrap doc-info">
                                          <span>{file.name}</span>
                                          <p>
                                            {(file.size / 1024).toFixed(2)} kb
                                          </p>
                                        </div>
                                      </Col>
                                      <Col xl={1} className="my-auto">
                                        <img
                                          className="circle-close"
                                          src={documentClose}
                                          alt="circle-close"
                                          onClick={() =>
                                            this.removeDocument(
                                              "step1Files",
                                              file.fileId
                                            )
                                          }
                                        />
                                      </Col>
                                    </Row>
                                  </Card.Body>
                                </Card>
                              </Col>
                            </Row>
                          ))}
                        {step2Files &&
                          step2Files.map((file, index) => (
                            <Row
                              key={file.fileId}
                              style={{ marginTop: "1rem" }}
                            >
                              <Col xl={12}>
                                <Card className="border-card" style={{}}>
                                  <Card.Body>
                                    <Row>
                                      <Col xl={2}>
                                        <img
                                          className="process-img remove-width-class"
                                          src={File}
                                        />
                                      </Col>
                                      <Col xl={9} className="pl-0">
                                        <div className="text-wrap doc-info">
                                          <span>{file.name}</span>
                                          <p>
                                            {(file.size / 1024).toFixed(2)} kb
                                          </p>
                                        </div>
                                      </Col>
                                      <Col xl={1} className="my-auto">
                                        <img
                                          className="circle-close"
                                          src={documentClose}
                                          alt=""
                                          onClick={() =>
                                            this.removeDocument(
                                              "step2Files",
                                              file.fileId
                                            )
                                          }
                                        />
                                      </Col>
                                    </Row>
                                  </Card.Body>
                                </Card>
                              </Col>
                            </Row>
                          ))}
                        {step3Files &&
                          step3Files.map((file, index) => (
                            <Row
                              key={file.fileId}
                              style={{ marginTop: "1rem" }}
                            >
                              <Col xl={12}>
                                <Card className="border-card" style={{}}>
                                  <Card.Body>
                                    <Row>
                                      <Col xl={2}>
                                        <img
                                          className="process-img remove-width-class"
                                          src={File}
                                        />
                                      </Col>
                                      <Col xl={9} className="pl-0">
                                        <div className="text-wrap doc-info">
                                          <span>{file.name}</span>
                                          <p>
                                            {(file.size / 1024).toFixed(2)} kb
                                          </p>
                                        </div>
                                      </Col>
                                      <Col xl={1} className="my-auto">
                                        <img
                                          className="circle-close"
                                          src={documentClose}
                                          alt=""
                                          onClick={() =>
                                            this.removeDocument(
                                              "step3Files",
                                              file.fileId
                                            )
                                          }
                                        />
                                      </Col>
                                    </Row>
                                  </Card.Body>
                                </Card>
                              </Col>
                            </Row>
                          ))}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>

              <Row className="justify-content-center mt-4">
                <div className="step-btn">
                  <Button
                    type="primary"
                    className="frm-sub-btn"
                    onClick={() => this.handleFormSubmit()}
                  >
                    {t("Buttons.Submit")}
                  </Button>
                </div>
              </Row>
            </Col>
            {this.state.showConfirmPopup ? (
              <Row className="popup-layout" style={{ marginBottom: "20px" }}>
                <Col xl={12}>
                  <div
                    id="popup"
                    style={{ textAlign: "center" }}
                    className={`${
                      this.state.showConfirmPopup ? "" : "overlay"
                    }`}
                  >
                    <div className="popup">
                      <h2>
                        {/* <WarningOutlined className="green" /> */}
                        <FontAwesomeIcon
                          icon={faExclamationTriangle}
                          size="lg"
                          color="black"
                        />
                      </h2>
                      <div className="row justify-content-center content">
                        <Col xl="8">{t("Forms.Preview Submit Message")}</Col>
                      </div>
                      <div className="row justify-content-center mb-4">
                        <a href="#">
                          <Button
                            onClick={() =>
                              this.setState(
                                {
                                  showConfirmPopup: false,
                                  confirmPopupClose: true,
                                },
                                () => {
                                  successToast(t("Titles.Submit Success"));
                                  setTimeout(() => {
                                    window.location.href = "/success";
                                  }, 400);
                                }
                              )
                            }
                            className="round-btn-close"
                          >
                            {close}
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            ) : (
              <></>
            )}
            <Col xl={3}></Col>
          </Row>
        </Fragment>
      </>
    );
  }
}

export default withTranslation()(PreviewScreenComponent);
