import React, { useState } from "react";
import { Image, Card, Table, Container, Row, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "./partner-details.scss";
import "../shared/shared.scss";
import AddPartnerComponent from "./add-partner/add-partner";

// Import images
import add from "../../../../assets/add.svg";
import leftArrow from "../../../../assets/leftArrow.svg";
import pen from "../../../../assets/editPen.svg";
import { ActionTypes, StateSelectorInterface } from "../../../../redux/reducers/helper";
import { IProps } from "../shared/components-props";
import SaveAndCancel from "../../../buttons/save-and-cancel/save-and-cancel";
import NextButton from "../../../buttons/next-button/next-button";

const PartnerDetailsComponent = (props: IProps) => {
  const { t } = useTranslation();
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
              <p> {t("Forms.Add Partner")}</p>
            </div>
          </Row>
          <Modal
            show={show}
            onHide={() => setShow(!show)}
            backdrop="static"
            keyboard={false}
            className="fullScreenModal"
          >
            <Modal.Header closeButton>
              <Modal.Title>
                <div className="back">
                  <Image src={leftArrow} onClick={() => setShow(!show)} />
                </div>
                <div className="title">
                  <h1> {t("Forms.Add New Partner")}</h1>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AddPartnerComponent onCancel={() => setShow(!show)} />
            </Modal.Body>
          </Modal>

          <Row className="tableParent">
            <Table>
              <thead>
                <tr>
                  <th>{t("Forms.Full Name_EN")}</th>
                  <th>{t("Forms.Full Name_AR")}</th>
                  <th>{t("Forms.Emirates ID")}</th>
                  <th>{t("Forms.Passport NO")}</th>
                  <th>{t("Forms.Nationality")}</th>
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
            <SaveAndCancel onCancel={onCancelHandler} />
          ) : (
            /// temp since submiss btn not has a click event
            <Row className="justify-content-center" onClick={onSubmit}>
              <NextButton />
            </Row>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PartnerDetailsComponent;
