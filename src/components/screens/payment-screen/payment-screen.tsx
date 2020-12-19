import React, { useEffect } from "react";
import { Container, Form, Image, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import "./payment-screen.scss";

// Import images
import eD from "../../../assets/eD.svg";
import visaAndMaster from "../../../assets/visaAndMaster.svg";
import RequestInformation from "../../request-information/request-information";
import {
  hideInfoAction,
  showBackButtonAction,
} from "../../../redux/actionTypes/layout/layout";

export default function PaymentScreenComponent() {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const handelSuccessPayment = () => {
    history.push({
      pathname: "/success",
      state: {
        successVariable: "payment",
      },
    });
  };

  useEffect(() => {
    // hide info from this page
    dispatch(hideInfoAction());
    dispatch(showBackButtonAction());
  }, []);
  return (
    <Container fluid className="topScreen">
      <Row>
        <Col>
          <RequestInformation />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="paymentScreenContent">
            <div className="paymentComponent">
              <Row>
                <Col>
                  <Col>
                    <Row className="head">
                      <Col className="left-align">
                        {t("Titles.Fees Details")}
                      </Col>
                      <Col className="right-align">{t("Titles.Amount")}</Col>
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
                    <Image src={visaAndMaster} />
                  </Col>
                  <Col className="ed">
                    <Image src={eD} className="selected" />
                  </Col>
                </Row>

                <Row className="proceed">
                  <Col>
                    <Button variant="success" onClick={handelSuccessPayment}>
                      {t("Buttons.Process For Payment")}
                    </Button>
                  </Col>
                </Row>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
