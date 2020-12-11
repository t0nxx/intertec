import React, { useState } from "react";
import "./sticky-info.scss";
import { Button, Accordion, Card, Image } from "react-bootstrap";

// Import image
import upArrow from "../../assets/upArrow4Collaps.svg";
import rightArrow from "../../assets/rightArrow.svg";

export default function InfoComponent() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="stickyInfo">
      <div className="infoContent" hidden={!isOpen}>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Services Description
                <Image src={upArrow} />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  Sample Text Lorem ipsum dummy text Sample Text Lorem ipsum dummy text Sample Text
                  Lorem ipsum dummy text Sample Text Lorem ipsum dummy text Sample Text Lorem ipsum
                  dummy text Sample Text Lorem ipsum dummy text Sample Text Lorem ipsum dummy text
                  Sample Text Lorem ipsum dummy text Sample Text Lorem ipsum dummy text
                </p>
                <div className="showMore">
                  show More
                  <Image src={rightArrow} />
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Service fees
                <Image src={upArrow} />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul>
                  <li>Fee 1 (100 AED)</li>
                  <li>Fee 2 (1000 AED)</li>
                  <li>Fee 3 (500 AED)</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      {/* <div className="infoIcon opened"> </div> */}
      <div
        className={isOpen ? "infoIcon opened" : "infoIcon"}
        role="presentation"
        onClick={() => setIsOpen(!isOpen)}
      >
        {" "}
      </div>
    </div>
  );
}
