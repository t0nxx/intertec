import React from "react";
import "./upload-options.scss";
import { Image } from "react-bootstrap";

// Import images
import fromPc from "../../../assets/fromPc.svg";
import dropbox from "../../../assets/dropbox.png";
import cloud from "../../../assets/cloud.png";
import box from "../../../assets/box.png";

export default function UploadOptionsComponent() {
  return (
    <div className="uploadOptions">
      <Image src={fromPc} />
      <Image src={dropbox} />
      <Image src={cloud} />
      <Image src={box} />
    </div>
  );
}