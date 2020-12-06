import React from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ActionTypes } from "../../../../redux/reducers/helper";
import { FormInputsInterface, formSchema } from "./establishment-information-helper";
import arrow from "../../../../assets/arrow-white.svg";
import "./establishment-information.scss";

const EstablishmentInformationComponent = () => {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(formSchema),
    mode: "all",
  });

  const dispatch = useDispatch();
  const onSubmit = (data: FormInputsInterface) => {
    if (formState.isValid) {
      dispatch({
        type: ActionTypes.PharmaceuticalEstablishmentActionTypes.SET_ESTABLISHMENT_INFORMATION,
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
          <Row className="justify-content-center">
            <Button variant="success" size="lg" className="submittion-btn" type="submit">
              <strong>Next</strong>
              <Image src={arrow} className="submittion-btn__img" />
            </Button>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EstablishmentInformationComponent;
