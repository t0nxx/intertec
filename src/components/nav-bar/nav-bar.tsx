import React from "react";
import "./nav-bar.scss";
import logo from "../../logo.png";
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
import { Badge, Dropdown, Nav, Navbar, Image } from "react-bootstrap";

// Import images
import name from "../../assets/name.jpg";
import bell from "../../assets/bell.png";

export default function NavBarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" bg="light" sticky="top">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="200"
          height="50"
          className="d-inline-block align-top ml-5"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <div className="toggleLang">
            <a>عربي</a>
          </div>
          <Nav className="headerIcons">
            <Nav.Item>
              <Nav.Link href="/home">
                <FontAwesomeIcon icon={faVolumeUp} size="sm" color="black" className="mr-2 ml-2" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home">
                <FontAwesomeIcon icon={faSitemap} size="sm" color="black" className="mr-2 ml-2" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home">
                <FontAwesomeIcon icon={faPhoneAlt} size="sm" color="black" className="mr-2 ml-2" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home">
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  size="sm"
                  color="black"
                  className="mr-2 ml-2"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home">
                <FontAwesomeIcon icon={faLowVision} size="sm" color="black" className="mr-2 ml-2" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home">
                <FontAwesomeIcon icon={faSearch} size="sm" color="black" className="mr-2 ml-2" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home">
                <FontAwesomeIcon
                  icon={faMicrophone}
                  size="sm"
                  color="black"
                  className="mr-2 ml-2"
                />
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {/* Notifications drop menu */}
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="notifications">
              <Image src={bell} />
              <Badge pill variant="danger">
                4
              </Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">test action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">test Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">test Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* User drop menu */}
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="user">
              <strong>User Name</strong>
              <Image src={name} roundedCircle />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">test action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">test Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">test Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
