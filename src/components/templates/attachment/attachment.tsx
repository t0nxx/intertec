import React, { useState } from "react";
import "./attachment.scss";
import { Image, Button, Carousel } from "react-bootstrap";

import { useTranslation } from "react-i18next";
import DragAreaComponent from "./drag-area/drag-area";
import UploadOptionsComponent from "./upload-options/upload-options";
import UploadingProcessing from "./uploading-processing/uploading-processing";

// Import images
import file from "../../../assets/file.svg";
import del from "../../../assets/delete.svg";
import stepCheck from "../../../assets/stepCheck.svg";
import stepChecked from "../../../assets/stepChecked.svg";
import leftArrowBtn from "../../../assets/leftArrowBtn.svg";
import rightArrowBtn from "../../../assets/rightArrowBtn.svg";
import semiChecked from "../../../assets/semiChecked.svg";
import warning from "../../../assets/warning.svg";

export default function AttachmentComponent({ withslidercarosel }) {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);

  const [showWarning, setShowWarning] = useState(false);

  const [withSliderCarosel, setWithSliderCarosel] = useState(withslidercarosel || false);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const prvSteps = () => {
    setIndex2(0);
  };

  const nxtSteps = () => {
    setIndex2(1);
  };
  return (
    <div className="content">
      <div className="state">
        <p>
          {t("Titles.completed")} <span>1 {t("Titles.of")} 3</span>
        </p>
      </div>
      <div className="steps" hidden={withSliderCarosel}>
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
      </div>
      <div className="steps" hidden={!withSliderCarosel}>
        <Carousel controls={false} interval={null} activeIndex={index2}>
          <Carousel.Item>
            <div className="stepsContainer">
              <span className="backRow"> </span>
              <Button className="step doneStep" onClick={() => handleSelect(0)}>
                <Image src={stepCheck} className="check" />
                <Image src={stepChecked} className="checked" />
                <Image src={semiChecked} className="semiChecked" />
                <span>{t("Titles.Passport")}</span>
              </Button>
              <Button className="step currentStep" onClick={() => handleSelect(1)}>
                <Image src={stepCheck} className="check" />
                <Image src={stepChecked} className="checked" />
                <Image src={semiChecked} className="semiChecked" />
                <span>{t("Forms.Emirates ID")}</span>
              </Button>
              <Button className="step" onClick={() => handleSelect(2)}>
                <Image src={stepCheck} className="check" />
                <Image src={stepChecked} className="checked" />
                <Image src={semiChecked} className="semiChecked" />
                <span>{t("Titles.Family Book")}</span>
              </Button>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="stepsContainer">
              <span className="backRow"> </span>
              <Button className="step doneStep" onClick={() => handleSelect(0)}>
                <Image src={stepCheck} className="check" />
                <Image src={stepChecked} className="checked" />
                <span>1</span>
              </Button>
              <Button className="step" onClick={() => handleSelect(1)}>
                <Image src={stepCheck} className="check" />
                <Image src={stepChecked} className="checked" />
                <span>{t("Forms.Emirates ID")}</span>
              </Button>
              <Button className="step" onClick={() => handleSelect(2)}>
                <Image src={stepCheck} className="check" />
                <Image src={stepChecked} className="checked" />
                <span>{t("Titles.Family Book")}</span>
              </Button>
            </div>
          </Carousel.Item>
        </Carousel>
        <Button className="leftNavigation" onClick={() => prvSteps()}>
          <Image src={leftArrowBtn} />
        </Button>
        <Button className="rightNavigation" onClick={() => nxtSteps()}>
          <Image src={rightArrowBtn} />
        </Button>
      </div>
      {/* Start slider */}
      <Carousel controls={false} activeIndex={index}>
        <Carousel.Item>
          <DragAreaComponent />
          <UploadOptionsComponent />
          <UploadingProcessing />
          {/* Start Files List */}
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
          {/* End Files List */}
        </Carousel.Item>
        <Carousel.Item>
          <DragAreaComponent />
          <UploadOptionsComponent />
          <UploadingProcessing />
          {/* Start Files List */}
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
          {/* End Files List */}
        </Carousel.Item>
        <Carousel.Item>
          <DragAreaComponent />
          <UploadOptionsComponent />
          <UploadingProcessing />
          {/* Start Files List */}
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
          {/* End Files List */}
        </Carousel.Item>
      </Carousel>
      {/* Eng slider  */}
      <div className="warning" hidden={!showWarning}>
        <Image src={warning} />
        <p>
          Your staff criteria needs to be fulfilled to continue submitting the application. <br />
          Kindly refer to email sent for staff criteria or view the online service card
        </p>
        <Button onClick={() => setShowWarning(!showWarning)}>Close</Button>
      </div>
    </div>
  );
}
