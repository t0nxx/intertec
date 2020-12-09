import React from "react";
import "./page-header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function PageHeaderComponent() {
  const { t } = useTranslation();
  return (
    <Container fluid>
      <Row className="mb-5 pt-3 pr-5 pl-5 bg-white ">
        <Col>
          <h4> {t("Titles.New License Pharmaceutical Establishment")}</h4>
        </Col>
        <Col md="auto">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item>
              <FontAwesomeIcon icon={faHome} size="lg" color="black" />
            </Breadcrumb.Item>

            <Breadcrumb.Item>{t("Titles.Services")}</Breadcrumb.Item>

            <Breadcrumb.Item>
              {t("Titles.New License Pharmaceutical Establishment")}
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
}
