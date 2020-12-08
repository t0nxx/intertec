import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ActionTypes, StateSelectorInterface } from "../../../../redux/reducers/helper";
import { FormInputsInterface, formSchema } from "./establishment-information-helper";
import "./establishment-information.scss";
import { IProps } from "../shared/components-props";
import SubmissionButtonWithCancel from "../../../submission-buttons/submission-with-cancel";
import SubmissionButton from "../../../submission-buttons/submission";

const EstablishmentInformationComponent = (props: IProps) => {
  const { data } = useSelector(
    (s: StateSelectorInterface) => s.pharmaceuticalEstablishment.establishmentInformationsReducer
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
        type: ActionTypes.PharmaceuticalEstablishmentActionTypes.SET_ESTABLISHMENT_INFORMATION,
        payload: values,
      });
      // move to next step
      dispatch({
        type: ActionTypes.PharmaceuticalEstablishmentActionTypes.NEXT_STEP_NUMBER,
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Row>
            <Form.Group as={Col} controlId="establishmentName">
              <Form.Label>
                Establishment Name <span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=" Establishment Name"
                name="establishmentName"
                ref={register}
                isValid={formState.touched.establishmentName && !errors.establishmentName}
                isInvalid={errors.establishmentName}
              />
              <span className="text-danger">{errors.establishmentName?.message}</span>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>
                Establishment Name (Arabic) <span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=" Establishment Name"
                name="establishmentNameArabic"
                ref={register}
                isValid={
                  formState.touched.establishmentNameArabic && !errors.establishmentNameArabic
                }
                isInvalid={errors.establishmentNameArabic}
              />
              <span className="text-danger">{errors.establishmentNameArabic?.message}</span>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>
                Establishment Type <span className="required">*</span>
              </Form.Label>
              <Form.Control
                as="select"
                name="establishmentType"
                ref={register}
                isValid={formState.touched.establishmentType && !errors.establishmentType}
                isInvalid={errors.establishmentType}
              >
                <option disabled selected value="">
                  Establishment Type
                </option>
                <option> Establishment Type 1</option>
                <option> Establishment Type 2</option>
                <option> Establishment Type 3</option>
              </Form.Control>
              <span className="text-danger">{errors.establishmentType?.message}</span>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>
                Category <span className="required">*</span>
              </Form.Label>
              <Form.Control
                as="select"
                name="Category"
                ref={register}
                isValid={formState.touched.Category && !errors.Category}
                isInvalid={errors.Category}
              >
                <option disabled selected value="">
                  Category
                </option>
                <option>Category 1 </option>
                <option>Category 2 </option>
                <option>Category 3 </option>
              </Form.Control>
              <span className="text-danger">{errors.Category?.message}</span>
            </Form.Group>
          </Form.Row>
          {props.isForReviewPage ? (
            <SubmissionButtonWithCancel onCancel={onCancelHandler} />
          ) : (
            <SubmissionButton />
          )}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EstablishmentInformationComponent;
