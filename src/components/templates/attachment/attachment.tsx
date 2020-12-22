// @ts-nocheck
import React, { useEffect, useState } from "react";
import "./attachment.scss";
import { Image, Button, Carousel } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import countBy from "lodash/countBy";
import chunk from "lodash/chunk";

import DragAreaComponent from "./drag-area/drag-area";
import UploadOptionsComponent from "./upload-options/upload-options";
import UploadingProcessing from "./uploading-processing/uploading-processing";
import { errorToast, successToast } from "../../../utils";

// Import images
import file from "../../../assets/file.svg";
import del from "../../../assets/delete.svg";
import stepCheck from "../../../assets/stepCheck.svg";
import stepChecked from "../../../assets/stepChecked.svg";
import leftArrowBtn from "../../../assets/leftArrowBtn.svg";
import rightArrowBtn from "../../../assets/rightArrowBtn.svg";
import semiChecked from "../../../assets/semiChecked.svg";
import warning from "../../../assets/warning.svg";

import { IRequireAttachmentsArray } from "../../constants/common-interfaces";

export default function AttachmentComponent(props: {
  requireAttachmentsArray?: IRequireAttachmentsArray[];
}) {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);

  const [showWarning, setShowWarning] = useState(false);

  const [requireAttachmentsArray, setRequireAttachmentsArray] = useState(
    props.requireAttachmentsArray || []
  );

  /// this step because when spliting the big array to sub arrays of groups of 3
  /// we need when click in any elemnt to set it's acually index in the big array
  const addIndexToEachElemnt = props.requireAttachmentsArray?.map(
    (e, index) => {
      return { i: index, ...e };
    }
  );
  /// split the big array to arrays of length 3
  const mapAttachmentsToGroupsOf3Elements = chunk(addIndexToEachElemnt, 3);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const prvSteps = () => {
    const prevIndex = index2 === 0 ? 0 : index2 - 1;
    setIndex2(prevIndex);
  };

  const nxtSteps = () => {
    console.log("before increase index 2");
    console.log(index2);

    const nextIndex =
      // since steps start with 0 . we minus
      // we divide to 3 case every slider hold 3 buttons
      index2 === Math.round(props.requireAttachmentsArray?.length / 3) - 1
        ? index2
        : index2 + 1;
    setIndex2(nextIndex);
    console.log("after increase index 2");
    console.log(nextIndex);
  };
  // file uploader functions
  const [files, setFiles] = useState([]);

  /// if the require attachments not more than 3 . then we dont need navigation slider buttons from sides
  const [hideSliderButtons, setHideSliderButtons] = useState(
    requireAttachmentsArray.length < 3 ? true : false
  );
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: ["image/*", ".doc", ".docx", ".pdf"],
    onDrop: (acceptedFiles) => {
      const newfiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          /// push curent file to coresponding array category
          AttachmentType: props.requireAttachmentsArray[index].AttachmentType,
        })
      );
      /// check if this category allowd to upload more or not

      if (
        props.requireAttachmentsArray[index]?.AttachmentCountType === "Single"
      ) {
        const categoryCount = countBy(
          files,
          (file) =>
            file.AttachmentType ===
            props.requireAttachmentsArray[index].AttachmentType
        ).true;
        // then its already upload one file to this category
        if (categoryCount === 1) {
          errorToast(t("Error.MaximumNumberOfFiles", { number: 1 }));
          return;
        }
      }
      setFiles([...files, ...newfiles]);
      console.log(files);
    },
  });

  const handelRemoveFile = (fileName) => {
    setFiles(files.filter((e) => e.name !== fileName));
  };
  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);
  /// end file uploaders functions
  return (
    <div className="content">
      <div className="state">
        <p>
          {t("Titles.completed")}
          <span>
            1 {t("Titles.of")} {props.requireAttachmentsArray?.length}
          </span>
        </p>
      </div>
      {/* <div className="steps" hidden={props.withSliderCarosel}>
        <span className="backRow"> </span>
        <Button className="step doneStep" onClick={() => handleSelect(0)}>
          <Image src={stepCheck} className="check" />
          <Image src={stepChecked} className="checked" />
          <Image src={semiChecked} className="semiChecked" />
          <span> {t("Titles.Passport")}</span>
        </Button>
        <Button className="step currentStep" onClick={() => handleSelect(1)}>
          <Image src={stepCheck} className="check" />
          <Image src={stepChecked} className="checked" />
          <Image src={semiChecked} className="semiChecked" />
          <span> {t("Forms.Emirates ID")}</span>
        </Button>
        <Button className="step" onClick={() => handleSelect(2)}>
          <Image src={stepCheck} className="check" />
          <Image src={stepChecked} className="checked" />
          <Image src={semiChecked} className="semiChecked" />
          <span> {t("Titles.Family Book")}</span>
        </Button>
      </div> */}
      <div className="steps">
        <Carousel controls={false} interval={null} activeIndex={index2}>
          {mapAttachmentsToGroupsOf3Elements.map((group) => (
            <Carousel.Item>
              <div className="stepsContainer">
                <span className="backRow"> </span>
                {group.map((att) => (
                  <Button
                    className="step doneStep"
                    onClick={() => handleSelect(att.i)}
                  >
                    {/* className="step currentStep" */}
                    {/* className="step" */}
                    <Image src={stepCheck} className="check" />
                    <Image src={stepChecked} className="checked" />
                    <Image src={semiChecked} className="semiChecked" />
                    <span>{att.AttachmentType}</span>
                  </Button>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <Button
          className="leftNavigation"
          onClick={() => prvSteps()}
          hidden={hideSliderButtons}
        >
          <Image src={leftArrowBtn} />
        </Button>
        <Button
          className="rightNavigation"
          onClick={() => nxtSteps()}
          hidden={hideSliderButtons}
        >
          <Image src={rightArrowBtn} />
        </Button>
      </div>
      {/* Start slider */}
      <Carousel controls={false} activeIndex={index}>
        {props.requireAttachmentsArray?.map((att, index) => (
          <Carousel.Item>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <DragAreaComponent />
            </div>
            <UploadOptionsComponent />

            <div className="files">
              {files.map(
                (file, index) =>
                  /// show only files related to this category
                  file.AttachmentType === att.AttachmentType && (
                    <div className="file" key={file.name}>
                      <div className="leftData">
                        <Image src={file.preview} />
                        <div className="fileData">
                          <p>
                            {" "}
                            {att.AttachmentType} {index + 1}
                          </p>
                          <span>{file.size}</span>
                        </div>
                      </div>
                      <div className="rightData">
                        <Image
                          src={del}
                          onClick={() => handelRemoveFile(file.name)}
                        />
                      </div>
                    </div>
                  )
              )}
            </div>
            {/* End Files List */}
          </Carousel.Item>
        ))}
      </Carousel>
      {/* Eng slider  */}
      <div className="warning" hidden={!showWarning}>
        <Image src={warning} />
        <p>
          {t(
            "Texts.Your staff criteria needs to be fulfilled to continue submitting the application"
          )}
          <br />
          {t(
            "Texts.Kindly refer to email sent for staff criteria or view the online service card"
          )}
        </p>
        <Button>{t("Buttons.Close")}</Button>
      </div>
    </div>
  );
}
