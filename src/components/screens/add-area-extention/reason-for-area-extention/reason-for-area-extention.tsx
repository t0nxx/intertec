import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { FormInputsInterface, formSchema } from "./reason-for-area-extention-helper";
import arrow from "../../../../assets/arrow-white.svg";
import map from "../../../../assets/map.svg";

import "./reason-for-area-extention.scss";
import { ActionTypes, StateSelectorInterface } from "../../../../redux/reducers/helper";
import { IProps } from "../shared/components-props";
import SaveAndCancel from "../../../atoms/buttons/save-and-cancel/save-and-cancel";
import NextButton from "../../../atoms/buttons/next-button/next-button";
import { FormInputComponent } from "../../../molecules/forms/formInput";

const ReasonForAreaExtention = (props: IProps) => {
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
            <Form.Group as={Col} md="12" sm="12" controlId="establishmentName">
              {/* <Form.Label>Old building information</Form.Label> */}
              <div className="staticData">
                <div className="staticDataContent">
                  <Row>
                    <Col md="4" sm="6" xs="12">
                      <p>{t("Texts.Initial Licence Number")}</p>
                      <span>{t("Texts.Initial Licence Number")}</span>
                    </Col>
                    <Col md="4" sm="6" xs="12">
                      <p>{t("Texts.Area")}</p>
                      <span>{t("Texts.Area")}</span>
                    </Col>
                    <Col> </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="6" xs="12">
                      <p>{t("Forms.Issue date")}</p>
                      <span>Issue date</span>
                    </Col>
                    <Col md="4" sm="6" xs="12">
                      <p>{t("Forms.Expiry date")}</p>
                      <span>Expiry date</span>
                    </Col>
                    <Col> </Col>
                  </Row>
                </div>
              </div>
            </Form.Group>
            <FormInputComponent
              label="Reason For Area Extention"
              type="text"
              as="textarea"
              name="reason"
              isRequird={true}
              takeFullRow={true}
              register={register}
              formState={formState}
              errors={errors.reason}
            />
          </Form.Row>

          {props.isForReviewPage ? <SaveAndCancel onCancel={onCancelHandler} /> : <NextButton />}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ReasonForAreaExtention;
