import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { fetchTimecards } from './api';
import { useAuth } from './use-auth';

const getUserName = (tc) =>
  tc.user && tc.user.firstName + ' ' + tc.user.lastName;

const float = (str) => Number.parseFloat(str) || 0;

const getTotalAmount = (tc) =>
  float(
    (
      float(tc.amount) +
      float(tc.overtimeAmount) +
      float(tc.doubletimeAmount) +
      float(tc.stipendPaymentAmount)
    ).toFixed(2),
  );

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
  confirmUserId ? `User #${confirmUserId} on ${confirmedAt}` : '';

const approved = ({ approvedUserId, approvedAt }) =>
  approvedUserId ? `User #${approvedUserId} on ${approvedAt}` : '';

const payRates = ({ timecardPayRate }) => {
  if (!timecardPayRate) return '';
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
  if (!stipendRuleAmount) return '';
  return `$${stipendPaymentAmount}
  $${stipendRuleAmount} / ${stipendRuleDays}`;
};

const Timecards = () => {
  const [timecards, setTimecards] = useState([]);
  const history = useHistory();
  const auth = useAuth();
  // const history = useHistory();

  const handleClick = (tc) => {
    console.log(tc.timecardid);
    console.log(tc);
    history.push('/timecards/view?id=' + tc.id);
  };

  useEffect(() => {
    let mounted = true;
    if (auth.token) {
      fetchTimecards(auth.token).then((res) => {
        if (mounted && res.data) {
          setTimecards(res.data);
        } else if (res.message && res.message.includes('Token expired')) {
          console.log('Token expired. Signing out...');
          auth.signout();
        }
      });
    }
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const row = (tc) =>
    tc ? (
      <tr key={tc.id}>
        <td>{tc.workDate}</td>
        <td>{tc.createdAt}</td>
        <td>{getUserName(tc)}</td>
        <td>{details(tc)}</td>
        <td>{tc.memo}</td>
        <td>{confirmed(tc)}</td>
        <td>{approved(tc)}</td>
        <td>{payRates(tc)}</td>
        <td>{tc.agency}</td>
        <td>{tc.type}</td>
        <td>{tc.status}</td>
        <td>{tc.timecardPhotoUrls ? tc.timecardPhotoUrls.length : ''}</td>
        <td>{stipends(tc)}</td>
        <td>${getTotalAmount(tc)}</td>
        <td>
          <Button variant="primary" onClick={() => handleClick(tc)}></Button>
        </td>
      </tr>
    ) : null;

  return (
    <div>
      <section id="timecardStats">
        <p>Total Shown: {timecards.length}</p>
        <p>
          Admin Approvals:{' '}
          {timecards.filter((t) => getTotalAmount(t) >= 2000).length}
        </p>
        <p>
          Zero-Hour:{' '}
          {
            timecards.filter(
              (t) => getTotalAmount(t) <= float(t.stipendPaymentAmount),
            ).length
          }
        </p>
      </section>
      <Table striped bordered hover>
        <thead>
          <tr>
            {[
              'Work Date',
              'Created At',
              'Worker',
              'Details',
              'Memo',
              'Confirmed',
              'Approved',
              'Pay Rates',
              'Agency',
              'Type',
              'Status',
              'Image',
              'Stipend',
              'Total',
              'Inspect',
            ].map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{timecards.map((tc) => row(tc))}</tbody>
      </Table>
    </div>
  );
};

export default Timecards;
