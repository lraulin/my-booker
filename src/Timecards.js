import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { fetchFacilities, fetchTimecards } from './api';
import { useAuth } from './use-auth';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import DatePicker from 'react-datepicker';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import 'react-datepicker/dist/react-datepicker.css';

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

/**
 * COMPONENT
 */
function Timecards() {
  const [timecards, setTimecards] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [superOnly, setSuperOnly] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [updated, setUpdated] = useState(null);
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [facilities, setFacilities] = useState([]);
  const [facilitiesAreLoading, setFacilitiesAreLoading] = useState(false);
  const history = useHistory();
  const auth = useAuth();

  const refresh = () => {
    setIsLoading(true);
    fetchTimecards({
      authorization: auth.token,
      end: endDate,
      page: page - 1,
      facilityId: selectedFacility && selectedFacility.id,
    }).then((res) => {
      const newUpdated = new Date();
      if (res.data && res.hasOwnProperty('total')) {
        localStorage.setItem('timecards', JSON.stringify(res.data));
        localStorage.setItem('total', JSON.stringify(res.total));
        localStorage.setItem('updated', newUpdated.toISOString());
        setTimecards(res.data);
        setTotal(res.total);
        setUpdated(newUpdated);
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
      setUpdated(new Date(localStorage.getItem('updated')));
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
          <Button onClick={() => history.push('/timecards/view?id=' + tc.id)}>
            Actions
          </Button>
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
          : timecards.map(row)}
      </tbody>
    </Table>
  );

  const lastPage = Math.ceil(total / 100);

  return (
    <div>
      <span>End Date: </span>
      <DatePicker
        selected={endDate}
        onChange={(date) => {
          setEndDate(date);
        }}
      />
      <span style={{ marginRight: '1em' }}></span>
      <span>Page: </span>
      <input
        type="number"
        value={page}
        min="1"
        max={lastPage || 1}
        onChange={(e) => setPage(Number.parseInt(e.target.value))}
      ></input>
      <span style={{ marginRight: '1em' }}>of {lastPage}</span>
      <Button onClick={refresh}>Fetch Timecards</Button>
      <Button variant="secondary" onClick={toggleSuperOnly}>
        Show {superOnly ? 'All Timecards' : 'Only Super Admin'}
      </Button>
      Facility:
      <AsyncTypeahead
        id="facilityTypeahead"
        isLoading={facilitiesAreLoading}
        labelKey="name"
        onChange={(selected) => {
          console.log('Facility selected');
          console.log(selected[0]);
          setSelectedFacility(selected[0]);
        }}
        onSearch={(query) => {
          setFacilitiesAreLoading(true);
          fetchFacilities(query, auth.token).then((data) => {
            setFacilities(data);
            setFacilitiesAreLoading(false);
          });
        }}
        options={facilities}
      />
      <section id="timecardStats">
        <span style={{ paddingRight: '3em' }}>Total Timecards: {total}</span>
        <span style={{ paddingRight: '3em' }}>
          Admin Approvals (this page):{' '}
          {timecards ? timecards.filter(isSuperAdmin).length : 0}
        </span>
        {updated ? <span>Last Updated: {updated.toLocaleString()}</span> : null}
      </section>
      {table}
    </div>
  );
}

export default Timecards;
