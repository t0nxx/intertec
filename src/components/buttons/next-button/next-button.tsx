import React from "react";
import { Button, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import arrowWhite from "../../../assets/arrow-white.svg";
import "./next-button.scss";

const NextButton = () => {
  const { t } = useTranslation();
  return (
    <Row>
      <div className="nextBtn">
        <Button variant="success" type="submit">
          {t("Buttons.Next")}
          <Image src={arrowWhite} className="submittion-btn__img" />
        </Button>
      </div>
    </Row>
  );
};

export default NextButton;
