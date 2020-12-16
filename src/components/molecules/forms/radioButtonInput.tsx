import React from "react";
import { Col, Row, Form, FormGroup, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./radioButtonInput.scss";

export const RadioButtonsComponent = (props: {
  withLable: boolean;
  label?: string;
  name: string;
  value1: string;
  value2: string;
  register: any;
}) => {
  const { t }: any = useTranslation();
  return (
    <FormGroup>
      <Form.Label hidden={!props.withLable}>{t(`Forms.${props.label}`)}</Form.Label>
      <div className="radioBtns">
        <Form.Check
          type="radio"
          name={props.name}
          label={t(`Forms.${props.value1}`)}
          value={props.value1}
          id={props.name + props.value1}
          ref={props.register}
          custom
          defaultChecked
        />
        <Form.Check
          type="radio"
          name={props.name}
          label={t(`Forms.${props.value2}`)}
          value={props.value2}
          id={props.name + props.value2}
          ref={props.register}
          custom
        />
      </div>
    </FormGroup>
  );
};
