import React, { Component, Fragment } from "react";

import { Button, Col, Container, Row } from "react-bootstrap";
import EstablishmentInformation from "./establishment-information";
import ContactInformation from "./contact-information";
import LocationInformation from "./location-information";
import OwnerDetails from "./owner-details";
import PartnerDetails from "./partner-details";
import { withTranslation } from "react-i18next";

/**
 * This will render preview information
 */
class PreviewInformation extends Component {
  render() {
    const { t } = this.props;
    return (
      <Fragment>
        <Container fluid={true}>
          <Row>
            <Col xl={3} />
            <Col xl={6}>
              <EstablishmentInformation />
              <ContactInformation />
              <LocationInformation />
              <OwnerDetails />
              <PartnerDetails />
            </Col>
            <Col xl={3} />
          </Row>
          <Row>
            <div className="nextBtn">
              <Button
                variant="success"
                type="submit"
                className={"width-auto"}
                onClick={() => {
                  this.props.handlePreviewSuccess();
                }}
              >
                {t("Titles.Change the Name of Pharmaceutical Establishment")}
              </Button>
            </div>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

PreviewInformation.defaultProps = {
  handlePreviewSuccess: () => {},
};

export default withTranslation()(PreviewInformation);
