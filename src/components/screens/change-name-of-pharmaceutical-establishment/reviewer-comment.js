import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import UserIcon from "../../../assets/reviewer/user-sample.svg";
import ReviewerDocuments from "./reviewer-documents";
import { withTranslation } from "react-i18next";
import "./reviewerComment.scss";

class ReviewerComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    const files = [
      {
        name: "abc",
        id: "1",
        size: "34",
      },
      {
        name: "abc 2",
        id: "1",
        size: "34",
      },
      {
        name: "abc 3",
        id: "1",
        size: "34",
      },
    ];
    this.setState({
      fileArray: files,
    });
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { t } = this.props;
    const reviewer_comment = t("Titles.ReviewerComment");
    const tr_attachment_file = t("Titles.AllDocuments");
    const tr_license_status = t("Titles.LicenseStatus");
    const tr_license_no = t("Titles.LicenseNo");
    const tr_issue_date = t("Titles.IssueDate");
    const tr_expiry_date = t("Titles.ExpiryDate");
    const submit = t("Buttons.Submit");

    return (
      <Fragment>
        <Container fluid={true}>
          <Row>
            <Col xl={2} />
            <Col xl={8} style={{ marginBottom: "100px" }}>
              <Card.Body className={"whiteColor mt-4 reviewer-card"}>
                <Row>
                  <Col xl={7} lg={7} sm={7}>
                    <Row className={"mt-4"}>
                      <Col xl={2} className={"user-img"}>
                        <div className={"profile-icon-name"}>
                          <img src={UserIcon} height={"50px"} width={"50px"} />
                        </div>
                      </Col>
                      <Col xl={9}>
                        <label className={"label-preview-large"}>
                          {reviewer_comment}
                        </label>
                        <p className={"grey-color"}>Text Comment here --</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xl={5} lg={5} sm={5}>
                    <Row style={{ textAlign: "center", direction: "ltr" }}>
                      <Col xl={6} className={"border-bottom-reviewer"}>
                        <label>{tr_license_status}</label>
                        <p className={"grey-color"}>license_status</p>
                      </Col>
                      <Col
                        xl={6}
                        className={
                          "border-bottom-reviewer border-left-reviewer"
                        }
                      >
                        <label>{tr_license_no}</label>
                        <p className={"grey-color"}>license_no</p>
                      </Col>
                      <Col xl={6}>
                        <label>{tr_issue_date}</label>
                        <p className={"grey-color"}>issue_date</p>
                      </Col>
                      <Col xl={6} className={"border-left-reviewer"}>
                        <label>{tr_expiry_date}</label>
                        <p className={"grey-color"}>expiry_date</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Body className={"whiteColor mt-4 reviewer-attachment-card"}>
                <Card.Body>
                  <Row className={"mb-2"}>
                    <Col xl={12}>
                      <p className={"final_attachment_title"}>
                        {tr_attachment_file}
                      </p>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "1rem" }}>
                    <Col xl={12}>
                      {this.state.fileArray &&
                        this.state.fileArray.map((files, index) => (
                          <ReviewerDocuments files={files} />
                        ))}
                    </Col>
                  </Row>
                </Card.Body>
              </Card.Body>
              {/*<Row>*/}
              {/*  <div*/}
              {/*    className="nextBtn"*/}
              {/*    style={{ margin: "-17px auto -40px auto" }}*/}
              {/*  >*/}
              {/*    <Button*/}
              {/*      variant="success"*/}
              {/*      type="submit"*/}
              {/*      // onClick={this.submitAttachmentData}*/}
              {/*    >*/}
              {/*      {submit}*/}
              {/*    </Button>*/}
              {/*  </div>*/}
              {/*</Row>*/}
            </Col>
            <Col xl={2} />
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default withTranslation()(ReviewerComment);
