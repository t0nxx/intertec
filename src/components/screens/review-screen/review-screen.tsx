import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./review-screen.scss";
import { Container, Accordion, Card, Image, Row, Col, Table, Button, Modal } from "react-bootstrap";

// Import images
import upArrow4Collaps from "../../../assets/upArrow4Collaps.svg";
import editPen from "../../../assets/editPen.svg";
import locationWhite from "../../../assets/location-white.svg";
// screens to edit
import EstablishmentInformationComponent from "../pharamaceutical-establishment/etablishment-inforamtion/establishment-information";
import ContactInformationComponent from "../pharamaceutical-establishment/contact-inforamtion/contact-information";
import LocationInformationComponent from "../pharamaceutical-establishment/location-inforamtion/location-information";
import OwnerDetailComponent from "../pharamaceutical-establishment/owner-detail/owner-detail";
import PartnerDetailsComponent from "../pharamaceutical-establishment/partner-details/partner-details";
import ReasonForAreaExtention from "../add-area-extention/reason-for-area-extention/reason-for-area-extention";
import RemoveSpeciality from "../speciality/remove-speciality/remove-speciality";

import file from "../../../assets/file.svg";
import del from "../../../assets/delete.svg";
import userPhoto from "../../../assets/userPhoto.svg";
import collaps from "../../../assets/collaps.svg";
import expand from "../../../assets/expand.svg";
import minus from "../../../assets/minus-circle-solid.svg";

export default function ReviewScreenComponent() {
  const [isEditEstablish, setIsEditEstablish] = useState(false);
  const [isEditContact, setIsEditContact] = useState(false);
  const [isEditLocation, setIsEditLocation] = useState(false);
  const [isEditOwner, setIsEditOwner] = useState(false);
  const [isEditPartner, setIsEditPartner] = useState(true);
  const [isEditArea, setIsEditArea] = useState(false);
  const [isEditSpeciallity, setIsEditSpeciallity] = useState(false);

  const { t } = useTranslation();

  // the logic here ... acordation take active key as string number
  // so i'll set all accordation with default 0 value which mean i our case
  // all collapse are opend
  // on the other hand to close all , i will set th default key a number that not 0
  // so that all that have event key 0 wont open
  const [collapseAllState, setcollapseAllState] = useState("0");

  const collapseAll = () => setcollapseAllState("1");
  const expandAll = () => setcollapseAllState("0");

  const history = useHistory();
  useEffect(() => {}, [collapseAllState]);

  return (
    <Container fluid>
      <div className="screenContent">
        <Row>
          {/* Screen Head */}
          <div className="screenHead">
            <Row>
              <Col>
                <div className="btnsContainer">
                  <Button className="collaps" onClick={collapseAll}>
                    <Image src={collaps} />
                    {t("Titles.Collapse all")}
                  </Button>
                  <Button className="expand" onClick={expandAll}>
                    <Image src={expand} />
                    {t("Titles.expand all")}
                  </Button>
                </div>
              </Col>
              <Col className="submit">
                <Button onClick={() => history.push("/success")}>{t("Buttons.Submit")}</Button>
              </Col>
            </Row>
          </div>
          {/* Screen Head */}

          {/* Start Establishment Information */}
          <div className="block">
            <Accordion defaultActiveKey={collapseAllState}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={collapseAllState}>
                  <h1>{t("Titles.Establishment Information")}</h1>
                  <Image src={upArrow4Collaps} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={collapseAllState}>
                  {isEditEstablish ? (
                    <EstablishmentInformationComponent
                      isForReviewPage={true}
                      onSubmitOrCancelEvent={() => setIsEditEstablish(!isEditEstablish)}
                    />
                  ) : (
                    <Card.Body>
                      <Image
                        src={editPen}
                        className="edit"
                        onClick={() => setIsEditEstablish(!isEditEstablish)}
                      />
                      <Row>
                        <Col md="6" sm="12">
                          <p> {t("Titles.Establishment Name (English)")}</p>
                          <span>Establishment Name (English)</span>
                        </Col>
                        <Col md="6" sm="12">
                          <p> {t("Forms.Establishment Name (Arabic)")}</p>
                          <span>Establishment Name (Arabic)</span>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6" sm="12">
                          <p> {t("Forms.Establishment Type")}</p>
                          <span>Establishment Type</span>
                        </Col>
                        <Col md="6" sm="12">
                          <p> {t("Forms.Category")}</p>
                          <span>Category</span>
                        </Col>
                      </Row>
                    </Card.Body>
                  )}
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          {/* End Establishment Information */}

          {/* Start Contact information */}
          <div className="block">
            <Accordion defaultActiveKey={collapseAllState}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={collapseAllState}>
                  <h1>{t("Forms.Contact information")}</h1>
                  <Image src={upArrow4Collaps} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={collapseAllState}>
                  {isEditContact ? (
                    <ContactInformationComponent
                      isForReviewPage={true}
                      onSubmitOrCancelEvent={() => setIsEditContact(!isEditContact)}
                    />
                  ) : (
                    <Card.Body>
                      <Image
                        src={editPen}
                        className="edit"
                        onClick={() => setIsEditContact(!isEditContact)}
                      />
                      <Row>
                        <Col md="6" sm="12">
                          <p>{t("Forms.Contact Name")}</p>
                          <span>Contact Name</span>
                        </Col>
                        <Col md="6" sm="12">
                          <p> {t("Forms.Designation")}</p>
                          <span>Designation</span>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6" sm="12">
                          <p> {t("Forms.Primary Email")}</p>
                          <span>A@a.com</span>
                        </Col>
                        <Col md="6" sm="12">
                          <p> {t("Forms.Alternative Email")}</p>
                          <span>A@a.com</span>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6" sm="12">
                          <p> {t("Forms.Contact Number")}</p>
                          <span>+971 000 000</span>
                        </Col>
                        <Col md="6" sm="12">
                          <p> {t("Forms.Alternative Contact No")}</p>
                          <span>+971 000 000</span>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p>{t("Forms.Fax")}</p>
                          <span>Fax</span>
                        </Col>
                      </Row>
                    </Card.Body>
                  )}
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          {/* End Contact information */}

          {/* Start Location information */}
          <div className="block">
            <Accordion defaultActiveKey={collapseAllState}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={collapseAllState}>
                  <h1>{t("Titles.Location Information")}</h1>
                  <Image src={upArrow4Collaps} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={collapseAllState}>
                  {isEditLocation ? (
                    <LocationInformationComponent
                      isForReviewPage={true}
                      onSubmitOrCancelEvent={() => setIsEditLocation(!isEditLocation)}
                    />
                  ) : (
                    <Card.Body>
                      <Image
                        src={editPen}
                        className="edit"
                        onClick={() => setIsEditLocation(!isEditLocation)}
                      />
                      <Row>
                        <Col md="6" sm="12">
                          <p>{t("Forms.Emirate")}</p>
                          <span>Emirate</span>
                        </Col>
                        <Col md="6" sm="12">
                          <p>{t("Forms.Area")}</p>
                          <span>Area</span>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6" sm="12">
                          <p>{t("Forms.Street")}</p>
                          <span>Street</span>
                        </Col>
                        <Col md="6" sm="12">
                          <p>{t("Forms.Building Name")}</p>
                          <span>PO Box</span>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6" sm="12">
                          <p>{t("Forms.Po Box")}</p>
                          <span>PO Box</span>
                        </Col>
                        <Col md="6" sm="12">
                          <p>{t("Forms.Building No")}</p>
                          <span>Building NO</span>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p>{t("Buttons.Google Map URL")}</p>
                          <a href="">
                            <span className="mapBtn">
                              <Image src={locationWhite} />
                              {t("Buttons.Google Map URL")}
                            </span>
                          </a>
                        </Col>
                      </Row>
                    </Card.Body>
                  )}
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          {/* End Location information */}

          {/* Start owner Details */}
          <div className="block">
            <Accordion defaultActiveKey={collapseAllState}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={collapseAllState}>
                  <h1>{t("Titles.Owner Details")}</h1>
                  <Image src={upArrow4Collaps} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={collapseAllState}>
                  {isEditOwner ? (
                    <OwnerDetailComponent
                      isForReviewPage={true}
                      onSubmitOrCancelEvent={() => setIsEditOwner(!isEditOwner)}
                    />
                  ) : (
                    <Card.Body>
                      <Image
                        src={editPen}
                        className="edit"
                        onClick={() => setIsEditOwner(!isEditOwner)}
                      />
                      <Row>
                        <Col md="6" sm="12">
                          <Image src={userPhoto} />
                        </Col>
                        <Col md="6" sm="12">
                          <p>{t("Forms.Gender")}</p>
                          <span>Male</span>
                        </Col>
                        <Col md="6" sm="12">
                          <p>{t("Forms.UAE Citzen")}</p>
                          <span>Yes</span>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6" sm="12">
                          <p>{t("Forms.First name")}</p>
                          <span>First name</span>
                        </Col>
                        <Col md="6" sm="12">
                          <p>{t("Forms.Middle name")}</p>
                          <span>middle name</span>
                        </Col>
                        <Col md="6" sm="12">
                          <p>{t("Forms.Last name")}</p>
                          <span>Last Name</span>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6" sm="12">
                          <p>{t("Forms.First name (Arabic)")}</p>
                          <span>First name (arabic)</span>
                        </Col>
                        <Col md="6" sm="12">
                          <p>{t("Forms.Middle name (Arabic)")}</p>
                          <span>middle name (arabic)</span>
                        </Col>
                        <Col md="6" sm="12">
                          <p>{t("Forms.Last Name (Arabic)")}</p>
                          <span>Last Name (arabic)</span>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6" sm="12">
                          <p>{t("Forms.Nationality")}</p>
                          <span>Nationality</span>
                        </Col>
                        <Col md="6" sm="12">
                          <p>{t("Forms.Passport No")}</p>
                          <span>Passport No</span>
                        </Col>
                        <Col md="6" sm="12">
                          <p>{t("Forms.Emirates ID")}</p>
                          <span>Emirates ID</span>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6" sm="12">
                          <p>{t("Forms.Family Book No")}</p>
                          <span>Family Book No</span>
                        </Col>
                        <Col md="6" sm="12">
                          <p>{t("Forms.Share Percentage")}</p>
                          <span>Share Percentage</span>
                        </Col>
                        <Col> </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Col className="grayBg">
                            <Row>
                              <Col md="6" sm="12">
                                <p>{t("Forms.Contact Number")}</p>
                                <span>+971 000 000</span>
                              </Col>
                              <Col md="6" sm="12">
                                <p>{t("Forms.Primary Email")}</p>
                                <span>Email@mail.com</span>
                              </Col>
                            </Row>
                          </Col>
                        </Col>
                      </Row>
                    </Card.Body>
                  )}
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          {/* End owner Details */}

          {/* Start Partner Details */}
          <div className="block">
            <Accordion defaultActiveKey={collapseAllState}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={collapseAllState}>
                  <h1> {t("Titles.Partner Details")}</h1>
                  <Image src={upArrow4Collaps} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={collapseAllState}>
                  <PartnerDetailsComponent
                    isForReviewPage={true}
                    onSubmitOrCancelEvent={() => setIsEditPartner(!isEditPartner)}
                  />
                  {/* {isEditPartner ? (
                    <PartnerDetailsComponent
                      isForReviewPage={true}
                      onSubmitOrCancelEvent={() => setIsEditPartner(!isEditPartner)}
                    />
                  ) : (
                    <Card.Body>
                      <Row className="tableParent">
                        <Table>
                          <thead>
                            <tr>
                              <th>Full Name _EN</th>
                              <th>Full Name _AR</th>
                              <th>Emirates ID</th>
                              <th>Passport NO</th>
                              <th>Nationality</th>
                              <th>Share %</th>
                              <th> </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Mohamed Elzayat</td>
                              <td>محمد الزيات</td>
                              <td>12313-1231-456</td>
                              <td>#number</td>
                              <td>Nationality</td>
                              <td>20%</td>
                              <td>
                                <Image src={editPen} />
                              </td>
                            </tr>

                            <tr>
                              <td>Mohamed Elzayat</td>
                              <td>محمد الزيات</td>
                              <td>12313-1231-456</td>
                              <td>#number</td>
                              <td>Nationality</td>
                              <td>20%</td>
                              <td>
                                <Image src={editPen} />
                              </td>
                            </tr>
                            <tr>
                              <td>Mohamed Elzayat</td>
                              <td>محمد الزيات</td>
                              <td>12313-1231-456</td>
                              <td>#number</td>
                              <td>Nationality</td>
                              <td>20%</td>
                              <td>
                                <Image src={editPen} />
                              </td>
                            </tr>
                            <tr>
                              <td>Mohamed Elzayat</td>
                              <td>محمد الزيات</td>
                              <td>12313-1231-456</td>
                              <td>#number</td>
                              <td>Nationality</td>
                              <td>20%</td>
                              <td>
                                <Image src={editPen} />
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Row>
                      <Row
                        className="addMore"
                        onClick={() => setShowAddPartnerModal(!showAddPartnerModal)}
                      >
                        <Image src={addMore} />
                        Click here to add more Partner
                      </Row>
                      <Modal
                        show={showAddPartnerModal}
                        onHide={() => setShowAddPartnerModal(!showAddPartnerModal)}
                        backdrop="static"
                        keyboard={false}
                        className="fullScreenModal"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>
                            <div className="back">
                              <Image
                                src={leftArrow}
                                onClick={() => setShowAddPartnerModal(!showAddPartnerModal)}
                              />
                            </div>
                            <div className="title">
                              <h1> {t("Forms.Add New Partner")}</h1>
                            </div>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <AddPartnerComponent closeModal={onCloseAddPartnerModal} />
                        </Modal.Body>
                      </Modal>
                    </Card.Body>
                  )} */}
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          {/* End Partner Details */}

          {/* Start Attachment */}
          <div className="block">
            <Accordion defaultActiveKey={collapseAllState}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={collapseAllState}>
                  <h1> {t("Titles.Attachment")}</h1>
                  <Image src={upArrow4Collaps} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={collapseAllState}>
                  <Card.Body>
                    <Row>
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
                            <Image src={del} onClick={() => history.push("/attachment")} />
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
                            <Image src={del} onClick={() => history.push("/attachment")} />
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
                            <Image src={del} onClick={() => history.push("/attachment")} />
                          </div>
                        </div>
                      </div>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>

          {/* End Attachment */}

          {/* Start Reason for area extention */}
          <div className="block">
            <Accordion defaultActiveKey={collapseAllState}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={collapseAllState}>
                  <h1> {t("Texts.Reason For Area Extention")}</h1>
                  <Image src={upArrow4Collaps} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={collapseAllState}>
                  {isEditArea ? (
                    <ReasonForAreaExtention
                      isForReviewPage={true}
                      onSubmitOrCancelEvent={() => setIsEditArea(!isEditArea)}
                    />
                  ) : (
                    <Card.Body>
                      <Image
                        src={editPen}
                        className="edit"
                        onClick={() => setIsEditArea(!isEditArea)}
                      />
                      <Row>
                        <Col md="12" sm="12">
                          <p>{t("Texts.Reason For Area Extention")}</p>
                          <span>{t("Texts.Reason For Area Extention")}</span>
                        </Col>
                      </Row>
                    </Card.Body>
                  )}
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          {/* End Reason for area extention */}

          {/* Start Remove Speciality  */}
          <div className="block">
            <Accordion defaultActiveKey={collapseAllState}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={collapseAllState}>
                  <h1> {t("Forms.Remove Speciality")}</h1>
                  <Image src={upArrow4Collaps} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={collapseAllState}>
                  {isEditSpeciallity ? (
                    <RemoveSpeciality
                      isForReviewPage={true}
                      onSubmitOrCancelEvent={() => setIsEditSpeciallity(!isEditSpeciallity)}
                    />
                  ) : (
                    <Card.Body>
                      <Image
                        src={editPen}
                        className="edit"
                        onClick={() => setIsEditSpeciallity(!isEditSpeciallity)}
                      />
                      <Row>
                        <Col md="12" sm="12">
                          <p>{t("Forms.Specialities Removed")}</p>
                          <div className="removedSpecialities">
                            <ul>
                              <li>
                                <Image src={minus} /> {t("Forms.Gynecology")}
                              </li>
                              <li>
                                <Image src={minus} /> {t("Forms.immunology")}
                              </li>
                              <li>
                                <Image src={minus} /> {t("Forms.Dermatology")}
                              </li>
                              <li>
                                <Image src={minus} /> {t("Forms.Neurology")}
                              </li>
                              <li>
                                <Image src={minus} /> {t("Forms.rehabilitation")}
                              </li>
                            </ul>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12" sm="12">
                          <p>{t("Forms.Total Number of Specialties")}</p>
                          <span>10</span>
                        </Col>
                      </Row>
                    </Card.Body>
                  )}
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          {/* End Remove Speciality */}

          {/* Submit */}
          <div className="submit">
            <Button onClick={() => history.push("/success")}>{t("Buttons.Submit")}</Button>
          </div>
          {/* Submit */}
        </Row>
      </div>
    </Container>
  );
}
