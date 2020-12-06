import React from "react";
import { Image, Card, Table, Container, Row } from "react-bootstrap";
import "./partner-details.scss";
import "../shared/shared.scss";

// Import images
import add from "../../../../assets/add.svg";

const PartnerDetailsComponent = () => {
  return (
    /**
     * this should be abstacted  . later i will bake a style for card only usin styled component
     */
    <Container fluid>
      <Card>
        <Card.Body>
          <Row>
            <div className="addpartnerBtn">
              <Image src={add} />
              <p> add Partner</p>
            </div>
          </Row>
          <Row>
            <Table>
              <thead>
                <tr>
                  <th>Full Name _EN</th>
                  <th>Full Name _AR</th>
                  <th>Emirates ID</th>
                  <th>Passport NO</th>
                  <th>Nationality</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mohamed Elzayat</td>
                  <td>محمد الزيات</td>
                  <td>12313-1231-456</td>
                  <td>#number</td>
                  <td>Nationality</td>
                </tr>

                <tr>
                  <td>Mohamed Elzayat</td>
                  <td>محمد الزيات</td>
                  <td>12313-1231-456</td>
                  <td>#number</td>
                  <td>Nationality</td>
                </tr>

                <tr>
                  <td>Mohamed Elzayat</td>
                  <td>محمد الزيات</td>
                  <td>12313-1231-456</td>
                  <td>#number</td>
                  <td>Nationality</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PartnerDetailsComponent;
