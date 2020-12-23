import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  Col,
  Form,
  Row,
  Button,
  Table,
  ToggleButton,
  Image,
  Modal,
  Container,
} from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FormInputsInterface, formSchema } from "./self-evaluation-helper";
import pinwite from "../../../../assets/pinwite.svg";
import smallCloseButton from "../../../../assets/smallCloseButton.svg";

import "./self-evaluation.scss";
import "../shared/shared.scss";

// Import images
import {
  ActionTypes,
  StateSelectorInterface,
} from "../../../../redux/reducers/helper";
import NextButton from "../../../atoms/buttons/next-button/next-button";
import { TrippleRadioButtonsComponent } from "../../../molecules/forms/trippleRadioButtonInput";
import { setSelfEvaluationAction } from "../../../../redux/actions/pharmaceuticalEstablishmentActions";

const SelfEvaluationComponent = () => {
  const [checked, setChecked] = useState(false);
  const [tableValues, setTableValues] = useState([]);

  const langState = useSelector(
    (s: StateSelectorInterface) => s.configReducer.locale
  );
  const selfEvaluationArray = useSelector(
    (s: StateSelectorInterface) => s.selfEvaluationReducer.data
  );

  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(formSchema),
    mode: "all",
  });

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history: any = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (values) => {
    if (formState.isValid) {
      console.log(values);
    }
  };

  function onSuccess(files) {
    console.log(files);
  }
  useEffect(() => {
    if (checked) {
      dispatch(setSelfEvaluationAction(tableValues));
    }
  }, [checked]);
  return (
    /**
     * this should be abstacted  . later i will bake a style for card only usin styled component
     */
    <Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="add_remark"
      >
        <div className="close_remark">
          <Image src={smallCloseButton} onClick={handleClose} />
        </div>

        <div className="modalBody">
          <Modal.Body>
            <Container>
              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>{t("Titles.Write Remark")}</Form.Label>
                  <Form.Control as="textarea" rows={6} />
                </Form.Group>
              </Form>
              <Row className="modal_action">
                <Button
                  variant="light"
                  size="lg"
                  className="cancel-edit-btn"
                  onClick={handleClose}
                >
                  <strong>{t("Buttons.Cancel")}</strong>
                </Button>
                <Button
                  variant="success"
                  size="lg"
                  className="save-edit-btn"
                  onClick={handleClose}
                >
                  <strong> {t("Buttons.Save")}</strong>
                </Button>
              </Row>
            </Container>
          </Modal.Body>
        </div>
      </Modal>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Table>
            <thead>
              <tr>
                <th>{t("Forms.Description")}</th>
                <th>{t("Forms.Yes")}</th>
                <th>{t("Forms.No")}</th>
                <th>{t("Forms.N/A")}</th>
                <th>{t("Titles.Remarks")}</th>
              </tr>
            </thead>
            <tbody>
              {selfEvaluationArray &&
                selfEvaluationArray.map((question) => (
                  <tr key={question.Id}>
                    <td>
                      {langState == "ar"
                        ? question.SelfEvaluationNoteAr
                        : question.SelfEvaluationNoteEn}
                    </td>

                    <TrippleRadioButtonsComponent
                      name={question.Id}
                      id={question.Id}
                      value1="Yes"
                      value2="No"
                      value3="Na"
                      register={register}
                    />
                    <td className="remarks">
                      <Button onClick={handleShow}>
                        <Image src={pinwite} /> {t("Titles.Remarks")}
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <Row>
            <Col className="disclaimer-check">
              <Form.Check
                type="checkbox"
                name="disclaimer"
                id="disclaimer"
                label={t("Forms.Disclaimer")}
                custom
                onChange={(e) => setChecked(e.currentTarget.checked)}
              />
            </Col>
            {/* <Col className="remarks">
              <Button onClick={handleShow}>
                <Image src={pinwite} /> {t("Titles.Remarks")}{" "}
              </Button>
            </Col> */}
          </Row>
          {/* next step should be handeld from parent screent itself not self evaluation */}
          {/* <NextButton customText={t("Buttons.Go To Attachment")} /> */}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SelfEvaluationComponent;
