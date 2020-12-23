import React from "react";
import { Col, Row, Form, FormGroup, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./radioButtonInput.scss";

export const TrippleRadioButtonsComponent = (props: {
  name: string;
  id: string;
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
            id={props.id + props.value1}
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
            id={props.id + props.value2}
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
            id={props.id + props.value3}
            custom
          />
        </div>
      </td>
    </>
  );
};
