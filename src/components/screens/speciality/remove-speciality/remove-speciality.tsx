import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { FormInputsInterface, formSchema } from "./remove-speciality-helper";

import "./remove-speciality.scss";
import "../../pharamaceutical-establishment/shared/shared.scss";
import { ActionTypes, StateSelectorInterface } from "../../../../redux/reducers/helper";
import { IProps } from "../shared/components-props";
import SaveAndCancel from "../../../buttons/save-and-cancel/save-and-cancel";
import NextButton from "../../../buttons/next-button/next-button";

const RemoveSpeciality = (props: IProps) => {
  const { t }: { t: any } = useTranslation();
  const { data } = useSelector(
    (s: StateSelectorInterface) => s.pharmaceuticalEstablishment.locationInformationsReducer
  );

  const { register, handleSubmit, errors, formState, reset } = useForm({
    resolver: yupResolver(formSchema),
    mode: "all",
  });
  const changeParentToggleEvent = () => {
    if (props.isForReviewPage) {
      props.onSubmitOrCancelEvent();
    }
  };
  const onCancelHandler = () => changeParentToggleEvent();

  useEffect(() => {
    // bind inputs values with it's state
    // this will be very helpfull when we want reuse the component with its values
    reset(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset]);
  const dispatch = useDispatch();
  const onSubmit = (values: FormInputsInterface) => {
    if (formState.isValid) {
      dispatch({
        type: ActionTypes.PharmaceuticalEstablishmentActionTypes.SET_LOACTION_INFORMATION,
        payload: values,
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
    }
  };

  return (
    /**
     * this should be abstacted  . later i will bake a style for card only usin styled component
     */
    <Card className="reLocationComponent">
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Row>
            <Form.Group
              as={Col}
              md="12"
              sm="12"
              controlId="formGridPassword"
              className="checkBoxesList"
            >
              <Form.Label> {t("Titles.Please select Specialities")}</Form.Label>
              <Form.Check type="checkbox" name="test" id="h1" label={t("Forms.Gynecology")} custom />
              <Form.Check type="checkbox" name="test" id="h2" label={t("Forms.immunology")} custom />
              <Form.Check type="checkbox" name="test" id="h3" label={t("Forms.Dermatology")} custom />
              <Form.Check type="checkbox" name="test" id="h4" label={t("Forms.Neurology")} custom />
              <Form.Check type="checkbox" name="test" id="h5" label={t("Forms.rehabilitation")} custom />
              <Form.Check type="checkbox" name="test" id="h6" label={t("Forms.Psychiatry")} custom />
              <Form.Check type="checkbox" name="test" id="h7" label={t("Forms.Surgery")} custom checked />
              <Form.Check type="checkbox" name="test" id="h8" label={t("Forms.Urology")} custom />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" sm="12" controlId="formGridPassword">
              <Form.Label>
                {t("Forms.Total Number of Specialties")}<span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder={t("Forms.Total Number of Specialties")}
                name="area"
                ref={register}
                isValid={formState.touched.area && !errors.area}
                isInvalid={errors.area}
              />
              {errors.area ? (
                <span className="text-danger">{t(`${errors.area?.message}`)}</span>
              ) : null}
            </Form.Group>
            <Form.Group as={Col} md="6" sm="12" controlId="formGridState">
              <Form.Label>
                {t("Forms.Number of Beds")}<span className="required">*</span>
              </Form.Label>
              <Form.Control
                as="select"
                name="emirate"
                ref={register}
                isValid={formState.touched.emirate && !errors.emirate}
                isInvalid={errors.emirate}
              >
                <option disabled selected value="">
                  {t("Forms.Number of Beds")}
                </option>
                <option> Type 1</option>
                <option> Type 2</option>
                <option> Type 3</option>
              </Form.Control>
              {errors.emirate ? (
                <span className="text-danger">{t(`${errors.emirate?.message}`)}</span>
              ) : null}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12" sm="12" controlId="establishmentName">
              <Form.Label>{t("Forms.Current Specialties of your Establishment")}</Form.Label>
              <div className="staticData">
                <div className="staticDataContent">
                  <Row>
                    <Col md="3" sm="6" xs="12">
                      <p>{t("Titles.General Surgery")}</p>
                      <span>Added on DD/MM/YY</span>
                    </Col>
                    <Col md="3" sm="6" xs="12">
                      <p>{t("Titles.Internal Medicine")}</p>
                      <span>Added on DD/MM/YY</span>
                    </Col>
                    <Col md="3" sm="6" xs="12">
                      <p>{t("Titles.Orthopedics")}</p>
                      <span>Added on DD/MM/YY</span>
                    </Col>
                    <Col md="3" sm="6" xs="12">
                      <p>{t("Titles.Pediatrics")}</p>
                      <span>Added on DD/MM/YY</span>
                    </Col>
                  </Row>
                </div>
              </div>
            </Form.Group>
          </Form.Row>

          {props.isForReviewPage ? (
            <SaveAndCancel onCancel={onCancelHandler} />
          ) : (
            <NextButton customText={t("Buttons.Go To Attachment")} />
          )}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default RemoveSpeciality;
