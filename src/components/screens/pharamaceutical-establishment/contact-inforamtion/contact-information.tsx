import React from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Col, Container, Form, Row, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInputsInterface, formSchema } from "./contact-information-helper";

import "./contact-information.scss";
import "../shared/shared.scss";

import email from "../../../../assets/mail.png";
import phone from "../../../../assets/phone.png";
import arrow from "../../../../assets/arrow-white.png";
import { ActionTypes } from "../../../../redux/reducers/helper";

const ContactInformationComponent = () => {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(formSchema),
    mode: "all",
  });

  const dispatch = useDispatch();
  const onSubmit = (data: FormInputsInterface) => {
    if (formState.isValid) {
      dispatch({
        type: ActionTypes.PharmaceuticalEstablishmentActionTypes.SET_CONTACT_INFORMATION,
        payload: data,
      });
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
                <div className="radioButtons">
                  <div className="form-check">
                    <label htmlFor="getContactData">
                      <input
                        name="getContactData"
                        type="radio"
                        id="getContactData"
                        className="form-check-input"
                        ref={register}
                        value="yes"
                      />
                      Yes
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
                        checked
                      />
                      No
                      <i className="checkMark"> </i>
                    </label>
                  </div>
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
            <Row className="justify-content-center">
              <Button variant="success" size="lg" className="submittion-btn" type="submit">
                <strong>Next</strong>
                <Image src={arrow} className="submittion-btn__img" />
              </Button>
            </Row>
          </Form>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default ContactInformationComponent;
