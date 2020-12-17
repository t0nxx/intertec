import React from "react";
import { Button, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import arrowWhite from "../../../../assets/arrow-white.svg";
import "./next-button.scss";

// eslint-disable-next-line react/require-default-props
const NextButton = (props: { customText?: any }) => {
  const { t } = useTranslation();
  return (
    <Row>
      <div className="nextBtn">
        <Button variant="success" type="submit">
          {props.customText ? props.customText : t("Buttons.Next")}
          {/* here mean that we want to use this styled button but with custom text without img */}
          {props.customText ? null : <Image src={arrowWhite} className="submittion-btn__img" />}
        </Button>
      </div>
    </Row>
  );
};

export default NextButton;
