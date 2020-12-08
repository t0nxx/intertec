import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInputsInterface, formSchema } from "./location-information-helper";
import arrow from "../../../../assets/arrow-white.svg";
import map from "../../../../assets/map.svg";

import "./location-information.scss";
import { ActionTypes, StateSelectorInterface } from "../../../../redux/reducers/helper";
import { IProps } from "../shared/components-props";
import SubmissionButtonWithCancel from "../../../submission-buttons/submission-with-cancel";
import SubmissionButton from "../../../submission-buttons/submission";

const LocationInformationComponent = (props: IProps) => {
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
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>
                Emirate <span className="required">*</span>
              </Form.Label>
              <Form.Control
                as="select"
                name="emirate"
                ref={register}
                isValid={formState.touched.emirate && !errors.emirate}
                isInvalid={errors.emirate}
              >
                <option disabled selected value="">
                  Eemirate
                </option>
                <option> Type 1</option>
                <option> Type 2</option>
                <option> Type 3</option>
              </Form.Control>
              <span className="text-danger">{errors.emirate?.message}</span>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>
                Area <span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=" Area"
                name="area"
                ref={register}
                isValid={formState.touched.area && !errors.area}
                isInvalid={errors.area}
              />
              <span className="text-danger">{errors.area?.message}</span>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="establishmentName">
              <Form.Label>
                Street <span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=" Street "
                name="street"
                ref={register}
                isValid={formState.touched.street && !errors.street}
                isInvalid={errors.street}
              />
              <span className="text-danger">{errors.street?.message}</span>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="establishmentName">
              <Form.Label>
                Po Box <span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=" Po Box"
                name="poBox"
                ref={register}
                isValid={formState.touched.poBox && !errors.poBox}
                isInvalid={errors.poBox}
              />
              <span className="text-danger">{errors.poBox?.message}</span>
            </Form.Group>
            <Form.Group as={Col} controlId="establishmentName">
              <Form.Label>
                Building Name <span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=" Building Name"
                name="buildingName"
                ref={register}
                isValid={formState.touched.buildingName && !errors.buildingName}
                isInvalid={errors.buildingName}
              />
              <span className="text-danger">{errors.buildingName?.message}</span>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="establishmentName">
              <Form.Label>
                Building No <span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=" Building No"
                name="buildingNo"
                ref={register}
                isValid={formState.touched.buildingNo && !errors.buildingNo}
                isInvalid={errors.buildingNo}
              />
              <span className="text-danger">{errors.buildingNo?.message}</span>
            </Form.Group>

            <Form.Group as={Col} controlId="establishmentName">
              <Form.Label>
                Google Map Url <span className="required">*</span>
              </Form.Label>

              <div className="inputWithIcon">
                <Form.Control
                  type="text"
                  placeholder="  Google Map Url"
                  name="mapUrl"
                  ref={register}
                  isValid={formState.touched.mapUrl && !errors.mapUrl}
                  isInvalid={errors.mapUrl}
                />
                <Image src={map} />
              </div>
              <span className="text-danger">{errors.mapUrl?.message}</span>
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

export default LocationInformationComponent;
