import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faPhoneAlt,
  faQuestionCircle,
  faSearch,
  faSitemap,
  faVolumeUp,
  faLowVision,
} from "@fortawesome/free-solid-svg-icons";
import {
  Badge,
  Dropdown,
  Nav,
  Navbar,
  Image,
  Button,
  ProgressBar,
  Row,
  Col,
} from "react-bootstrap";
import logo from "../../logo.png";

export default function FooterComponent() {
  return (
    <Navbar expand="lg" fixed="bottom" className="footer">
      <Row className="progress-container">
        <ProgressBar variant="success" now={70} className="progress" />
        <Row className="statistics-container">
          <Col>
            <Button variant="success"> only test</Button>
          </Col>
          <Col>
            <Button variant="success"> only test</Button>
          </Col>
        </Row>
      </Row>
    </Navbar>
  );
}
