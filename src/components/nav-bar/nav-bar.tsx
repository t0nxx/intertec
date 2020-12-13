import React from "react";
import { useHistory } from "react-router-dom";
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
import { Badge, Dropdown, Nav, Navbar, Image, Container, Row, Col } from "react-bootstrap";
import i18n from "../../i18n";
import logo from "../../logo.png";

// Import images
import name from "../../assets/name.jpg";
import bell from "../../assets/bell.svg";
import notiicon1 from "../../assets/notiicon1.svg";
import notiicon2 from "../../assets/notiicon2.svg";
import notiicon3 from "../../assets/notiicon3.svg";

export default function NavBarComponent() {
  const { t } = useTranslation();
  const history = useHistory();
  const changeDirection = (lang: string) => {
    document.getElementsByTagName("html")[0].setAttribute("lang", lang);
    document.getElementsByTagName("body")[0].setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  };
  const toggleLanguage = () => {
    const nextLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(nextLang);
    changeDirection(nextLang);
  };
  const show = false;

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
          <Dropdown className="notification-list">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="notifications">
              <Image src={bell} />
              <Badge pill variant="danger">
                4
              </Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as="div">
                <Row>
                  <Col md="2">
                    <div className="img-con">
                      <Image src={notiicon1} />
                    </div>
                  </Col>
                  <Col md="10">
                    <h6>{t("Titles.Relocation License Pharmaceutical")}</h6>
                    <p> {t("Titles.you have new request under review")}</p>
                  </Col>
                </Row>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as="div">
                <Row>
                  <Col md="2">
                    <div className="img-con">
                      <Image src={notiicon2} />
                    </div>
                  </Col>
                  <Col md="10" onClick={() => history.push("/payment")}>
                    <h6> {t("Titles.Relocation License Pharamaceutical")}</h6>
                    <p>
                      {t(
                        "Titles.on behalf of the Ministry of Health and Prevention we would thank you for submitting a new request"
                      )}
                    </p>
                  </Col>
                </Row>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as="div">
                <Row>
                  <Col md="2">
                    <div className="img-con">
                      <Image src={notiicon3} />
                    </div>
                  </Col>
                  <Col md="10">
                    <h6> {t("Titles.Send Back!")}</h6>
                    <p>
                      {t(
                        "Titles.Request needs update Kindly use below link to view reviewer comments Complete Request"
                      )}{" "}
                    </p>
                  </Col>
                </Row>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as="div">
                <Row>
                  <Col className="see-all">
                    <a>{t("Buttons.See All")}</a>
                  </Col>
                </Row>
              </Dropdown.Item>
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
