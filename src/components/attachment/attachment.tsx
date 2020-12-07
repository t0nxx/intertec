import React from "react";
import "./attachment.scss";
import { Image, Button, Row } from "react-bootstrap";

// Import images
import upArrow from "../../assets/upArrow.svg";
import fromPc from "../../assets/fromPc.svg";
import dropbox from "../../assets/dropbox.png";
import cloud from "../../assets/cloud.png";
import box from "../../assets/box.png";
import file from "../../assets/file.svg";
import del from "../../assets/delete.svg";
import stepCheck from "../../assets/stepCheck.svg";
import stepChecked from "../../assets/stepChecked.svg";

export default function AttachmentComponent() {
  return (
    <div className="content">
      <div className="state">
        <p>
          completeted <span>1 of 3</span>
        </p>
      </div>
      <div className="steps">
        <span className="backRow"> </span>
        <div className="step doneStep">
          <Image src={stepCheck} className="check" />
          <Image src={stepChecked} className="checked" />
          <span>Passport</span>
        </div>
        <div className="step">
          <Image src={stepCheck} className="check" />
          <Image src={stepChecked} className="checked" />
          <span>Emirates ID</span>
        </div>
        <div className="step">
          <Image src={stepCheck} className="check" />
          <Image src={stepChecked} className="checked" />
          <span>Family Book</span>
        </div>
      </div>
      <div className="dragArea">
        <Image src={upArrow} />
        <p className="hint1">Drag and Drop Documents Here to Get Started!</p>
        <p className="hint2">
          Use the button below to upload your documents it supports <br /> PDF, Word, JPE,File size
          10 MB
        </p>
        <Button>Browse for document on your computer</Button>
      </div>
      <div className="uploadOptions">
        <Image src={fromPc} />
        <Image src={dropbox} />
        <Image src={cloud} />
        <Image src={box} />
      </div>
      <div className="files">
        <div className="file">
          <div className="leftData">
            <Image src={file} />
            <div className="fileData">
              <p>Passport</p>
              <span>65 Kb</span>
            </div>
          </div>
          <div className="rightData">
            <Image src={del} />
          </div>
        </div>
        <div className="file">
          <div className="leftData">
            <Image src={file} />
            <div className="fileData">
              <p>Passport</p>
              <span>65 Kb</span>
            </div>
          </div>
          <div className="rightData">
            <Image src={del} />
          </div>
        </div>
        <div className="file">
          <div className="leftData">
            <Image src={file} />
            <div className="fileData">
              <p>Passport</p>
              <span>65 Kb</span>
            </div>
          </div>
          <div className="rightData">
            <Image src={del} />
          </div>
        </div>
      </div>
    </div>
  );
}
