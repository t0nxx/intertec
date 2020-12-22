import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Image,
  Card,
  Col,
  Container,
  Form,
  Row,
  Button,
} from "react-bootstrap";
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
import {
  ActionTypes,
  StateSelectorInterface,
} from "../../../../../redux/reducers/helper";
import SaveAndCancel from "../../../../atoms/buttons/save-and-cancel/save-and-cancel";
import AttachmentComponent from "../../../../templates/attachment/attachment";
import { FormInputComponent } from "../../../../molecules/forms/formInput";
import { RadioButtonsComponent } from "../../../../molecules/forms/radioButtonInput";
import {
  addPartnerAction,
  editPartnerAction,
} from "../../../../../redux/actions/pharmaceuticalEstablishmentActions";

const AddPartnerComponent = (props: {
  closeModal: any;
  isEditingOne: boolean;
  editingOneData?: any;
}) => {
  const { t }: { t: any } = useTranslation();
  const history = useHistory();
  const lookups = useSelector(
    (s: StateSelectorInterface) => s.lookupsReducer.data
  );
  const { register, handleSubmit, reset, errors, formState } = useForm({
    resolver: yupResolver(formSchema),
    mode: "all",
  });

  const dispatch = useDispatch();
  const onSubmit = (data: FormInputsInterface) => {
    if (formState.isValid) {
      if (props.isEditingOne) {
        dispatch(editPartnerAction(props.editingOneData.id, data));
      } else {
        dispatch(addPartnerAction(data));
      }

      props.closeModal();
    }
  };
  const closeModalHandler = () => {
    // pass this event to parent to close the modal
    props.closeModal();
  };

  useEffect(() => {
    // this for use the same component for edit , add
    if (props.isEditingOne) {
      /// fill the form inputs with the one how want to edit
      reset(props.editingOneData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset]);
  return (
    <Container fluid>
      <Card className="add-partner">
        <Card.Body className="model-card">
          <Form onSubmit={handleSubmit(onSubmit)}>
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
                  {lookups.OwnerTitle &&
                    lookups.OwnerTitle.map((type) => (
                      <option key={type.OwnFamilyID} value={type.OwnFamilyID}>
                        {type.NameEn}
                      </option>
                    ))}
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
              <Col md={4}>
                <FormInputComponent
                  label="First name (Arabic)"
                  type="text"
                  name="fNameAr"
                  isRequird={true}
                  takeFullRow={true}
                  register={register}
                  formState={formState}
                  errors={errors.fNameAr}
                />
              </Col>

              <Col md={4}>
                <FormInputComponent
                  label="Middle name (Arabic)"
                  type="text"
                  name="mNameAr"
                  isRequird={true}
                  takeFullRow={true}
                  register={register}
                  formState={formState}
                  errors={errors.mNameAr}
                />
              </Col>
              <Col md={4}>
                <FormInputComponent
                  label="Last Name (Arabic)"
                  type="text"
                  name="lNameAr"
                  isRequird={true}
                  takeFullRow={true}
                  register={register}
                  formState={formState}
                  errors={errors.lNameAr}
                />
              </Col>
            </Form.Row>

            <Form.Row>
              <Col md={8}>
                <FormInputComponent
                  label="Share Percentage"
                  type="number"
                  name="sharePercentage"
                  isRequird={true}
                  takeFullRow={true}
                  register={register}
                  formState={formState}
                  errors={errors.sharePercentage}
                />
              </Col>
              <Col md={4}>
                <RadioButtonsComponent
                  withLable={true}
                  label="UAE Citzen"
                  name="uaeCitzen"
                  value1="Yes"
                  value2="No"
                  register={register}
                />
              </Col>
            </Form.Row>

            <Form.Row>
              <FormInputComponent
                label="Nationality"
                type="select"
                as="select"
                name="nationality"
                isRequird={true}
                register={register}
                formState={formState}
                errors={errors.nationality}
              >
                {lookups.Nationality &&
                  lookups.Nationality.map((type) => (
                    <option key={type.OwnFamilyID} value={type.OwnFamilyID}>
                      {type.NameEn}
                    </option>
                  ))}
              </FormInputComponent>

              <FormInputComponent
                label="Passport No"
                type="text"
                name="passportNo"
                isRequird={true}
                register={register}
                formState={formState}
                errors={errors.passportNo}
              />
            </Form.Row>
            <Form.Row>
              <FormInputComponent
                label="Emirates ID"
                type="text"
                name="emiratesId"
                isRequird={true}
                register={register}
                formState={formState}
                errors={errors.emiratesId}
              />
              <FormInputComponent
                label="Family Book No"
                type="text"
                name="familyBookNo"
                isRequird={true}
                register={register}
                formState={formState}
                errors={errors.familyBookNo}
              />
            </Form.Row>
            <Form.Row className="splitTitle">
              <h5>{t("Forms.Contact information")} </h5>
            </Form.Row>
            <Form.Row>
              <FormInputComponent
                label="Contact Number"
                type="text"
                name="contactNo"
                isRequird={true}
                register={register}
                formState={formState}
                errors={errors.contactNo}
                withImage={true}
                imgSrc={phone}
              />
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
            </Form.Row>
            <Form.Row className="splitTitle">
              <h5>{t("Buttons.Attachments")}</h5>
            </Form.Row>
            <AttachmentComponent withslidercarosel={false} />
            <div className="model-fixed-footer">
              <SaveAndCancel
                customText={
                  props.isEditingOne
                    ? t("Buttons.Save And Edit")
                    : t("Buttons.Add")
                }
                onCancel={closeModalHandler}
              />
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddPartnerComponent;
