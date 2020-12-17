import React from "react";
import { Col, Row, Form, FormGroup, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./formInput.scss";

export const FormInputComponent = (props: {
  label: string;
  name: string;
  type: string;
  isRequird: boolean;
  register: any;
  as?: any;
  customPlaceHolder?: string;
  withImage?: boolean;
  imgSrc?: any;
  errors: any;
  formState: any;
  children?: any;
  takeFullRow?: boolean;
}) => {
  const { t }: any = useTranslation();
  return (
    <FormGroup as={Col} md={props.takeFullRow ? 12 : 6} sm="12">
      <Form.Label>
        {t(`Forms.${props.label}`)} {props.isRequird ? <span className="required">*</span> : null}
      </Form.Label>
      {/* this div incase thier is a image with icon that trasformed when is valid */}
      <div className={props.withImage ? "inputWithIcon" : ""}>
        <Form.Control
          placeholder={
            props.customPlaceHolder ? props.customPlaceHolder : t(`Forms.${props.label}`)
          }
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
        {/* if the input with image  */}
        {props.withImage ? <Image src={props.imgSrc} /> : null}
      </div>
      {props.errors ? <span className="text-danger">{t(`${props.errors?.message}`)}</span> : null}
    </FormGroup>
  );
};
