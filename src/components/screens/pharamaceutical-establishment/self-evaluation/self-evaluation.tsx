import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Col, Form, Row, Button, Table, ToggleButton } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FormInputsInterface, formSchema } from "./self-evaluation-helper";

import "./self-evaluation.scss";
import "../shared/shared.scss";

// Import images
import { ActionTypes } from "../../../../redux/reducers/helper";
import NextButton from "../../../buttons/next-button/next-button";

const SelfEvaluationComponent = () => {
  const [checked, setChecked] = useState(false);

  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(formSchema),
    mode: "all",
  });

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = () => {
    if (formState.isValid) {
      // should make sure here all steps are done
      history.push("/attachment");
      // dispatch({
      //   type: ActionTypes.PharmaceuticalEstablishmentActionTypes.SET_SELF_EVALUATION,
      //   payload: data,
      // });
      // move to next step
      dispatch({
        type: ActionTypes.PharmaceuticalEstablishmentActionTypes.NEXT_STEP_NUMBER,
      });
    }
  };

  function onSuccess(files) {
    console.log(files);
  }

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
                <th>{t("Forms.Description")}</th>
                <th>{t("Forms.Yes")}</th>
                <th>{t("Forms.No")}</th>
                <th>{t("Forms.N/A")}</th>
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
                      <label className="noText" htmlFor="q1-no">
                        <input
                          name="q1"
                          type="radio"
                          id="q1-no"
                          className="form-check-input"
                          value="no"
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
                      <label className="noText" htmlFor="q1-na">
                        <input
                          name="q1"
                          type="radio"
                          id="q1-na"
                          className="form-check-input"
                          value="na"
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
          <Row>
            <Col>
              <Form.Check
                type="checkbox"
                name="disclaimer"
                id="disclaimer"
                label={t("Forms.Disclaimer")}
                custom
                className="disclaimer"
                onChange={(e) => setChecked(e.currentTarget.checked)}
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <NextButton customText={t("Buttons.Go To Attachment")} />
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SelfEvaluationComponent;
