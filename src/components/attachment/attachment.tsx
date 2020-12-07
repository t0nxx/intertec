import React, { useState } from "react";
import "./attachment.scss";
import { Image, Button, Carousel } from "react-bootstrap";

import DragAreaComponent from "./drag-area/drag-area";
import UploadOptionsComponent from "./upload-options/upload-options";

// Import images
import file from "../../assets/file.svg";
import del from "../../assets/delete.svg";
import stepCheck from "../../assets/stepCheck.svg";
import stepChecked from "../../assets/stepChecked.svg";
import leftArrowBtn from "../../assets/leftArrowBtn.svg";
import rightArrowBtn from "../../assets/rightArrowBtn.svg";

export default function AttachmentComponent() {
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);

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
          completeted <span>1 of 3</span>
        </p>
      </div>
      <div className="steps">
        <span className="backRow"> </span>
        <Button className="step doneStep" onClick={() => handleSelect(0)}>
          <Image src={stepCheck} className="check" />
          <Image src={stepChecked} className="checked" />
          <span>Passport</span>
        </Button>
        <Button className="step" onClick={() => handleSelect(1)}>
          <Image src={stepCheck} className="check" />
          <Image src={stepChecked} className="checked" />
          <span>Emirates ID</span>
        </Button>
        <Button className="step" onClick={() => handleSelect(2)}>
          <Image src={stepCheck} className="check" />
          <Image src={stepChecked} className="checked" />
          <span>Family Book</span>
        </Button>
      </div>
      <div className="steps">
        <Carousel controls={false} interval={null} activeIndex={index2}>
          <Carousel.Item>
            <div className="stepsContainer">
              <span className="backRow"> </span>
              <Button className="step doneStep" onClick={() => handleSelect(0)}>
                <Image src={stepCheck} className="check" />
                <Image src={stepChecked} className="checked" />
                <span>Passport</span>
              </Button>
              <Button className="step" onClick={() => handleSelect(1)}>
                <Image src={stepCheck} className="check" />
                <Image src={stepChecked} className="checked" />
                <span>Emirates ID</span>
              </Button>
              <Button className="step" onClick={() => handleSelect(2)}>
                <Image src={stepCheck} className="check" />
                <Image src={stepChecked} className="checked" />
                <span>Family Book</span>
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
                <span>Emirates ID</span>
              </Button>
              <Button className="step" onClick={() => handleSelect(2)}>
                <Image src={stepCheck} className="check" />
                <Image src={stepChecked} className="checked" />
                <span>Family Book</span>
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
    </div>
  );
}
