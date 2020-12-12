import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { FormInputsInterface, formSchema } from "./location-information-helper";
import arrow from "../../../../assets/arrow-white.svg";
import map from "../../../../assets/map.svg";

import "./location-information.scss";
import { ActionTypes, StateSelectorInterface } from "../../../../redux/reducers/helper";
import { IProps } from "../shared/components-props";
import SaveAndCancel from "../../../atoms/buttons/save-and-cancel/save-and-cancel";
import NextButton from "../../../atoms/buttons/next-button/next-button";

const LocationInformationComponent = (props: IProps) => {
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
            <Form.Group as={Col} md="6" sm="12" controlId="formGridState">
              <Form.Label>
                {t("Forms.Emirate")} <span className="required">*</span>
              </Form.Label>
              <Form.Control
                as="select"
                name="emirate"
                ref={register}
                isValid={formState.touched.emirate && !errors.emirate}
                isInvalid={errors.emirate}
              >
                <option disabled selected value="">
                  {t("Forms.Emirate")}
                </option>
                <option> Type 1</option>
                <option> Type 2</option>
                <option> Type 3</option>
              </Form.Control>
              {errors.emirate ? (
                <span className="text-danger">{t(`${errors.emirate?.message}`)}</span>
              ) : null}
            </Form.Group>

            <Form.Group as={Col} md="6" sm="12" controlId="formGridPassword">
              <Form.Label>
                {t("Forms.Area")} <span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder={t("Forms.Area")}
                name="area"
                ref={register}
                isValid={formState.touched.area && !errors.area}
                isInvalid={errors.area}
              />
              {errors.area ? (
                <span className="text-danger">{t(`${errors.area?.message}`)}</span>
              ) : null}
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="establishmentName">
              <Form.Label>
                {t("Forms.Street")} <span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder={t("Forms.Street")}
                name="street"
                ref={register}
                isValid={formState.touched.street && !errors.street}
                isInvalid={errors.street}
              />
              {errors.street ? (
                <span className="text-danger">{t(`${errors.street?.message}`)}</span>
              ) : null}
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="6" sm="12" controlId="establishmentName">
              <Form.Label>
                {t("Forms.Po Box")} <span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder={t("Forms.Po Box")}
                name="poBox"
                ref={register}
                isValid={formState.touched.poBox && !errors.poBox}
                isInvalid={errors.poBox}
              />
              {errors.poBox ? (
                <span className="text-danger">{t(`${errors.poBox?.message}`)}</span>
              ) : null}
            </Form.Group>
            <Form.Group as={Col} md="6" sm="12" controlId="establishmentName">
              <Form.Label>
                {t("Forms.Building Name")} <span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder={t("Forms.Building Name")}
                name="buildingName"
                ref={register}
                isValid={formState.touched.buildingName && !errors.buildingName}
                isInvalid={errors.buildingName}
              />
              {errors.buildingName ? (
                <span className="text-danger">{t(`${errors.buildingName?.message}`)}</span>
              ) : null}
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="6" sm="12" controlId="establishmentName">
              <Form.Label>
                {t("Forms.Building No")} <span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder={t("Forms.Building No")}
                name="buildingNo"
                ref={register}
                isValid={formState.touched.buildingNo && !errors.buildingNo}
                isInvalid={errors.buildingNo}
              />
              {errors.buildingNo ? (
                <span className="text-danger">{t(`${errors.buildingNo?.message}`)}</span>
              ) : null}
            </Form.Group>

            <Form.Group as={Col} md="6" sm="12" controlId="establishmentName">
              <Form.Label>
                {t("Forms.Google Map Url")} <span className="required">*</span>
              </Form.Label>

              <div className="inputWithIcon">
                <Form.Control
                  type="text"
                  placeholder={t("Forms.Google Map Url")}
                  name="mapUrl"
                  ref={register}
                  isValid={formState.touched.mapUrl && !errors.mapUrl}
                  isInvalid={errors.mapUrl}
                />
                <Image src={map} />
              </div>
              {errors.mapUrl ? (
                <span className="text-danger">{t(`${errors.mapUrl?.message}`)}</span>
              ) : null}
            </Form.Group>

            <Form.Group as={Col} md="12" sm="12" controlId="establishmentName">
              <Form.Label>Old building information</Form.Label>

              <div className="oldData">
                <div className="oldDataContent">
                  <Col>
                    <Row>
                      <Col md="4" sm="6" xs="12">
                        <p>Building Name</p>
                        <span>Building Name</span>
                      </Col>
                      <Col md="4" sm="6" xs="12">
                        <p>Street</p>
                        <span>Street</span>
                      </Col>
                      <Col> </Col>
                    </Row>
                    <Row>
                      <Col md="4" sm="6" xs="12">
                        <p>Emirate</p>
                        <span>Emirate</span>
                      </Col>
                      <Col md="4" sm="6" xs="12">
                        <p>Area</p>
                        <span>Area</span>
                      </Col>
                      <Col md="4" sm="6" xs="12">
                        <p>Building NO</p>
                        <span>Building NO</span>
                      </Col>
                    </Row>
                  </Col>
                </div>
              </div>
            </Form.Group>
          </Form.Row>
          {props.isForReviewPage ? <SaveAndCancel onCancel={onCancelHandler} /> : <NextButton />}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default LocationInformationComponent;
