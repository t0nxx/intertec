import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import File from "../../../../assets/file.svg";
import DraggerAttachmentComponent from "./dragger-attachment";
import RequestInformation from "../../../request-information/request-information";
import { withTranslation } from "react-i18next";
import documentClose from "../../../../assets/delete.svg";
import { uuidv4 } from "../../../../utils/UtilMethods";

/**
 * This will render final approval attachment for user to upload
 */
class FinalAttachment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileArray: [],
    };
  }

  submitAttachmentData = () => {
    const { fileArray = [] } = this.state;
    if (fileArray && fileArray.length > 0 && fileArray.length === 1) {
      console.log(fileArray);
    } else if (fileArray && fileArray.length > 1) {
      console.log("FAIL");
    }
  };

  /*
   *  This method is used to convert into base64 format
   * */
  convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  /*
   *  This method provides selected files
   * */
  handleUpload = async (info) => {
    let fileObj = {};
    let files = info.target.files;
    const base64 = await this.convertBase64(files[0]);
    fileObj.fileId = uuidv4();
    fileObj.name = files[0].name;
    fileObj.size = files[0].size;
    fileObj.file = files[0];
    fileObj.base64 = base64;

    let fileArray = [fileObj];
    this.setState({ fileArray: fileArray });
  };

  /*
   * This method is used to remove uploaded file
   * */
  handleRemove = (fileId) => {
    const { fileArray } = this.state;
    this.setState({
      fileArray: fileArray.filter((item) => item.fileId !== fileId),
    });
  };

  render() {
    const { t } = this.props;
    const error_establishment_name = t("App.va_establishment_name");
    const tr_attachment_file = t("Titles.attachment_file");
    const tr_facility_license_heading = t(
      "Titles.facility_license_issued_by_mohap"
    );
    const submit = t("Buttons.Submit");
    return (
      <Fragment>
        <Container fluid={true}>
          <Row>
            <Col xl={12} />
            <RequestInformation />
            <Col xl={12} />
          </Row>
          <Row>
            <Col xl={2} />
            <Col xl={8} style={{ marginBottom: "100px" }}>
              <Card className={"whiteColor final_attachment_main_card"}>
                <Card.Body>
                  <Row className={"mb-2"}>
                    <Col xl={12}>
                      <p className={"final_attachment_title"}>
                        {tr_attachment_file}
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={12}>
                      <p className={"final_attachment_subtitle"}>
                        {tr_facility_license_heading}
                      </p>
                    </Col>
                  </Row>
                  <DraggerAttachmentComponent
                    handleupload={this.handleUpload}
                    filelist={this.state.fileArray}
                  />

                  <Row style={{ marginTop: "1rem" }}>
                    <Col xl={12}>
                      {this.state.fileArray &&
                        this.state.fileArray.map((files, index) => (
                          <Card
                            key={"ep" + index}
                            className="doc-wrap card_custome_viewdocument final_approval_uploaded_file_card"
                          >
                            <Row>
                              <Col xl={2} lg={2} sm={2}>
                                <div style={{ textAlign: "center" }}>
                                  <img
                                    className="process-img"
                                    src={File}
                                    style={{ padding: "5px" }}
                                    alt={""}
                                  />
                                </div>
                              </Col>
                              <Col xl={9} lg={9} sm={9} className={"align-me"}>
                                <div>
                                  <h4>{files.name}</h4>
                                  <p>{files.size} kb</p>
                                </div>
                              </Col>
                              <Col xl={1} lg={1} sm={1} className={"align-me"}>
                                <img
                                  className="mr-2 circle-close"
                                  src={documentClose}
                                  alt="Close Icon"
                                  onClick={() =>
                                    this.handleRemove(files.fileId)
                                  }
                                  style={{ cursor: "pointer" }}
                                />
                              </Col>
                            </Row>
                          </Card>
                        ))}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Row>
                <div
                  className="nextBtn"
                  style={{ margin: "-17px auto -40px auto" }}
                >
                  <Button
                    variant="success"
                    type="submit"
                    onClick={this.submitAttachmentData}
                  >
                    {submit}
                  </Button>
                </div>
              </Row>
              {/* <div className="steps-action">
                                <div className="step-btn">
                                    <Button
                                        className="final_attachment_submit_btn"
                                        onClick={this.submitAttachmentData}
                                    >
                                       {submit}
                  </Button>
                                </div>
                            </div> */}
            </Col>
            <Col xl={2} />
          </Row>
        </Container>
      </Fragment>
    );
  }
}

// FinalApprovalAttachment.propTypes = {
//   intl: PropTypes.object.isRequired,
//   uploadArrayOfObject: PropTypes.array.isRequired,
//   handleApprovalAttachmentSuccess: PropTypes.func.isRequired,
// };

export default withTranslation()(FinalAttachment);
