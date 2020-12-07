import React from "react";
import { useDispatch } from "react-redux";
import { Image, Card, Col, Container, Form, Row, Button, Table } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { FormInputsInterface, formSchema } from "./self-evaluation-helper";

import "./self-evaluation.scss";
import "../shared/shared.scss";

// Import images
import userPhoto from "../../../../assets/userPhoto.svg";
import upload from "../../../../assets/upload.svg";
import email from "../../../../assets/mail.svg";
import phone from "../../../../assets/phone.svg";
import arrow from "../../../../assets/arrow-white.svg";
import { ActionTypes } from "../../../../redux/reducers/helper";

const SelfEvaluationComponent = () => {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(formSchema),
    mode: "all",
  });

  const dispatch = useDispatch();
  const onSubmit = (data: FormInputsInterface) => {
    if (formState.isValid) {
      dispatch({
        type: ActionTypes.PharmaceuticalEstablishmentActionTypes.SET_LOACTION_INFORMATION,
        payload: data,
      });
      // move to next step
      dispatch({
        type: ActionTypes.PharmaceuticalEstablishmentActionTypes.NEXT_STEP_NUMBER,
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
          <Table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Yes</th>
                <th>No</th>
                <th>N/a</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod exercitationem
                  reiciendis fugiat et esse enim, qui laborum dignissimos, saepe voluptas error
                  alias, possimus harum aut repellat. In, fugit delectus!
                </td>
                <td>
                  <div className="radioButtons">
                    <div className="form-check">
                      <label className="noText" htmlFor="q1-y">
                        <input
                          name="q1"
                          type="radio"
                          id="q1-y"
                          className="form-check-input"
                          value="yes"
                          ref={register}
                        />
                        <i className="checkMark"> </i>
                      </label>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="radioButtons">
                    <div className="form-check">
                      <label className="noText" htmlFor="q1-y">
                        <input
                          name="q1"
                          type="radio"
                          id="q1-y"
                          className="form-check-input"
                          value="yes"
                          ref={register}
                        />
                        <i className="checkMark"> </i>
                      </label>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="radioButtons">
                    <div className="form-check">
                      <label className="noText" htmlFor="q1-y">
                        <input
                          name="q1"
                          type="radio"
                          id="q1-y"
                          className="form-check-input"
                          value="yes"
                          ref={register}
                        />
                        <i className="checkMark"> </i>
                      </label>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Row className="justify-content-center">
            <Button variant="success" size="lg" className="submittion-btn" type="submit">
              <strong>Go To Attachment</strong>
            </Button>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SelfEvaluationComponent;
