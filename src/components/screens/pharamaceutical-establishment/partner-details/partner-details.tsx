import React, { useState } from "react";
import { Image, Card, Table, Container, Row, Modal, Button } from "react-bootstrap";
import "./partner-details.scss";
import "../shared/shared.scss";
import AddPartnerComponent from "./add-partner/add-partner";

// Import images
import add from "../../../../assets/add.svg";
import leftArrow from "../../../../assets/leftArrow.svg";
import pen from "../../../../assets/editPen.svg";

const PartnerDetailsComponent = () => {
  const [show, setShow] = useState(false);
  return (
    /**
     * this should be abstacted  . later i will bake a style for card only usin styled component
     */
    <Container fluid>
      <Card>
        <Card.Body>
          <Row>
            <div className="addpartnerBtn">
              <Image src={add} onClick={() => setShow(!show)} />
              <p> add Partner</p>
            </div>
          </Row>
          <Modal show={show} onHide={() => setShow(!show)} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
              <Modal.Title>
                <div className="back">
                  <Image src={leftArrow} onClick={() => setShow(!show)} />
                </div>
                <div className="title">
                  <h1> add new Partner</h1>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AddPartnerComponent />
            </Modal.Body>
          </Modal>
          <Row className="tableParent">
            <Table>
              <thead>
                <tr>
                  <th>Full Name _EN</th>
                  <th>Full Name _AR</th>
                  <th>Emirates ID</th>
                  <th>Passport NO</th>
                  <th>Nationality</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mohamed Elzayat</td>
                  <td>محمد الزيات</td>
                  <td>12313-1231-456</td>
                  <td>#number</td>
                  <td>Nationality</td>
                  <td>
                    <Image src={pen} />
                  </td>
                </tr>

                <tr>
                  <td>Mohamed Elzayat</td>
                  <td>محمد الزيات</td>
                  <td>12313-1231-456</td>
                  <td>#number</td>
                  <td>Nationality</td>
                  <td>
                    <Image src={pen} />
                  </td>
                </tr>

                <tr>
                  <td>Mohamed Elzayat</td>
                  <td>محمد الزيات</td>
                  <td>12313-1231-456</td>
                  <td>#number</td>
                  <td>Nationality</td>
                  <td>
                    <Image src={pen} />
                  </td>
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
