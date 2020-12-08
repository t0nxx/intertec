import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Container, Form, Row, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInputsInterface, formSchema } from "./contact-information-helper";

import "./contact-information.scss";
import "../shared/shared.scss";

import email from "../../../../assets/mail.svg";
import phone from "../../../../assets/phone.svg";
import arrow from "../../../../assets/arrow-white.svg";
import { ActionTypes, StateSelectorInterface } from "../../../../redux/reducers/helper";
import SubmissionButton from "../../../submission-buttons/submission";
import SubmissionButtonWithCancel from "../../../submission-buttons/submission-with-cancel";
import { IProps } from "../shared/components-props";

const ContactInformationComponent = (props: IProps) => {
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
                <Form.Label>Retrieve information contact from your profile</Form.Label>
                <div className="radioBtns">
                  <Form.Check
                    type="radio"
                    name="retrieveInformation"
                    label="Yes"
                    id="ri"
                    value="yes"
                    ref={register}
                    custom
                  />
                  <Form.Check
                    type="radio"
                    name="retrieveInformation"
                    label="No"
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
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  Contact Name <span className="required">*</span>{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=" Contact Name"
                  name="contactName"
                  ref={register}
                  isValid={formState.touched.contactName && !errors.contactName}
                  isInvalid={errors.contactName}
                />
                <span className="text-danger">{errors.contactName?.message}</span>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Designation <span className="required">*</span>{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=" Designation "
                  name="designation"
                  ref={register}
                  isValid={formState.touched.designation && !errors.designation}
                  isInvalid={errors.designation}
                />
                <span className="text-danger">{errors.designation?.message}</span>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  Primary Email <span className="required">*</span>{" "}
                </Form.Label>
                <div className="inputWithIcon">
                  <Form.Control
                    type="text"
                    placeholder="Primary Email"
                    name="primaryEmail"
                    ref={register}
                    isValid={formState.touched.primaryEmail && !errors.primaryEmail}
                    isInvalid={errors.primaryEmail}
                  />
                  <Image src={email} />
                </div>
                <span className="text-danger">{errors.primaryEmail?.message}</span>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Alternative Email <span className="required">*</span>{" "}
                </Form.Label>
                <div className="inputWithIcon">
                  <Form.Control
                    type="text"
                    placeholder="  Alternative Email "
                    name="alternativeEmail"
                    ref={register}
                    isValid={formState.touched.alternativeEmail && !errors.alternativeEmail}
                    isInvalid={errors.alternativeEmail}
                  />
                  <Image src={email} />
                </div>
                <span className="text-danger">{errors.alternativeEmail?.message}</span>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  Contact Number <span className="required">*</span>{" "}
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
                <span className="text-danger">{errors.contactNumber?.message}</span>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Alternative Contact Number <span className="required">*</span>{" "}
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
                <span className="text-danger">{errors.alternativeContactNumber?.message}</span>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} xs="6" controlId="formGridEmail">
                <Form.Label> Fax </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Fax"
                  name="fax"
                  ref={register}
                  isValid={formState.touched.fax && !errors.fax}
                  isInvalid={errors.fax}
                />
                <span className="text-danger">{errors.fax?.message}</span>
              </Form.Group>
            </Form.Row>
            {props.isForReviewPage ? (
              <SubmissionButtonWithCancel onCancel={onCancelHandler} />
            ) : (
              <SubmissionButton />
            )}
          </Form>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default ContactInformationComponent;
