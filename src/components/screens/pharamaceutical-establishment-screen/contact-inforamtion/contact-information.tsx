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
import { ActionTypes, StateSelectorInterface } from "../../../../redux/reducers/helper";
import NextButton from "../../../atoms/buttons/next-button/next-button";
import SaveAndCancel from "../../../atoms/buttons/save-and-cancel/save-and-cancel";
import { IProps } from "../shared/components-props";

const ContactInformationComponent = (props: IProps) => {
  const { t }: { t: any } = useTranslation();

  const { data } = useSelector(
    (s: StateSelectorInterface) => s.pharmaceuticalEstablishment.contactInformationsReducer
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
        type: ActionTypes.PharmaceuticalEstablishmentActionTypes.SET_CONTACT_INFORMATION,
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
    <Card>
      <Card.Body>
        <Container>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  {t("Titles.Retrieve information contact from your profile")}
                </Form.Label>
                <div className="radioBtns">
                  <Form.Check
                    type="radio"
                    name="retrieveInformation"
                    label={t("Forms.Yes")}
                    id="ri"
                    value="yes"
                    ref={register}
                    custom
                  />
                  <Form.Check
                    type="radio"
                    name="retrieveInformation"
                    label={t("Forms.No")}
                    id="ri2"
                    value="no"
                    ref={register}
                    custom
                    defaultChecked
                  />
                </div>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" sm="12" controlId="formGridEmail">
                <Form.Label>
                  {t("Forms.Contact Name")} <span className="required">*</span>{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={t("Forms.Contact Name")}
                  name="contactName"
                  ref={register}
                  isValid={formState.touched.contactName && !errors.contactName}
                  isInvalid={errors.contactName}
                />
                {
                  errors.contactName ? <span className="text-danger">{t(`${errors.contactName?.message}`)}</span> : null
                }
              </Form.Group>

              <Form.Group as={Col} md="6" sm="12" controlId="formGridPassword">
                <Form.Label>
                  {t("Forms.Designation")} <span className="required">*</span>{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={t("Forms.Designation")}
                  name="designation"
                  ref={register}
                  isValid={formState.touched.designation && !errors.designation}
                  isInvalid={errors.designation}
                />
                {
                  errors.designation ? <span className="text-danger">{t(`${errors.designation?.message}`)}</span> : null
                }
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="6" sm="12" controlId="formGridEmail">
                <Form.Label>
                  {t("Forms.Primary Email")} <span className="required">*</span>{" "}
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
                  <Image src={email} />
                </div>
                {
                  errors.primaryEmail ? <span className="text-danger">{t(`${errors.primaryEmail?.message}`)}</span> : null
                }
              </Form.Group>

              <Form.Group as={Col} md="6" sm="12" controlId="formGridPassword">
                <Form.Label>
                  {t("Forms.Alternative Email")} <span className="required">*</span>{" "}
                </Form.Label>
                <div className="inputWithIcon">
                  <Form.Control
                    type="text"
                    placeholder={t("Forms.Alternative Email")}
                    name="alternativeEmail"
                    ref={register}
                    isValid={formState.touched.alternativeEmail && !errors.alternativeEmail}
                    isInvalid={errors.alternativeEmail}
                  />
                  <Image src={email} />
                </div>
                {
                  errors.alternativeEmail ? <span className="text-danger">{t(`${errors.alternativeEmail?.message}`)}</span> : null
                }
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="6" sm="12" controlId="formGridEmail">
                <Form.Label>
                  {t("Forms.Contact Number")} <span className="required">*</span>{" "}
                </Form.Label>
                <div className="inputWithIcon">
                  <Form.Control
                    type="text"
                    placeholder=" +971 000 000 "
                    name="contactNumber"
                    ref={register}
                    isValid={formState.touched.contactNumber && !errors.contactNumber}
                    isInvalid={errors.contactNumber}
                  />
                  <Image src={phone} />
                </div>
                {
                  errors.contactNumber ? <span className="text-danger">{t(`${errors.contactNumber?.message}`)}</span> : null
                }
              </Form.Group>

              <Form.Group as={Col} md="6" sm="12" controlId="formGridPassword">
                <Form.Label>
                  {t("Forms.Alternative Contact Number")} <span className="required">*</span>{" "}
                </Form.Label>
                <div className="inputWithIcon">
                  <Form.Control
                    type="text"
                    placeholder=" +971 000 000  "
                    name="alternativeContactNumber"
                    ref={register}
                    // eslint-disable-next-line max-len
                    isValid={
                      formState.touched.alternativeContactNumber && !errors.alternativeContactNumber
                    }
                    isInvalid={errors.alternativeContactNumber}
                  />
                  <Image src={phone} />
                </div>
                {
                  errors.alternativeContactNumber ? <span className="text-danger">{t(`${errors.alternativeContactNumber?.message}`)}</span> : null
                }
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="6" sm="12" controlId="formGridEmail">
                <Form.Label> {t("Forms.Fax")} </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={t("Forms.Fax")}
                  name="fax"
                  ref={register}
                  isValid={formState.touched.fax && !errors.fax}
                  isInvalid={errors.fax}
                />
                {
                  errors.fax ? <span className="text-danger">{t(`${errors.fax?.message}`)}</span> : null
                }
              </Form.Group>
            </Form.Row>
            {props.isForReviewPage ? <SaveAndCancel onCancel={onCancelHandler} /> : <NextButton />}
          </Form>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default ContactInformationComponent;
