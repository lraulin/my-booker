const apiBaseUrl = 'https://app.snapnurse.com/api/v1';

const authHeader = (token) => ({
  Authorization: 'Bearer ' + token,
});

export const fetchOneTimecard = async (id, token) => {
  const timecardUrl = apiBaseUrl + '/admin/timecards/' + id;
  try {
    console.log('Fetching one timecard from api...');
    const result = await fetch(timecardUrl, { headers: authHeader(token) });
    const resbody = await result.json();
    console.log('Api response:');
    console.log(resbody);
    return resbody;
  } catch (e) {
    console.log(e);
  }
};

export const fetchTimecards = async (authorization) => {
  const startDate = '2021-01-10';
  const endDate = '2021-01-22';
  try {
    console.log('Fetching from api...');
    const result = await fetch(
      `https://app.snapnurse.com/api/v1/admin/timecards?type=HOURLY&workDate[$gte]=${startDate}&workDate[$lte]=${endDate}&platformId=1&$limit=100&$skip=0&$sort[createdAt]=-1`,

      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'en-US,en;q=0.9',
          authorization,
          'if-none-match': 'W/"87e67-gQagPz/QZeu/cqOYYc7FtOQM+Fc"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'sec-gpc': '1',
        },
        referrer: `https://app.snapnurse.com/admin/timecards?page=1&startDate=01/10/2021&endDate=01/22/2021&dateRangeType=workDate&type=HOURLY`,
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: null,
        method: 'GET',
        mode: 'cors',
        // credentials: 'include',
      },
    );
    const resbody = await result.json();
    console.log('Api response:');
    console.log(resbody);
    return resbody;
  } catch (e) {
    console.log(e);
  }
};

const postData = async (url = '', data = {}) => {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'strict-origin-when-cross-origin',
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
};

export const login = async (email = '', password = '') => {
  try {
    console.log('Logging in...');
    const authUrl = apiBaseUrl + '/authentication';
    const responseData = await postData(authUrl, {
      strategy: 'local',
      email,
      password,
    });
    console.log('Api response:');
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.log(error);
  }
};
