import React, { useState } from "react";
import {
  Image,
  Card,
  Table,
  Container,
  Row,
  Modal,
  Button,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import "./partner-details.scss";
import "../shared/shared.scss";
import AddPartnerComponent from "./add-partner/add-partner";

// Import images
import add from "../../../../assets/add.svg";
import leftArrow from "../../../../assets/leftArrow.svg";
import {
  ActionTypes,
  StateSelectorInterface,
} from "../../../../redux/reducers/helper";
import { IProps } from "../shared/components-props";
import SaveAndCancel from "../../../atoms/buttons/save-and-cancel/save-and-cancel";
import NextButton from "../../../atoms/buttons/next-button/next-button";
import addMore from "../../../../assets/addMore.svg";
import edit from "../../../../assets/editPen.svg";
import remove from "../../../../assets/deleteIconInCircle.png";

const PartnerDetailsComponent = (props: IProps) => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [isEditingOne, setIsEditingOne] = useState(false);
  const [editingOneData, setEditingOneData] = useState({});

  const { data } = useSelector(
    (s: StateSelectorInterface) =>
      s.pharmaceuticalEstablishment.partnerDetailsReducer
  );

  const changeParentToggleEvent = () => {
    if (props.isForReviewPage) {
      props.onSubmitOrCancelEvent();
    }
  };
  const { register, handleSubmit } = useForm();

  const onCancelHandler = () => changeParentToggleEvent();

  const onCloseModal = () => setShow(false);

  const dispatch = useDispatch();

  const onSubmit = () => {
    // set step is complete without add any data
    dispatch({
      type:
        ActionTypes.PharmaceuticalEstablishmentActionTypes.SET_PARTNER_DETAILS,
    });
    // move to next step
    dispatch({
      type: ActionTypes.PharmaceuticalEstablishmentActionTypes.NEXT_STEP_NUMBER,
    });
    // set progress bar  +10 %
    // dispatch({
    //   type:
    //     ActionTypes.PharmaceuticalEstablishmentActionTypes
    //       .SET_PROGRESS_PERSENTAGE,
    //   payload: 10,
    // });
    changeParentToggleEvent();
  };

  const onEditOneHandler = (data) => {
    setIsEditingOne(true);
    setEditingOneData(data);
    setShow(!show);
  };
  const removeFromTable = (index) => {
    dispatch({
      type:
        ActionTypes.PharmaceuticalEstablishmentActionTypes.Remove_New_PARTNER,
      payload: index,
    });
  };

  return (
    /**
     * this should be abstacted  . later i will bake a style for card only usin styled component
     */
    <Container fluid>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row hidden={props.isForReviewPage}>
              <div className="addpartnerBtn">
                <Image
                  src={add}
                  onClick={() => {
                    setShow(!show);
                    setIsEditingOne(false);
                  }}
                />
                <p> {t("Forms.Add Partner")}</p>
              </div>
            </Row>
            <Modal
              scrollable={true}
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
                {isEditingOne ? (
                  <AddPartnerComponent
                    isEditingOne={isEditingOne}
                    editingOneData={editingOneData}
                    closeModal={onCloseModal}
                  />
                ) : (
                  <AddPartnerComponent
                    isEditingOne={isEditingOne}
                    closeModal={onCloseModal}
                  />
                )}
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
                  {data.map((row) => (
                    <tr key={row.id}>
                      <td>{row.fName}</td>
                      <td> {row.fNameAr}</td>
                      <td> {row.emiratesId}</td>
                      <td> {row.passportNo}</td>
                      <td> {row.nationality}</td>
                      <td>
                        <Image
                          src={edit}
                          onClick={() => onEditOneHandler(row)}
                        />
                      </td>
                      <td>
                        <Image
                          src={edit}
                          onClick={(e) => removeFromTable(row.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Row>

            {props.isForReviewPage ? (
              // <SaveAndCancel onCancel={onCancelHandler} />
              <Row className="addMore" onClick={() => setShow(!show)}>
                <Image src={addMore} onClick={() => setIsEditingOne(false)} />
                {t("Titles.Click here to add more Partner")}
              </Row>
            ) : (
              /// temp since submiss btn not has a click event
              <NextButton />
            )}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PartnerDetailsComponent;
