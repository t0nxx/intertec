import React, { useState } from "react";
import "./attachment.scss";
import { Image, Button, Carousel } from "react-bootstrap";

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
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
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

      {/* Start slider */}
      <Carousel controls={false} activeIndex={index}>
        <Carousel.Item>
          {/* Start Drag Area */}
          <div className="dragArea">
            <Image src={upArrow} />
            <p className="hint1">Drag and Drop Documents Here to Get Started!</p>
            <p className="hint2">
              Use the button below to upload your documents it supports <br /> PDF, Word, JPE,File
              size 10 MB
            </p>
            <Button>Browse for document on your computer</Button>
          </div>
          {/* End Drag Area */}
          {/* Start Upload Options */}
          <div className="uploadOptions">
            <Image src={fromPc} />
            <Image src={dropbox} />
            <Image src={cloud} />
            <Image src={box} />
          </div>
          {/* End Upload Options */}
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
          {/* Start Drag Area */}
          <div className="dragArea">
            <Image src={upArrow} />
            <p className="hint1">Drag and Drop Documents Here to Get Started!</p>
            <p className="hint2">
              Use the button below to upload your documents it supports <br /> PDF, Word, JPE,File
              size 10 MB
            </p>
            <Button>Browse for document on your computer</Button>
          </div>
          {/* End Drag Area */}
          {/* Start Upload Options */}
          <div className="uploadOptions">
            <Image src={fromPc} />
            <Image src={dropbox} />
            <Image src={cloud} />
            <Image src={box} />
          </div>
          {/* End Upload Options */}
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
          {/* Start Drag Area */}
          <div className="dragArea">
            <Image src={upArrow} />
            <p className="hint1">Drag and Drop Documents Here to Get Started!</p>
            <p className="hint2">
              Use the button below to upload your documents it supports <br /> PDF, Word, JPE,File
              size 10 MB
            </p>
            <Button>Browse for document on your computer</Button>
          </div>
          {/* End Drag Area */}
          {/* Start Upload Options */}
          <div className="uploadOptions">
            <Image src={fromPc} />
            <Image src={dropbox} />
            <Image src={cloud} />
            <Image src={box} />
          </div>
          {/* End Upload Options */}
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
