import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
// import { CloseCircleFilled } from "@ant-design/icons";
import File from "../../../../assets/file.svg";
import DraggerAttachMent from "./dragger-attachment";
import { uuidv4 } from "../../../../utils/UtilMethods";
import documentClose from "../../../../assets/delete.svg";

class EstablishmentPlanUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileArray:
        this.props.uploadArrayOfObject &&
        this.props.uploadArrayOfObject.length > 0
          ? this.props.uploadArrayOfObject
          : [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const { uploadArrayOfObject = [] } = this.props;
      if (uploadArrayOfObject && uploadArrayOfObject.length >= 1) {
        this.setState({ fileArray: uploadArrayOfObject });
      }
    }, 1000);
  }

  convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        console.log(fileReader.result);
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  handleupload = async (info) => {
    let fileObj = {};
    let files = info.target.files;

    if (files.length >= 0) {
      console.log("TEST", files);
      const base64 = await this.convertBase64(files[0]);
      fileObj.fileId = uuidv4();
      fileObj.name = files[0].name;
      fileObj.size = files[0].size;
      fileObj.file = files[0];
      fileObj.base64 = base64;

      //let filelist = [...this.state.filelist, files[0]];
      let fileArray = [fileObj];
      this.setState({ fileArray: fileArray });
      return this.props.submit(fileArray);
    }
    // const base64 = await this.convertBase64(files[0]);
    // fileObj.fileId = uuidv4();
    // fileObj.name = files[0].name;
    // fileObj.size = files[0].size;
    // fileObj.file = files[0];
    // fileObj.base64 = base64;

    // //let filelist = [...this.state.filelist, files[0]];
    // let fileArray = [...this.state.fileArray, fileObj];
    // this.setState({ fileArray: fileArray });
    // return this.props.submit(fileArray);
  };

  handleRemove = (fileId) => {
    const { fileArray } = this.state;
    this.setState({
      fileArray: fileArray.filter((item) => item.fileId !== fileId),
    });
    return this.props.submit(
      fileArray.filter((item) => item.fileId !== fileId)
    );
  };

  render() {
    return (
      <React.Fragment>
        <DraggerAttachMent
          handleupload={this.handleupload}
          filelist={this.state.fileArray}
        />

        <Row style={{ marginTop: "1rem" }}>
          <Col xl={12}>
            {this.state.fileArray &&
              this.state.fileArray.map((files, index) => (
                <Card.Body
                  key={"ep" + index}
                  className="doc-wrap card_custome_viewdocument"
                  style={{
                    border: "0",
                    marginBottom: "1rem",
                    flexDirection: "row",
                    display: "flex",
                    marginTop: "15px",
                  }}
                >
                  <Col xl={1} className="mr-5" style={{ textAlign: "start" }}>
                    <div>
                      <img className="process-img" src={File} />
                    </div>
                  </Col>
                  <Col xl={9} style={{ textAlign: "start" }}>
                    <div style={{}}>
                      <h3>{files.name}</h3>
                      <span>
                        <p>{files.size}kb</p>
                      </span>
                    </div>
                  </Col>
                  <Col xl={2} style={{ textAlign: "end" }}>
                    <img
                      className="mr-2 circle-close"
                      src={documentClose}
                      alt="Close Icon"
                      onClick={() => this.handleRemove(files.fileId)}
                      style={{ cursor: "pointer" }}
                    />
                  </Col>
                </Card.Body>
              ))}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default EstablishmentPlanUpload;
