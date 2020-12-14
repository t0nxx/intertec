import React from "react";
import { useDispatch } from "react-redux";
import { Image, Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { FormInputsInterface, formSchema } from "./add-partner-helper";
import "./add-partner.scss";
import "../../shared/shared.scss";

// Import images
import userPhoto from "../../../../../assets/userPhoto.svg";
import upload from "../../../../../assets/upload.svg";
import email from "../../../../../assets/mail.svg";
import phone from "../../../../../assets/phone.svg";
import arrow from "../../../../../assets/arrow-white.svg";
import { ActionTypes } from "../../../../../redux/reducers/helper";
import SaveAndCancel from "../../../../atoms/buttons/save-and-cancel/save-and-cancel";
import AttachmentComponent from "../../../../templates/attachment/attachment";

const AddPartnerComponent = (props: { closeModal: any }) => {
  const { t }: { t: any } = useTranslation();
  const history = useHistory();
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(formSchema),
    mode: "all",
  });

  const dispatch = useDispatch();
  const onSubmit = (data: FormInputsInterface) => {
    if (formState.isValid) {
      dispatch({
        type: ActionTypes.PharmaceuticalEstablishmentActionTypes.Add_New_PARTNER,
        payload: data,
      });
      props.closeModal();
    }
  };
  const closeModalHandler = () => {
    // pass this event to parent to close the modal
    props.closeModal();
  };
  return (
    /**
     * this should be abstacted  . later i will bake a style for card only usin styled component
     */
    <Container fluid>
      <Card className="add-partner">
        <Card.Body className="model-card">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  {t("Titles.Retrieve information contact from your profile")}
                </Form.Label>
                <div className="radioButtons">
                  <div className="form-check">
                    <label htmlFor="getContactData">
                      <input
                        name="getContactData"
                        type="radio"
                        id="getContactData"
                        className="form-check-input"
                        value="yes"
                        ref={register}
                      />
                      {t("Forms.Yes")}
                      <i className="checkMark"> </i>
                    </label>
                  </div>
                  <div className="form-check">
                    <label htmlFor="getContactData2">
                      <input
                        name="getContactData"
                        type="radio"
                        id="getContactData2"
                        className="form-check-input"
                        value="no"
                        ref={register}
                        defaultChecked
                      />
                      {t("Forms.No")}
                      <i className="checkMark"> </i>
                    </label>
                  </div>
                </div>
              </Form.Group>
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
                <Form.Group controlId="formGridEmail">
                  <Form.Label>
                    {t("Forms.Title")} <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="tite"
                    ref={register}
                    isValid={formState.touched.tite && !errors.tite}
                    isInvalid={errors.tite}
                  >
                    <option disabled selected value="">
                      {t("Forms.Title")}
                    </option>
                    <option>...</option>
                    <option>...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formGridEmail">
                  <Form.Label>
                    {t("Forms.Gender")} <span className="required">*</span>
                  </Form.Label>
                  <div className="radioButtons">
                    <div className="form-check">
                      <label htmlFor="gender">
                        <input
                          name="gender"
                          type="radio"
                          id="gender"
                          className="form-check-input"
                          value="male"
                          ref={register}
                        />
                        {t("Forms.Male")}
                        <i className="checkMark"> </i>
                      </label>
                    </div>
                    <div className="form-check">
                      <label htmlFor="gender2">
                        <input
                          name="gender"
                          type="radio"
                          id="gender2"
                          className="form-check-input"
                          value="female"
                          ref={register}
                          defaultChecked
                        />
                        {t("Forms.Female")}
                        <i className="checkMark"> </i>
                      </label>
                    </div>
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Form.Row>
              <Form.Group as={Col} md="6" sm="12" controlId="formGridEmail">
                <Form.Label>
                  {t("Forms.First name")}
                  <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={t("Forms.First name")}
                  name="fName"
                  ref={register}
                  isValid={formState.touched.fName && !errors.fName}
                  isInvalid={errors.fName}
                />
                {errors.fName ? (
                  <span className="text-danger">{t(`${errors.fName?.message}`)}</span>
                ) : null}
              </Form.Group>

              <Form.Group as={Col} md="6" sm="12" controlId="formGridPassword">
                <Form.Label>
                  {t("Forms.Middle name")}
                  <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={t("Forms.Middle name")}
                  name="mName"
                  ref={register}
                  isValid={formState.touched.mName && !errors.mName}
                  isInvalid={errors.mName}
                />
                {errors.mName ? (
                  <span className="text-danger">{t(`${errors.mName?.message}`)}</span>
                ) : null}
              </Form.Group>

              <Form.Group as={Col} md="6" sm="12" controlId="formGridPassword">
                <Form.Label>
                  {t("Forms.Last name")}
                  <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={t("Forms.Last name")}
                  name="lName"
                  ref={register}
                  isValid={formState.touched.lName && !errors.lName}
                  isInvalid={errors.lName}
                />
                {errors.lName ? (
                  <span className="text-danger">{t(`${errors.lName?.message}`)}</span>
                ) : null}
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="6" sm="12" controlId="formGridEmail">
                <Form.Label>
                  {t("Forms.First name (Arabic)")}
                  <span className="required">*</span>
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
                  {t("Forms.Middle name (Arabic)")}
                  <span className="required">*</span>
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
                  {t("Forms.Last Name (Arabic)")}
                  <span className="required">*</span>
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
                  {t("Forms.Emirates ID")}
                  <span className="required">*</span>
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
              <h5>{t("Forms.Contact information")}</h5>
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
                  {t("Forms.Primary Email")} <span className="required">*</span>
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
            <div className="model-fixed-footer">
              <SaveAndCancel customText={t("Buttons.Add")} onCancel={closeModalHandler} />
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddPartnerComponent;
