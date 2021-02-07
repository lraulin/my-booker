import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { fetchX } from './api';
import { useAuth } from './use-auth';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const getUserName = (tc) =>
  tc.user && tc.user.firstName + ' ' + tc.user.lastName;

const float = (str) => Number.parseFloat(str) || 0;

const getTotalAmount = (tc) =>
  float(
    (
      float(tc.amount) +
      // float(tc.overtimeAmount) +
      // float(tc.doubletimeAmount) +
      float(tc.stipendPaymentAmount)
    ).toFixed(2),
  );

// Filter predicate
const isSuperAdmin = (timecard) => getTotalAmount(timecard) >= 2000;

// Filter predicate
const notZeroed = (timecard) =>
  !(getTotalAmount(timecard) <= float(timecard.stipendPaymentAmount));

const details = ({
  workDate,
  startTime,
  endTime,
  lunchInMinutes,
  overtimeHours,
  doubletimeHours,
  weeklyHours,
}) => (
  <>
    <div>
      <strong>Start: </strong>
      {startTime}
    </div>
    <div>
      <strong>Stop: </strong>
      {endTime}
    </div>
    <div>
      <strong>Lunch: </strong>
      {lunchInMinutes}
    </div>
    <div>
      <strong>Overtime hours: </strong>
      {overtimeHours}
    </div>
    {Number.parseFloat(doubletimeHours) ? (
      <div>
        <strong>Overtime hours: </strong>
        {doubletimeHours}
      </div>
    ) : null}

    <div>
      <strong>Weekly hours: </strong>
      {weeklyHours}
    </div>
  </>
);

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
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [superOnly, setSuperOnly] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const auth = useAuth();

  // const handleClick = (tc) => {
  //   console.log(tc.timecardid);
  //   console.log(tc);
  //   history.push('/timecards/view?id=' + tc.id);
  // };

  const refresh = () => {
    setIsLoading(true);
    fetchX({ authorization: auth.token, page: page - 1 }).then((res) => {
      if (res.data && res.data.length) {
        localStorage.setItem('timecards', JSON.stringify(res.data));
        localStorage.setItem('total', JSON.stringify(res.total));
        setTimecards(res.data);
        setTotal(res.total);
      } else if (res.name === 'Forbidden') {
        console.log('Token expired. Signing out...');
        auth.signout();
        history.push('/');
      } else {
        console.log('Problem fetching timecards...');
        console.log(res);
      }
      setIsLoading(false);
    });
  };

  const toggleSuperOnly = () => setSuperOnly(!superOnly);

  useEffect(() => {
    const tcs = JSON.parse(localStorage.getItem('timecards'));
    if (tcs && tcs.length) {
      setTimecards(tcs);
      setTotal(Number.parseInt(localStorage.getItem('total')));
    }
  }, []);

  const row = (tc) =>
    tc ? (
      <tr key={tc.id}>
        <td>{tc.workDate}</td>
        <td>{tc.createdAt}</td>
        <td>{getUserName(tc)}</td>
        <td>{details(tc)}</td>
        <td>{payRates(tc)}</td>
        <td>{tc.agency}</td>
        <td>{tc.type}</td>
        <td>{tc.status}</td>
        <td>{tc.timecardPhotoUrls ? tc.timecardPhotoUrls.length : ''}</td>
        <td>{stipends(tc)}</td>
        <td>${getTotalAmount(tc)}</td>
        <td>
          <a
            href={`https://app.snapnurse.com/admin/timecards?type=HOURLY&dateRangeType=workDate&page=1&userId=${tc.userId}`}
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              setTimecards(timecards.filter((t) => t.userId !== tc.userId))
            }
            style={tc.visited ? { color: 'red' } : null}
          >
            Open in Booker
          </a>
          {/* <Button variant="primary" onClick={() => handleClick(tc)}></Button> */}
        </td>
      </tr>
    ) : null;

  const table = isLoading ? (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  ) : (
    <Table striped bordered hover>
      <thead>
        <tr>
          {[
            'Work Date',
            'Created At',
            'Worker',
            'Details',
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
      <tbody>
        {superOnly
          ? timecards.filter(isSuperAdmin).map(row)
          : timecards.filter(notZeroed).map(row)}
      </tbody>
    </Table>
  );

  return (
    <div>
      <input
        type="number"
        value={page}
        min="1"
        onChange={(e) => setPage(Number.parseInt(e.target.value))}
      />
      <Button onClick={refresh}>Fetch Timecards</Button>
      <Button variant="secondary" onClick={toggleSuperOnly}>
        Show {superOnly ? 'All Not Zeroed' : 'Only Super Admin'}
      </Button>
      <section id="timecardStats">
        <span style={{ paddingRight: '3em' }}>Total Timecards: {total}</span>
        <span style={{ paddingRight: '3em' }}>
          Admin Approvals (this page): {timecards.filter(isSuperAdmin).length}
        </span>
        <span style={{ paddingRight: '3em' }}>
          Zero-Hour (this page):{' '}
          {
            timecards.filter(
              (t) => getTotalAmount(t) <= float(t.stipendPaymentAmount),
            ).length
          }
        </span>
      </section>
      {table}
    </div>
  );
};

export default Timecards;
