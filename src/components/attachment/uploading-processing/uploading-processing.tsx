import React from "react";
import "./uploading-processing.scss";
import { Image } from "react-bootstrap";

// Import images
import fileProcessing from "../../../assets/fileProcessing.svg";
import rightMark from "../../../assets/rightMark.svg";
import checkVairus from "../../../assets/checkVairus.svg";

export default function UploadingProcessing() {
  return (
    <div className="uploadingProcessing">
      <Image src={fileProcessing} />
      <div className="processing">
        <p>Processing, please wait a moment..</p>
        <span className="prgBar">
          <span className="prgBarStep" style={{ width: "80%" }}>
            {" "}
          </span>
        </span>
        <div className="processingDetails">
          <p>
            <Image src={rightMark} />
            Uploading Document(s) - 100%
          </p>
          <p>
            <Image src={checkVairus} />
            Checking Document(s) for viruses - 75%
          </p>
        </div>
      </div>
    </div>
  );
}
