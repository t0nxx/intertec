import React from "react";
import "./nav-bar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDivide,
  faMicrophone,
  faPhone,
  faQuestionCircle,
  faSearch,
  faSitemap,
  faVolumeUp,
  faUser,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../logo.png";

export default function NavBarComponent() {
  return (
    <Navbar expand="lg" variant="light" bg="light" sticky="top">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="200"
          height="50"
          className="d-inline-block align-top ml-5"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>

      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="mr-2">عربي</Navbar.Text>

        <Nav>
          <FontAwesomeIcon icon={faVolumeUp} size="sm" color="black" className="mr-2 ml-2" />
          <span className="border  border-secondary" />

          <FontAwesomeIcon icon={faSitemap} size="sm" color="black" className="mr-2 ml-2" />
          <span className="border  border-secondary" />

          <FontAwesomeIcon icon={faPhone} size="sm" color="black" className="mr-2 ml-2" />
          <span className="border  border-secondary" />

          <FontAwesomeIcon icon={faQuestionCircle} size="sm" color="black" className="mr-2 ml-2" />
          <span className="border  border-secondary" />

          <FontAwesomeIcon icon={faSearch} size="sm" color="black" className="mr-2 ml-2" />
          <span className="border  border-secondary" />

          <FontAwesomeIcon icon={faMicrophone} size="sm" color="black" className="mr-2 ml-2" />
        </Nav>

        <Nav>
          <Button variant="outline-light">
            <FontAwesomeIcon icon={faBell} size="lg" color="grey" className="mr-2 ml-2" />

            <Badge pill variant="danger">
              4
            </Badge>
          </Button>
          <FontAwesomeIcon icon={faUser} size="lg" color="grey" className="mt-2" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

/* <span style={{ color: 'black', marginRight: 20 }} > عربي</span>
<FontAwesomeIcon icon={faVolumeUp} size="lg" color="black" />
<Divider type="vertical" />

<FontAwesomeIcon icon={faSitemap} size="lg" color="black" />
<Divider type="vertical" />

<FontAwesomeIcon icon={faPhone} size="lg" color="black" />
<Divider type="vertical" />

<FontAwesomeIcon icon={faQuestionCircle} size="lg" color="black" />
<Divider type="vertical" />

<FontAwesomeIcon icon={faSearch} size="lg" color="black" />
<Divider type="vertical" />

<FontAwesomeIcon icon={faMicrophone} size="lg" color="black" />

<Badge count={4}>
<Avatar icon={<BellFilled />} />
</Badge>

<Dropdown overlay={menu} placement='topLeft' >
<span style={{ color: 'black' }}>
    <DownOutlined />  User Name
</span>
</Dropdown>

<Avatar size={50} icon={<UserOutlined />} /> */
