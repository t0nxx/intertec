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
import NextButton from "../../../atoms/buttons/next-button/next-button";
import { TrippleRadioButtonsComponent } from "../../../molecules/forms/trippleRadioButtonInput";

const SelfEvaluationComponent = () => {
  const [checked, setChecked] = useState(false);

  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(formSchema),
    mode: "all",
  });

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history: any = useHistory();

  const onSubmit = () => {
    if (formState.isValid) {
      // should make sure here all steps are done
      history.push({
        pathname: "/attachment",
        state: {
          withslidercarosel: true,
        },
      });
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

                <TrippleRadioButtonsComponent
                  name="q1"
                  value1="Yes"
                  value2="No"
                  value3="Na"
                  register={register}
                />
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
                onChange={(e) => setChecked(e.currentTarget.checked)}
              />
            </Col>
          </Row>
          <NextButton customText={t("Buttons.Go To Attachment")} />
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SelfEvaluationComponent;
