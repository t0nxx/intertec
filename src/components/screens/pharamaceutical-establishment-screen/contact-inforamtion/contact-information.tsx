import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Container, Form, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { FormInputsInterface, formSchema } from "./contact-information-helper";

import "./contact-information.scss";
import "../shared/shared.scss";

import email from "../../../../assets/mail.svg";
import phone from "../../../../assets/phone.svg";
import {
  ActionTypes,
  StateSelectorInterface,
} from "../../../../redux/reducers/helper";
import NextButton from "../../../atoms/buttons/next-button/next-button";
import SaveAndCancel from "../../../atoms/buttons/save-and-cancel/save-and-cancel";
import { IProps } from "../shared/components-props";
import { FormInputComponent } from "../../../molecules/forms/formInput";
import { RadioButtonsComponent } from "../../../molecules/forms/radioButtonInput";

const ContactInformationComponent = (props: IProps) => {
  const { t }: { t: any } = useTranslation();

  const { data } = useSelector(
    (s: StateSelectorInterface) =>
      s.pharmaceuticalEstablishment.contactInformationsReducer
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
            .SET_CONTACT_INFORMATION,
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
    <Card>
      <Card.Body>
        <Container>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
              <RadioButtonsComponent
                withLable={true}
                label="Retrieve information contact from your profile"
                name="retrieveInformation"
                value1="Yes"
                value2="No"
                register={register}
              />
            </Form.Row>
            <Form.Row>
              <FormInputComponent
                label="Contact Name"
                type="text"
                name="contactName"
                isRequird={true}
                register={register}
                formState={formState}
                errors={errors.contactName}
              />

              <FormInputComponent
                label="Designation"
                type="text"
                name="designation"
                isRequird={true}
                register={register}
                formState={formState}
                errors={errors.designation}
              />
            </Form.Row>

            <Form.Row>
              <FormInputComponent
                label="Primary Email"
                type="text"
                name="primaryEmail"
                isRequird={true}
                register={register}
                formState={formState}
                errors={errors.primaryEmail}
                withImage={true}
                imgSrc={email}
              />
              <FormInputComponent
                label="Alternative Email"
                type="text"
                name="alternativeEmail"
                isRequird={true}
                register={register}
                formState={formState}
                errors={errors.alternativeEmail}
                withImage={true}
                imgSrc={email}
              />
            </Form.Row>

            <Form.Row>
              <FormInputComponent
                label="Contact Number"
                type="text"
                name="contactNumber"
                customPlaceHolder="+971 000 000"
                isRequird={true}
                register={register}
                formState={formState}
                errors={errors.contactNumber}
                withImage={true}
                imgSrc={phone}
              />
              <FormInputComponent
                label="Alternative Contact Number"
                type="text"
                name="alternativeContactNumber"
                customPlaceHolder="+971 000 000"
                isRequird={true}
                register={register}
                formState={formState}
                errors={errors.alternativeContactNumber}
                withImage={true}
                imgSrc={phone}
              />
            </Form.Row>

            <Form.Row>
              <FormInputComponent
                label="Fax"
                type="text"
                name="fax"
                isRequird={false}
                register={register}
                formState={formState}
                errors={errors.fax}
              />
            </Form.Row>
            {props.isForReviewPage ? (
              <SaveAndCancel onCancel={onCancelHandler} />
            ) : (
              <NextButton />
            )}
          </Form>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default ContactInformationComponent;
