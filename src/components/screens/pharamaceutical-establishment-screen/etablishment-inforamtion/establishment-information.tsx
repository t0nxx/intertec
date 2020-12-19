import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  ActionTypes,
  StateSelectorInterface,
} from "../../../../redux/reducers/helper";
import {
  FormInputsInterface,
  formSchema,
} from "./establishment-information-helper";
import "./establishment-information.scss";
import { IProps } from "../shared/components-props";
import SaveAndCancel from "../../../atoms/buttons/save-and-cancel/save-and-cancel";
import NextButton from "../../../atoms/buttons/next-button/next-button";
import { FormInputComponent } from "../../../molecules/forms/formInput";

const EstablishmentInformationComponent = (props: IProps) => {
  const { data } = useSelector(
    (s: StateSelectorInterface) =>
      s.pharmaceuticalEstablishment.establishmentInformationsReducer
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
        type:
          ActionTypes.PharmaceuticalEstablishmentActionTypes
            .SET_ESTABLISHMENT_INFORMATION,
        payload: values,
      });
      // move to next step
      dispatch({
        type:
          ActionTypes.PharmaceuticalEstablishmentActionTypes.NEXT_STEP_NUMBER,
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
            <FormInputComponent
              label="Establishment Name"
              type="text"
              name="establishmentName"
              isRequird={true}
              register={register}
              formState={formState}
              errors={errors.establishmentName}
            />
            <FormInputComponent
              label="Establishment Name (Arabic)"
              type="text"
              name="establishmentNameArabic"
              isRequird={true}
              register={register}
              formState={formState}
              errors={errors.establishmentNameArabic}
            />
          </Form.Row>

          <Form.Row>
            <FormInputComponent
              label="Establishment Type"
              type="select"
              as="select"
              name="establishmentType"
              isRequird={true}
              register={register}
              formState={formState}
              errors={errors.establishmentType}
            >
              <option> Establishment Type 1</option>
              <option> Establishment Type 2</option>
              <option> Establishment Type 3</option>
            </FormInputComponent>

            <FormInputComponent
              label="Category"
              type="select"
              as="select"
              name="Category"
              isRequird={true}
              register={register}
              formState={formState}
              errors={errors.Category}
            >
              <option>Category 1 </option>
              <option>Category 2 </option>
              <option>Category 3 </option>
            </FormInputComponent>
          </Form.Row>
          {props.isForReviewPage ? (
            <SaveAndCancel onCancel={onCancelHandler} />
          ) : (
            <NextButton onSubmit={onSubmit} />
          )}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EstablishmentInformationComponent;
