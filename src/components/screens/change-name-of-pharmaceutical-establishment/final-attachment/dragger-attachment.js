import React, { Component } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import UpArrow from "../../../../assets/upArrow.svg";
import { withTranslation } from "react-i18next";
import AttachOption from "../attach-option";

/**
 * This is dregger attachment component
 */
class DraggerAttachmentComponent extends Component {
  render() {
    const { t } = this.props;

    const tr_drag_and_drop_documents = t("Titles.DragAndDropDocuments");
    const tr_browse_from_computer = t("Titles.BrowseFromComputer");
    const tr_supported_files_for_upload = t("Titles.SupportedFilesForUpload");
    return (
      <React.Fragment>
        <Row>
          <Col lg={12} sm={12} xl={12}>
            <input
              id="myInput"
              accept=".pdf,.png,.jpeg,.docx"
              type="file"
              ref={(ref) => (this.upload = ref)}
              style={{ display: "none" }}
              onChange={(e) => this.props.handleupload(e)}
            />
            <Card>
              <Card.Body
                className="final_approval_file_upload"
                filelist={this.props.fileList}
                onClick={() => this.upload.click()}
              >
                <img className="upload-img" src={UpArrow} alt={""} />
                <h3>{tr_drag_and_drop_documents}</h3>
                <p className={"upload-small-font"} style={{ color: "#AAB5BE" }}>
                  {tr_supported_files_for_upload}
                </p>
                <Button
                  className={"dragger-upload-button"}
                  shape="round"
                  style={{
                    borderRadius: "24px",
                    backgroundColor: "#848683",
                    borderColor: "#848683",
                  }}
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
        </Row>
      </React.Fragment>
    );
  }
}

export default withTranslation()(DraggerAttachmentComponent);
