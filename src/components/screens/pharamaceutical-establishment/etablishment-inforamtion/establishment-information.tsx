import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./establishment-information.scss";

/**
 * Form interface for type definations
 */
interface IFormInputs {
  establishmentName: string;
  establishmentNameArabic: string;
  establishmentType: string;
  Category: string;
}
/**
 * Validation Schema with  err msg en or ar..
 */
const formSchema = yup.object().shape({
  establishmentName: yup.string().required("this is required "),
  establishmentNameArabic: yup.string().required("this is required "),
  establishmentType: yup.string().required("this is required "),
  Category: yup.string().required("this is required "),
});

const EstablishmentInformationComponent = () => {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(formSchema),
    mode: "all",
  });

  const onSubmit = (data: IFormInputs) => {
    if (formState.isValid) {
      // eslint-disable-next-line no-alert
      alert("first form is valid and submited");
    }
    // eslint-disable-next-line no-console
    console.log(data);
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
          <Button variant="success" type="submit">
            Submit form
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EstablishmentInformationComponent;
