import React from "react";
import { useTranslation } from "react-i18next";
import "./nav-bar.scss";
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
import i18n from "../../i18n";
import logo from "../../logo.png";

// Import images
import name from "../../assets/name.jpg";
import bell from "../../assets/bell.svg";

export default function NavBarComponent() {
  const { t } = useTranslation();
  const changeDirection = (lang: string) => {
    document.getElementsByTagName("html")[0].setAttribute("lang", lang);
    document.getElementsByTagName("body")[0].setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  };
  const toggleLanguage = () => {
    const nextLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(nextLang);
    changeDirection(nextLang);
  };
  let show = false;

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      bg="light"
      className="top-nav"
      // onToggle={() => {
      //   show = !show;
      // }}
    >
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="200"
          height="50"
          className="d-inline-block align-top ml-5"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>

      {show ? <DropDownUserComponent /> : null}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          <button type="button" className="toggleLang" onClick={toggleLanguage}>
            <a>{t("Titles.AppLanguage")}</a>
          </button>
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
          {/* <Dropdown className="dropDownUser">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="user">
              <strong> {t("Titles.UserName")}</strong>
              <Image src={name} roundedCircle />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">test action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">test Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">test Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
          <DropDownUserComponent />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
function DropDownUserComponent() {
  const { t } = useTranslation();

  return (
    <Dropdown className="dropDownUser">
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="user">
        <strong> {t("Titles.UserName")}</strong>
        <Image src={name} roundedCircle />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">test action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">test Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">test Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
