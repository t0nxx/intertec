import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ActionTypes, StateSelectorInterface } from "../../../../redux/reducers/helper";
import { FormInputsInterface, formSchema } from "./establishment-information-helper";
import "./establishment-information.scss";
import { IProps } from "../shared/components-props";
import SaveAndCancel from "../../../atoms/buttons/save-and-cancel/save-and-cancel";
import NextButton from "../../../atoms/buttons/next-button/next-button";

const EstablishmentInformationComponent = (props: IProps) => {
  // the problem here is that placeholders can't accept tfunction , it accept strings only
  const { t }: { t: any } = useTranslation();

  const { data } = useSelector(
    (s: StateSelectorInterface) => s.pharmaceuticalEstablishment.establishmentInformationsReducer
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
        type: ActionTypes.PharmaceuticalEstablishmentActionTypes.SET_ESTABLISHMENT_INFORMATION,
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
    <Card className="estaplishmentInformation">
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Row>
            <Form.Group as={Col} md="6" sm="12" controlId="establishmentName">
              <Form.Label>
                {t("Forms.Establishment Name")} <span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder={t("Forms.Establishment Name")}
                name="establishmentName"
                ref={register}
                isValid={formState.touched.establishmentName && !errors.establishmentName}
                isInvalid={errors.establishmentName}
              />
              {errors.establishmentName ? (
                <span className="text-danger">{t(`${errors.establishmentName?.message}`)}</span>
              ) : null}
            </Form.Group>

            <Form.Group as={Col} md="6" sm="12" controlId="formGridPassword">
              <Form.Label>
                {t("Forms.Establishment Name (Arabic)")} <span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder={t("Forms.Establishment Name (Arabic)")}
                name="establishmentNameArabic"
                ref={register}
                isValid={
                  formState.touched.establishmentNameArabic && !errors.establishmentNameArabic
                }
                isInvalid={errors.establishmentNameArabic}
              />
              {errors.establishmentNameArabic ? (
                <span className="text-danger">
                  {t(`${errors.establishmentNameArabic?.message}`)}
                </span>
              ) : null}
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="6" sm="12" controlId="formGridState">
              <Form.Label>
                {t("Forms.Establishment Type")} <span className="required">*</span>
              </Form.Label>
              <Form.Control
                as="select"
                name="establishmentType"
                ref={register}
                isValid={formState.touched.establishmentType && !errors.establishmentType}
                isInvalid={errors.establishmentType}
              >
                <option disabled selected value="">
                  {t("Forms.Establishment Type")}
                </option>
                <option> Establishment Type 1</option>
                <option> Establishment Type 2</option>
                <option> Establishment Type 3</option>
              </Form.Control>
              {errors.establishmentType ? (
                <span className="text-danger">{t(`${errors.establishmentType?.message}`)}</span>
              ) : null}
            </Form.Group>

            <Form.Group as={Col} md="6" sm="12" controlId="formGridState">
              <Form.Label>
                {t("Forms.Category")} <span className="required">*</span>
              </Form.Label>
              <Form.Control
                as="select"
                name="Category"
                ref={register}
                isValid={formState.touched.Category && !errors.Category}
                isInvalid={errors.Category}
              >
                <option disabled selected value="">
                  {t("Forms.Category")}
                </option>
                <option>Category 1 </option>
                <option>Category 2 </option>
                <option>Category 3 </option>
              </Form.Control>
              {errors.Category ? (
                <span className="text-danger">{t(`${errors.Category?.message}`)}</span>
              ) : null}
            </Form.Group>
          </Form.Row>
          {props.isForReviewPage ? <SaveAndCancel onCancel={onCancelHandler} /> : <NextButton />}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EstablishmentInformationComponent;