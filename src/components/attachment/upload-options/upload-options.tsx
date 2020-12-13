import React from "react";
import { useTranslation } from "react-i18next";
import "./upload-options.scss";
import { Image } from "react-bootstrap";

// Import images
import fromPc from "../../../assets/fromPc.svg";
import dropbox from "../../../assets/dropbox.png";
import cloud from "../../../assets/cloud.png";
import box from "../../../assets/box.png";
import DropBoxChooserComponent from "../../uploaders/dropbox";

export default function UploadOptionsComponent() {
  const { t } = useTranslation();
  return (
    <div className="uploadOptions">
      <Image src={fromPc} />
      {/* <Image src={dropbox} /> */}
      <DropBoxChooserComponent />
      <Image src={cloud} />
      <Image src={box} />
    </div>
  );
}
