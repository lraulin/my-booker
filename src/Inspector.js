import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const getWorkerName = (tc) =>
  tc.user ? tc.user.firstName + " " + tc.user.lastName : "";

const getPayRates = ({ timecardPayRate }) => {
  if (!timecardPayRate) return "";
  const {
    description,
    payRate,
    overtimePayRate,
    doubletimePayRate,
  } = timecardPayRate;
  return `${description}\n${payRate} / ${doubletimePayRate} / ${overtimePayRate}`;
};

const Inspector = ({ tc }) => {
  const [viewCard, setViewCard] = useState(tc);
  const [rate, setRate] = useState(tc.adjustment);
  const [newNonTaxableAdjustment, setNewNonTaxableAdjustment] = useState(
    tc.nonTaxableAdjustment
  );
  const [newMemo, setNewMemo] = useState(tc.memo);

  useEffect(() => {
    setViewCard(tc);
  }, [tc]);

  return (
    <Form>
      <Form.Group as={Row} controlId="formType">
        <Form.Label column sm="2">
          Type
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={tc.type} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formShiftDescription">
        <Form.Label column sm="2">
          Shift Description
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="..." />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formFacility">
        <Form.Label column sm="2">
          Facility
        </Form.Label>
        <Col sm="10">
          <Form.Control
            plaintext
            readOnly
            defaultValue={tc.facility && tc.facility.name}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formUnitNumber">
        <Form.Label column sm="2">
          Unit Number
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={tc.unitNumber} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formFacilityManager">
        <Form.Label column sm="2">
          Facility Manager
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={tc.facilityManager} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPayRateDescription">
        <Form.Label column sm="2">
          Pay Rate Description
        </Form.Label>
        <Col sm="10">
          <Form.Control
            plaintext
            readOnly
            defaultValue={tc.timecardPayRate && tc.timecardPayRate.description}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formWorker">
        <Form.Label column sm="2">
          Worker
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={getWorkerName(tc)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formStartShift">
        <Form.Label column sm="2">
          Start Shift
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={tc.startTime} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formEndShift">
        <Form.Label column sm="2">
          End Shift
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={tc.endTime} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formLunch">
        <Form.Label column sm="2">
          Lunch
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={tc.lunchInMinutes} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formRegularHours">
        <Form.Label column sm="2">
          Regular Hours
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="???" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formOvertimeHours">
        <Form.Label column sm="2">
          Overtime Hours
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={tc.overtimeHours} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formTotalHoursWorked">
        <Form.Label column sm="2">
          Total Hours Worked
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="email@example.com" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formRate">
        <Form.Label column sm="2">
          Rate
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={getPayRates(tc)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formRegularPay">
        <Form.Label column sm="2">
          Regular Pay
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={tc.amount} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formOvertimePay">
        <Form.Label column sm="2">
          Overtime Pay
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={tc.overtimeAmount} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formNonTaxableAdjustment">
        <Form.Label column sm="2">
          Non Taxable Adjustment
        </Form.Label>
        <Col sm="10">
          <Form.Control defaultValue="Set non taxable adjustment for a worker" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formAdjustment">
        <Form.Label column sm="2">
          Adjustment
        </Form.Label>
        <Col sm="10">
          <Form.Control
            plaintext
            readOnly
            defaultValue="Set adjustment if needed"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formMemo">
        <Form.Label column sm="2">
          Memo
        </Form.Label>
        <Col sm="10">
          <Form.Control
            plaintext
            readOnly
            defaultValue="Additional notes can be here"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formStipend">
        <Form.Label column sm="2">
          Stipend(Pro-Rated)
        </Form.Label>
        <Col sm="10">
          <Form.Control
            plaintext
            readOnly
            defaultValue={"$" + tc.stipendPaymentAmount}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formTotal">
        <Form.Label column sm="2">
          Total
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={"$" + tc.total} />
        </Col>
      </Form.Group>
      <Button variant="success">Approve</Button>
      <Button variant="primary">Edit</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="danger">Remove</Button>
    </Form>
  );
};

export default Inspector;
