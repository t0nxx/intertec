import React, { Component, Fragment } from "react";
import { withTranslation } from "react-i18next";
import { Accordion, Card, Image, Row, Table } from "react-bootstrap";
import ownerImage from "../../../../assets/owner.svg";
import upArrow from "../../../../assets/upArrow4Collaps.svg";

class PartnerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  toggleArrow = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };
  render() {
    const { t } = this.props;
    const { isOpen = false } = this.state;
    const data = [
      {
        passportNo: "passportNo",
        fName: "fName",
        fNameAr: "fNameAr",
        emiratesId: "emiratesId",
        nationality: "nationality",
      },
    ];
    return (
      <Fragment>
        <Accordion className={"mt-3"}>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              onClick={() => this.toggleArrow()}
            >
              <Row className={"header-info"}>
                <Image src={ownerImage} className="ml-3 mr-4 greenIc" />
                <h3 className="text-success">{t("Titles.Partner Details")}</h3>
                <Image
                  src={upArrow}
                  className={
                    isOpen ? "arrow rotate ml-3 mr-3" : "arrow ml-3 mr-3"
                  }
                />
              </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Row className="tableParent">
                  <Table>
                    <thead>
                      <tr>
                        <th>{t("Forms.Full Name_EN")}</th>
                        <th>{t("Forms.Full Name_AR")}</th>
                        <th>{t("Forms.Emirates ID")}</th>
                        <th>{t("Forms.Passport NO")}</th>
                        <th>{t("Forms.Nationality")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row) => (
                        <tr key={row.passportNo}>
                          <td>{row.fName}</td>
                          <td> {row.fNameAr}</td>
                          <td> {row.emiratesId}</td>
                          <td> {row.passportNo}</td>
                          <td> {row.nationality}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Fragment>
    );
  }
}

export default withTranslation()(PartnerDetails);
