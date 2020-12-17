import React, { Component, Fragment } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import File from "../../../assets/reviewer/file.png";
import UpArrow from "../../../assets/reviewer/upArrow.svg";
import AttachOption from "./attach-option";
import { withTranslation } from "react-i18next";

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
class ReviewerDocuments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      showFileUpload: false,
      fileArray: [],
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleUpload = async (info) => {
    this.setState({
      fileArray: [],
    });
    let fileObj = {};
    let files = info.target.files;
    const base64 = await this.convertBase64(files[0]);
    fileObj.fileId = uuidv4();
    fileObj.name = files[0].name;
    fileObj.size = files[0].size;
    fileObj.file = files[0];
    fileObj.base64 = base64;

    let fileArray = [...this.state.fileArray, fileObj];
    this.setState({ fileArray: fileArray });
    console.log("UPLOADED FILE ", fileArray);
  };

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

  changeUploadFile = () => {
    this.setState({
      showFileUpload: !this.state.showFileUpload,
    });
  };

  render() {
    const { t, files = [] } = this.props;
    const tr_drag_and_drop_documents = t("Titles.DragAndDropDocuments");
    const upload_file = t("Buttons.UploadFile");
    const cancel = t("Buttons.Cancel");
    const tr_browse_from_computer = t("Titles.BrowseFromComputer");
    const tr_supported_files_for_upload = t("Titles.SupportedFilesForUpload");

    const { showFileUpload } = this.state;

    return (
      <Fragment>
        {showFileUpload && (
          <Card className="display-reviewercomment-uploadFile-card mb-3 p-4">
            <Col lg={12} sm={12} xl={12}>
              <input
                id="myInput"
                accept=".pdf,.png,.jpeg,.docx"
                type="file"
                ref={(ref) => (this.upload = ref)}
                style={{ display: "none" }}
                onChange={(e) => this.handleUpload(e)}
              />
              <Row>
                <Col xl={6} lg={6} sm={6} className={"label-file-name"}>
                  <h4>{files.name}</h4>
                </Col>
                <Col xl={6} lg={6} sm={6} className={"cancel-btn-reviewer"}>
                  <Button
                    className={"button-upload-file"}
                    onClick={this.changeUploadFile}
                  >
                    {cancel}
                    {/*<FormattedMessage id="App.cancel"/>*/}
                  </Button>
                </Col>
              </Row>
              <Card>
                <Card.Body
                  className="final_approval_file_upload"
                  filelist={this.props.fileList}
                  onClick={() => this.upload.click()}
                >
                  <img className="upload-img" src={UpArrow} alt={""} />
                  <h3>{tr_drag_and_drop_documents}</h3>
                  <p
                    className={"upload-small-font"}
                    style={{ color: "#AAB5BE" }}
                  >
                    {tr_supported_files_for_upload}
                  </p>
                  <Button
                    className={"dragger-upload-button"}
                    shape="round"
                    style={{ borderRadius: "24px" }}
                  >
                    {tr_browse_from_computer}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12}>
              <Row>
                <Col xl={2} />
                <Col xl={8}>
                  <div style={{ textAlign: "center" }}>
                    <AttachOption />
                  </div>
                </Col>
                <Col xl={2} />
              </Row>
            </Col>
          </Card>
        )}

        {!showFileUpload && (
          <Card key={"ep"} className="display-reviewercomment-card mb-3">
            <Row>
              <Col xl={2} lg={2} sm={2}>
                <div className={"image-file-upload"}>
                  <img
                    className="process-img"
                    src={File}
                    style={{ padding: "5px" }}
                    alt={""}
                  />
                </div>
              </Col>
              <Col xl={7} lg={7} sm={7} className={"align-me"}>
                <div className={"direction-ltr"}>
                  <h4>{files.name}</h4>
                  <p>{files.size} kb</p>
                </div>
              </Col>
              <Col xl={3} lg={3} sm={3} className={"align-me"}>
                <Button
                  variant="light"
                  className={"button-upload-file"}
                  onClick={this.changeUploadFile}
                >
                  {upload_file}
                </Button>
              </Col>
            </Row>
          </Card>
        )}
      </Fragment>
    );
  }
}

ReviewerDocuments.propTypes = {
  files: PropTypes.object.isRequired,
};
export default withTranslation()(ReviewerDocuments);
// export default injectIntl(ReviewerDocuments);
