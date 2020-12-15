import React from "react";
import { useTranslation } from "react-i18next";
import "./upload-options.scss";
import { Button, Image } from "react-bootstrap";

// Import images
import fromPc from "../../../../assets/fromPc.svg";
import cloud from "../../../../assets/cloud.png";
import box from "../../../../assets/box.png";
import DropBoxChooserComponent from "../../../helpers/uploaders/dropbox";
import OneDriveChooserComponent from "../../../helpers/uploaders/onedrive";

export default function UploadOptionsComponent() {
  const { t } = useTranslation();
  return (
    <div className="uploadOptions">
      <Image src={fromPc} />
      {/* <Image src={dropbox} /> */}
      <DropBoxChooserComponent />
      <Image src={cloud} />
      {/* <Button variant="primary">
        <OneDriveChooserComponent />
      </Button> */}

      <Image src={box} />
    </div>
  );
}
