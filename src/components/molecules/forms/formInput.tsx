import React from "react";
import { Col, Form, FormGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const FormInputComponent = (props: {
  label: string;
  name: string;
  type: string;
  isRequird: boolean;
  register: any;
  as?: any;
  errors: any;
  formState: any;
  children?: any;
}) => {
  const { t }: any = useTranslation();
  return (
    <FormGroup as={Col} md="6" sm="12">
      <Form.Label>
        {t(`Forms.${props.label}`)} {props.isRequird ? <span className="required">*</span> : null}
      </Form.Label>
      <Form.Control
        placeholder={t(`Forms.${props.label}`)}
        id={props.name}
        name={props.name}
        type={props.type}
        as={props.as}
        ref={props.register}
        isValid={props.formState.touched[props.name] && !props.errors}
        isInvalid={props.errors}
      >
        {/* this optional for like select menu ...etc */}
        {props.children}
      </Form.Control>
      {props.errors ? <span className="text-danger">{t(`${props.errors?.message}`)}</span> : null}
    </FormGroup>
  );
};
