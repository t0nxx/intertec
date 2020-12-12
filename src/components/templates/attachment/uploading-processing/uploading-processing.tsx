import React from "react";
import { useTranslation } from "react-i18next";
import "./uploading-processing.scss";
import { Image } from "react-bootstrap";

// Import images
import fileProcessing from "../../../../assets/fileProcessing.svg";
import rightMark from "../../../../assets/rightMark.svg";
import checkVairus from "../../../../assets/checkVairus.svg";

export default function UploadingProcessing() {
  const { t } = useTranslation();
  return (
    <div className="uploadingProcessing">
      <Image src={fileProcessing} />
      <div className="processing">
        <p> {t("Titles.Processing please wait a moment")}</p>
        <span className="prgBar">
          <span className="prgBarStep" style={{ width: "80%" }}>
            {" "}
          </span>
        </span>
        <div className="processingDetails">
          <p>
            <Image src={rightMark} />
            {t("Titles.Uploading Document(s)")} - 100%
          </p>
          <p>
            <Image src={checkVairus} />
            {t("Titles.Checking Document(s) for viruses")} - 75%
          </p>
        </div>
      </div>
    </div>
  );
}
