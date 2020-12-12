import React from "react";
import { useTranslation } from "react-i18next";
import "./drag-area.scss";
import { Image, Button } from "react-bootstrap";

// Import images
import upArrow from "../../../assets/upArrow.svg";

export default function DragAreaComponent() {
  const { t } = useTranslation();
  return (
    <div className="dragArea">
      <Image src={upArrow} />
      <p className="hint1">{t("Titles.Drag and Drop Documents Here to Get Started")}</p>
      <p className="hint2">

        {t("Titles.Use the button below to upload your documents it supports")} <br /> PDF, Word, JPE,{t("Titles.File size")} 10 MB 
      </p>
      <Button>
        {t("Buttons.Browse for document on your computer")}
      </Button>
    </div>
  );
}
