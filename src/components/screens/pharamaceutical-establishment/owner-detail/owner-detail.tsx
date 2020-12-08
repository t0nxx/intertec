import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
import AttachmentComponent from "../../../attachment/attachment";
import { IProps } from "../shared/components-props";
import SubmissionButton from "../../../submission-buttons/submission";
import SubmissionButtonWithCancel from "../../../submission-buttons/submission-with-cancel";

const OwnerDetailComponent = (props: IProps) => {
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
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Retrieve information contact from your profile</Form.Label>
                <div className="radioButtons">
                  <div className="form-check">
                    <label htmlFor="getContactData">
                      <input
                        name="getInfoFromProfile"
                        type="radio"
                        id="getContactData"
                        className="form-check-input"
                        value="yes"
                        ref={register}
                        defaultChecked
                      />
                      Yes
                      <i className="checkMark"> </i>
                    </label>
                  </div>
                  <div className="form-check">
                    <label htmlFor="getContactData2">
                      <input
                        name="getInfoFromProfile"
                        type="radio"
                        id="getContactData2"
                        className="form-check-input"
                        value="no"
                        ref={register}
                      />
                      No
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
                    <Image src={upload} /> Upload
                  </Button>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formGridEmail">
                  <Form.Label>
                    Title <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="tite"
                    ref={register}
                    isValid={formState.touched.tite && !errors.tite}
                    isInvalid={errors.tite}
                  >
                    <option disabled selected value="">
                      Title
                    </option>
                    <option>...</option>
                    <option>...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>
                    Gender <span className="required">*</span>
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
                        Male
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
                        Female
                        <i className="checkMark"> </i>
                      </label>
                    </div>
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  First name <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="fName"
                  ref={register}
                  isValid={formState.touched.fName && !errors.fName}
                  isInvalid={errors.fName}
                />
                <span className="text-danger">{errors.fName?.message}</span>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Middle name <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Middle name"
                  name="mName"
                  ref={register}
                  isValid={formState.touched.mName && !errors.mName}
                  isInvalid={errors.mName}
                />
                <span className="text-danger">{errors.mName?.message}</span>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Last Name <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="lName"
                  ref={register}
                  isValid={formState.touched.lName && !errors.lName}
                  isInvalid={errors.lName}
                />
                <span className="text-danger">{errors.lName?.message}</span>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  First name (Arabic) <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name (Arabic)"
                  name="fNameAr"
                  ref={register}
                  isValid={formState.touched.fNameAr && !errors.fNameAr}
                  isInvalid={errors.fNameAr}
                />
                <span className="text-danger">{errors.fNameAr?.message}</span>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Middle name (Arabic) <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Middle name (Arabic)"
                  name="mNameAr"
                  ref={register}
                  isValid={formState.touched.mNameAr && !errors.mNameAr}
                  isInvalid={errors.mNameAr}
                />
                <span className="text-danger">{errors.mNameAr?.message}</span>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Last Name (Arabic) <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name (Arabic)"
                  name="lNameAr"
                  ref={register}
                  isValid={formState.touched.lNameAr && !errors.lNameAr}
                  isInvalid={errors.lNameAr}
                />
                <span className="text-danger">{errors.lNameAr?.message}</span>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Share Percentage <span className="required">*</span>
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
                <span className="text-danger">{errors.sharePercentage?.message}</span>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  UAE Citzen <span className="required">*</span>
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
                      Yes
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
                      No
                      <i className="checkMark"> </i>
                    </label>
                  </div>
                </div>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>
                  Nationality <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  as="select"
                  name="nationality"
                  ref={register}
                  isValid={formState.touched.nationality && !errors.nationality}
                  isInvalid={errors.nationality}
                >
                  <option disabled selected value="">
                    Nationality
                  </option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Passport No <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="No"
                  name="passportNo"
                  ref={register}
                  isValid={formState.touched.passportNo && !errors.passportNo}
                  isInvalid={errors.passportNo}
                />
                <span className="text-danger">{errors.passportNo?.message}</span>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Emirates ID <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Emirates ID"
                  name="emiratesId"
                  ref={register}
                  isValid={formState.touched.emiratesId && !errors.emiratesId}
                  isInvalid={errors.emiratesId}
                />
                <span className="text-danger">{errors.emiratesId?.message}</span>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Family Book No <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="No"
                  name="familyBookNo"
                  ref={register}
                  isValid={formState.touched.familyBookNo && !errors.familyBookNo}
                  isInvalid={errors.familyBookNo}
                />
                <span className="text-danger">{errors.familyBookNo?.message}</span>
              </Form.Group>
            </Form.Row>
            <Form.Row className="splitTitle">
              <h5>Contact information</h5>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  Contact Number <span className="required">*</span>
                </Form.Label>
                <div className="inputWithIcon">
                  <Form.Control
                    type="text"
                    placeholder="Contact"
                    name="contactNo"
                    ref={register}
                    isValid={formState.touched.contactNo && !errors.contactNo}
                    isInvalid={errors.contactNo}
                  />
                  <span className="text-danger">{errors.contactNo?.message}</span>
                  <Image src={phone} />
                </div>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Primary Email
                  <span className="required">*</span>
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
                  <span className="text-danger">{errors.primaryEmail?.message}</span>
                  <Image src={email} />
                </div>
              </Form.Group>
            </Form.Row>
            <Form.Row className="splitTitle">
              <h5>Attachments</h5>
            </Form.Row>
            <AttachmentComponent />
            {props.isForReviewPage ? (
              <SubmissionButtonWithCancel onCancel={onCancelHandler} />
            ) : (
              <SubmissionButton />
            )}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OwnerDetailComponent;
