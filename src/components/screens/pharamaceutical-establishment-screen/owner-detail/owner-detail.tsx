import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { FormInputsInterface, formSchema } from "./owner-detail-helper";
import "./owner-detail.scss";
import "../shared/shared.scss";

// Import images
import userPhoto from "../../../../assets/userPhoto.svg";
import upload from "../../../../assets/upload.svg";
import email from "../../../../assets/mail.svg";
import phone from "../../../../assets/phone.svg";
import arrow from "../../../../assets/arrow-white.svg";
import { ActionTypes, StateSelectorInterface } from "../../../../redux/reducers/helper";
import AttachmentComponent from "../../../templates/attachment/attachment";
import { IProps } from "../shared/components-props";
import NextButton from "../../../atoms/buttons/next-button/next-button";
import SaveAndCancel from "../../../atoms/buttons/save-and-cancel/save-and-cancel";
import { RadioButtonsComponent } from "../../../molecules/forms/radioButtonInput";
import { FormInputComponent } from "../../../molecules/forms/formInput";

const OwnerDetailComponent = (props: IProps) => {
  const { t }: { t: any } = useTranslation();
  const { data } = useSelector(
    (s: StateSelectorInterface) => s.pharmaceuticalEstablishment.ownerDetailsReducer
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
        type: ActionTypes.PharmaceuticalEstablishmentActionTypes.SET_OWNER_DETAILS,
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
    <Container fluid>
      <Card className="owner-details">
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
              <RadioButtonsComponent
                withLable={true}
                label="Retrieve information contact from your profile"
                name="getInfoFromProfile"
                value1="Yes"
                value2="No"
                register={register}
              />
            </Form.Row>
            <Row>
              <Col md={4}>
                <Form.Group controlId="formGridEmail" className="uploadPhoto">
                  <Image src={userPhoto} />
                  <Button variant="success">
                    <Image src={upload} /> {t("Forms.Upload")}
                  </Button>
                </Form.Group>
              </Col>
              <Col md={4}>
                <FormInputComponent
                  label="Title"
                  type="select"
                  as="select"
                  name="tite"
                  isRequird={true}
                  takeFullRow={true}
                  register={register}
                  formState={formState}
                  errors={errors.tite}
                >
                  <option> title</option>
                </FormInputComponent>
              </Col>
              <Col md={4}>
                <RadioButtonsComponent
                  withLable={true}
                  label="Gender"
                  name="gender"
                  value1="Male"
                  value2="Female"
                  register={register}
                />
              </Col>
            </Row>

            <Form.Row>
              <Col md={4}>
                <FormInputComponent
                  label="First name"
                  type="text"
                  name="fName"
                  isRequird={true}
                  takeFullRow={true}
                  register={register}
                  formState={formState}
                  errors={errors.fName}
                />
              </Col>
              <Col md={4}>
                <FormInputComponent
                  label="Middle name"
                  type="text"
                  name="mName"
                  isRequird={true}
                  takeFullRow={true}
                  register={register}
                  formState={formState}
                  errors={errors.mName}
                />
              </Col>
              <Col md={4}>
                <FormInputComponent
                  label="Last name"
                  type="text"
                  name="lName"
                  isRequird={true}
                  takeFullRow={true}
                  register={register}
                  formState={formState}
                  errors={errors.lName}
                />
              </Col>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="6" sm="12" controlId="formGridEmail">
                <Form.Label>
                  {t("Forms.First name (Arabic)")} <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={t("Forms.First name (Arabic)")}
                  name="fNameAr"
                  ref={register}
                  isValid={formState.touched.fNameAr && !errors.fNameAr}
                  isInvalid={errors.fNameAr}
                />
                {errors.fNameAr ? (
                  <span className="text-danger">{t(`${errors.fNameAr?.message}`)}</span>
                ) : null}
              </Form.Group>

              <Form.Group as={Col} md="6" sm="12" controlId="formGridPassword">
                <Form.Label>
                  {t("Forms.Middle name (Arabic)")} <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={t("Forms.Middle name (Arabic)")}
                  name="mNameAr"
                  ref={register}
                  isValid={formState.touched.mNameAr && !errors.mNameAr}
                  isInvalid={errors.mNameAr}
                />
                {errors.mNameAr ? (
                  <span className="text-danger">{t(`${errors.mNameAr?.message}`)}</span>
                ) : null}
              </Form.Group>

              <Form.Group as={Col} md="6" sm="12" controlId="formGridPassword">
                <Form.Label>
                  {t("Forms.Last Name (Arabic)")} <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={t("Forms.Last Name (Arabic)")}
                  name="lNameAr"
                  ref={register}
                  isValid={formState.touched.lNameAr && !errors.lNameAr}
                  isInvalid={errors.lNameAr}
                />
                {errors.lNameAr ? (
                  <span className="text-danger">{t(`${errors.lNameAr?.message}`)}</span>
                ) : null}
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="6" sm="12" controlId="formGridPassword">
                <Form.Label>
                  {t("Forms.Share Percentage")} <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  placeholder="50%"
                  name="sharePercentage"
                  ref={register}
                  isValid={formState.touched.sharePercentage && !errors.sharePercentage}
                  isInvalid={errors.sharePercentage}
                />
                {errors.sharePercentage ? (
                  <span className="text-danger">{t(`${errors.sharePercentage?.message}`)}</span>
                ) : null}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  {t("Forms.UAE Citzen")} <span className="required">*</span>
                </Form.Label>
                <div className="radioButtons">
                  <div className="form-check">
                    <label htmlFor="UAECitzen">
                      <input
                        name="uaeCitzen"
                        type="radio"
                        id="UAECitzen"
                        className="form-check-input"
                        value="yes"
                        ref={register}
                        defaultChecked
                      />
                      {t("Forms.Yes")}
                      <i className="checkMark"> </i>
                    </label>
                  </div>
                  <div className="form-check">
                    <label htmlFor="UAECitzen2">
                      <input
                        name="uaeCitzen"
                        type="radio"
                        id="UAECitzen2"
                        className="form-check-input"
                        value="no"
                        ref={register}
                      />
                      {t("Forms.No")}
                      <i className="checkMark"> </i>
                    </label>
                  </div>
                </div>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="6" sm="12" controlId="formGridState">
                <Form.Label>
                  {t("Forms.Nationality")} <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  as="select"
                  name="nationality"
                  ref={register}
                  isValid={formState.touched.nationality && !errors.nationality}
                  isInvalid={errors.nationality}
                >
                  <option disabled selected value="">
                    {t("Forms.Nationality")}
                  </option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} md="6" sm="12" controlId="formGridPassword">
                <Form.Label>
                  {t("Forms.Passport No")} <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={t("Forms.No")}
                  name="passportNo"
                  ref={register}
                  isValid={formState.touched.passportNo && !errors.passportNo}
                  isInvalid={errors.passportNo}
                />
                {errors.passportNo ? (
                  <span className="text-danger">{t(`${errors.passportNo?.message}`)}</span>
                ) : null}
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" sm="12" controlId="formGridPassword">
                <Form.Label>
                  {t("Forms.Emirates ID")} <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={t("Forms.Emirates ID")}
                  name="emiratesId"
                  ref={register}
                  isValid={formState.touched.emiratesId && !errors.emiratesId}
                  isInvalid={errors.emiratesId}
                />
                {errors.emiratesId ? (
                  <span className="text-danger">{t(`${errors.emiratesId?.message}`)}</span>
                ) : null}
              </Form.Group>
              <Form.Group as={Col} md="6" sm="12" controlId="formGridPassword">
                <Form.Label>
                  {t("Forms.Family Book No")} <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={t("Forms.No")}
                  name="familyBookNo"
                  ref={register}
                  isValid={formState.touched.familyBookNo && !errors.familyBookNo}
                  isInvalid={errors.familyBookNo}
                />
                {errors.familyBookNo ? (
                  <span className="text-danger">{t(`${errors.familyBookNo?.message}`)}</span>
                ) : null}
              </Form.Group>
            </Form.Row>
            <Form.Row className="splitTitle">
              <h5>{t("Forms.Contact information")} </h5>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" sm="12" controlId="formGridEmail">
                <Form.Label>
                  {t("Forms.Contact Number")} <span className="required">*</span>
                </Form.Label>
                <div className="inputWithIcon">
                  <Form.Control
                    type="text"
                    placeholder={t("Forms.Contact Number")}
                    name="contactNo"
                    ref={register}
                    isValid={formState.touched.contactNo && !errors.contactNo}
                    isInvalid={errors.contactNo}
                  />
                  {errors.contactNo ? (
                    <span className="text-danger">{t(`${errors.contactNo?.message}`)}</span>
                  ) : null}
                  <Image src={phone} />
                </div>
              </Form.Group>

              <Form.Group as={Col} md="6" sm="12" controlId="formGridPassword">
                <Form.Label>
                  {t("Forms.Primary Email")}
                  <span className="required">*</span>
                </Form.Label>
                <div className="inputWithIcon">
                  <Form.Control
                    type="text"
                    placeholder={t("Forms.Primary Email")}
                    name="primaryEmail"
                    ref={register}
                    isValid={formState.touched.primaryEmail && !errors.primaryEmail}
                    isInvalid={errors.primaryEmail}
                  />
                  {errors.primaryEmail ? (
                    <span className="text-danger">{t(`${errors.primaryEmail?.message}`)}</span>
                  ) : null}
                  <Image src={email} />
                </div>
              </Form.Group>
            </Form.Row>
            <Form.Row className="splitTitle">
              <h5>{t("Buttons.Attachments")}</h5>
            </Form.Row>
            <AttachmentComponent withslidercarosel={false} />
            {props.isForReviewPage ? <SaveAndCancel onCancel={onCancelHandler} /> : <NextButton />}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OwnerDetailComponent;
