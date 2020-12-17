import React, { Component } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import UpArrow from "../../../../assets/upArrow.svg";
import AttachOption from "../attach-option";
import { withTranslation } from "react-i18next";

class DraggerAttachMent extends Component {
  render() {
    const { t } = this.props;
    const tr_drag_and_drop_documents = t("Titles.drag_and_drop_documents");
    const tr_browse_from_computer = t("Titles.browse_from_computer");
    const tr_supported_files_for_upload = t(
      "Titles.supported_files_for_upload"
    );

    const props = {
      name: "file",
      multiple: false,
      showUploadList: {
        showDownloadIcon: false,
      },
      onRemove: (file) => {
        this.setState((state) => {
          return {
            fileList: [],
          };
        });
      },
      beforeUpload: (file) => {
        console.log(file);
        const isLt10M = file.size / 1024 / 1024 < 10;
        if (!isLt10M) {
          //message.error('Image must smaller than 10MB!');
          this.setState({ uploadStatus: false });
        }
        this.setState((state) => ({
          fileList: [file],
        }));
        return false;
      },
    };

    return (
      <React.Fragment>
        <Row>
          <Col xs={12}>
            <input
              id="myInput"
              accept=".pdf,.png,.jpeg,.docx"
              type="file"
              ref={(ref) => (this.upload = ref)}
              style={{ display: "none" }}
              onChange={(e) => this.props.handleupload(e)}
              // multiple
            />
            <Card>
              <Card.Body
                className="file_upload"
                //style={{borderStyle:"dotted",backgroundColor:"gainsboro"}}
                filelist={this.props.fileList}
                //showUploadList={false}
                //  beforeUpload={() => false}
                onClick={(e) => this.upload.click()}
              >
                <img className="upload-img" src={UpArrow} />
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
          <Col span={24}>
            <AttachOption />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default withTranslation()(DraggerAttachMent);
