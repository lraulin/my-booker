const url = process.env.API_URL;
const headers = {
  Authorization: process.env.JWT,
};

export const fetchTimecards = async () => {
  try {
    console.log("Fetching from api...");
    const result = await fetch(url, { headers });
    const resbody = await result.json();
    console.log("Api response:");
    console.log(resbody);
    return resbody.data;
  } catch (e) {
    console.log(e);
  }
};
