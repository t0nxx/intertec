import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { FormInputsInterface, formSchema } from "./location-information-helper";
import arrow from "../../../../assets/arrow-white.svg";
import map from "../../../../assets/map.svg";

import "./location-information.scss";
import {
  ActionTypes,
  StateSelectorInterface,
} from "../../../../redux/reducers/helper";
import { IProps } from "../shared/components-props";
import SaveAndCancel from "../../../atoms/buttons/save-and-cancel/save-and-cancel";
import NextButton from "../../../atoms/buttons/next-button/next-button";
import { FormInputComponent } from "../../../molecules/forms/formInput";
import {
  pharmaceuticalEstablishmentNextStepAction,
  setLocationInformationAction,
} from "../../../../redux/actions/pharmaceuticalEstablishmentActions";

const LocationInformationComponent = (props: IProps) => {
  const { t }: { t: any } = useTranslation();
  const { data } = useSelector(
    (s: StateSelectorInterface) =>
      s.pharmaceuticalEstablishment.locationInformationsReducer
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
      dispatch(setLocationInformationAction(values));
      // move to next step
      dispatch(pharmaceuticalEstablishmentNextStepAction());
      changeParentToggleEvent();
    }
  };

  return (
    /**
     * this should be abstacted  . later i will bake a style for card only usin styled component
     */
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Row>
            <FormInputComponent
              label="Emirate"
              type="select"
              as="select"
              name="emirate"
              isRequird={true}
              register={register}
              formState={formState}
              errors={errors.emirate}
            >
              <option> emirate</option>
            </FormInputComponent>

            <FormInputComponent
              label="Area"
              type="text"
              name="area"
              isRequird={true}
              register={register}
              formState={formState}
              errors={errors.area}
            />
          </Form.Row>

          <Form.Row>
            <FormInputComponent
              label="Street"
              type="text"
              name="street"
              isRequird={true}
              takeFullRow={true}
              register={register}
              formState={formState}
              errors={errors.street}
            />
          </Form.Row>

          <Form.Row>
            <FormInputComponent
              label="Po Box"
              type="text"
              name="poBox"
              isRequird={true}
              register={register}
              formState={formState}
              errors={errors.poBox}
            />

            <FormInputComponent
              label="Building Name"
              type="text"
              name="buildingName"
              isRequird={true}
              register={register}
              formState={formState}
              errors={errors.buildingName}
            />
          </Form.Row>

          <Form.Row>
            <FormInputComponent
              label="Building No"
              type="text"
              name="buildingNo"
              isRequird={true}
              register={register}
              formState={formState}
              errors={errors.buildingNo}
            />

            <FormInputComponent
              label="Google Map Url"
              type="text"
              name="mapUrl"
              isRequird={true}
              withImage={true}
              imgSrc={map}
              register={register}
              formState={formState}
              errors={errors.mapUrl}
            />
          </Form.Row>
          {props.isForReviewPage ? (
            <SaveAndCancel onCancel={onCancelHandler} />
          ) : (
            <NextButton />
          )}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default LocationInformationComponent;
