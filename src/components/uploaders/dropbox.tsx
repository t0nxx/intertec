import React from "react";
// @ts-ignore
import DropboxChooser from "react-dropbox-chooser";

// this should be moved to constant file
const appkey = "m291frc56wwfhjc";
// @ts-ignore
const DropBoxChooserComponent = (props) => {
  const onSuccess = (files) => {
    props.onChange(files);
  };
  return (
    <DropboxChooser appKey={appkey} multiselect={true} success={(files) => onSuccess(files)}>
      <div className="dropbox-button">Click me!</div>
    </DropboxChooser>
  );
};

export default DropBoxChooserComponent;
