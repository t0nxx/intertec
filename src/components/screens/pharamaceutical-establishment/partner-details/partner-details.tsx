import React, { useState } from "react";
import { Image, Card, Table, Container, Row, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./partner-details.scss";
import "../shared/shared.scss";
import AddPartnerComponent from "./add-partner/add-partner";

// Import images
import add from "../../../../assets/add.svg";
import leftArrow from "../../../../assets/leftArrow.svg";
import pen from "../../../../assets/editPen.svg";
import { ActionTypes, StateSelectorInterface } from "../../../../redux/reducers/helper";
import { IProps } from "../shared/components-props";
import SubmissionButtonWithCancel from "../../../submission-buttons/submission-with-cancel";
import SubmissionButton from "../../../submission-buttons/submission";

const PartnerDetailsComponent = (props: IProps) => {
  const [show, setShow] = useState(false);

  const { data } = useSelector(
    (s: StateSelectorInterface) => s.pharmaceuticalEstablishment.partnerDetailsReducer
  );

  const changeParentToggleEvent = () => {
    if (props.isForReviewPage) {
      props.onSubmitOrCancelEvent();
    }
  };
  const onCancelHandler = () => changeParentToggleEvent();

  const dispatch = useDispatch();

  const onSubmit = () => {
    // set step is complete without add any data
    dispatch({
      type: ActionTypes.PharmaceuticalEstablishmentActionTypes.SET_PARTNER_DETAILS,
      payload: [],
    });
    // move to next step
    dispatch({
      type: ActionTypes.PharmaceuticalEstablishmentActionTypes.NEXT_STEP_NUMBER,
    });
    // set progress bar  +10 %
    dispatch({
      type: ActionTypes.PharmaceuticalEstablishmentActionTypes.SET_PROGRESS_PERSENTAGE,
      payload: 10,
    });
    changeParentToggleEvent();
  };

  const tableData = [
    {
      index: 0,
      nameEn: "Mohamed Elzayat",
      nameAr: "محمد الزيات",
      emirateId: "12313-1231-456",
      passport: "#number",
      nationality: "Nationality",
    },
    {
      index: 1,
      nameEn: "Mohamed Elzayat",
      nameAr: "محمد الزيات",
      emirateId: "12313-1231-456",
      passport: "#number",
      nationality: "Nationality",
    },
    {
      index: 2,
      nameEn: "Mohamed Elzayat",
      nameAr: "محمد الزيات",
      emirateId: "12313-1231-456",
      passport: "#number",
      nationality: "Nationality",
    },
    {
      index: 3,
      nameEn: "Mohamed Elzayat",
      nameAr: "محمد الزيات",
      emirateId: "12313-1231-456",
      passport: "#number",
      nationality: "Nationality",
    },
    {
      index: 4,
      nameEn: "Mohamed Elzayat",
      nameAr: "محمد الزيات",
      emirateId: "12313-1231-456",
      passport: "#number",
      nationality: "Nationality",
    },
  ];
  const [tableD, setTable] = useState(tableData);
  const removeFromTable = (index) => {
    const afterRemove = tableData.filter((e) => e.index !== index);
    setTable([...afterRemove]);
  };

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
          <Row>
            <Table>
              <thead>
                <tr>
                  <th>Full Name _EN</th>
                  <th>Full Name _AR</th>
                  <th>Emirates ID</th>
                  <th>Passport NO</th>
                  <th>Nationality</th>
                  <th> </th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {tableD.map((row) => (
                  <tr key={row.index}>
                    <td>{row.nameEn}</td>
                    <td> {row.nameAr}</td>
                    <td> {row.nameAr}</td>
                    <td> {row.nameAr}</td>
                    <td> {row.nationality}</td>
                    <td>
                      <Image src={pen} />
                    </td>
                    <td>
                      <Image src={pen} onClick={(e) => removeFromTable(row.index)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
          {props.isForReviewPage ? (
            <SubmissionButtonWithCancel onCancel={onCancelHandler} />
          ) : (
            /// temp since submiss btn not has a click event
            <Row className="justify-content-center" onClick={onSubmit}>
              <SubmissionButton />
            </Row>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PartnerDetailsComponent;
