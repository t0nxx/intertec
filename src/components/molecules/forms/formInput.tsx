import React from "react";
import { Col, Form, FormGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const FormInputComponent = ({
  label,
  id,
  name,
  type,
  register,
  errors,
  formState,
  ...inputProps
}) => {
  const { t }: any = useTranslation();
  return (
    <FormGroup as={Col} md="6" sm="12">
      <label htmlFor={id}>{label}</label>
      <input ref={register} id={id} name="password" type="password" />
      {errors.password && <div>{errors.password.message}</div>}

      <Form.Label>
        {t(`Forms.${label}`)} <span className="required">*</span>
      </Form.Label>
      <Form.Control
        placeholder={t(`Forms.${label}`)}
        name={name}
        type={type}
        ref={register}
        isValid={formState.touched && !errors.establishmentName}
        isInvalid={errors.establishmentName}
      />
      {errors.establishmentName ? (
        <span className="text-danger">{t(`${errors.establishmentName?.message}`)}</span>
      ) : null}
    </FormGroup>
  );
};
