import React from "react";
import { Col, Row, Form, FormGroup, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./radioButtonInput.scss";

export const TrippleRadioButtonsComponent = (props: {
  name: string;
  value1: string;
  value2: string;
  value3: string;
  register: any;
}) => {
  const { t }: any = useTranslation();
  return (
    <>
      <td>
        <div className="radioBtns">
          <Form.Check
            type="radio"
            name={props.name}
            value={props.value1}
            id={props.name + props.value1}
            ref={props.register}
            custom
            defaultChecked
          />
        </div>
      </td>
      <td>
        <div className="radioBtns">
          <Form.Check
            type="radio"
            name={props.name}
            value={props.value2}
            id={props.name + props.value2}
            ref={props.register}
            custom
          />
        </div>
      </td>
      <td>
        <div className="radioBtns">
          <Form.Check
            type="radio"
            name={props.name}
            value={props.value3}
            id={props.name + props.value3}
            ref={props.register}
            custom
          />
        </div>
      </td>
    </>
  );
};
