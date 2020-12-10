import React from "react";
import { Button, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/require-default-props
const SaveAndCancel = (props: { onCancel: any; customText?: any }) => {
  const { t } = useTranslation();
  // this should be cancel callback
  return (
    /// this is will show if the user in details screen
    <Row className="justify-content-end">
      <Button variant="light" size="lg" className="cancel-edit-btn" onClick={props.onCancel}>
        <strong>{t("Buttons.Cancel")}</strong>
      </Button>
      <Button variant="success" size="lg" className="save-edit-btn" type="submit">
        <strong>{props.customText ? props.customText : t("Buttons.Save And Edit")}</strong>
      </Button>
    </Row>
  );
};

export default SaveAndCancel;
