import React from "react";
import { Table } from "react-bootstrap";

const details = ({
  workDate,
  startTime,
  endTime,
  lunchInMinutes,
  overtimeHours,
  weeklyHours,
}) =>
  `${workDate}
  ${startTime} - ${endTime}
  ${lunchInMinutes} min lunch
  Overtime hours=${overtimeHours}
  Weekly hours=${weeklyHours}`;

const confirmed = ({ confirmUserId, confirmedAt }) =>
  confirmUserId ? `User #${confirmUserId} on ${confirmedAt}` : "";

const approved = ({ approvedUserId, approvedAt }) =>
  approvedUserId ? `User #${approvedUserId} on ${approvedAt}` : "";

const payRates = ({ timecardPayRate }) => {
  if (!timecardPayRate) return "";
  const {
    description,
    payRate,
    overtimePayRate,
    doubletimePayRate,
  } = timecardPayRate;
  return `${description}\n${payRate} / ${doubletimePayRate} / ${overtimePayRate}`;
};

const stipends = ({
  stipendPaymentAmount,
  stipendRuleAmount,
  stipendRuleDays,
}) => {
  if (!stipendRuleAmount) return "";
  return `$${stipendPaymentAmount}
  $${stipendRuleAmount} / ${stipendRuleDays}`;
};

const row = (tc) => (
  <tr key={tc.id}>
    <td>{tc.workDate}</td>
    <td>{tc.createdAt}</td>
    <td>{tc.user.firstName + " " + tc.user.lastName}</td>
    <td>{details(tc)}</td>
    <td>{tc.memo}</td>
    <td>{confirmed(tc)}</td>
    <td>{approved(tc)}</td>
    <td>{payRates(tc)}</td>
    <td>{tc.agency}</td>
    <td>{tc.type}</td>
    <td>{tc.status}</td>
    <td>{"Image..."}</td>
    <td>{stipends(tc)}</td>
    <td>{"Total..."}</td>
  </tr>
);

const Timecards = ({ timecards = [] }) => {
  console.log(timecards);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {[
              "Work Date",
              "Created At",
              "Worker",
              "Details",
              "Memo",
              "Confirmed",
              "Approved",
              "Pay Rates",
              "Agency",
              "Type",
              "Status",
              "Image",
              "Stipend",
              "Total",
            ].map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{timecards && timecards.map((tc) => row(tc))}</tbody>
      </Table>
    </div>
  );
};

export default Timecards;
