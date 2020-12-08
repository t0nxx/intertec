import React from "react";
import { Button, Row } from "react-bootstrap";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SubmissionButtonWithCancel = ({ onCancel }) => {
  // this should be cancel callback
  return (
    /// this is will show if the user in details screen
    <Row className="justify-content-end">
      <Button variant="light" size="lg" className="cancel-edit-btn" onClick={onCancel}>
        <strong>Cancel</strong>
      </Button>
      <Button variant="success" size="lg" className="save-edit-btn" type="submit">
        <strong>Save And Edit</strong>
      </Button>
    </Row>
  );
};

export default SubmissionButtonWithCancel;
