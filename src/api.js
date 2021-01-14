const apiBaseUrl = 'https://www.snapnursebooker.com/api/v1';

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

export const fetchTimecards = async (token) => {
  const timecardUrl = apiBaseUrl + '/timecards';
  try {
    console.log('Fetching from api...');
    const result = await fetch(timecardUrl, { headers: authHeader(token) });
    const resbody = await result.json();
    console.log('Api response:');
    console.log(resbody);
    return resbody.data;
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
