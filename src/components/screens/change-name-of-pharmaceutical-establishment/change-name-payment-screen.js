import React, { Component } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import "./change-name-payment-screen.scss";
// Import images
import eD from "../../../assets/eD.svg";
import visaAndMaster from "../../../assets/visaAndMaster.svg";
import RequestInformation from "../../request-information/request-information";

import { withTranslation } from "react-i18next";

class NameChangePayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentMethod: "edirham",
    };
  }

  handlePaymentMethod = (paymentMethod) => {
    this.setState({
      paymentMethod: paymentMethod,
    });
  };
  handelSuccessPayment = () => {
    window.location.href = "/success";
  };

  render() {
    const { t } = this.props;
    const { paymentMethod } = this.state;
    return (
      <React.Fragment>
        <Container fluid className="topScreen">
          <Row>
            <Col xl={2}></Col>
            <Col xl={8}>
              <RequestInformation />
            </Col>
            <Col xl={2}></Col>
          </Row>
          <Row>
            <Col xl={2}></Col>
            <Col xl={8}>
              <div className="paymentScreenContent">
                <div className="paymentComponent">
                  <Row>
                    <Col>
                      <Col>
                        <Row className="head">
                          <Col className="left-align">
                            {t("Titles.Fees Details")}
                          </Col>
                          <Col className="right-align">
                            {t("Titles.Amount")}
                          </Col>
                        </Row>
                        <Row className="child">
                          <Col className="left-align">
                            {t("Titles.application Fees")}
                          </Col>
                          <Col className="right-align">500 AED</Col>
                        </Row>
                        <Row className="child">
                          <Col className="left-align"> {t("Titles.Tax")}</Col>
                          <Col className="right-align">10 AED </Col>
                        </Row>
                        <Row className="head">
                          <Col className="left-align"> </Col>
                          <Col className="right-align">
                            {t("Titles.Total")} 510 AED
                          </Col>
                        </Row>
                      </Col>
                    </Col>
                  </Row>

                  <Row className="accept">
                    <Col>
                      <Form.Check
                        type="checkbox"
                        name="hi"
                        id="test"
                        label={t("Titles.Accept terms and condition")}
                        custom
                      />
                    </Col>
                  </Row>

                  <Row className="selectPayment">
                    <Row>
                      <Col>
                        <p>{t("Titles.Select payment method")}</p>
                      </Col>
                    </Row>

                    <Row className="methods">
                      <Col className="visa">
                        <Image
                          src={visaAndMaster}
                          className={
                            paymentMethod === "visa"
                              ? `selected`
                              : `not-selected-payment-method`
                          }
                          onClick={() => this.handlePaymentMethod("visa")}
                        />
                      </Col>
                      <Col className="ed">
                        <Image
                          src={eD}
                          className={
                            paymentMethod === "edirham"
                              ? `selected`
                              : `not-selected-payment-method`
                          }
                          onClick={() => this.handlePaymentMethod("edirham")}
                        />
                      </Col>
                    </Row>

                    <Row className="proceed">
                      <Col>
                        <Button
                          variant="success"
                          onClick={this.handelSuccessPayment}
                        >
                          {t("Buttons.Process For Payment")}
                        </Button>
                      </Col>
                    </Row>
                  </Row>
                </div>
              </div>
            </Col>
            <Col xl={2} />
          </Row>
          <Row>
            <Col />
          </Row>
          <Row>
            <Col />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default withTranslation()(NameChangePayment);
