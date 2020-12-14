import React from "react";
import { Image } from "react-bootstrap";
// @ts-ignore
import DropboxChooser from "react-dropbox-chooser";

import dropbox from "../../../assets/dropbox.png";

// this should be moved to constant file
const appkey = "m291frc56wwfhjc";
// @ts-ignore
const DropBoxChooserComponent = (props) => {
  const onSuccess = (files) => {
    // props.onChange(files);
  };
  return (
    <DropboxChooser appKey={appkey} multiselect={true} success={(files) => onSuccess(files)}>
      <div className="dropbox-button">
        <Image src={dropbox} />
      </div>
    </DropboxChooser>
  );
};

export default DropBoxChooserComponent;
