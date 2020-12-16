import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import laptoparrow from "../../../assets/reviewer/local-system.svg";
import dropbox from "../../../assets/reviewer/dropbox.svg";
import boxcloud from "../../../assets/reviewer/boxcloud.svg";
import onedrive from "../../../assets/reviewer/onedrive.svg";

class AttachOption extends Component {
  render() {
    return (
      <React.Fragment>
        <Row align="center">
          <Col className="cloud-icon">
            <Row type="flex" justify="center" align="middle">
              <Col>
                <img
                  className="icon-border icon-local-system"
                  src={laptoparrow}
                />
              </Col>
              <Col>
                <img className="icon-dropbox" src={dropbox} />
              </Col>
              <Col>
                <img className="icon-boxcloud" src={boxcloud} />
              </Col>
              <Col>
                <img className="icon-onedrive" src={onedrive} />
              </Col>
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default AttachOption;
