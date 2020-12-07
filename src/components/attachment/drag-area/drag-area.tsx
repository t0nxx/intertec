import React from "react";
import "./drag-area.scss";
import { Image, Button } from "react-bootstrap";

// Import images
import upArrow from "../../../assets/upArrow.svg";

export default function DragAreaComponent() {
  return (
    <div className="dragArea">
      <Image src={upArrow} />
      <p className="hint1">Drag and Drop Documents Here to Get Started!</p>
      <p className="hint2">
        Use the button below to upload your documents it supports <br /> PDF, Word, JPE,File size 10
        MB
      </p>
      <Button>Browse for document on your computer</Button>
    </div>
  );
}
